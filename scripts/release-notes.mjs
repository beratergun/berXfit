import { readFile, mkdir, writeFile } from 'node:fs/promises';
const { version } = JSON.parse(await readFile('package.json', 'utf8'));
const lines = (await readFile('CHANGELOG.md', 'utf8')).split('\n');
const start = lines.findIndex((line) => line.startsWith(`## [${version}]`));
if (start < 0) throw new Error('Sürüm CHANGELOG içinde bulunamadı.');
let end = lines.findIndex((line, i) => i > start && line.startsWith('## '));
if (end < 0) end = lines.length;
const body = lines
  .slice(start + 1, end)
  .filter((line) => !line.startsWith(`[${version}]:`))
  .join('\n')
  .trim();
const notes = `${body}\n\n**[Telefona yükle (PWA)](https://beratergun.github.io/formda/)** · **[Android APK indir](https://github.com/beratergun/berXfit/releases/download/v${version}/berXfit-v${version}.apk)**\n\nKaynak kodu ve APK iş akışı aynı sürüme aittir. Fotoğraf, video ve günlükler cihazda saklanır. İndirilen APK'nın SHA-256 dosyası aşağıdaki eklerdedir. Yeni berXfit APK, kalıcı release anahtarıyla ayrı kurulur; eski Formda ve verisi korunur. Eski uygulamada Profil → Tam yedek alıp berXfit’e geri yükle. İmza ve veri aktarımı için [Android rehberini](https://github.com/beratergun/berXfit/blob/v${version}/docs/android.md) izleyebilirsin.\n\n![berXfit uygulaması · kurgusal demo](https://raw.githubusercontent.com/beratergun/berXfit/v${version}/docs/screenshots/light-collage.png)\n\n![Kısa demo](https://raw.githubusercontent.com/beratergun/berXfit/v${version}/docs/demo.gif)\n`;
await mkdir('../berxfit-launch/releases', { recursive: true });
await writeFile(`../berxfit-launch/releases/v${version}-notes.md`, notes);
console.log(`v${version} notes prepared from CHANGELOG.`);
