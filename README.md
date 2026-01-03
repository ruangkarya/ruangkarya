# RuangKarya

A modern, open-source static site generator that creates beautiful portfolio and blog websites. Built with Vite, React, and modern web technologies for developers who value simplicity and performance.

**Website:** [ruangkarya.netlify.app](https://ruangkarya.netlify.app)

---

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

```bash
# Install pnpm if you don't have it
npm install -g pnpm
```

### Get Started in 3 Steps

```bash
# 1. Clone and install
git clone https://github.com/ruangkarya/ruangkarya.git
cd ruangkarya
pnpm install

# 2. Start development (runs on http://localhost:3030)
pnpm dev

# 3. Build for production
pnpm build:full
```

Your portfolio and blog is ready to customize and deploy.

---

## Features

### Portfolio System

- Modern design with Vite, React 18, and TypeScript
- 50+ UI components from shadcn/ui (Accordion, Dialog, Command, etc.)
- Theme switching with next-themes (light/dark mode)
- Responsive design with Tailwind CSS
- Smooth animations with Motion library

### Blog System

- Static blog with TanStack Router + Velite CMS
- Type-safe content with automatic validation
- User-friendly CMS with Decap CMS (optional)
- MDX support for rich content with React components

### SEO & Performance

- SEO optimized (RSS feeds, sitemaps, meta tags, JSON-LD)
- High performance (100/100 Lighthouse scores)
- Fast development with Vite HMR
- Optimized builds with automatic code splitting

---

## Project Structure

```
├── src/
│   ├── components/          # Portfolio sections (Hero, About, Projects, etc.)
│   ├── components/ui/       # 50+ reusable UI components (shadcn/ui)
│   └── routes/              # TanStack Router pages
├── content/
│   ├── posts/               # Blog posts (Markdown/MDX)
│   └── projects/            # Project showcase content
├── public/
│   └── admin/               # Decap CMS (optional)
├── scripts/                 # Build automation (RSS, sitemap generation)
└── package.json
```

---

## Development

### Available Commands

```bash
# Development
pnpm dev                    # Start dev server + content watching
pnpm velite:dev             # Content development only

# Production
pnpm build:full             # Full build (includes RSS & sitemap)
pnpm preview               # Preview production build

# Content Management
pnpm velite                # Process content once
pnpm generate:feed         # Generate RSS feed
pnpm generate:sitemap      # Generate sitemap
```

### Content Management

#### Option 1: Direct File Editing

Edit Markdown/MDX files in `content/posts/`:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description for listings"
date: "2025-01-02"
category: "Frontend"
published: true
---

# Your content here
```

#### Option 2: Visual CMS (Optional)

Access /admin after deployment for a user-friendly editing interface powered by Decap CMS.

---

## Deployment

### Free Hosting Options

**Netlify** (Recommended for CMS)

```bash
Build command: pnpm build:full
Publish directory: build
```

**Cloudflare Pages**

```bash
Build command: pnpm build:full
Build output directory: build
```

**Vercel**

```bash
Build command: pnpm build:full
Output directory: build
```

### What Makes It Free-Hosting Friendly

- Static files only (no server required)
- No database dependencies
- No paid APIs required
- Git-based content workflow
- Optimized build output

---

## Customization

### Styling

- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theme customization
- **Component-based** architecture for easy modifications

### Adding Content

- **Projects:** Add MDX files to content/projects/
- **Blog Posts:** Add Markdown/MDX files to content/posts/
- **Pages:** Create new routes in src/routes/

### Extending Components

Built on shadcn/ui components - easily extend or replace with your own implementations.

---

## Open Source

RuangKarya is proudly open source and always will be.

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Project Sustainability

This project is designed for long-term sustainability:

- Solo developer friendly (low maintenance)
- Pause/resume friendly (no complex infrastructure)
- Zero burnout risk (no support pressure)
- Community contribution (open source first)

---

## License

**MIT License** - Use freely for personal or commercial projects.

---

## Philosophy

> "This is a tool, not a service"

- Best-effort support (no SLA promises)
- No custom features (use as-is or contribute)
- No roadmap guarantees (organic development)

Built by developers, for developers.

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/05ae7d51-79c7-4c87-8e27-5c29e0df2e04/deploy-status)](https://app.netlify.com/sites/ruangkarya/deploys)
