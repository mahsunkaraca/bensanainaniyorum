# Ben Sana İnanıyorum

Bu sayfa yalnızca **oyunculu özel gösterimler** içindir. Genel vizyon seansları eklenmez. Her oyunculu gösterim kaydında tek bir gerçek bilet bağlantısı kullanılır. Bağlantılar vizyon tarihi 13 Kasım’da sağlanacak; o zamana kadar boş listeler ve bilgilendirme mesajı korunur.

Next.js, TypeScript ve Tailwind CSS ile hazırlanmış, siyah-kırmızı sinematik **tek sayfalık** film bileti sitesi. iPhone ekranlarına uyumludur. Yönetim paneli, kullanıcı hesabı, veritabanı ve ortam değişkeni gerektirmez. Sahte bilet bağlantıları içermez.

## Çalıştırma

Node.js 22.12+ (Node 24 önerilir) ve npm kullanın:

```sh
npm ci
npm run dev
```

Kontroller ve üretim çalıştırması:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Buradan içerik güncelleme

Şehir, sinema, adres, seans açıklaması ve **gerçek HTTPS bilet bağlantısını** bu sohbete yazmanız yeterlidir. İlgili bilgiler `lib/catalogue.ts` dosyasında güncellenir. GitHub'a gönderim ve Vercel deploy sonrasında yayındaki sayfaya yansır; değişiklikler canlı veritabanı üzerinden yapılmaz.

Veri yapısı:

- `cities`: benzersiz `id` ve `name`.
- `cinemas`: benzersiz `id`, şehirle eşleşen `city_id`, `name`, `address`.
- `screenings`: benzersiz `id`, sinemayla eşleşen `cinema_id`, `description`, `ticket_url`.

Gerçek bilgi gelene kadar listeler boştur ve site “Sinema ve bilet bağlantıları açıklandığında burada yer alacak” mesajını gösterir. Eksik şehir/sinema ilişkileri, tekrarlanan kimlikler ve HTTPS dışındaki adresler derleme sırasında reddedilir. HTTPS kontrolü bağlantının gerçekliğini doğrulamaz; bilet adresi eklenmeden önce kontrol edilmelidir.

Film adı, **13 Kasım** vizyon tarihi ve tanıtım metinleri `components/ticket-site.tsx` ve `app/layout.tsx` içindedir. Yıl belirtilmediği için tasarıma yıl eklenmemiştir.

## Afiş

Ana bölümde `public/cinema.svg` içindeki kırmızı ışıklı sinema koltukları arka plan olarak kullanılır. Üzerindeki siyah gradyan metinlerin okunmasını sağlar. Resmî afiş `public/IMG_9307.jpeg` başlığın altında sağda ince bir çerçeveyle gösterilir. Dar telefon ekranlarında metinlerin altına yerleşir; afiş kırpılmaz.

## Vercel

1. Projeyi GitHub'a gönderin.
2. Vercel → Add New → Project ile depoyu seçin.
3. Framework: Next.js, proje kökü: depo kökü, build: `npm run build`.
4. Ortam değişkeni veya veritabanı gerekmez. Deploy edin.
5. Production Branch olarak `main` kullanın. Sonraki içerik değişiklikleri bu dala gönderildiğinde Vercel otomatik yeniden yayınlar.

## GitHub'a kaydetme

```sh
git add .
git commit -m "Build cinematic single-page ticket site"
git push -u origin HEAD:main
```

Bu komutlar manuel kullanım içindir; proje hazırlanırken otomatik push yapılmaz.

## Kontrol listesi

- Boş katalogda anlamlı bilgilendirme mesajı görünür.
- Gerçek veriler eklendiğinde şehir seçimi yalnız o şehrin sinemalarını gösterir.
- Bilet butonları doğru HTTPS sağlayıcı adresini yeni sekmede açar.
- 375px ve 390px genişliklerde yatay taşma yoktur; klavye odağı ve azaltılmış hareket tercihi desteklenir.
- Veri olmadan gerçekte var olmayan sinema veya bilet bağlantısı gösterilmez.
