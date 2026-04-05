# Portfolio — SEO Keywords Research

> สร้าง: 5 เมษายน 2026

---

## Primary Keywords (Listing /portfolio)

| Keyword | Intent | Priority |
|---|---|---|
| ผลงาน digital marketing agency | Commercial | P0 |
| case study การตลาดออนไลน์ | Research | P0 |
| ผลงานรับทำเว็บไซต์ | Commercial | P0 |
| ตัวอย่างเว็บไซต์ SME | Commercial | P1 |
| ผลงาน agency ไทย | Research | P1 |

## Secondary Keywords

| Keyword | Intent |
|---|---|
| ผลงานยิงแอด Facebook | Commercial |
| ผลงาน SEO เว็บไซต์ | Commercial |
| ผลงาน AI Automation ธุรกิจ | Commercial |
| ตัวอย่างงาน Lead Generation | Research |
| ผลงาน Video Production แบรนด์ | Commercial |
| case study SME ไทย | Research |
| ตัวอย่างผลงาน Social Media | Commercial |

---

## Long-tail "ผลงาน + อุตสาหกรรม + บริการ"

### By Industry × Service

| Long-tail Keyword |
|---|
| ผลงานทำเว็บไซต์ร้านอาหาร |
| case study ยิงแอดเครื่องสำอาง |
| ผลงาน SEO คลินิก |
| ตัวอย่างเว็บอสังหาริมทรัพย์ |
| case study เพิ่มยอดขาย e-commerce |
| ผลงาน AI Chatbot ร้านค้าออนไลน์ |
| case study Facebook Ads ร้านเสื้อผ้า |
| ผลงานทำเว็บคลินิกความงาม |
| ตัวอย่าง Lead Generation B2B |
| case study SEO โรงเรียนกวดวิชา |

### By Result

| Long-tail Keyword |
|---|
| เพิ่มยอดขายออนไลน์ 200% |
| ลด cost per lead ด้วยแอด |
| เพิ่ม traffic เว็บด้วย SEO |
| case study ROAS สูง |

---

## Keywords Array (Next.js metadata)

### Listing Page
```typescript
keywords: [
  "ผลงาน digital marketing agency",
  "case study การตลาดออนไลน์",
  "ผลงานรับทำเว็บไซต์",
  "ตัวอย่างเว็บไซต์ SME",
  "ผลงานยิงแอด",
  "ผลงาน SEO",
  "ผลงาน AI Automation",
  "Best Solutions ผลงาน",
  "portfolio agency ไทย",
  "case study SME"
]
```

### Detail Page (dynamic)

> **สำคัญ:** ต้อง map slug → label ไทย ก่อนสร้าง keywords (ไม่งั้นจะได้คำแบบ "ผลงาน ai-automation" ซึ่งไม่มีคนค้น)

```typescript
// src/lib/portfolio-labels.ts
export const SERVICE_LABELS: Record<ServiceTag, string> = {
  'website-design': 'รับทำเว็บไซต์',
  'ads': 'ยิงแอดโฆษณา',
  'seo-content': 'รับทำ SEO',
  'social-media': 'ดูแลโซเชียลมีเดีย',
  'ai-automation': 'AI Automation',
  'video-production': 'Video Production',
  'lead-generation': 'Lead Generation',
};

export const INDUSTRY_LABELS: Record<Industry, string> = {
  'ecommerce': 'E-commerce / Retail',
  'food-beverage': 'ร้านอาหารและเครื่องดื่ม',
  'health-beauty': 'สุขภาพและความงาม',
  'real-estate': 'อสังหาริมทรัพย์',
  'education': 'การศึกษา',
  'b2b-industrial': 'B2B / อุตสาหกรรม',
  'finance': 'การเงิน',
  'automotive': 'ยานยนต์',
  'others': 'อื่น ๆ',
};

// Generate
keywords: [
  `ผลงาน ${portfolio.title}`,
  `case study ${INDUSTRY_LABELS[portfolio.industry]}`,
  ...portfolio.service_tags.map(tag => `ผลงาน ${SERVICE_LABELS[tag]}`),
  "Best Solutions",
  "digital marketing case study"
]
```

---

## On-page SEO Checklist

- [ ] H1 sr-only ในทุกหน้า (listing + detail)
- [ ] Alt text ทุกรูปใน gallery
- [ ] Meta title ไม่เกิน 60 char
- [ ] Meta desc 150-160 char
- [ ] Canonical URL
- [ ] OG image (1200×630)
- [ ] JSON-LD: CreativeWork + BreadcrumbList + ItemList
- [ ] Internal link: portfolio ↔ service detail ↔ blog
- [ ] Sitemap.xml รวม portfolio pages (listing priority 0.9, detail 0.8)
- [ ] Image optimization (next/image + WebP)
- [ ] **Canonical rule สำหรับ filtered URLs:** เมื่อมี `?service=` หรือ `?industry=` ใน URL → canonical ชี้กลับ `/portfolio` base (ป้องกัน duplicate content)
- [ ] ใช้ `SERVICE_LABELS` / `INDUSTRY_LABELS` map แทน raw slug ทุกที่ที่สร้าง keywords/schema

---

## Internal Linking Strategy

```
/portfolio (listing)
  ├─ → /portfolio/[slug] (detail)
  ├─ → /services (CTA)
  └─ → /contact?source=portfolio

/portfolio/[slug]
  ├─ → /services/{service_tag} (solution section)
  ├─ → /portfolio/[related_slug] × 3
  ├─ → /contact?source=portfolio&service=xxx
  └─ ← /services/[slug] (case study mention)
  └─ ← /blog/[slug] (related case study)
```

---

## Competitor Gap Analysis

คู่แข่งไทย (primer, step, baseplayhouse) มักขาด:
- ตัวเลขผลลัพธ์ที่ชัด (ส่วนมากแค่รูป)
- Filter ตามอุตสาหกรรม
- Context-aware CTA จาก portfolio → contact
- Schema markup บน case study

→ Best Solutions สามารถแย่งได้ด้วย structured data + ตัวเลขจริง
