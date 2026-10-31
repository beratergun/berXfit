# berXfit · Tasarım sistemi

Durum: Faz 2 uygulandı; kalite kapısı ve iki temalı görsel kontrol sonuçları test raporunda tutulur.

## Marka kaynağı

Sahibin sağladığı PNG 1254×1254, gerçek alfa kanallı. Orijinal aynen saklanacak; şeffaf kenarların dışındaki içerik değiştirilmeden türevler üretilecek. Alfa sınırı 1190×623, sol 32/üst 299. Figür, grafik, X ve wordmark'ın hiçbir bölümü kesilmeyecek. Raster türevler vektör orijinal diye tanıtılmayacak; üretken logo değişimi yok.

Koyu tipografi siyah üstünde kaybolduğu için header/splash/launcher üzerinde nötr açık bir plaka kullanılacak. Logo yeşili korunacak; uygulama kontrolleri mavi/cyan, başarı yeşil. Maskable/adaptive türevlerde tüm eser güvenli orta bölgede kalacak.

## Semantik renkler

- Koyu temel: #070B12, yüzey #0F1826 / #172335, çizgi #29394E.
- Metin #F4F7FB, ikincil #A1B0C3. Açık tema ayrıca, aynı hiyerarşiyle korunacak.
- Etkileşim: erişilebilir mavi; veri çizgileri blue/cyan; gerçek başarı ve marka #39D96B.
- Uyarı ve hata ayrı semantik token; durumlar yalnızca renkle anlatılmayacak.
- Buton ön/arka plan eşleşmeleri WCAG AA ile doğrulanacak. Logo renkleri marka varlığıdır, giriş/normal metin kontrastı yerine kullanılmayacak.

## Düzen ve bileşenler

8 px boşluk adımları, 20–24 px kart köşesi, ince sınırlar ve kontrollü gölge. Başlık/rakam için paketlenmiş Bricolage, metinde Onest; tabular rakamlar. 44 px minimum dokunma, görünür odak, safe-area ve 16 px mobil input yazısı.

Ana ekran önce kalori/makro ve günün gerçek eylemini gösterecek. Dört dev halka yerine bir ana kalori görünümü ve kompakt protein/harcama/adım metrikleri; mevcut hesap ve erişilebilir etiketler korunacak. Su ve öğünler öne, uzun motivasyon/XP ve sözler daha aşağı taşınacak. Kayıt yokken gerçek boş durum; yapay ölçüm yok.

Mobil 320–430 px, tablet 768 px, desktop 1024+; masaüstünde yalnızca ilgili ekranlarda iki sütun ve gezinme rayı. Formlar aşırı genişletilmeyecek. Görsel sıra ile klavye/DOM sırası tutarlı kalacak.

Ortak NumericInput ham taslak, doğrulanmış değer, boş/sıfır ayrımı, locale ondalık, hata açıklaması ve iptal davranışı taşır. Primary commit eylemleri en yakın doğrulama kapsamındaki geçersiz alanı raporlar; kapat/iptal/sil kontrolleri kullanıcının çıkışını engellemez.

## Hareket rehberi yaklaşımı

Özgün ve açıkça şema olarak etiketli 2D teknik görseller tercih edilecek; ağır 3D motor veya telifli uzak video eklenmeyecek. Önce squat, push-up, bench press, lat pulldown, curl, shoulder press, row, plank, lunge ve RDL gözden geçirilecek. İki poz ve yön işaretleri, oynat/duraklat/hız gibi kontroller yalnızca uygun hareketlerde sunulacak. Plank gibi statik hareketlere yapay tekrar animasyonu eklenmeyecek.

Görseli doğrulanmamış varyantlar için anatomik doğruluk iddiası taşıyan genel avatar yerine kas haritası ve ayrıntılı metin/kurulum rehberi gösterilecek. Mevcut 159 hareketin rehber içeriği korunacak. Hareketli veya yüksek kaliteli bir varlık yoksa varmış gibi sunulmayacak.

## Durumlar ve doğrulama

Boş/yükleniyor/hata/başarı/disabled durumları tüm kayıt akışlarında açık olacak. Reduced motion altında hareketler duracak veya statik pozlara dönecek. Tamamlanan veriler ve haftalık/kilo özetleri yalnızca kayıt ve hedeflerden türetilecek. Görsel inceleme gerçek tarayıcıda, iki temada yapılacak; tasarım hedefleri tek başına test sonucu değildir.

## Varlık üretimi ve uyumluluk

Orijinal `public/brand/berxfit-original.png` SHA-256: `e68d27dcc46bfbf82f6239e05a0937beb98fc4c9b01ca7befff15821bb2934e8`. `scripts/brand-assets.mjs` yalnızca şeffaf kenarları temizler ve orantılı raster türevler üretir. SVG ikon dosyası aynı rasterı taşıyan bir kapsayıcıdır; yeniden çizilmiş vektör değildir. Android adaptive foreground 432 px tuvalde 232 px genişliğe sığar; logo güvenli orta bölgede kalır. Tema tercihi bulunmayan yeni kurulum koyu başlar; mevcut `yol-theme` korunur.

Asıl repo berXfit olur; canlı uygulama yolu kurulu PWA başlangıcını korumak için `/formda/` kalır. Yeni Android appId `io.github.beratergun.berxfit` ayrı kurulur; eski Formda kimliği korunur. PWA veritabanı `yol-local`, medya alanı `yol-media` ve yedek biçimi `yol-backup` korunur. Yeni major sürüm 3.0.0 olarak hazırlanır; v1/v2 etiket ve ekleri değiştirilmez.

Logo için 240/360/500/560/680 px kayıpsız WebP türevleri korunur. Karşılama ekranı ayrıca 500/680 px, quality 90 / alphaQuality 100 WebP ekran türevi kullanır; 500 px aktarım 53.718→26.966 bayttır. Eşleşen srcset/preload, orantı ve şeffaflık korunur; orijinal PNG değişmez. Kamera, program seçimi, ZIP geri yükleme ve Bugün ekranı ihtiyaçta yüklenir. Medya hook/küçük resimleri ortak modüldedir; karşılama kullanılmayan dashboard kodunu çekmez. Karşılama ana içeriği giriş animasyonuyla geciktirilmez.
