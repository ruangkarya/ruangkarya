# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with **RuangKarya** - a free portfolio & blog static site generator with premium convenience add-ons.

## Product Identity

**RuangKarya** is a free, open-source portfolio & blog SSG designed for developers who value freedom and sustainability.

- **Domain**: ruangkarya.space
- **Repository**: RuangKarya (product name)
- **Monetization Model**: TailwindCSS-style (free core + premium convenience)
- **Philosophy**: "Free ≠ cheap • Paid ≠ mandatory • Paid = convenience"

## Product Development Constraints

### Core Principles (NEVER VIOLATE)

1. **Free Core Must Be Genuinely Usable**
   - Never artificially limit core functionality
   - Free version must be production-ready, not a demo
   - All essential features remain free forever

2. **Premium = Convenience Only**
   - Premium features can only be convenience/time-savers
   - Examples: premium themes, starter templates, design assets
   - NEVER: core functionality, essential features, or blocking limitations

3. **Zero Vendor Lock-in**
   - Must work with free hosting (Netlify, Vercel, Cloudflare Pages)
   - No mandatory paid APIs or services
   - Git-based workflow only
   - Static output only (no server dependencies)

### Development Guidelines

#### What's Always Free
- Complete SSG engine and build system
- Portfolio and blog functionality
- All UI components (shadcn/ui based)
- SEO features (RSS, sitemap, meta tags)
- Theme switching and responsive design
- Type-safe content management (Velite)
- Basic themes and layouts

#### What Can Be Premium
- Additional premium themes/layouts
- Ready-made starter templates
- Advanced configuration templates
- Professional design assets
- Premium component libraries (as convenience)
- Time-saving boilerplates

#### Architecture Requirements
- **Free hosting friendly**: Static files only
- **No database dependencies**: File-based content management
- **Minimal external dependencies**: Avoid paid services in core
- **Self-contained**: Can run without external APIs

## Repository Structure

This project contains a modern portfolio website with an integrated blog system:

1. **Portfolio (Vite + React)**: Modern developer portfolio built with Vite, React, and shadcn/ui components
2. **Blog System (TanStack Router + Velite + Decap CMS)**: Static blog with SSG, type-safe content management, and user-friendly CMS interface

## Development Commands

### Portfolio & Blog (Unified)

```bash
# Install dependencies
pnpm install

# Start development server with blog (runs on http://localhost:3030)
pnpm dev

# Content development only (Velite watch mode)
pnpm velite:dev

# Build for production (includes blog, RSS, sitemap)
pnpm build:full

# Preview production build
pnpm preview

# Individual commands
pnpm velite                    # Process content once
pnpm generate:feed             # Generate RSS feed
pnpm generate:sitemap          # Generate sitemap
```

## Architecture Overview

### Portfolio (Vite + React)

**Tech Stack:**

- Vite 6 with React 18 and SWC for fast development
- TypeScript for type safety
- shadcn/ui components built on Radix UI primitives
- Tailwind CSS for styling (via next-themes)
- Motion library for animations

**Structure:**

- `src/components/`: Main page sections (Hero, About, Experience, Services, Projects, Blog, Contact, Footer)
- `src/components/ui/`: Reusable UI components from shadcn/ui (50+ components)
- `src/routes/`: TanStack Router pages
- `vite.config.ts`: Contains extensive package version aliases for dependency resolution

**Key Patterns:**

- Single-page application with section-based navigation
- Theme switching with next-themes (light/dark mode)
- Component composition using Radix UI primitives
- Path alias `@/` points to `./src`

### Blog System (TanStack Router + Velite + Decap CMS)

**Tech Stack:**

- TanStack Router for file-based routing
- Velite for type-safe content management and MDX processing
- Decap CMS for user-friendly content editing interface
- React for UI components
- Tailwind CSS for styling

**Structure:**

- `src/routes/blog/`: Blog pages structure
  - `index.tsx`: Blog listing page
  - `$slug.tsx`: Individual blog post pages
- `content/posts/`: Blog posts in Markdown/MDX format
- `public/admin/`: Decap CMS admin interface and configuration
- `components/`: Blog-specific components
- `scripts/`: Build automation scripts

**Key Patterns:**

- File-based routing for optimal developer experience
- Type-safe content validation with Velite schemas
- Git-based content workflow via Decap CMS
- SEO optimization (meta tags, JSON-LD, RSS, sitemap)
- MDX support for rich content with React components

### Content Management & SEO

**Velite Configuration:**

- Schema validation for type-safe content
- Support for Markdown and MDX files
- Automatic slug and path generation
- Frontmatter fields: `title`, `excerpt`, `date`, `author`, `category`, `tags`, `published`, `draft`, etc.
- Rehype plugins: pretty-code, slug, autolink-headings
- Remark plugins: GFM (GitHub Flavored Markdown)

**Decap CMS Features:**

- Git-based workflow (no database required)
- Visual editing interface at `/admin`
- Media management for images
- Editorial workflow support
- Backend integration with GitHub via Git Gateway

**SEO Optimization:**

- Automatic meta tag generation (OpenGraph, Twitter Cards)
- JSON-LD structured data for articles
- RSS feed generation (`/rss.xml`)
- Sitemap generation (`/sitemap.xml`)
- Canonical URLs and proper meta descriptions

## Monetization Guidelines

### Pricing Strategy

- **Anti-customer-support-oriented pricing**
- USD $15-29 range for premium assets (avoid $5-10 to filter expectations)
- One-time purchase only (no subscriptions)
- Clear messaging: "This is a tool, not a service"

### Support Philosophy

- Best-effort support only
- No SLA promises
- No custom feature guarantees
- No guaranteed roadmap
- Encourage self-service and community support

### Premium Asset Guidelines

When developing premium features:

1. **Never block core functionality**
2. **Focus on convenience and time-saving**
3. **Maintain separate repositories for premium assets**
4. **Ensure free version remains genuinely usable**
5. **Document clear boundaries between free and premium**

## Important Notes

- **Package Manager**: This project uses **pnpm** as the package manager
- **Port Configuration**: Development server runs on port 3030 (configured in vite.config.ts)
- **TypeScript**: Strict type checking enabled for both portfolio and blog
- **Build Strategy**: Use `pnpm build:full` for production builds (includes RSS/sitemap generation)
- **Content Location**: Blog posts are stored in `content/posts/` as Markdown/MDX files
- **CMS Access**: Decap CMS available at `/admin` after deployment setup
- **Alias Configuration**: `@/` points to `./src`, `#site/content` points to `./.velite`
- **Domain**: ruangkarya.space (all references should use this domain)

## Content Management

**Blog Posts Structure:**

- Location: `content/posts/`
- Format: Markdown (.md) or MDX (.mdx)
- Frontmatter fields: title, excerpt, date, author, category, tags, published, draft
- Images: Store in `public/images/uploads/` for CMS compatibility

**CMS Setup (Production):**

- Requires Git Gateway setup for GitHub integration
- Netlify Identity recommended for authentication
- Editorial workflow available for content review

## Deployment Considerations

- **Build Command**: `pnpm build:full` (includes content processing, RSS, and sitemap)
- **Output Directory**: `build`
- **Static Assets**: Images should be optimized before upload
- **Environment**: No environment variables required for basic setup
- **Hosting**: Compatible with all free static hosting providers

## Sustainability Principles

This project follows sustainable development practices:

- **Solo developer friendly**: Low maintenance requirements
- **Pause/resume friendly**: No complex infrastructure dependencies
- **Anti-burnout design**: Minimal support obligations
- **Community-first**: Open source contributions welcome
- **Long-term viability**: Designed to survive without constant maintenance

## Development Reminders

When working on RuangKarya:

1. Always maintain the free/premium boundary
2. Ensure free version remains fully functional
3. Use ruangkarya.space domain in all references
4. Follow sustainable development practices
5. Keep dependencies minimal and free-hosting friendly
6. Document any new features clearly
7. Test on free hosting platforms

## Additional Resources

- **Blog Template Documentation**: See `BLOG_TEMPLATE_README.md` for detailed blog setup and deployment guide
- **Design System**: UI components follow shadcn/ui patterns and conventions
- **Component Guidelines**: Build new components using existing patterns from `src/components/ui/`
- **Content Guidelines**: Follow established frontmatter structure for consistent blog post formatting

---

**Remember**: RuangKarya is a tool for developers who value freedom, sustainability, and genuine open-source principles. Every decision should reflect these values.

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.


      IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.