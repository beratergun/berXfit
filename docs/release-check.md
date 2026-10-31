# Formda v2 · Yayın denetimi

## Yazar ve gizlilik

Yerel yazar ve committer: **Seyid Berat Ergün <sberat.ergun@tedu.edu.tr>**. Commit geçmişinde yalnızca bu kimlik ve boş trailer bulunur. İmza araması yalnızca iki ignore dosyasındaki özel talimat dosyası adını bulur; bu bir yazar imzası değildir. PROMPT, AGENTS, özel mesaj dosyaları, reference, kişisel fotoğraf/video, gerçek sağlık verisi, anahtar/parola repoya eklenmez.

## v2 yayın kapısı

- A–E sırasıyla tamamlandı; E commit `bc43ebb`.
- Sürüm 2.0.0, Android versionCode 2, uygulama kimliği `io.github.beratergun.formda`.
- 140 birim testi; domain satır/fonksiyon %100, dal %97,37.
- Pixel 7 / iPhone 14 için 18 E2E ve açık/koyu 26 Axe görünümü.
- Mobil Lighthouse yayın tabanı 96/100/100; altı scriptte başarısızdır.
- README görselleri ve yerel bağlantılar, 24 saniyelik GIF ve 7 carousel doğrulanır.
- GitHub açıklama, homepage, 12 topic ve önceki başarılı Pages/Android çalışmaları doğrulandı.
- v2 Pages, push APK ve release APK işleri başarılı; v2.0.0 dört indirme ekiyle yayında. Son dosyalar release'ten tekrar indirilip doğrulandı.

## Kalıcı veri adları

`git grep -niE "\byol\b"` denetiminin bilinçli kalanları [marka denetiminde](brand-audit.md) açıklanır. IndexedDB/OPFS/localStorage, eski yedek imzası ve ICS UID'leri veri koruma için kalır. Eski adres ve APK geçiş talimatı tarihsel adını taşır.

## Tanıtım paketi

`../formda-launch/`: TR 193 / EN 218 kelimelik yazılar, yedi 1080×1350 PNG ve metni, 1200×1200 kapak, video senaryosu, CV maddeleri, profil README eki ve manuel liste. Mevcut profil README'si veya sosyal hesaplar değiştirilmedi. Eski teslim klasörü korunur.

Yerel son kapı: lint/typecheck/test/build yeşil; 140 birim, 18 E2E, 26 Axe, Lighthouse 96/100/100, 21 README yerel bağlantısı, 7 carousel ve 24 saniye GIF doğrulandı. Önceki yayın CI tabanı korunur. v2 CI ve canlı Lighthouse 100/100/100; HTTP 200, kurulum ve çevrimdışı kayıt geçti.

Son yayın kanıtları: [F raporu](qa-stage-f.md), [Pages CI](https://github.com/beratergun/berXfit/actions/runs/41012177668), [APK CI](https://github.com/beratergun/berXfit/actions/runs/41012891384), [v2.0.0](https://github.com/beratergun/berXfit/releases/tag/v2.0.0). Eski adres yeni adrese yönleniyor; v1 notu v2'ye bağlantılı. Release dosyaları tekrar indirildi ve SHA-256 eşleşti. Fiziksel telefon izinleri otomasyon dışında; APK geliştirme sertifikalı.
