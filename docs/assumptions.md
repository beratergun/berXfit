# Kararlar ve varsayımlar

- Başlangıçta depoda yalnızca özel şartname ve salt okunur prototip vardı. Uygulama temiz bir React 18 + strict TypeScript projesi olarak kuruluyor.
- Yayın hedefi kullanıcının seçtiği `beratergun/formda` GitHub Pages adresidir. Hash tabanlı yönlendirme, statik sunucuda sayfa yenilemelerini güvenilir kılar.
- Prototipteki kişisel isim, ölçüler ve sabit tarih yeni kullanıcı için varsayılan yapılmaz. Tanıtım materyallerinde yalnızca kurgusal veriler kullanılır.
- İlk kilometre taşında yalnızca o aşamada uygulanmış akışlar UI QA kapsamına alınır; sonraki ekranlar ilgili kilometre taşlarında eklenip test edilir.
- Gün anahtarları Europe/Istanbul takvimine göre hesaplanır; UTC gece yarısı farkı kayıt gününü değiştirmez.
- Puanın kalori bileşeni şartnameye göre yalnızca üç ayrı öğün kaydı ve hedef ±250 kcal ile verilir; prototipteki aralık dışı yarım puan taşınmaz.
- Uyarlanabilir TDEE hesabında kilo değişimi son ortalama eksi ilk ortalamadır; enerji dengesi için bu fark alımdan çıkarılır. Kilo kaybı böylece harcamayı artıran kanıt olur.
- Şartnamedeki 4 haftalık blok (3 yüklenme + 1 hafif hafta) prototipin tek 13. hafta molasının yerine geçer. Her 12. haftada değerlendirme vardır.
- v1 başlangıcında resmi USDA dağıtımı kullanıldı ve referans kayıtlar yaklaşık etiketiyle korundu. v2 kaynak denetimi bu 60 kaydın gelecekte kullanılan değerlerini düzeltti; tarihsel öğünler ve eski aktarım hesabı korunur. Tür/marka farkları ve bilinmeyen makrolar gizlenmez.
- Fotoğraf/video kare hazırlığı OffscreenCanvas worker'larında yapılır. MediaRecorder ve HTMLCanvasElement.captureStream DOM API'leri olduğundan son kayıt ana iş parçacığında requestAnimationFrame ile akıtılır. Bu tarayıcı kısıtı, ağır senkron iş yapılarak aşılmaz.
- Ek Android teslimi aynı React kodunu Capacitor içinde paketler. Release keystore'u kullanıcıya aittir; sırlar yoksa Android'in standart geliştirme sertifikalı debug APK'sı sağlanır. Kurulabilen Android APK'ları bir sertifika gerektirir; debug sertifikası mağaza/release imzası olarak sunulmaz.
- Fotoğraf sıkıştırma öncelikle worker'da yapılır. Worker içindeki görüntü API'lerini desteklemeyen tarayıcılarda HTMLImageElement/canvas uyumluluk yolu kullanılır; 1600 px sınırı, kalite ve EXIF temizleme korunur.
- Windows'taki Playwright WebKit portu canvas kaynaklı sahte kamera akışını desteklemediği için iPhone boyutu testinde galeriden üretilmiş PNG yüklenir. Gerçek sahte kamera/hayalet çekim ve çalışma anında üretilen vlog Chromium'da test edilir; fiziksel iPhone kamera izni ve mağaza dağıtımı otomasyon sonucu olarak sunulmaz.
- Video oluşturma API'leri yoksa dönüşüm ve bir saniye montajı, dış kaynak içermeyen tek bir HTML slayt gösterisi olarak dışa aktarılır. Vlog için kapak kareleri kullanılır; azaltılmış hareket tercihinde kareler sabit listeye dönüşür.
- Yedek ZIP32 girişleri worker'da 64 KB parçalarla okunur; CRC ve şema doğrulaması bitmeden mevcut kayıtlar değiştirilmez. ZIP64 ve çok parçalı ZIP kabul edilmez.
- Blob yazımını reddeden IndexedDB motorlarında yalnızca bu hata için MIME türüyle birlikte Uint8Array uyumluluk kodlaması kullanılır; okuma katmanı tekrar Blob üretir. Toplu geri yüklemenin ilk denemesi başarısızsa transaction geri alınır, uyumluluk kodlamasıyla atomik olarak tekrar denenir.

## Formda v2 · Aşama A

- PWA aynı HTTPS origin üzerinde /formda/ yoluna taşınır. IndexedDB adı yol-local, OPFS klasörü yol-media ve localStorage anahtarları aynen korunur; yol-backup v1 biçimi eski tam yedekleri açmak için korunur. Takvim UID'leri tekrar içe aktarmada kopya oluşturmamak için korunur.
- Android uygulama kimliği kullanıcı isteğiyle io.github.beratergun.formda oldu. Ayrı Android sandbox'ları otomatik okunamaz: eski Yol APK'sındaki veriyi Profil → Tam yedek ile alıp Formda'ya geri yükle. Eski kurulumu yedek doğrulanmadan kaldırma.
- Eski PWA'nın önbelleğe alınmış sürümü çevrimdışı çalışabilir; yönlendirme internet bağlantısıyla alınır. Yönlendirme hiçbir IndexedDB/OPFS/localStorage verisini silmez.
- Android workflow push, published release ve workflow_dispatch tetiklerinde koşulsuz apk job çalıştırır; yalnızca imzalama adımları Secrets'a bağlıdır.

- Aylık hikâye çizimi öncelikle worker/OffscreenCanvas ile çalışır. Windows WebKit worker çizimini desteklemediğinde tek bir 1080×1920 kart HTML canvas ile üretilir; ağ kullanılmaz. İki tarayıcıda indirme testi zorunludur.

- Program değiştirmek seans geçmişini değiştirmez; eski kişisel hafta saklanır. Ekipman/deneyim değişikliğinden sonra “Tercihlerimle haftayı yeniden kur” seçili programı yeniler. Havuz seansının ev alternatifi yüzme tekniği yerine sırt/omuz/kalça için kara desteğidir. Kısa gün süreleri tahminidir; ısınma ve dinlenmeyle 20–25 dakika amaçlanır.

## Formda v2 · Kaynak doğruluğu ve telefon verisi

- İlk 619 kayıt resmi SR Legacy 2018 JSON arşiviyle denetlendi. 559 sayısal kayıt birebir; 60 yaklaşık prototip kaydı için gelecekte kullanılan katalog sayıları kaynaklı karşılık/tariflerle güncellendi. Mevcut mealEntry kcal/protein anlık görüntüleri asla yeniden hesaplanmaz. Eski JSON aktarımı ve 1458,5 kcal referans menü hesabı dondurulmuş legacy-foods verisiyle korunur.
- Güncel ekmek kaynağı FDC 172688 (252 kcal, 12,4 g protein / 100 g); iki yumurta ve 30 g ekmek 219,6 kcal / 16,32 g protein olur. Yumurta adet değeri 50 g referansın kcal tam sayı/protein 0,1 g yuvarlamasıdır.
- Lor/kaşar için USDA'da aynı Türk ürün adı bulunmadığından görünür adlar taneli taze peynir/Gouda referansı olarak açıkça ayrılır; kefir ürün referansı LIFEWAY'dir. Gerçek marka etiketi kullanıcı aramasıyla Open Food Facts'ten alınabilir. Sıvı süt referansı 240 ml fincan için 244 g ev ölçüsünden türetilir; diğer sıvı örnekler 1 ml ≈ 1 g yaklaşımıdır.
- 160 örnek tarifte malzeme ve bitmiş ağırlık görünür. Bunlar standart porsiyon garantisi değildir; pişme suyunun kalması/çekilmesi, yağ emilimi ve markalar sonucu değiştirir. Gerçek bitmiş ağırlık kullanıcının tarif ekranında girilebilir.
- MET tablosu 2024 Adult Compendium kaynaklıdır. Kuvvette set süresi yoksa tekrar başına 3 saniye varsayılır; RPE ve kalan dinlenme süresi yerel sezgisel düzeltmedir. Adım uzunluğu yaklaşık boy ×0,415; net düz yürüyüş maliyeti 0,5 kcal/kg/km. Adım/kardiyo çift sayımı için büyük olan kullanılır; Health Connect/elle toplamı varsa yerel seans tahmini ayrıca eklenmez. Hedefe ekleme varsayılan kapalıdır.
- Health Connect eklentisi MPL-2.0 lisanslı @capgo/capacitor-health 8.11.13. Yalnızca steps/calories/workouts/weight/sleep için read ve boş write listesi; diğer manifest izinleri kaldırılır. Android 8+ (API 26) gerektirir. Eski Yol APK'sı ayrı kimliğiyle kalır; veri yedeksiz silinmez.
- Telefon hareket sensöründen web adım sayacı eklenmedi: uygulama kapalıyken güvenilir ve sürekli kayıt sağlayamaz. iPhone HealthKit entegrasyonu bu sürümde yok; yol haritasındadır.

- İsteğe bağlı fotoğraf modeli Apache-2.0 Food101 Swin q8, sabit revizyon `e5e50bfc6425aa546f3b4421ca8bd79d0dd610b8`. 10 farklı sınıftan 10 resmi doğrulama örneğinde ilk üç isabet 10/10; bu küçük örneklem Türkiye'deki tüm yemeklere genellenemez. 101 sınıf, yaklaşık 100 MB ilk indirme ve cihaz kapasitesi sınırı görünürdür. Kullanıcı açıkça açmadan model indirilmez, fotoğraf sunucuya gönderilmez. Genel pipeline dosya keşfi çevrimdışıyken gereksiz istek ürettiği için bilinen görüntü bileşenleri doğrudan yüklenir. Yeni worker ile çevrimdışı kullanım doğrulanmıştır; tarayıcı önbelleği kullanıcı/işletim sistemi tarafından silinirse yeniden indirme gerekir.

- berXfit su geçmişi: eski water alanı 250 ml bardak karşılığı olarak korunur. İlk yeni girişte eski toplam waterBaseMl olarak ayrılır; olmayan eski saatler uydurulmaz. Yeni girişler kimlikli ml kayıtlarıdır; eski toplam ve giriş toplamı yalnızca bir kez water değerine yansır. Alanlar opsiyoneldir, DB ve ZIP sürümü değişmez. Günlük tekil hedef ml arayüzünden düzenlenir; tıbbi kişiselleştirme iddiası yoktur.

- berXfit tartı: mevcut modelde günde bir manuel ölçüm korunur; aynı tarihe kaydet günceller. Birden çok saatli tartı geçmişi uydurulmaz. Bağlı kaynaktan gelen tartı ayrı tutulur ve manuel kayıt silinince yeniden görünür. Beslenme dönemi ortalamasının paydası yalnızca öğün kaydedilmiş günlerdir; sıfır kalori kayıtlı gün ile kayıt olmayan gün ayrılır. Eski süre alanı olmayan statik setlere tahmini saniye eklenmez.

- 31 Ekim 2026: Kullanıcı eski Formda ve verilerini koruyarak yeni berXfit kimliğiyle yan yana APK hazırlamayı açıkça seçti. Yeni applicationId/namespace io.github.beratergun.berxfit; PWA /formda/ ve iç veri/yedek anahtarları aynı kalır. Eski APK otomatik okunamaz; tam ZIP aktarımı kullanıcı tarafından yapılır. Kalıcı release anahtarı kullanıcı profilinin korumalı .android-keys/berxfit-v3 klasöründe, dört BERXFIT_ANDROID_* Secret CI içinde; özel anahtar repo/cache/artifact içinde bulunmaz.

- 31 Ekim marka düzeltmesi: kullanıcının son talebiyle görünen ad tam olarak **berXfit**. Teknik küçük harfli package/appId, PWA yolu ve kalıcı veri kimlikleri değişmez. Orijinal logo korunur; UI/metadata/yayın dosya adları ve tanıtım görselleri bu yazımla yenilenir. GitHub teknik repo adı için veri koruma seçimi soruldu; yanıt bekleniyor.

Kullanıcı teknik depo adının da **berXfit** olmasını ve eski uygulama adresi/verilerinin korunmasını açıkça seçti. Güvenli çözüm: kaynak/history/release berXfit reposuna taşınır; formda uyumluluk deposu /formda/ uygulamasını aynı base/manifest/DB/OPFS kimlikleriyle sunar. Yeni /berXfit/ Pages girişi aynı uygulamaya yönlenir. Eski release indirmeleri birebir SHA ile uyumluluk reposunda da korunur; sürekli statik yayın yalnızca o repoya yetkili ayrı deploy key ile yapılır. Android kimliği ve kalıcı APK imzası değişmez. Henüz repo rename yapılmadı; hazırlık sürüyor.
