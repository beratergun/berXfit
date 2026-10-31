# berXfit · Depo adı geçişi

Kullanıcı teknik depo adının berXfit olmasını ve eski uygulama adresi/verilerinin korunmasını seçti.

- Asıl kaynak, issue/ayarlar, özgün Git geçmişi, etiketler ve release’ler: https://github.com/beratergun/berXfit.
- Çalışan uygulama adresi: https://beratergun.github.io/formda/; base, manifest id/start_url/scope, DB, OPFS ve yerel tercihler değişmez.
- Yeni https://beratergun.github.io/berXfit/ girişi arama parametresi ve hash rotasını koruyarak aynı uygulamaya gider. Depolama açmaz, temizlemez veya taşımaz.
- formda uyumluluk deposu eski ana dal snapshot’ını ve özgün etiketleri korur; geliştirme berXfit’te sürer. Eski v1/v2/v3 indirme varlıkları birebir SHA ile kopyalanır. Böylece eski APK/ZIP bağlantıları çalışır.
- Güncel berXfit main kalite kapısını geçince dist, yalnızca formda reposuna yazabilen ayrı deploy key ile gh-pages dalına yayımlanır. Kanonik repo Pages’i yönlendirme içerir. PAT veya Android imza anahtarı bu iş için kullanılmaz.
- Üretilen Git commit’leri yalnızca yerel owner kimliğini kullanır. Özel deploy key repo dışında korunur; şifreli FORMDA_PAGES_DEPLOY_KEY Secret asıl repoda saklanır. CI geçici private dosyayı işlem sonunda kaldırır.

Yeni web yolu yeni veritabanı veya yeni APK kimliği oluşturmaz. Android io.github.beratergun.berxfit ve kalıcı APK sertifikası değişmez; yayımlanmış APK dosyaları yeniden üretilmez/üzerine yazılmaz.

Hazırlık/yerel ve canlı sonuçlar kilometre taşı ve test raporunda kaydedilir. Kesintide önce git remote, her iki repo Pages ayarları, release varlıklarının hashleri ve son Actions sonuçları incelenir; hazır olmayan eski repo silinmez.

Geri dönüş: ad değişimi öncesi asıl repo ID1439000097 ve uyumluluk repo ID1441228068 doğrulanır. Bir adım başarısız olursa çalışan eski adres korunur; depolar/release’ler silinmez. Uyumluluk repo adı alınamazsa asıl ad formda’ya geri döndürülür. Yeni girişin kaynak kodu sabit aynı-origin /formda/ yolunu kullanır; query/hash korunur ve hiçbir depolama API’sine dokunmaz.
