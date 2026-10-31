import test from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import {
  legacyApplicationUrl,
  repositoryPagesMode,
  redirectDocument,
  validateLegacyManifest,
} from './pages-policy.mjs';

test('publishes the old application before rename and redirects only the canonical renamed repository', () => {
  assert.equal(repositoryPagesMode('beratergun/formda'), 'application');
  assert.equal(repositoryPagesMode('beratergun/berXfit'), 'redirect');
  assert.throws(() => repositoryPagesMode('another-owner/berXfit'));
});

test('blocks a compatibility build with a different installed PWA identity', () => {
  const manifest = {
    id: '/formda/',
    start_url: '/formda/',
    scope: '/formda/',
    short_name: 'berXfit',
  };
  validateLegacyManifest(manifest);
  for (const field of ['id', 'start_url', 'scope', 'short_name']) {
    assert.throws(() => validateLegacyManifest({ ...manifest, [field]: '/berXfit/' }));
  }
});

test('the new entry preserves search and route without opening or clearing storage', () => {
  const script = redirectDocument().match(/<script>(.*?)<\/script>/s)?.[1];
  assert.ok(script);
  for (const [search, hash] of [
    ['', ''],
    ['?source=profile', '#/progress'],
    ['?next=https://other.example', '#/profile'],
  ]) {
    let target;
    const context = {
      location: {
        search,
        hash,
        replace: (value) => {
          target = value;
        },
      },
    };
    for (const name of ['indexedDB', 'localStorage', 'caches'])
      Object.defineProperty(context, name, {
        get() {
          throw new Error('Storage access');
        },
      });
    runInNewContext(script, context);
    assert.equal(target, '/formda/' + search + hash);
    assert.equal(new URL(target, legacyApplicationUrl).origin, 'https://beratergun.github.io');
  }
});

test('the entry has a fixed manual and non-JavaScript fallback to the preserved application', () => {
  const html = redirectDocument();
  assert.ok(html.includes('content="0;url=/formda/"'));
  assert.ok(html.includes('<a href="/formda/"'));
  assert.ok(html.includes('alt="berXfit logosu"'));
});
