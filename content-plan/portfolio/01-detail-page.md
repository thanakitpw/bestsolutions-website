# Portfolio Detail Page — /portfolio/[slug]

> สร้าง: 5 เมษายน 2026
> URL: `/portfolio/[slug]` (dynamic)

---

## SEO (Dynamic จาก data)

- **Meta Title:** `{title} — Case Study | Best Solutions` (ตรวจ ≤60 chars ตอน generate, ถ้าเกินตัด {title})
- **Meta Desc:** `{meta_desc}` (จาก field) — fallback: `"ดูผลงาน {title} ของลูกค้า {client} อุตสาหกรรม {industry_label_th} บริการ {service_tags_label_th}"` (ใช้ label ไทย ไม่ใช่ slug)
- **Canonical:** `https://bestsolutionscorp.com/portfolio/{slug}`
- **OG Image:** `cover_image`
- **datePublished:** `portfolio.published_at`
- **dateModified:** `portfolio.updated_at`
- **H1 (sr-only):** `Case Study: {title} — {client}`

---

## Section Order

| # | Section | Background |
|---|---|---|
| 1 | Breadcrumb | White |
| 2 | Hero | White |
| 3 | Challenge | Gray-50 |
| 4 | Solution | White |
| 5 | Process Timeline | Gray-50 |
| 6 | Results (Metrics) | Dark / Gradient |
| 7 | Gallery | White |
| 8 | Testimonial | Gray-50 |
| 9 | Related Portfolio | White |
| 10 | Final CTA | Gradient |

---

## 1. Breadcrumb

`หน้าแรก > ผลงาน > {title}`

- Lucide `ChevronRight` separator
- JSON-LD BreadcrumbList (ดู `02-schema.md`)

---

## 2. Hero

### Layout
Split 60/40 — ซ้าย: ข้อมูล, ขวา: cover image

### ซ้าย (ข้อมูล)
- Tagline (badge): `{industry}` เช่น "E-commerce / Retail"
- Headline (visual): `{title}` เช่น "เพิ่มยอดขาย 240% ใน 3 เดือนให้ร้านเครื่องสำอาง"
- Sub: client name + 1-2 บรรทัดสรุป
- Service Tags (chips): `service_tags[]` คลิกได้ → `/services/{slug}`
- Key Result Stats (3 ตัวเลขใหญ่ inline):
  - `+240%` ยอดขาย
  - `-45%` Cost per Lead
  - `3` เดือน

### ขวา (cover image)
- 4:3 ratio, rounded-2xl, shadow-xl
- next/image priority

---

## 3. Challenge (ปัญหาเดิม)

### Heading
ความท้าทาย

### Content
- ย่อหน้าเล่าปัญหาลูกค้าก่อนมาหาเรา 2-3 ย่อหน้า
- Bullets 3-5 ข้อ (ปัญหาที่เจอ)
- Icon: Lucide `AlertCircle` หรือ `TrendingDown`

### ตัวอย่าง
> ร้านเครื่องสำอางออนไลน์ที่ยอดขายนิ่งมา 6 เดือน ไม่รู้จะทำอย่างไรต่อ แอดก็ยิงแล้วแต่ ROAS ต่ำ คอนเทนต์ก็ลง แต่ไม่มีคน engage

---

## 4. Solution (บริการที่ใช้)

### Heading
แนวทางแก้ไข

### Content
- อธิบายกลยุทธ์ 2-3 ย่อหน้า
- Service Cards (ลิงก์ไปหน้า service detail)

### Service Card Spec
| Field | Content |
|---|---|
| Icon | Lucide icon ตามบริการ |
| Service Name | `{service_tag}` |
| สิ่งที่เราทำ | 1-2 บรรทัด |
| Link | `/services/{slug}` "ดูบริการนี้ →" |

---

## 5. Process (Timeline 3-5 ขั้น)

### Heading
ขั้นตอนการทำงาน

### Layout
Vertical timeline (desktop: alternating left-right, mobile: left-aligned)

### Each Step
| Field | Content |
|---|---|
| Step # | 01, 02, 03... |
| Icon | Lucide |
| Title | ชื่อขั้นตอน |
| Duration | เช่น "สัปดาห์ที่ 1-2" |
| Description | 2-3 บรรทัด |

### ตัวอย่าง (5 steps)
1. วิเคราะห์ธุรกิจและกลุ่มเป้าหมาย (สัปดาห์ 1)
2. วางกลยุทธ์และตั้งระบบ (สัปดาห์ 2)
3. Launch campaign + content (สัปดาห์ 3-4)
4. Optimize และปรับจูน (เดือน 2)
5. Scale และรายงานผล (เดือน 3)

---

## 6. Results (ตัวเลขผลลัพธ์ 3-4 metrics)

### Heading
ผลลัพธ์ที่ได้

### Layout
Dark background + gradient accent, 3-4 cards ตัวเลขใหญ่

### Card Spec
| Element | Content |
|---|---|
| Big Number | `+240%` (text-6xl, gradient) |
| Label | "ยอดขายเพิ่มขึ้น" |
| Sub | "จาก 500k เป็น 1.7M ต่อเดือน" |
| Icon | Lucide `TrendingUp` |

### ตัวอย่าง 4 metrics
- `+240%` ยอดขาย
- `-45%` Cost per Lead
- `+180%` Traffic
- `3.5x` ROAS

---

## 7. Gallery

### Heading
ผลงานและหน้าจอ

### Layout
- Masonry / grid 2-3 columns
- Lightbox on click
- 4-8 screenshots
- Alt text: `{title} — screenshot {n}` (ถ้ามี caption ใช้ caption แทน)

### Lightbox Keyboard & A11y Spec
- `ESC` → ปิด lightbox
- `ArrowLeft` / `ArrowRight` → รูปก่อน/ถัดไป
- Focus trap ภายใน lightbox
- `aria-label` ของปุ่มปิด: "ปิดรูปภาพ"
- `role="dialog"` + `aria-modal="true"`

---

## 8. Testimonial (ถ้ามี)

### Layout
Quote card, client photo (ถ้ามี), ชื่อ, ตำแหน่ง

### Spec
| Element | Content |
|---|---|
| Quote icon | Lucide `Quote` |
| Quote text | คำพูดลูกค้า 2-4 บรรทัด |
| Avatar | รูปลูกค้า (ถ้ามี) |
| Name | ชื่อ |
| Role | ตำแหน่ง, ชื่อบริษัท |
| Rating | 5 stars (Lucide `Star`) |

### Fallback (ไม่มี testimonial)
ถ้า case นี้ไม่มี testimonial → **ไม่ hide เฉย ๆ** แต่แทนที่ด้วย "Trust Signals Block":
- Logo ลูกค้า (ถ้า consent)
- ตัวเลขผลลัพธ์เด่น 1-2 ตัวซ้ำในรูป card
- ข้อความ: "ลูกค้าไม่สะดวกเปิดเผยตัวตน แต่ผลลัพธ์คือข้อเท็จจริงที่ตรวจสอบได้"
- เหตุผล: hide section ทำให้หน้าดูไม่ครบ + ลด credibility โดยไม่จำเป็น

---

## 9. Related Portfolio (3 ชิ้น)

### Heading
ผลงานที่คล้ายกัน

### Logic
- จาก `related_slugs[]` (manual) หรือ
- Auto: portfolio อื่นที่มี service_tag หรือ industry ซ้ำ (เว้น current slug)
- แสดง 3 cards (ใช้ `<PortfolioCard />` เหมือน list page)

---

## 10. Final CTA (Context-Aware)

### Headline
อยากได้ผลลัพธ์แบบนี้บ้างไหม?

### Sub
ทุกธุรกิจมีปัญหาที่แตกต่างกัน ให้เราช่วยวิเคราะห์และเสนอแนวทางที่เหมาะกับคุณ ปรึกษาฟรี ไม่มีข้อผูกมัด

### CTA Buttons
- Primary: ปรึกษาฟรีทันที → `/contact?source=portfolio&service={primary_service_tag}&ref={slug}`
- Secondary: ดูบริการ `{primary_service}` → `/services/{primary_service_tag}`
- Tertiary (LINE): คุยผ่าน LINE ทันที → `https://lin.ee/{LINE_ID}?ref=portfolio-{slug}` (เปิด tab ใหม่, Lucide icon `MessageCircle`)

### Sticky LINE Floating Button
- ใช้ `<LineFloatingButton />` shared component ปรากฏทุกหน้า portfolio (list + detail)
- Bottom-right, z-50, ไม่บัง Final CTA

### Context-Aware Query
- `source=portfolio` → contact form แสดง "มาจากผลงาน {title}"
- `service=xxx` → pre-select บริการ
- `ref=slug` → track ว่า portfolio ชิ้นไหน convert

---

## Components ที่ต้องใช้

- `<PortfolioHero />`
- `<ChallengeSection />`
- `<SolutionSection />`
- `<ProcessTimeline />`
- `<ResultsMetrics />`
- `<Gallery />` (lightbox)
- `<Testimonial />`
- `<RelatedPortfolio />`
- `<GradientCTA />` (reusable)
- `<LineFloatingButton />` (sticky, shared)

---

## Lucide Icons

- Breadcrumb: `ChevronRight`, `Home`
- Hero stats: `TrendingUp`, `DollarSign`, `Clock`
- Challenge: `AlertCircle`, `TrendingDown`
- Solution: `Lightbulb`, `Target`, `Zap`
- Process: `CheckCircle2`, `Calendar`
- Results: `TrendingUp`, `BarChart3`, `Award`
- Gallery: `ImageIcon`, `Expand`
- Testimonial: `Quote`, `Star`
- CTA: `ArrowRight`, `MessageCircle`
