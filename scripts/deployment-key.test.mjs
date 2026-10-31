import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, rmSync, rmdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { normalizeDeploymentKey } from './deployment-key.mjs';

test('OpenSSH reads the same ephemeral key after secret trimming or CRLF transport', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'berxfit-key-format-'));
  const keyFile = path.join(directory, 'ephemeral');
  try {
    execFileSync(
      'ssh-keygen',
      ['-q', '-t', 'ed25519', '-f', keyFile, '-N', '', '-C', 'format-test'],
      { stdio: 'pipe', timeout: 10000 },
    );
    const original = readFileSync(keyFile, 'utf8');
    const expected = readFileSync(keyFile + '.pub', 'utf8')
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .join(' ');
    for (const transported of [
      original.trim(),
      original.trim().replace(/\n/g, '\r\n'),
      '\r\n' + original + '\r\n',
    ]) {
      writeFileSync(keyFile, normalizeDeploymentKey(transported), { mode: 0o600 });
      const actual = execFileSync('ssh-keygen', ['-y', '-f', keyFile], {
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 10000,
      })
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .join(' ');
      assert.equal(actual, expected);
    }
  } finally {
    for (const file of [keyFile, keyFile + '.pub']) rmSync(file, { force: true });
    rmdirSync(directory);
  }
});

test('rejects missing or malformed credentials before starting an SSH process', () => {
  for (const value of [undefined, null, '', 'invalid-format'])
    assert.throws(() => normalizeDeploymentKey(value));
});
