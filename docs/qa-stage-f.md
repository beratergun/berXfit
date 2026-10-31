# F · v2.0.0 teslim doğrulaması

30 Ekim 2026. Uygulama sürümünün kaynak etiketi `v2.0.0`, uygulama commit'i `3b21296`. Sonraki belge commit'i yalnızca doğrulama sonuçlarını tamamlar.

| Kapı                                          | Sonuç                                                                                                                   |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Yerel lint / strict TypeScript / test / build | Yeşil, 140 birim testi                                                                                                  |
| Domain kapsamı                                | Satır/fonksiyon %100; dal %97,37; ifade %99,67                                                                          |
| Mobil E2E                                     | Pixel 7/Chromium + iPhone 14/WebKit: 18/18                                                                              |
| Axe                                           | İki temada 26 görünüm, sıfır ihlal                                                                                      |
| Lighthouse                                    | CI 100/100/100; canlı 100/100/100; yerel Windows 96/100/100                                                             |
| Gerçek tarayıcı QA                            | İki telefon boyutu/iki tema; beş ana ekranda taşma, konsol hatası veya uyarı yok                                        |
| Canlı kurulum/çevrimdışı                      | HTTP 200, Chrome kurulabilirlik hatası yok, 220 kcal öğün ve çevrimdışı su kaydı korunuyor; harici istek/yazım/hata yok |
| Android                                       | Gradle assembleDebug + lintDebug, APK Signature Scheme v2, tek imzalayan; appId/sürüm ve uzak sunucu yokluğu doğrulandı |
| Sağlık izinleri                               | Derlenmiş manifestte tam beş READ: STEPS, ACTIVE_CALORIES_BURNED, EXERCISE, WEIGHT, SLEEP; WRITE yok                    |
| Yayın dosyaları                               | Release'ten tekrar indirilen APK/PWA ZIP, kendi SHA-256 dosyalarıyla birebir eşleşti                                    |
| Sunum                                         | 22 yeni ekran, 24 saniye GIF, 7 carousel; TR 193 / EN 218 kelime ve görsel boyutları doğrulandı                         |
| Gizlilik/yazar                                | Özel talimatlar/reference/kişisel veri/anahtar repoda yok; yalnızca sahibin kimliği, boş commit trailer                 |

[Pages CI](https://github.com/beratergun/berXfit/actions/runs/41012177668), [push APK CI](https://github.com/beratergun/berXfit/actions/runs/41012177729), [release tetikleyicisi APK CI](https://github.com/beratergun/berXfit/actions/runs/41012891384) başarılıdır. Release tetikleyicisi gerçek eki yeniden derler; son SHA bu dosyaya değil, indirilen release dosyasına karşı doğrulanır.

- APK SHA-256: `c2008e0d9470f67632c12aa9d7b52aa555b4270f0b27a15857b8579fa6eba137`
- PWA ZIP SHA-256: `14846382680ea4748709f84e895d9ed177461070c0ae25880881a8ba4d7c0767`

[Canlı Formda](https://beratergun.github.io/formda/), [v2.0.0 ve ekleri](https://github.com/beratergun/berXfit/releases/tag/v2.0.0). Eski `/yol/` adresi gerçek tarayıcıda yeni adrese yönlendi; yönlendirme deposu Pages `built` durumundadır. v1.0.0 notuna “Formda olarak devam ediyor → v2.0.0” bağlantısı eklendi; taşınan v1 görsel/APK bağlantıları düzeltildi.

Fiziksel Android Health Connect veri sağlayıcısı/izin paneli ve iPhone kurulum/kamera panelleri bu masaüstü ölçümüne dahil değildir. APK geliştirme sertifikalıdır; dört release Secrets kullanıcı tarafından eklenmelidir. iOS HealthKit ve güvenilir olmayan web sensörü adım sayacı bu sürümde bulunmaz; varsayımlarda gerekçelidir. İsteğe bağlı modelin 10/10 sonucu genel Türk mutfağı doğruluğu garantisi değildir.

Repo dışı `../formda-launch/` paketi hazırdır; paylaşım veya profil değişikliği otomatik yapılmadı. Kullanıcının kalan işleri paketteki `github-checklist.md` içindedir. Önceki teslimler ve gerçek cihaz verileri silinmedi.
