# ILMORA Education Group — Digital Experience

> The Future Operating System for Global Higher Education

A cinematic, luxury digital experience built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Three.js, and Lenis smooth scroll.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ or **pnpm** 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/ilmora/ilmora-education.git
cd ilmora-education

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
ilmora-education/
├── public/
│   ├── images/
│   │   ├── brands/              # Logo files (ilmora-dark.png, ilmora-white.png)
│   │   └── universities/        # University logos (add new ones here)
│   ├── fonts/                   # Custom fonts (if needed)
│   └── robots.txt               # SEO robots file
│
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout with metadata & JSON-LD
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles (Tailwind v4)
│   │   ├── loading.tsx          # Loading state
│   │   ├── error.tsx            # Error boundary
│   │   ├── not-found.tsx        # 404 page
│   │   ├── sitemap.ts           # Dynamic sitemap generator
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog page
│   │   ├── contact/             # Contact page with form
│   │   ├── services/            # Services page
│   │   ├── success-stories/     # Success stories page
│   │   └── universities/        # Universities page with search & filter
│   │
│   ├── data/                    # ★ CMS-READY DATA FILES ★
│   │   ├── site-config.ts       # Global site configuration
│   │   ├── navigation.ts        # Navigation menu items
│   │   ├── services.ts          # All service data
│   │   ├── universities.ts      # University data (add/edit here)
│   │   ├── statistics.ts        # Achievement counters
│   │   ├── testimonials.ts      # Client testimonials
│   │   ├── success-stories.ts   # Student success stories
│   │   └── blog.ts              # Blog post data
│   │
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, ClientWrapper
│   │   ├── sections/            # Homepage sections (Hero, Trust, etc.)
│   │   ├── animations/          # Reusable animation components
│   │   ├── interactive/         # Interactive UI (Magnetic buttons)
│   │   ├── three/               # Three.js 3D scenes
│   │   ├── ui/                  # UI primitives (CustomCursor, ScrollProgress)
│   │   └── seo/                 # JSON-LD structured data
│   │
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   └── types/                   # TypeScript type definitions
│
├── next.config.ts               # Next.js configuration with security headers
├── postcss.config.mjs           # PostCSS with Tailwind v4
├── tsconfig.json                # TypeScript configuration
└── package.json
```

---

## ✏️ Content Editing Guide

### How to Update Content (Zero Code Changes Required)

All content is stored in the `src/data/` directory. Simply edit the TypeScript files and the entire website updates automatically.

#### 1. Contact Information

**File:** `src/data/site-config.ts`

```typescript
export const siteConfig = {
  links: {
    whatsapp: "https://wa.me/971XXXXXXXXX",   // ← Change this
    phone: "+971-XX-XXX-XXXX",                 // ← Change this
    email: "info@ilmora.com",                   // ← Change this
    address: {
      full: "Business Bay, Dubai, UAE",         // ← Change this
    },
  },
};
```

#### 2. Add a New University

**File:** `src/data/universities.ts`

```typescript
// Add a new object to the universities array:
{
  id: "unique-id",
  name: "University Full Name",
  shortName: "Short",
  logo: "/images/universities/your-logo.png",   // Place logo in public/images/universities/
  location: "City, State",
  country: "Country",
  description: "University description...",
  ranking: "Top 100",
  programs: ["Engineering", "Business", "Arts"],
  highlights: ["Accredited", "Research Hub"],
  partnershipLevel: "gold",  // platinum | gold | silver | partner
  website: "https://university.edu",
  featured: true,  // Show in featured section
}
```

**Logo placement:** Drop the PNG file into `public/images/universities/` and reference it in the data.

#### 3. Add a Testimonial

**File:** `src/data/testimonials.ts`

```typescript
{
  id: "unique-id",
  name: "Student Name",
  role: "Program",
  university: "University Name",
  country: "Country",
  quote: "Their testimonial quote...",
  rating: 5,
  featured: true,  // Show in main carousel
}
```

#### 4. Add a Blog Post

**File:** `src/data/blog.ts`

```typescript
{
  id: "unique-id",
  title: "Blog Post Title",
  excerpt: "Short description...",
  category: "Admissions",  // Admissions | Visa Guide | Scholarships | Career Tips | Student Life | UAE Education
  author: "Author Name",
  date: "2025-06-15",
  readTime: "8 min read",
  featured: true,
  slug: "url-friendly-slug",
}
```

#### 5. Update Statistics

**File:** `src/data/statistics.ts`

```typescript
{
  id: "unique-id",
  value: 2500,        // The number to animate to
  suffix: "+",        // Displayed after the number
  label: "Students Placed",
  description: "Description text",
}
```

---

## 🏫 University Integration Guide

### Adding Universities

1. **Prepare the logo:** Use a transparent PNG, ideally 200-400px wide
2. **Place the file:** Save to `public/images/universities/university-name.png`
3. **Add the data:** Add a new entry in `src/data/universities.ts`
4. **Rebuild:** Run `npm run build` to verify

### Partnership Levels

| Level | Display Color | Use For |
|-------|--------------|---------|
| `platinum` | Violet | Top-tier strategic partners |
| `gold` | Amber | Major institutional partners |
| `silver` | Gray | Standard partners |
| `partner` | Cyan | General partners |

### Filtering

The universities page automatically provides filtering by:
- Partnership level
- Featured status
- Search by name, location, or program

---

## 🎨 Architecture Guide

### Design System

- **Primary Color:** Violet (#7C3AED) — authority, ambition, innovation
- **Secondary:** Indigo (#4F46E5) — trust, depth
- **Accents:** Cyan, Emerald, Amber — used per-section for visual identity
- **Typography:** Inter (via Google Fonts) — clean, modern, highly readable
- **Background:** Pure black (#000) — cinematic luxury canvas
- **Text Hierarchy:** White → White/60 → White/40 → White/20

### Animation System

| Component | Purpose | Used In |
|-----------|---------|---------|
| `TextReveal` | Word-by-word text entrance | Headlines, key phrases |
| `FadeIn` | Directional fade with offset | Most content sections |
| `StaggerContainer` | Staggered children reveal | Grid layouts, lists |
| `ScaleIn` | Scale-up entrance | Featured items |
| `useCounter` | Animated number counting | Statistics section |
| `useSmoothScroll` | Lenis smooth scroll | Global |

### 3D System

The hero features a Three.js scene with:
- Animated distorted sphere (MeshDistortMaterial)
- Floating particles (300 points)
- Orbit rings (3 concentric orbital paths)
- Dynamic lighting (ambient + 2 point lights)

---

## 🔍 SEO Guide

### Built-in SEO Features

- ✅ Dynamic metadata per page (title, description, Open Graph)
- ✅ JSON-LD structured data (Organization, WebSite, EducationalOrganization)
- ✅ Dynamic sitemap.xml generation
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Image alt text
- ✅ Performance optimized (lazy loading, code splitting)

### Customizing SEO

**Per-page:** Edit the `metadata` export in each page's `page.tsx`

**Global:** Edit `src/data/site-config.ts` under the `seo` key

---

## 🚢 Deployment Guide

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deployments
```

### Manual Deployment

```bash
# Build for production
npm run build

# The .next directory contains the production build
# Use any Node.js hosting that supports Next.js
npm start
```

### Environment Variables

Create a `.env.local` file for any environment-specific values:

```env
NEXT_PUBLIC_SITE_URL=https://ilmora.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-api.com
```

---

## 🛡️ Security

Built-in security features:
- Security headers (X-Frame-Options, HSTS, X-Content-Type-Options)
- Environment variable isolation
- Input validation ready (form fields)
- Error boundaries
- No sensitive data in client bundles

---

## 🧰 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16 | React framework with App Router |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | 12 | Animation library |
| Three.js | latest | 3D graphics |
| React Three Fiber | 9 | React renderer for Three.js |
| React Three Drei | latest | Three.js helpers |
| Lenis | latest | Smooth scrolling |
| Lucide React | latest | Icon library |

---

## 📋 Maintenance Guide

### Regular Updates

1. **Content updates:** Edit files in `src/data/` — no code changes needed
2. **New universities:** Add entry + logo file
3. **New testimonials:** Add entry to `src/data/testimonials.ts`
4. **New blog posts:** Add entry to `src/data/blog.ts`
5. **Contact changes:** Update `src/data/site-config.ts`

### Performance Monitoring

Run Lighthouse audits regularly:
```bash
npx lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

Target scores:
- Performance: 95+
- Accessibility: 95+
- SEO: 95+
- Best Practices: 100

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update safely
npm update

# Update specific package
npm install package-name@latest
```

---

## 📄 License

© 2025 ILMORA Education Group. All rights reserved.
