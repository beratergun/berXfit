export const legacyApplicationUrl = 'https://beratergun.github.io/formda/';

export function repositoryPagesMode(repository) {
  if (repository === 'beratergun/berXfit') return 'redirect';
  if (repository === 'beratergun/formda' || !repository) return 'application';
  throw new Error('Unrecognized repository; Pages publication blocked');
}

export function validateLegacyManifest(manifest) {
  if (
    manifest.id !== '/formda/' ||
    manifest.start_url !== '/formda/' ||
    manifest.scope !== '/formda/' ||
    manifest.short_name !== 'berXfit'
  )
    throw new Error('Legacy PWA identity changed; compatibility publication blocked');
}

export function redirectDocument() {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=/formda/"><link rel="canonical" href="${legacyApplicationUrl}"><title>berXfit · Uygulamayı aç</title><style>body{margin:0;background:#070b12;color:#f4f7fb;font:18px/1.6 system-ui}main{max-width:36rem;margin:12vh auto;padding:24px}img{width:240px;max-width:100%;height:auto;background:#edf3fa;border-radius:20px;padding:16px;box-sizing:border-box}a{display:inline-flex;min-height:44px;align-items:center;color:#7db3ff}</style></head><body><main><img src="/formda/brand/berxfit-500.webp" width="240" height="126" alt="berXfit logosu"><h1>berXfit</h1><p>Uygulamanı açıyoruz. Mevcut kayıtların aynı adreste, cihazında kalır.</p><a href="/formda/">berXfit’i aç</a></main><script>location.replace('/formda/'+location.search+location.hash)</script></body></html>`;
}
