import { execFileSync } from 'node:child_process';
import { cp, mkdtemp, readFile, realpath, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { validateLegacyManifest } from './pages-policy.mjs';
import { normalizeDeploymentKey } from './deployment-key.mjs';

if (
  process.env.GITHUB_REPOSITORY !== 'beratergun/berXfit' ||
  process.env.GITHUB_REF !== 'refs/heads/main' ||
  !['push', 'workflow_dispatch'].includes(process.env.GITHUB_EVENT_NAME)
)
  throw new Error('Compatibility deployment is restricted to the canonical main branch');

const name = process.env.DEPLOY_AUTHOR_NAME,
  email = process.env.DEPLOY_AUTHOR_EMAIL;
if (name !== 'Seyid Berat Ergün' || email !== 'sberat.ergun@tedu.edu.tr') {
  throw new Error('Owner identity required for the compatibility commit');
}
const key = process.env.FORMDA_PAGES_DEPLOY_KEY;
if (!key) throw new Error('Compatibility deploy key is missing');
validateLegacyManifest(JSON.parse(await readFile('dist/manifest.webmanifest', 'utf8')));
async function assertCurrentSource() {
  const response = await fetch('https://api.github.com/repos/beratergun/berXfit/commits/main');
  if (!response.ok || (await response.json()).sha !== process.env.GITHUB_SHA) {
    throw new Error('Outdated source commit; compatibility publication blocked');
  }
}
await assertCurrentSource();
const runner = await realpath(process.env.RUNNER_TEMP);
const temporary = await mkdtemp(path.join(runner, 'berxfit-compat-'));
const privateFile = path.join(temporary, 'deploy-key');
const hostsFile = path.join(temporary, 'known-hosts');
try {
  await writeFile(privateFile, normalizeDeploymentKey(key), { mode: 0o600 });
  const response = await fetch('https://api.github.com/meta');
  if (!response.ok) throw new Error('GitHub SSH host keys could not be verified over HTTPS');
  const meta = await response.json();
  if (
    !Array.isArray(meta.ssh_keys) ||
    !meta.ssh_keys.length ||
    meta.ssh_keys.some((k) => !/^ssh-(ed25519|rsa) |^ecdsa-sha2-nistp256 /.test(k))
  ) {
    throw new Error('Unexpected GitHub SSH host key response');
  }
  await writeFile(hostsFile, meta.ssh_keys.map((k) => `github.com ${k}\n`).join(''));
  const env = {
    ...process.env,
    GIT_SSH_COMMAND: `ssh -i "${privateFile}" -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile="${hostsFile}"`,
  };
  delete env.FORMDA_PAGES_DEPLOY_KEY;
  const destination = path.join(temporary, 'site');
  execFileSync(
    'git',
    [
      'clone',
      '--depth',
      '1',
      '--single-branch',
      '--branch',
      'gh-pages',
      'git@github.com:beratergun/formda.git',
      destination,
    ],
    { env, stdio: 'inherit' },
  );
  const resolved = await realpath(destination);
  if (resolved !== path.join(temporary, 'site') || !resolved.startsWith(runner + path.sep))
    throw new Error('Unexpected deployment workspace');
  const git = (args) => execFileSync('git', args, { cwd: resolved, env, stdio: 'inherit' });
  // Only tracked files in this newly cloned, verified runner directory are removed.
  git(['rm', '-r', '--', '.']);
  await cp('dist', resolved, { recursive: true });
  await writeFile(path.join(resolved, '.nojekyll'), '');
  await writeFile(path.join(resolved, '.gitattributes'), '* -text\n');
  await writeFile(
    path.join(resolved, 'source.json'),
    JSON.stringify({ repository: 'beratergun/berXfit', commit: process.env.GITHUB_SHA }, null, 2),
  );
  git(['add', '--all']);
  const changed = execFileSync('git', ['diff', '--cached', '--name-only'], {
    cwd: resolved,
    env,
    encoding: 'utf8',
  }).trim();
  if (changed) {
    git([
      '-c',
      `user.name=${name}`,
      '-c',
      `user.email=${email}`,
      'commit',
      '-m',
      'chore: publish verified berXfit compatibility assets',
    ]);
    await assertCurrentSource();
    git(['push', 'origin', 'HEAD:gh-pages']);
  }
  console.log('Preserved /formda/ application published without changing its PWA identity');
} finally {
  for (const file of [privateFile, hostsFile]) await unlink(file).catch(() => {});
}
