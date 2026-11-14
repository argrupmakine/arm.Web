# Ar Grup Makine - Kapsamlı Proje ve Teknik Mimari Dokümantasyonu

> **Son Güncelleme:** 14 Kasım 2026  
> **Versiyon:** 2.0.0 (Production Ready)  
> **Teknoloji Yığını:** Next.js 16.2 (App Router & Turbopack), React 19, TypeScript, Tailwind CSS v4, Docker, Node 22 LTS

---

## 1. Proje Özeti ve Hedefler

Bu proje, **Ar Grup Makine Sanayi ve Ticaret A.Ş.**'nin eski statik HTML tabanlı web varlığını; uluslararası standartlarda, savunma sanayi ve otomotiv onaylı yan sanayi (IATF 16949) kimliğine yakışır, yüksek performanslı ve çok dilli modern bir web platformuna dönüştürmüştür.

### Temel Hedefler:
- **Eski İçerik ve Kimliğin Korunması:** Kurumsal metinler, teknik veriler ve görsel varlıklar korunarak modernize edilmiştir.
- **Yüksek Hız ve Sıfır Hata:** 144 statik sayfa (`SSG - Static Site Generation`) derleme anında önceden üretilerek milisaniyeler seviyesinde yükleme hızına ulaşılmıştır.
- **SEO & AEO (Answer Engine Optimization):** Google, Bing ve yapay zeka tabanlı arama motorları (ChatGPT Search, Perplexity vb.) için teknik şemalar (JSON-LD) ve zengin teknik veriler entegre edilmiştir.
- **Esnek Barındırma (Hybrid Hosting):** Hem kurum içi VPS üzerinde Docker konteynerleriyle hem de Vercel bulut altyapısında tek kod tabanıyla çalışabilme.

---

## 2. Mimari ve Dizin Yapısı

```
├── app/
│   ├── [locale]/                 # Çok dilli rotalar (tr, en, de, fr)
│   │   ├── arge/                 # AR-GE sayfası
│   │   ├── haberler/             # Kurumsal haberler ve dinamik detaylar
│   │   ├── iletisim/             # Yenilenen modern iletişim & RFQ formu & harita
│   │   ├── kurumsal/[slug]/      # Kurumsal alt sayfalar (KVKK, kalite, ERP vb.)
│   │   ├── referanslar/          # Müşteri ve çözüm ortakları galerisi
│   │   ├── sektorler/[slug]/     # Sektör detay sayfaları + Teknik Bilgi + FAQ
│   │   ├── uretim-hatlari/[slug]/# Üretim parkuru sayfaları + Teknik Bilgi + FAQ
│   │   ├── layout.tsx            # Dil bazlı ana layout, meta veriler ve hreflang
│   │   ├── not-found.tsx         # Dille uyumlu kurumsal 404 sayfası
│   │   └── page.tsx              # Ana sayfa (Hero, Sektörler, Üretim, Ortaklar)
│   ├── globals.css               # Tailwind CSS v4 kurumsal tema ve light-mode
│   ├── not-found.tsx             # Kök 404 sayfası (HTML doctype içerir)
│   ├── robots.ts                 # Arama motoru direktifleri ve bot engelleyici
│   └── sitemap.ts                # Çok dilli ve alternatif linkli dinamik sitemap
├── components/
│   ├── home/                     # Ana sayfa bölümleri (Hero, About, Sectors vb.)
│   ├── layout/                   # Header, MegaMenu, Footer
│   ├── seo/                      # JSON-LD yapısal veri bileşenleri
│   └── ui/                       # Yeniden kullanılabilir UI (ProtectedContact, PageBanner vb.)
├── config/
│   ├── routes.ts                 # Çok dilli URL çeviri haritası (Slug eşleştirmeleri)
│   └── site.ts                   # Site meta verileri, koordinatlar, sosyal linkler
├── context/
│   └── LanguageContext.tsx       # İstemci tarafı dil sağlayıcısı
├── locales/                      # Dil JSON dosyaları (tr.json, en.json, de.json, fr.json)
├── public/                       # Statik görseller, logolar, Webkontrol medyaları
├── Dockerfile                    # Multi-stage optimize üretim imajı (Node 22 Alpine)
├── docker-compose.yml            # VPS üretim konteyner orkestrasyonu
├── next.config.ts                # Next.js hibrit ve yönlendirme yapılandırması
├── nginx.conf.example            # VPS Nginx ters vekil ve SSL şablonu
├── proxy.ts                      # Next.js 16 Edge proxy, i18n & 301 www yönlendirmesi
└── vercel.json                   # Vercel üretim güvenlik başlıkları ve cache kuralları
```

---

## 3. Yapılan Temel Geliştirmeler ve Çözülen Problemler

### 3.1. Sektör ve Üretim Sayfalarının Zenginleştirilmesi (SEO & AEO)
- **Sorun:** Eski `sektorler/*` ve `uretim-hatlari/*` sayfaları yalnızca tek cümlelik özetlerden oluşuyordu; yetersiz ve zayıf içerik (thin content) riski taşıyordu.
- **Çözüm:** 
  - Tüm sektör ve üretim hatlarına **teknik parametreler, toleranslar, malzeme kabiliyetleri, kalite standartları (IATF 16949, ISO 9001, EN ISO 3834-2)** eklendi.
  - Sayfa sonlarına arama motorlarının ve yapay zeka modellerinin doğrudan alıntılayabileceği **Teknik Sıkça Sorulan Sorular (FAQ)** modülü entegre edildi.
  - Sayfalara `FAQPage` ve `Product/Service` Schema JSON-LD yapısal verileri eklendi.

### 3.2. Eksik Görsellerin ve Next.js Image Uyarısının Çözümü
- **Sorun:** `fill` özelliğine sahip resimlerde `sizes` prop'u eksik olduğu için tarayıcıda performans ve konsol uyarıları oluşuyordu; bazı sayfalarda resim dosyaları eksikti.
- **Çözüm:**
  - Eksik resim yolları taranıp yerlerine konuldu.
  - Projedeki tüm `<Image fill>` kullanımlarına duyarlı `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` tanımları eklendi.
  - Tüm workspace taranarak 0 uyarıya ulaşıldı.

### 3.3. İletişim Sayfası ve Google Haritalar Revizyonu
- **Sorun:** Eski harita yarım gözüküyor, balon popup haritayı kapatıyor ve sayfa kurumsal kimliği yansıtmıyordu.
- **Çözüm:**
  - Sayfa tepesine **Hızlı Erişim Çubuğu** (Doğrudan Ara, E-posta Gönder, Yol Tarifi Al) eklendi.
  - Sol kolona departman direkt hatları ve kurumsal bilgiler; sağ kolona Zod doğrulamalı interaktif **Teklif ve İletişim Formu** yerleştirildi.
  - Sayfanın altına tam genişlikte (panoramik), `39.9765238, 32.5447328` koordinatlarına kilitli, balonsuz ve doğrudan Google Haritalar mobil uygulamasına bağlanan interaktif harita yerleştirildi.

### 3.4. Bot ve Web Kazıyıcı (Anti-Scraping) Koruması
- **Sorun:** E-posta ve telefon numaralarının otomatik spam botları ve web kazıyıcılar (scrapers) tarafından toplanması riski.
- **Çözüm:**
  - [ProtectedContact.tsx](file:///Users/serdar/WebstormProjects/argrupmakine.com.tr/components/ui/ProtectedContact.tsx) bileşeni geliştirildi. İletişim verileri HTML kaynak kodunda (`SSR/SSG`) düz metin olarak yer almaz; Base64 olarak saklanır ve React 19 uyumlu `useSyncExternalStore` ile yalnızca gerçek kullanıcı etkileşimi (hover, focus, touch) olduğunda istemcide çözülür.
  - `robots.ts` dosyasına bilinen kötü niyetli botlar (`EmailCollector`, `EmailSiphon`, `HTTrack` vb.) için `Disallow: /` engeli konuldu.
  - JSON-LD yapısal verisinden açık telefon/e-posta metinleri temizlenerek resmi iletişim sayfasına yönlendirildi.

### 3.5. Çok Dilli Mimari ve Dil Dosyalarının Standartlaştırılması
- **Sorun:** `config/site.ts` dosyasında `sectorDescriptions` ve SEO metinleri sabit kalmıştı; JSON dil dosyalarından bağımsızdı.
- **Çözüm:**
  - Tüm sektör açıklamaları ve SEO başlıkları 4 dile de uygun biçimde `locales/{tr,en,de,fr}.json` dosyalarına aktarıldı.
  - `config/site.ts` saf teknik konfigürasyon (marka, koordinat, sosyal linkler) haline getirildi.
  - Bileşenler `next-intl` kancalarıyla dinamik çeviriye bağlandı.

### 3.6. Next.js 16 "proxy" Kuralına Geçiş ve 404 Kilitlenmesinin Çözümü
- **Sorun:** Next.js 16 ile `middleware.ts` kuralı kullanımdan kaldırılmış ve derlemede uyarı veriyordu. Ayrıca `_not-found` derlenirken döngüye girip geliştirici sunucusunu kilitliyordu.
- **Çözüm:**
  - `middleware.ts` -> [proxy.ts](file:///Users/serdar/WebstormProjects/argrupmakine.com.tr/proxy.ts) olarak güncellendi.
  - `proxy.ts` içine `_next`, `_not-found`, `api` ve uzantılı statik dosyaları doğrudan pas geçen koruma filtresi eklendi.
  - Dille uyumlu `app/[locale]/not-found.tsx` ve kök `app/not-found.tsx` dosyaları oluşturularak 404 kilitlenmesi sonlandırıldı.

### 3.7. `www` -> `non-www` 301 Kalıcı Yönlendirme
- **Sorun:** `www.argrupmakine.com.tr` ile `argrupmakine.com.tr` adresleri Google Search Console'da çift URL ve kopya içerik uyarısı yaratıyordu.
- **Çözüm:** 3 katmanlı yönlendirme mimarisi kuruldu:
  1. `next.config.ts`: Host tabanlı kalıcı 301/308 yönlendirme.
  2. `proxy.ts`: İlk istek anında host kontrolü ve 301 yönlendirmesi.
  3. `nginx.conf.example`: VPS web sunucusu düzeyinde anında 301 yönlendirmesi.

---

## 4. Canlıya Alma (Deployment) Rehberi

### 4.1. VPS Üzerinde Docker ile Dağıtım
```bash
# 1. Projeyi sunucuda güncelleyin
cd /var/www/argrupmakine
git pull origin main

# 2. Konteyneri derleyip arka planda başlatın
docker compose up -d --build

# 3. Sağlık durumunu kontrol edin
docker ps
```

### 4.2. Vercel Üzerinde Dağıtım
Proje Vercel'e push edildiğinde:
- `next.config.ts` Vercel ortamını (`process.env.VERCEL`) algılar ve otomatik olarak yerel sunucusuz (serverless) modda derler.
- `vercel.json` güvenlik başlıklarını ve CDN önbelleklerini otomatik uygular.

---

## 5. Doğrulama ve Kalite Metrikleri
- **Statik Sayfa Sayısı:** 144/144 sayfa başarıyla derlenmektedir (`npm run build`).
- **ESLint:** 0 Hata / 0 Uyarı (`npm run lint`).
- **TypeScript:** Strict tip güvenliği aktif.
- **Tema:** Yalnızca kurumsal aydınlık mod (`color-scheme: only light`).
