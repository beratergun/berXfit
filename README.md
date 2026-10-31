<p align="center"><img src="docs/brand-plaque.png" width="240" alt="berXfit logosu"></p>
<h1 align="center">berXfit</h1>
<p align="center"><strong>Kişisel spor ve beslenme koçun.</strong><br>Hesapsız, ücretsiz, cihazında.</p>
<p align="center">
<a href="https://beratergun.github.io/formda/"><img src="docs/buttons/pwa.svg" width="310" alt="Telefona yükle"></a>
<a href="https://github.com/beratergun/berXfit/releases/download/v3.0.0/berXfit-v3.0.0.apk"><img src="docs/buttons/apk.svg" width="310" alt="Android APK indir"></a>
</p>
<p align="center">berXfit v3 PWA ve kalıcı imzalı Android APK yayımlandı. APK, Formda’yı ve verilerini koruyan ayrı kurulumdur.</p>
<p align="center">
<a href="https://github.com/beratergun/berXfit/actions/workflows/deploy.yml"><img src="https://github.com/beratergun/berXfit/actions/workflows/deploy.yml/badge.svg" alt="Kalite ve Pages"></a>
<a href="https://github.com/beratergun/berXfit/actions/workflows/android.yml"><img src="https://github.com/beratergun/berXfit/actions/workflows/android.yml/badge.svg" alt="Android APK"></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-087e83" alt="MIT"></a>
<img src="https://img.shields.io/badge/PWA-offline-087e83" alt="Offline PWA">
<img src="https://img.shields.io/badge/TypeScript-strict-3178c6" alt="Strict TypeScript">
</p>
<p align="center"><a href="#english">English</a> · <a href="https://github.com/beratergun/berXfit/releases">Yayımlanmış sürümler ve SHA-256</a></p>

![berXfit: Bugün, antrenman ve fotoğraf; telefon çerçevelerinde kurgusal demo](docs/screenshots/light-collage.png)

<p align="center"><img src="docs/demo.gif" width="360" alt="berXfit: kurgusal verilerle 24 saniyelik demo"></p>

berXfit, öğünlerini, antrenmanını ve günlüğünü aynı yerde tutan kişisel bir spor ve beslenme uygulaması. Android ve iPhone'da PWA olarak kurulabilir; Android APK arayüzü de cihazda paketler. Tüm ekranlar Türkçedir. Görsellerdeki Deniz, ölçüler, günlükler ve silüetler **tamamen kurgusaldır**.

## Telefona yükle

- **Android / PWA:** [Uygulamayı aç](https://beratergun.github.io/formda/) → Profil → Telefona yükle. Chrome menüsündeki “Uygulamayı yükle” seçeneği de kullanılabilir.
- **iPhone / PWA:** Safari → Paylaş → Ana Ekrana Ekle.
- **Android / APK:** [berXfit v3.0.0 APK](https://github.com/beratergun/berXfit/releases/download/v3.0.0/berXfit-v3.0.0.apk), Android 8+. Yeni `io.github.beratergun.berxfit` kimliğiyle kalıcı imzalı, Formda ile yan yana kurulur. Formda’da **Profil → Tam yedek** al; berXfit’te **Yedeğimden devam et** ile geri yükleyip kayıtlarını doğrula. Eski kurulumu ve özgün ZIP’i koru. [Geçiş rehberi](docs/BERXFIT_MIGRATION.md).

Kaynak deposu **berXfit** adındadır. Eski `/formda/` adresi uyumluluk yayınıyla korunur; yeni [berXfit girişi](https://beratergun.github.io/berXfit/) aynı uygulamayı açar. [Depo geçiş ayrıntıları](docs/REPOSITORY_MIGRATION.md).

berXfit v3 mevcut `/formda/` adresinde güncellenir; kurulu PWA yolu, IndexedDB ve medya kimlikleri korunur. Yeni berXfit Android uygulaması ayrı kimlik ve kalıcı release sertifikasıyla kurulur; Formda yerinde değiştirilmez. **Eski Yol APK'sındaki veriyi Profil → Tam yedek ile alıp berXfit'e geri yükle.** Ayrı Android kimlikleri nedeniyle otomatik veri geçişi yoktur. Yedeği doğrulamadan eski kurulumu kaldırma. PWA ve APK arasında da tam ZIP yedeği kullanılır.

## Günlük koçun

| Alan      | Yapabileceklerin                                                                                                                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bugün     | Günün planı ve tek eylemli koç kartı; kompakt kalori halkası, makro çubukları, tahmini harcama ve adım; ml su geçmişi, enerji ve notlar                                                                           |
| Beslenme  | Türkçe yazarak ekleme, 797 kaynaklı yiyecek, 160 malzemeli örnek tarif, porsiyon/gram, kaydedilmiş öğünü düzenle/kopyala/sil/geri al, özel besin ve çiğ/pişmiş dönüşümü; açık Open Food Facts isim/barkod araması |
| Antrenman | 5 hazır program + kişisel plan; salon/ev/kısa gün alternatifleri; kalıcı seans, duraklat/devam/iptal, seans hareketlerini sırala; kg/tekrar veya saniye, RPE ve dinlenme                                          |
| Rehber    | 159 hareket, 34 alet, 11 kaynaklı özgün teknik şema, 148 metin/kas rehberi fallback; poz/hız/büyüt, nefes ve güvenlik                                                                                             |
| İlerleme  | 6 ay–5 yıl planlama, hafif haftalar; tarihli tartı ekle/düzenle/sil, gerçek kayıt grafikleri, saniye rekorları, seri koruyucu, kilitli rozetler ve cihazda üretilen aylık hikâye kartları                         |
| Anılar    | Hayalet hizalama, karşılaştırma kaydırıcısı, fotoğraf zaman tüneli, vlog ve yerel montaj; günlük/haftalık/aylık raporlar                                                                                          |
| Veri      | PIN, tam ZIP yedek/geri yükleme, CSV, ICS, eski JSON aktarımı ve kurgusal demo modu                                                                                                                               |

<p align="center"><img src="docs/screenshots/frames/programs-light.png" width="280" alt="Program seçenekleri"><img src="docs/screenshots/frames/apparatus-dark.png" width="280" alt="Alet rehberi, koyu tema"></p>

## Kaynağı açık hesaplar

<p align="center"><img src="docs/screenshots/frames/technique-dark.png" width="280" alt="Kaynaklı goblet squat teknik şeması"><img src="docs/screenshots/frames/weight-light.png" width="280" alt="Tarihli tartı yönetimi ve veri koruyan silme"></p>

619 eski besin kaydı resmi USDA SR Legacy dağıtımıyla denetlendi. Geçmiş öğünlerin kayıtlı kalorileri yeniden hesaplanmaz. Her güncel yiyecek kaynak kimliği ve hazırlama durumunu taşır. Karma yemeklerde malzemeler, bitmiş ağırlık ve porsiyonlar görülebilir; tarif ve markaya göre gerçek değer değişir. [Besin denetimi](docs/food-sources.md).

Harcanan enerji, Compendium MET değerleri ve set/RPE/süre ya da boy/kilo/adım hesabıyla **tahmin** edilir. Hedefe geri ekleme varsayılan kapalıdır; Profil'de kullanıcı kendi yüzdesini seçebilir. Bir kaynak günlük toplamı varsa seanslar tekrar eklenmez. Kalori yakma kotası veya telafi mesajı yoktur.

Android Health Connect, açık izinle **yalnızca** adım, aktif kalori, egzersiz, kilo ve uyku okur. Önizleme onaylanmadan kaydetmez, kaynaklara yazmaz. Health Connect yoksa veya izin reddedilirse elle kayıt sürer. PWA'da adım ve aktif kalori elle girilir; iPhone HealthKit bu sürümde yoktur.

Fotoğraftan yemek önerisi isteğe bağlıdır: Apache-2.0 Food101 modeli ilk açılışta yaklaşık 100 MB indirilir, cihazda önbelleğe alınır ve üç öneri verir. Fotoğraf gönderilmez; yiyecek ve porsiyon kullanıcı tarafından onaylanır. Model 101 sınıfla sınırlıdır, Türk yemeklerini karıştırabilir. 10 farklı doğrulama örneğinde 10/10 ilk üç isabet ve çevrimdışı yeniden açılış test edilmiştir; bu küçük örneklem genel doğruluk garantisi değildir. [Ölçüm kaydı](docs/model-evaluation.json).

## Gizlilik ve mimari

Sunucu, kullanıcı hesabı, abonelik veya analitik yok. GitHub Pages statik dosyaları dağıtır; günlük ve medya cihazda IndexedDB/OPFS ile saklanır. Ağ, uygulama dosyaları, kullanıcının açık ürün araması ve açık onaylı model indirmesi içindir. Fotoğraf, video ve sağlık verisi yüklenmez. Yedek paylaşımı yalnızca kullanıcının sistem paylaşım panelinden seçtiği hedefe yapılır.

```mermaid
flowchart LR
  UI[React ekranları] --> Domain[Saf domain hesapları]
  UI --> Store[Yerel store ve repository]
  Store --> DB[(Dexie / IndexedDB)]
  Store --> Media[(OPFS / Blob)]
  UI --> Workers[ZIP, görsel, hikâye ve model worker]
  UI --> Native[Capacitor / salt okuma Health Connect]
  Workers --> Cache[İsteğe bağlı model önbelleği]
```

React 18, strict TypeScript, Vite, Tailwind, Dexie, Workbox, Recharts, Zod, fflate ve Capacitor kullanılır. Ağır işlemler worker'a ayrılır; medya API'si desteklenmezse yerel uyumluluk yolu devreye girer. [Mimari](docs/architecture.md), [Android](docs/android.md), [varsayımlar](docs/assumptions.md), [üçüncü taraf lisansları](NOTICE.md).

## Geliştirme ve kalite

Node.js 22.12+ gerekir. Android için ayrıca JDK 21 ve SDK 36 kullanılır.

```sh
npm ci
npm run dev
npm run lint && npm run typecheck && npm run test && npm run build
npm run test:coverage
node --test scripts/apk-certificates.test.mjs
npx playwright install chromium webkit
npx playwright test
npm run android:sync
```

217 uygulama birim testi ve 10 imza testi; Pixel 7/Chromium ve iPhone 14/WebKit boyutlarında 32 E2E; iki temada 56 WCAG görünümü. Eski/yeni yedek alanları ve medya baytları gidiş dönüşte karşılaştırılır. [berXfit test raporu](docs/BERXFIT_TEST_REPORT.md) ve [kabul matrisi](docs/acceptance-matrix.md) kapsamı ve fiziksel cihaz sınırlarını açıklar. Masaüstü WebKit sonucu fiziksel iPhone testi değildir.

31 Ekim v3 PWA yayını [Pages CI](https://github.com/beratergun/berXfit/actions/runs/41235278581) ile doğrulandı: CI Lighthouse 96/100/100, canlı mobil **100/100/100**; domain satır kapsamı %99,85. Gerçek v2 PWA paketinden v3'e güncelleme Chromium ve WebKit'te bütün kayıtlar/fotoğraf baytları ve tema korunarak geçti. Yeni Android APK, ayrı kimlik ve sabit release sertifikası doğrulanarak yayımlandı; [güncel yayın durumu](docs/BERXFIT_RELEASE_CHECKLIST.md).

## Geçiş ve sınırlar

[Veri geçişi](docs/BERXFIT_MIGRATION.md), [bilinen sınırlar](docs/BERXFIT_KNOWN_LIMITATIONS.md), [teknik rehber kaynakları](docs/BERXFIT_EXERCISE_GUIDANCE.md) ve [yayın kontrolü](docs/BERXFIT_RELEASE_CHECKLIST.md). Tartı ve su geçmişi cihazda kalır; boş günler sıfır beslenme olarak ortalamaya katılmaz.

## Yol haritası ve katkı

Fiziksel cihazlarla Health Connect kaynak uyumluluğunu genişletmek; iOS HealthKit dağıtımı ve gerekli Apple geliştirici hesabı; saat entegrasyonu; daha geniş Türk yemeği veri seti ve model değerlendirmesi. Güvenilir olmayan web hareket sensörü adım sayacı bu sürüme eklenmedi.

[Katkı rehberi](CONTRIBUTING.md) ve [güvenlik politikası](SECURITY.md). Uygulama kodu [MIT](LICENSE), Seyid Berat Ergün. Üçüncü taraf font, eklenti ve modeller kendi lisanslarını korur.

---

<a id="english"></a>

## English

**berXfit is your personal fitness and nutrition coach, on your device.** Install the [PWA](https://beratergun.github.io/formda/) on Android or iPhone. The [berXfit v3.0.0 Android APK](https://github.com/beratergun/berXfit/releases/download/v3.0.0/berXfit-v3.0.0.apk) supports Android 8+ and installs beside Formda with a persistent release signature. Formda and its existing data remain intact. The interface is Turkish. All demo records, measurements and silhouettes are fictional.

Choose five ready-made programs or keep your personal plan. Adapt a single day to a busy gym, home equipment or a short session. Track sets, weight, reps, RPE and rest, with previous-session guidance. Explore 159 exercises and 34 apparatus entries: 11 source-backed original technical diagrams with pose controls, and 148 honest text/muscle-map guides. Timed holds use seconds rather than fabricated repetitions. Pause and resume persisted sessions; reorder exercises without changing your saved plan. Follow long-term plans, deload weeks, records, badges and shareable monthly stories.

Nutrition includes 797 sourced foods, 160 ingredient-based example recipes, Turkish sentence parsing, portions and raw/cooked conversion. The original 619 entries were audited against official USDA data. Edit, copy, delete and undo meal records using their original nutrient snapshots; add personal foods with an explicit source declaration. Historical meal snapshots are never recalculated from a newer catalog. Calories burned are estimates and are not added to the daily goal by default.

Android Health Connect reads five categories with explicit permission and never writes back. Missing support or denied permission leaves manual tracking available. The PWA supports manual steps and active calories. Optional Apache-2.0 Food101 recognition downloads only after consent, runs locally, offers three suggestions, and requires food/portion confirmation. It covers 101 classes, not all Turkish cuisine. A ten-class, ten-image smoke evaluation achieved 10/10 top-three hits and offline worker reopening; this is not a population accuracy claim.

No account, subscription, analytics or personal-data server. IndexedDB stores records; OPFS stores media with Blob fallback. Explicit product search and model download are the only optional external services. Photos, videos and health records are never uploaded. Export full ZIP backups to move between devices or the PWA and APK. Export and verify the old Yol APK backup, import it into berXfit and retain the original installation and ZIP.

The new Android APK uses a persistent release certificate pinned in CI. Formda remains separately installed; export its full ZIP, restore it in berXfit and verify your records while keeping the original backup. See the [migration guide](docs/BERXFIT_MIGRATION.md) and [signing guide](docs/android.md). Automated desktop browsers cannot verify physical OS permissions and installation panels. Use Node 22.12+, `npm ci`, `npm run dev` and the validation commands above. The project includes 217 application unit tests, 10 signing tests, 32 mobile-browser E2E cases and 56 two-theme accessibility views. See [quality evidence](docs/BERXFIT_TEST_REPORT.md) for results and limits.
