# Legacy HTML'den Modern Next.js + Tailwind CSS Projesi Oluşturma

Bu projede mevcut **html/** klasörü içerisinde bulunan eski web sitesi kaynaklarını referans alarak modern bir web uygulaması geliştirmeni istiyorum.

## Amaç

Eski sitenin:

* içeriklerini,
* sayfa yapısını,
* menü hiyerarşisini,
* metinlerini,
* görsellerini,
* kurumsal kimliğini

koruyarak tamamen modern, responsive, performans odaklı bir **Next.js (App Router)** projesi oluştur.

Eski tasarımı birebir kopyalama. Onu referans alarak günümüz UI/UX standartlarına uygun premium bir arayüz tasarla.

---

## Eski Kaynaklar

Projede bulunan

```
/html
```

klasörü içerisindeki tüm dosyaları incele.

Özellikle:

* html dosyaları
* css dosyaları
* javascript dosyaları
* images
* assets
* fonts
* iconlar

içerik çıkarmak amacıyla analiz et.

Bu dosyalar yalnızca referans niteliğindedir.

---

## İçerik Kuralları

HTML dosyalarındaki

* başlıklar
* açıklamalar
* ürünler
* hizmetler
* iletişim bilgileri
* footer
* menüler
* içerik metinleri

otomatik olarak yeni projeye aktar.

Metinleri değiştirme.

Sadece semantik olarak daha doğru component yapısına dönüştür.

---

## Tasarım

Tamamen modern bir tasarım üret.

Aşağıdaki özellikleri kullan:

* bol beyaz alan
* modern tipografi
* büyük hero alanları
* yumuşak gölgeler
* rounded köşeler
* gradient detaylar
* kart tabanlı içerikler
* animasyonlu hover efektleri
* responsive grid
* premium kurumsal görünüm

Tasarım eski sitenin modernize edilmiş versiyonu gibi görünmeli.

---

## Teknolojiler

Kullanılacak teknolojiler:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React
* shadcn/ui
* React Hook Form
* Zod
* next/image
* next/font
* ESLint
* Prettier

---

## Dosya Yapısı

```
app/

components/

components/ui/

components/layout/

components/sections/

lib/

hooks/

types/

public/

public/images

public/icons

styles/

```

Component mimarisi uygulanmalı.

---

## Sayfa Yapısı

Eski HTML dosyalarını inceleyerek aşağıdaki sayfaları oluştur.

Örneğin:

* Ana Sayfa
* Hakkımızda
* Hizmetler
* Ürünler
* Referanslar
* Blog
* İletişim

HTML içerisinde bulunan diğer sayfalar da otomatik oluşturulsun.

---

## Responsive

Mobil öncelikli geliştir.

Desteklenecek ekranlar:

* Mobile
* Tablet
* Laptop
* Desktop
* Ultra Wide

---

## SEO

Her sayfada

* metadata
* Open Graph
* Twitter Card
* canonical
* robots
* sitemap desteği

bulunsun.

Semantic HTML kullan.

---

## Performans

Tüm görseller

```
next/image
```

ile optimize edilsin.

Lazy Loading kullan.

Kod splitting uygula.

Dynamic import kullan.

---

## Accessibility

WCAG standartlarına uygun geliştir.

* aria-label
* semantic html
* keyboard navigation
* focus state

ekle.

---

## Kod Kalitesi

Kod

* temiz
* okunabilir
* yeniden kullanılabilir
* component tabanlı

olsun.

Tekrarlayan kod yazma.

---

## Tailwind

Tailwind utility-first yaklaşımı kullan.

Tekrarlayan class'ları ortak componentlere taşı.

---

## Animasyonlar

Framer Motion kullanarak

* fade
* slide
* stagger
* hover
* scroll reveal

animasyonları ekle.

Animasyonlar sade ve profesyonel olsun.

---

## Renkler

Eski sitedeki kurumsal renkleri analiz et.

Aynı renk paletini modern tonlarla yeniden oluştur.

---

## Font

Eski fontlara benzer ancak modern Google Fonts kullan.

next/font üzerinden yükle.

---

## Componentler

Aşağıdaki componentleri oluştur.

* Header
* Mega Menu (gerekirse)
* Hero
* Features
* Services
* About
* Gallery
* Statistics
* CTA
* Testimonials
* FAQ
* Contact Form
* Footer
* Breadcrumb
* Page Header

---

## Formlar

İletişim formu

React Hook Form + Zod kullanılarak oluşturulsun.

Validation eklensin.

---

## Çıktı Beklentisi

HTML dosyalarını tek tek incele.

Önce mevcut site haritasını çıkar.

Sonra component planını oluştur.

Ardından Next.js projesini üret.

Her HTML sayfasını uygun React componentlerine böl.

Eski CSS'yi taşımaya çalışma.

Tüm stilleri sıfırdan Tailwind CSS ile yaz.

Kod profesyonel seviyede olsun.

Amaç yalnızca HTML'yi React'e çevirmek değil; eski kurumsal web sitesini modern, hızlı, ölçeklenebilir ve sürdürülebilir bir Next.js uygulamasına dönüştürmektir.
