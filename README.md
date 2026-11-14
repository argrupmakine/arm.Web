# Ar Grup Makine - Web Platformu

Bu depo, **Ar Grup Makine Sanayi ve Ticaret A.Ş.**'nin modern, çok dilli ve yüksek performanslı kurumsal web platformunun kaynak kodlarını içerir.

- **Framework:** Next.js 16.2 (App Router & Turbopack)
- **UI & Kütüphaneler:** React 19, Tailwind CSS v4, Lucide React, Framer Motion, React Hook Form, Zod
- **Diller:** Türkçe (tr), İngilizce (en), Almanca (de), Fransızca (fr)
- **Konteyner & DevOps:** Docker (Node 22 LTS Alpine), Docker Compose, Nginx, Vercel

---

## 📚 Dokümantasyon Dosyaları

- 📄 **[PROJE_DOKUMANTASYONU.md](PROJE_DOKUMANTASYONU.md)**: Mimari yapı, yapılan teknik geliştirmeler, rota çevirileri, bot koruması, SEO/AEO ve DevOps dağıtım rehberi.
- 📊 **[YONETIM_SUNUMU.md](YONETIM_SUNUMU.md)**: Şirket yönetimi için hazırlanan; dijital dönüşümün ticari avantajlarını, prestij kazanımlarını ve Önce/Sonra analizini içeren sunum metni.

---

## 🚀 Hızlı Başlangıç (Geliştirici)

### Gereksinimler
- Node.js 20+ veya 22 LTS
- npm 10+

### Yerel Geliştirme Sunucusu
```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```
Tarayıcınızdan `http://localhost:3000` adresini açarak siteyi görüntüleyebilirsiniz.

### Kod Kalitesi ve Derleme
```bash
# ESLint kontrolü (0 hata hedefi)
npm run lint

# Üretim derlemesi (144 statik sayfa üretir)
npm run build

# Üretim sunucusunu yerel çalıştırma
npm run start
```

---

## 🐳 Docker ile Çalıştırma

```bash
# Konteyneri derleyin ve arka planda çalıştırın
docker compose up -d --build

# Durumu kontrol edin
docker ps
```
Uygulama `http://localhost:3000` portunda yayına başlar.

---

## 🌐 Üretim Dağıtımı (Production)
- **VPS / Docker:** `docker-compose.yml` ve `nginx.conf.example` dosyalarını kullanın.
- **Vercel:** Repoyu Vercel'e bağlayıp doğrudan deploy edin (Next.js preset otomatik algılanır).
