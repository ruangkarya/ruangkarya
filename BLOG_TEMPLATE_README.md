# RuangKarya Blog System - TanStack Router + Velite + Decap CMS

Complete blog system template for **RuangKarya** using **TanStack Router**, **Velite**, and **Decap CMS** with optimal SEO features and high performance.

## 🚀 Fitur Utama

- ✅ **Modern Routing** dengan TanStack Router
- ✅ **Type-safe Content Management** dengan Velite
- ✅ **User-friendly CMS** dengan Decap CMS
- ✅ **Auto-generate RSS Feed** dan Sitemap
- ✅ **SEO Optimization** lengkap (Meta tags, JSON-LD, Open Graph)
- ✅ **MDX Support** untuk konten yang kaya
- ✅ **Responsive Design** dengan Tailwind CSS
- ✅ **Performance Optimized** (Lighthouse Score 100)

## 📁 Struktur Proyek

```
├── pages/                     # Vike pages
│   ├── _default.page.server.ts   # Server-side rendering
│   ├── _default.page.client.ts   # Client-side hydration
│   ├── blog/
│   │   ├── index.page.tsx         # Blog listing page
│   │   ├── index.page.server.ts   # Blog data loading
│   │   ├── @slug.page.tsx         # Individual blog post
│   │   ├── @slug.page.server.ts   # Post data loading
│   │   └── @slug.page.route.ts    # Route configuration
│   ├── rss.xml.page.tsx           # RSS feed
│   ├── rss.xml.page.server.ts     # RSS generation
│   ├── sitemap.xml.page.tsx       # Sitemap
│   └── sitemap.xml.page.server.ts # Sitemap generation
├── content/
│   └── posts/                 # Blog posts (Markdown/MDX)
├── public/
│   └── admin/                 # Decap CMS
│       ├── index.html             # CMS admin panel
│       └── config.yml             # CMS configuration
├── components/
│   └── blog/                  # Blog components
├── scripts/                   # Build scripts
│   ├── generate-feed.js           # RSS generation script
│   └── generate-sitemap.js        # Sitemap generation script
├── velite.config.ts           # Velite configuration
├── vike.config.js             # Vike configuration
└── package.json
```

## 🛠️ Setup dan Instalasi

### Prerequisites

- **Node.js** 18+
- **pnpm** (package manager yang digunakan project ini)

```bash
# Install pnpm jika belum ada
npm install -g pnpm
```

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Setup Environment Variables

```bash
# Tidak ada env vars yang diperlukan untuk setup basic
# Untuk production, setup Netlify Identity/GitHub OAuth
```

### 3. Development

```bash
# Start development server (blog akan berjalan di http://localhost:3030)
pnpm dev

# Velite development (watch mode)
pnpm velite:dev
```

### 4. Build Production

```bash
# Build lengkap dengan RSS dan Sitemap
pnpm build:full

# Preview build hasil
pnpm preview
```

## 📝 Content Management

### Cara 1: Langsung Edit File

Blog posts disimpan di `content/posts/` dalam format Markdown/MDX:

```markdown
---
title: "Judul Post"
excerpt: "Ringkasan post untuk listing"
description: "Meta description untuk SEO"
date: "2025-01-15"
author: "Your Name"
readTime: "5 min read"
category: "Frontend"
image: "https://example.com/image.jpg"
imageAlt: "Alt text untuk gambar"
tags: ["React", "TypeScript", "Performance"]
featured: true
published: true
draft: false
---

# Konten Post

Tulis konten blog di sini menggunakan Markdown atau MDX.
```

### Cara 2: Menggunakan Decap CMS

1. Akses `/admin` setelah deployment
2. Login menggunakan Netlify Identity atau GitHub
3. Buat/edit posts melalui UI visual
4. Changes akan otomatis commit ke repository

### Frontmatter Fields

| Field         | Type    | Required | Description                                   |
| ------------- | ------- | -------- | --------------------------------------------- |
| `title`       | string  | ✅       | Judul post (max 99 karakter)                  |
| `excerpt`     | string  | ✅       | Ringkasan untuk listing (max 300 karakter)    |
| `description` | string  | ❌       | Meta description untuk SEO (max 200 karakter) |
| `date`        | date    | ✅       | Tanggal publish (YYYY-MM-DD)                  |
| `updated`     | date    | ❌       | Tanggal update terakhir                       |
| `author`      | string  | ❌       | Author name (default: "Your Name")      |
| `readTime`    | string  | ✅       | Estimasi waktu baca (e.g., "5 min read")      |
| `category`    | string  | ✅       | Kategori post                                 |
| `image`       | string  | ❌       | URL gambar featured                           |
| `imageAlt`    | string  | ❌       | Alt text untuk accessibility                  |
| `tags`        | array   | ❌       | Array tags                                    |
| `featured`    | boolean | ❌       | Tampilkan di featured posts                   |
| `published`   | boolean | ✅       | Publikasikan post                             |
| `draft`       | boolean | ❌       | Mark sebagai draft                            |

## 🔧 Konfigurasi

### Velite Configuration

File: `velite.config.ts`

```typescript
const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.{md,mdx}",
  schema: s.object({
    // ... schema fields
  }),
});
```

### Vike Configuration

File: `vike.config.js`

```javascript
export default defineConfig({
  plugins: [react()],
  vike: {
    prerender: true,
    static: {
      outDir: "build",
    },
  },
});
```

### Decap CMS Configuration

File: `public/admin/config.yml`

- Backend: `git-gateway` (untuk GitHub integration)
- Content folder: `content/posts`
- Media folder: `public/images/uploads`

## 🚀 Deployment

### Netlify

1. **Setup Repository**

   - Push kode ke GitHub repository
   - Connect repository ke Netlify

2. **Build Settings**

   ```
   Build Command: pnpm build:full
   Publish Directory: build
   ```

3. **Environment Variables**

   ```
   NODE_VERSION=18
   ```

4. **Netlify Identity** (untuk CMS)
   - Enable Netlify Identity di dashboard
   - Enable Git Gateway
   - Configure OAuth providers (GitHub)

### Cloudflare Pages

1. **Connect Repository**

   - Connect GitHub repository ke Cloudflare Pages

2. **Build Configuration**

   ```
   Build Command: pnpm build:full
   Build Output Directory: build
   ```

3. **Environment Variables**
   ```
   NODE_VERSION=18
   ```

### Manual Deployment

```bash
# Build static files
pnpm build:full

# Upload folder 'build' ke hosting provider
```

## 📊 SEO Features

### Automatic Meta Tags

Setiap halaman blog otomatis generate:

- **Basic Meta**: title, description, viewport
- **Open Graph**: og:title, og:description, og:image, og:url, og:type
- **Twitter Cards**: twitter:card, twitter:title, twitter:description, twitter:image
- **Canonical URLs**: untuk prevent duplicate content
- **JSON-LD Structured Data**: Article schema untuk SEO

### RSS Feed

- Auto-generate RSS feed di `/rss.xml`
- Support untuk semua published posts
- Include categories dan tags
- SEO-friendly format

### Sitemap

- Auto-generate sitemap di `/sitemap.xml`
- Include static pages dan blog posts
- Proper priority dan changefreq settings

## ⚡ Performance Features

### Build Optimizations

- **Code Splitting**: Route-based dan component-based
- **Static Generation**: Pre-rendered HTML
- **Image Optimization**: WebP conversion, lazy loading
- **Bundle Analysis**: Webpack bundle splitting

### Runtime Optimizations

- **React Optimizations**: Memo, useMemo, useCallback
- **Virtual Scrolling**: Untuk list panjang
- **Progressive Loading**: Incremental content loading

### Metrics

Target Lighthouse scores:

- **Performance**: 100/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

## 🎨 Customization

### Styling

Template menggunakan Tailwind CSS. Customize di:

- `tailwind.config.js` untuk theme configuration
- `src/styles/globals.css` untuk global styles

### Components

Blog components di `components/blog/`:

- `BlogList.tsx` - List posts component
- `BlogPost.tsx` - Individual post component
- `BlogPostPage.tsx` - Wrapper untuk Vike integration

### Content Schema

Edit schema di `velite.config.ts` untuk menambah/mengurangi fields.

## 🔍 Development Tips

### Debug Mode

```bash
# Enable Vike debug
DEBUG=vike* pnpm dev

# Enable Velite debug
pnpm velite -- --verbose
```

### Content Validation

Velite akan validate content schema otomatis. Check errors di terminal saat development.

### Hot Reload

- Content changes: Auto-reload dengan `pnpm velite:dev`
- Code changes: Auto-reload dengan Vite HMR

## 🤝 Contributing

Untuk berkontribusi:

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push branch
5. Create Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

## 🆘 Troubleshooting

### Common Issues

**1. Build Error: "Cannot resolve '#site/content'"**

```bash
# Pastikan Velite sudah generate content
pnpm velite
```

**2. CMS Login Issues**

- Check Netlify Identity configuration
- Verify Git Gateway settings
- Ensure GitHub OAuth is setup

**3. RSS/Sitemap Not Generated**

```bash
# Run build script yang lengkap
pnpm build:full
```

**4. Images Not Loading**

- Check image URLs di frontmatter
- Verify public folder structure
- Ensure proper image optimization

### Performance Issues

**1. Slow Build Times**

- Check content volume
- Consider pagination
- Optimize images before upload

**2. Large Bundle Size**

- Run bundle analysis
- Check for duplicate dependencies
- Implement code splitting

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:

- **GitHub Issues**: [Create issue](https://github.com/rohmad/blog-template/issues)
- **Email**: rohmad.sasmito@example.com
- **Twitter**: [@rohmadsasmito](https://twitter.com/rohmadsasmito)

---

## 🚀 Quick Start

Untuk memulai dengan template ini:

1. **Install dependencies**: `pnpm install`
2. **Test development**: `pnpm dev`
3. **Create first post**: Edit file di `content/posts/` atau gunakan CMS di `/admin`
4. **Build for production**: `pnpm build:full`
5. **Deploy**: Upload folder `build` ke hosting pilihan Anda

Template ini siap produksi dan dapat di-deploy langsung ke **Netlify** atau **Cloudflare Pages** dengan performa optimal!

**Happy Blogging! 🎉**
