# berXfit v3 veri geçişi

berXfit, yayımlanmış Formda v2 kodunun devamıdır. PWA aynı origin/scope üzerinde mevcut kaydı korur. Kullanıcı 31 Ekim 2026'da Android için **yeni berXfit kimliğiyle yan yana kurulumu açıkça seçti**. Yeni APK ayrı bir sandbox ile başlar; eski Formda kurulumu ve verileri yerinde kalır. Android verisi kullanıcı tarafından tam ZIP yedeğiyle aktarılır.

| Kimlik                   | v3 kararı                                              |
| ------------------------ | ------------------------------------------------------ |
| Pages başlangıç ve scope | `https://beratergun.github.io/formda/` korunur         |
| IndexedDB                | `yol-local` korunur                                    |
| OPFS medya               | `yol-media` korunur; Blob fallback aynı                |
| Tema                     | `yol-theme` korunur                                    |
| ZIP                      | `yol-backup`, version 1; yeni alanlar opsiyonel        |
| Android appId            | `io.github.beratergun.berxfit`; eski Formda ayrı kalır |
| Android imza             | Kalıcı berXfit release anahtarı; public SHA-256 pin    |
| Eski sürümler            | v1.0.0 / v2.0.0 etiketleri ve ekleri korunur           |

Yeni su defteri ilk girişte mevcut `water × 250` miktarını `waterBaseMl` olarak korur. Eski saat bilgisi yoksa üretilmez. `waterEntries` yalnızca yeni kimlikli ml girişleridir. Eski toplam ve yeni girişler tek kez toplanır; eski `water` alanı bardak karşılığıyla uyumlu tutulur. Tutarsız toplam veya yinelenen kimlik içeren yeni ZIP reddedilir.

Antrenman `session`, `cancelledAt`, sayaç ve stil alanları opsiyoneldir. Eski setler değişmez. Süre kaydı olmayan eski statik setlerden saniye tahmin edilmez. Öğün düzenlemesi kaydedilmiş makroları orantılar; katalog güncellemesi geçmişi yeniden hesaplamaz. `sourceKind: user` özel besinleri yedekte korunur.

Uyumluluk yönü eski v1/v2 yedeğinin v3'e aktarılmasıdır. v3'ün yeni su defteri, seans ve özel besin alanlarını eski uygulamaya geri yükleme garanti edilmez; aynı ZIP sürüm numarası iki yönlü uygulama uyumluluğu anlamına gelmez. Geçiş öncesi özgün yedek ayrı saklanır.

Manuel tartıyı silmek gün satırını, notu, suyu, ölçüleri veya bağlı sağlık tartısını silmez. Aynı tarihte manuel tartı önceliklidir; kaldırıldığında varsa bağlı kaynağın değeri görünür.

## Doğrulama

Orijinal veritabanını tekrar açma, seed tekrarında eski kayıtların korunması ve ZIP encode/decode/sil/restore eşitliği otomatik testlidir. Son ZIP fikstürü manuel/sağlık tartısı, su defteri, kalıcı seans ve gerçek ikili medya baytlarını birlikte içerir. Silme denemeleri yalnızca izole kurgusal test veritabanında yapılır. Kullanıcının kurulu cihazına bu oturumda erişilmedi; fiziksel APK yerinde güncellemesi **NOT RUN**.

31 Ekim'de yayımlanmış gerçek v2 PWA ZIP'i (SHA-256 `14846382680ea4748709f84e895d9ed177461070c0ae25880881a8ba4d7c0767`) aynı izole localhost origin/scope üzerinde açıldı. Chromium ve WebKit'te kurgusal öğün, su, not ve fotoğraf kaydedilip mevcut uygulamanın **Güncelle** düğmesiyle 3bd4748 kaynağının v3 build'ine geçildi. Tüm object store satırları, fotoğraf/thumbnail/OPFS baytları ve tema güncelleme öncesiyle birebir eşleşti. Offline yenilemede öğün 220 kcal kaldı; eski bir bardak 250 ml gösterildi, üzerine yeni 100 ml giriş eklenerek 350 ml kalıcı doğrulandı. Harici istek/yazım/pageerror yoktu. Bu gerçek service worker geçiş testi fiziksel telefon veya APK imza testi değildir.

## Kullanıcı geçişi

Formda v2 PWA aynı adreste güncelleme alır. Yeni berXfit APK, `io.github.beratergun.berxfit` kimliğiyle eski `io.github.beratergun.formda` uygulamasının yanına kurulur. Eski uygulama kendiliğinden güncellenmez, silinmez ve verisi otomatik taşınmaz. İki uygulama arasındaki FileProvider ve özel depolama alanları farklıdır.

1. Eski Formda → Profil → Tam yedek al; ZIP'i cihazda sakla.
2. Yeni berXfit APK'yı kur; Formda'yı kaldırma ve verisini temizleme.
3. Temiz berXfit karşılama ekranında Yedeğimden devam et ile ZIP'i seç. Kurulum tamamlandıysa Profil → Geri yükleme yöntemi → Tam yedeği geri yükle yolunu kullan; dosyayı seçmeden önce birleştir/üzerine yaz yöntemini belirle. Seçilen ZIP doğrulanıp doğrudan geri yüklenir; ayrı ZIP önizleme/onay penceresi yoktur.
4. Öğün, antrenman, tartı, not, fotoğraf ve vloglarını doğrula; özgün ZIP'i ayrıca sakla.
5. Health Connect kullanıyorsan yeni uygulamanın beş salt okuma iznini ayrıca ver. PWA ve her APK ayrı veri alanıdır; sonraki kayıtlar kendiliğinden senkronize olmaz.

Yeni anahtar repo dışındaki kullanıcıya özel klasörde saklanır; CI yalnızca `BERXFIT_ANDROID_*` şifreli Secrets ile release APK üretir. Debug dağıtım veya imza cache'i yoktur. Her build `android/signing-identity.json` içindeki public sertifika SHA-256 pinini ve yeni appId'yi doğrular; değişen veya eksik anahtar dağıtımı engeller.

31 Ekim ilk v3 Android CI sertifika kapısında durdu; sonraki tanılamada eski metin ayrıştırıcısının iki SHA alanını boş okuduğu görüldü. Bu ilk sonuçlar tek başına sertifika farkı kanıtı değildir. PEM/X509 karşılaştırmasına geçildi ve [CI 41194362584](https://github.com/beratergun/berXfit/actions/runs/41194362584) iki gerçek sertifikayı farklı buldu:

- Yayımlanmış v2 sertifikası: `c5b094d15c64f2d649bff19b3dad65376a9e1a974c328288d9ff942e2fa9c0d9`.
- O CI adayının sertifikası: `6312c8c504f2198a3e40d762bb4f7475440bea418400390cb143821af9496398`.

Gradle signingReport gerçek debug yolunu `~/.config/.android/debug.keystore` olarak gösterdi; eski cache `~/.android/debug.keystore` yolunu izlediğinden v2 job dosyayı saklamamış. Erişilebilir yerel/cache yedeklerinde eski anahtar bulunamadı; yayımlanmış APK özel anahtar yedeği değildir. Bu yerinde güncelleme yolu artık kullanılmaz: kullanıcı yeni kimlikli yan yana kurulumu seçti. Debug cache kaldırıldı; kalıcı berXfit release anahtarı kullanılır. PWA yayını bağımsız olarak tamamlandı. Eski uygulama/veri silinmez.

Eski **Yol v1 APK** farklı applicationId taşır. Onun verisi tam ZIP ile berXfit'e aktarılır; yedek ve medya doğrulanmadan eski kurulum kaldırılmaz. PWA ve APK da ayrı uygulama alanlarıdır; aralarında ZIP kullanılır.

## Repo adı

Ürün, dosyalar ve yeni release berXfit'tir. `beratergun/formda` ve `/formda/` yolu kurulu PWA başlangıçlarını ve mevcut release bağlantılarını korumak için bu teslimde tutulur. `beratergun/berxfit` hazır veya yayınlanmış adres olarak sunulmaz. Hesap düzeyinde isim değiştirme ayrı yetkili işlemdir; gerekli olursa önce manifest kimliği/eski scope güncellemesi, Pages köprüsü, `yol` yönlendirmesi, README/release bağlantıları ve kurulu PWA yükseltmesi birlikte test edilmelidir. Mevcut repo silinerek yeni repo açılmaz.

31 Ekim berXfit yazımı ve ayrı kurulum adayı: 217 uygulama + 10 imza testi, lint/typecheck/build ve native sync geçti. Gerçek v2 ZIP → temiz farklı origin üzerindeki native web build aktarımı Chromium ve WebKit’te tüm DB tabloları ve medya baytları eşit; yenileme sonrası eşit, eski sandbox değişmedi, sıfır pageerror/dış yazım. Bu tarayıcı kanıtıdır; fiziksel Android kurulumu NOT RUN. 56 Axe görünümü sıfır ihlal; 390/412 px iki tema kurulum rehberi MCP ile görsel incelendi; taşma/hata/kırık logo yok. Orijinal logo SHA-256 değişmedi. 28 güncel ekran, telefon çerçeveleri, 24 sn GIF ve yedi carousel yeniden üretildi. Aday commit b19e7a3, native CI 41234742471 ve kalite CI 41234744940 sürüyor; yeni APK/release henüz yayımlanmadı.

Yeni berXfit APK v3.0.0 yayımlandı. Kalıcı public sertifika pini ve ayrı applicationId, release CI ile doğrulandı; ZIP aktarımı ve PWA güncellemesi Chromium/WebKit’te kayıt ve medya eşitliğini korudu. Fiziksel Android kurulumu NOT RUN. İndirilen dosya hashleri ve kalite kanıtı BERXFIT_TEST_REPORT.md içindedir.
