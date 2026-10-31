import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { repositoryPagesMode, redirectDocument, validateLegacyManifest } from './pages-policy.mjs';

const mode = repositoryPagesMode(process.env.GITHUB_REPOSITORY);
validateLegacyManifest(JSON.parse(await readFile('dist/manifest.webmanifest', 'utf8')));
// Refuse an existing output directory rather than deleting a caller's files.
await mkdir('pages-dist');
if (mode === 'application') await cp('dist', 'pages-dist', { recursive: true });
else {
  const html = redirectDocument();
  await writeFile('pages-dist/index.html', html);
  await writeFile('pages-dist/404.html', html);
}
await writeFile('pages-dist/.nojekyll', '');
console.log(`Repository Pages prepared: ${mode}`);
