# berXfit v3.0.0 yayın kontrolü

**PWA ve kalıcı imzalı Android APK yayımlandı.** APK, Formda ile yan yana kurulur; eski uygulama ve verisi korunur.

[Canlı uygulama](https://beratergun.github.io/formda/) · [v3.0.0 ve dört indirme dosyası](https://github.com/beratergun/berXfit/releases/tag/v3.0.0).

| Kontrol         | Sonuç                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| Kimlik          | Tüm commit ve tag bilgileri Seyid Berat Ergün; ek imza/trailer yok                                   |
| Gizlilik        | Şartname, reference, özel anahtar ve kişisel kayıtlar Git dışında; demo kurgusal                     |
| Kaynak          | Lint, typecheck, 217 uygulama testi, 10 imza testi, kapsam ve build geçti                            |
| Mobil tarayıcı  | Chromium/Pixel 7 ve WebKit/iPhone 14: 32/32 E2E                                                      |
| Erişilebilirlik | İki temada 56 Axe görünümü, sıfır ihlal                                                              |
| Lighthouse      | Yerel 97/100/100; ana dal CI 96/100/100; canlı 100/100/100                                           |
| Geçiş           | V2 SW güncellemesi ve ayrı sandbox ZIP aktarımı iki motorda tüm tablo/medya eşit                     |
| Android         | Release build/lint/apksigner; yeni appId, uzak sunucu yok, beş READ, WRITE yok, sabit sertifika pini |
| Paketler        | Dört yayımlanmış dosya yeniden indirildi; APK ve PWA SHA-256 eşleşti                                 |
| Logo/yazım      | Orijinal PNG değişmedi; görünen ad berXfit; iki telefon/iki tema incelendi                           |
| Eski sürümler   | V1/v2 etiketleri ve varlıkları korunur; yol yönlendirmesi çalışır                                    |
| Fiziksel cihaz  | Android/iPhone kurulum ve OS Health Connect deneyleri NOT RUN                                        |

Kaynak etiketi: v3.0.0 → 9bc02c5410f33f9effe93bf34d1c7e587348f8f8.

- [Ana dal Pages/kalite 41235278581](https://github.com/beratergun/berXfit/actions/runs/41235278581): başarılı.
- [Ana dal Android 41235278544](https://github.com/beratergun/berXfit/actions/runs/41235278544): başarılı.
- [Etiketten release APK 41235908218](https://github.com/beratergun/berXfit/actions/runs/41235908218): başarılı; kalıcı public sertifika eşleşti.
- [Eski yol yönlendirmesi 41235629285](https://github.com/beratergun/yol/actions/runs/41235629285): başarılı; hedef /formda/.

APK SHA-256: 344514052bd900699884e1d4273087cca362ab2de96937e3bebd9147ae0ff0a0.

PWA ZIP SHA-256: 3d43a47a3f64ca6dfff2a347dfff0dab50b0185b42ee9f34aaf31c9a8beccb92; 106 dosya, 10.460.833 bayt. Yerel üretim build’iyle bütün dosyalar bayt düzeyinde eşleşir.

Kalıcı public sertifika SHA-256: ab6c39cb845b42b960c73505b9ef2c2affb3bd2a7fd6925072c83d926d8c6e19. Özel anahtar release eklerinde veya repoda bulunmaz. Teknik repo/PWA adresi formda olarak korunur; görünen README başlığı ve GitHub açıklaması berXfit’tir.

Elle: Formda’dan tam ZIP al, berXfit’e aktar ve doğrula; eski uygulamayı ve özgün yedeği koru. Özel imza klasörünü güvenli yedekle. Sosyal önizleme/profil sabitlemesi ve fiziksel cihaz deneyleri kullanıcıda kalır. Ayrıntılar [Android rehberi](android.md), [geçiş](BERXFIT_MIGRATION.md), [test raporu](BERXFIT_TEST_REPORT.md) ve [bilinen sınırlar](BERXFIT_KNOWN_LIMITATIONS.md) içindedir.
