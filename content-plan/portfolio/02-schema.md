# Portfolio — Data Schema

> สร้าง: 5 เมษายน 2026

---

## TypeScript Interface

```typescript
// src/lib/types/portfolio.ts

export type ServiceTag =
  | 'website-design'
  | 'ads'
  | 'seo-content'
  | 'social-media'
  | 'ai-automation'
  | 'video-production'
  | 'lead-generation';

export type Industry =
  | 'ecommerce'
  | 'food-beverage'
  | 'health-beauty'
  | 'real-estate'
  | 'education'
  | 'b2b-industrial'
  | 'finance'
  | 'automotive'
  | 'others';

export interface ProcessStep {
  step: number;         // 1, 2, 3...
  title: string;        // "วิเคราะห์ธุรกิจ"
  duration: string;     // "สัปดาห์ที่ 1-2"
  description: string;  // เนื้อหาละเอียด
  icon?: string;        // Lucide icon name
}

export interface ResultMetric {
  value: string;        // "+240%"
  label: string;        // "ยอดขายเพิ่มขึ้น"
  sub?: string;         // "จาก 500k เป็น 1.7M"
  icon?: string;        // Lucide icon
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;         // "เจ้าของร้าน XYZ"
  avatar_url?: string;
  rating?: number;      // 1-5
}

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Portfolio {
  id: string;
  slug: string;                    // URL-safe, unique
  title: string;                   // Headline
  client: string;                  // ชื่อลูกค้า
  industry: Industry;
  service_tags: ServiceTag[];      // บริการที่ใช้ (>=1)
  cover_image: string;             // URL
  gallery: GalleryImage[];

  // Content sections
  headline_result: string;         // 1-line result for card
  challenge: string;               // markdown/rich text
  solution: string;                // markdown/rich text
  process: ProcessStep[];
  results: ResultMetric[];
  testimonial?: Testimonial;

  // Related
  related_slugs: string[];         // manual pinning (optional)

  // Meta
  published_at: string;            // ISO date
  featured: boolean;               // แสดงหน้า home
  order: number;                   // sort order

  // SEO
  meta_title?: string;
  meta_desc?: string;
  og_image?: string;
}
```

---

## Supabase Table Schema (SQL)

```sql
-- Portfolio table
create table public.portfolios (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  client text not null,
  industry text not null,
  service_tags text[] not null default '{}',
  cover_image text not null,
  gallery jsonb not null default '[]'::jsonb,

  headline_result text not null,
  challenge text not null,
  solution text not null,
  process jsonb not null default '[]'::jsonb,
  results jsonb not null default '[]'::jsonb,
  testimonial jsonb,

  related_slugs text[] not null default '{}',

  published_at timestamptz not null default now(),
  featured boolean not null default false,
  "order" integer not null default 0,

  meta_title text,
  meta_desc text,
  og_image text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes
create index portfolios_slug_idx on public.portfolios (slug);
create index portfolios_industry_idx on public.portfolios (industry);
create index portfolios_service_tags_idx on public.portfolios using gin (service_tags);
create index portfolios_featured_idx on public.portfolios (featured) where featured = true;
create index portfolios_published_at_idx on public.portfolios (published_at desc);

-- RLS
alter table public.portfolios enable row level security;

-- Public read
create policy "portfolios_public_read"
  on public.portfolios
  for select
  using (true);

-- Admin write (ใช้ service role)
create policy "portfolios_admin_write"
  on public.portfolios
  for all
  using (auth.role() = 'service_role');

-- Updated_at trigger
create trigger portfolios_updated_at
  before update on public.portfolios
  for each row
  execute function public.handle_updated_at();
```

---

## JSON-LD Structured Data

### CreativeWork Schema (Portfolio Detail)

```typescript
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": portfolio.title,
  "description": portfolio.meta_desc || portfolio.headline_result,
  "image": portfolio.cover_image,
  "url": `https://bestsolutionscorp.com/portfolio/${portfolio.slug}`,
  "datePublished": portfolio.published_at,
  "dateModified": portfolio.updated_at,
  "author": {
    "@type": "Organization",
    "name": "Best Solutions",
    "url": "https://bestsolutionscorp.com"
  },
  "about": {
    "@type": "Thing",
    "name": INDUSTRY_LABELS[portfolio.industry]  // ใช้ label ไทย ไม่ใช่ slug
  },
  "keywords": portfolio.service_tags.map(t => SERVICE_LABELS[t]).join(", "),
  ...(portfolio.testimonial && {
    "review": {
      "@type": "Review",
      "reviewBody": portfolio.testimonial.quote,
      "author": {
        "@type": "Person",
        "name": portfolio.testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": portfolio.testimonial.rating || 5,
        "bestRating": 5
      }
    }
  })
}
```

### BreadcrumbList Schema

```typescript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "หน้าแรก",
      "item": "https://bestsolutionscorp.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ผลงาน",
      "item": "https://bestsolutionscorp.com/portfolio"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": portfolio.title,
      "item": `https://bestsolutionscorp.com/portfolio/${portfolio.slug}`
    }
  ]
}
```

### ItemList Schema (Portfolio List Page)

```typescript
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "numberOfItems": portfolios.length,
  "itemListElement": portfolios.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://bestsolutionscorp.com/portfolio/${p.slug}`,
    "name": p.title
  }))
}
```

---

## Data Fetching Pattern (Next.js App Router)

```typescript
// Listing: ISR revalidate ทุก 1 ชม.
export const revalidate = 3600;

// Detail: generateStaticParams + ISR
export async function generateStaticParams() {
  const { data } = await supabase
    .from('portfolios')
    .select('slug');
  return data?.map(({ slug }) => ({ slug })) ?? [];
}
```
