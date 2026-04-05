# Portfolio List Page — /portfolio

> สร้าง: 5 เมษายน 2026
> URL: `/portfolio`

---

## SEO

- **Meta Title:** ผลงาน Case Study | Best Solutions Digital Agency (≤60 chars)
- **Meta Description:** รวมผลงานจริง 50+ โปรเจกต์ เว็บไซต์ ยิงแอด SEO AI Automation ดูตัวเลขผลลัพธ์จริงจากลูกค้า SME ไทย ปรึกษาฟรี (≤160 chars)
- **Canonical rule:** เมื่อมี query params (`?service=`, `?industry=`) → canonical ชี้กลับ `/portfolio` (base) เพื่อป้องกัน duplicate content
- **H1 (sr-only):** ผลงานและ Case Study ของ Best Solutions — Digital Marketing Agency ไทย
- **Canonical:** https://bestsolutionscorp.com/portfolio
- **Keywords:** ผลงานรับทำเว็บไซต์, case study การตลาดออนไลน์, ผลงาน digital marketing agency, ผลงาน SEO, ผลงานยิงแอด, ผลงาน AI Automation, ตัวอย่างเว็บไซต์ SME

---

## Section Order

| # | Section | Background |
|---|---|---|
| 1 | Hero | White |
| 2 | Stats Bar | Gray-50 |
| 3 | Filter / Categories | White (sticky) |
| 4 | Portfolio Grid | White |
| 5 | Trust Strip (logo ลูกค้า) | Gray-50 |
| 6 | Final CTA | Gradient |

---

## Hero

### Tagline
ผลงานของเรา

### Headline (visual)
ผลงานจริง ผลลัพธ์จริง
จากลูกค้ากว่า 50+ ธุรกิจ

### Sub
ดูว่า Best Solutions ช่วยธุรกิจ SME ไทยเติบโตอย่างไร
ทั้งเว็บไซต์ ยิงแอด SEO ไปจนถึง AI Automation

### CTA
- Primary: ปรึกษาฟรี ไม่มีค่าใช้จ่าย → `/contact?source=portfolio`
- Secondary: ดูบริการทั้งหมด → `/services`

---

## Stats Bar (4 metrics)

| Metric | Value | Label |
|---|---|---|
| จำนวนโปรเจกต์ | 50+ | โปรเจกต์ที่ส่งมอบ |
| อุตสาหกรรม | 15+ | กลุ่มธุรกิจที่เราดูแล |
| ROI เฉลี่ย | 3.5x | ผลตอบแทนการลงทุน |
| ความพึงพอใจ | 95% | ลูกค้ากลับมาใช้ซ้ำ |

> **[BLOCKER ก่อน launch]** ตัวเลข stats ทั้งหมดเป็น placeholder — ห้าม launch ด้วยตัวเลขปลอม เพราะจะกระทบ trust ของ brand อย่างรุนแรง ต้องได้ข้อมูลจริงจากทีม account ก่อนขึ้น production

---

## Filter / Categories (Sticky Bar)

### Filter 1: ตามบริการ (7 tabs + ทั้งหมด)
- ทั้งหมด
- รับทำเว็บไซต์ (`website-design`)
- ยิงแอดโฆษณา (`ads`)
- รับทำ SEO (`seo-content`)
- ดูแลโซเชียล (`social-media`)
- AI Automation (`ai-automation`)
- Video Production (`video-production`)
- Lead Generation (`lead-generation`)

### Filter 2: ตามอุตสาหกรรม (dropdown)
- ทั้งหมด
- E-commerce / Retail
- Food & Beverage
- Health & Beauty
- Real Estate
- Education
- B2B / Industrial
- Finance
- Automotive
- Others

### Interaction
- คลิก filter → update URL query: `?service=ads&industry=food`
- Filter state persist ผ่าน URL (shareable)
- **Sticky:** filter bar sticky ทั้ง desktop และ mobile (`sticky top-0 z-40`, ต่ำกว่า navbar)
- Mobile: filter เป็น horizontal scroll tabs (service) + dropdown (industry), touch target ≥ 44px
- Analytics event: `portfolio_filter` ทุกครั้งที่เปลี่ยน filter

---

## Portfolio Grid (Card Spec)

### Layout
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Load more / pagination ทุก 9 รายการ

### Card Design Spec

| Element | Content |
|---|---|
| Cover Image | 16:9 ratio, next/image, blur placeholder |
| Service Tag (badge) | สีตามบริการ (gradient red-blue) — แสดงได้หลาย tag |
| Client Name | ชื่อลูกค้า (Noto Sans Thai bold) |
| Industry | หมวดอุตสาหกรรม (text-sm text-gray-500) |
| Headline Result | ผลลัพธ์เด่น 1 บรรทัด เช่น "ยอดขายเพิ่ม 240% ใน 3 เดือน" |
| CTA | "ดูรายละเอียด →" (hover effect, ไปที่ `/portfolio/[slug]`) |

### Card Hover State (Desktop)
- Image zoom 1.05x
- Overlay gradient `from-[#f51036] to-[#303092]` + text "คลิกดูรายละเอียด"
- Shadow lift

### Card Mobile/Touch State
- ไม่มี hover effect
- แสดง service tag + headline result + arrow ตลอดเวลา
- Tap ทั้ง card → navigate (ไม่ใช่เฉพาะ CTA text)

### Empty State (กรณี filter ไม่เจอ)
- Icon: Lucide `SearchX`
- Text: "ยังไม่มีผลงานในหมวดนี้ — ลองเลือกหมวดอื่น หรือติดต่อเราเพื่อดูผลงานเพิ่มเติม"
- CTA: "ดูผลงานทั้งหมด" + "ติดต่อเรา" → `/contact?source=portfolio&note=no-match`
- Analytics event: `portfolio_filter_empty` พร้อม payload `{ service, industry }` เพื่อรู้ว่าลูกค้าหาอะไรที่เราไม่มี

---

## Trust Strip (Logo ลูกค้า)

- Grayscale logo row 8-12 logos (hover → เป็นสี)
- Heading: "ลูกค้าที่ไว้วางใจเรา"
- Sub: "ตั้งแต่ SME ไปจนถึงแบรนด์ระดับประเทศ"
- Auto-scroll marquee (optional)

---

## Final CTA (Gradient Section)

### Headline
อยากให้ธุรกิจของคุณเป็นเคสต่อไปไหม?

### Sub
ปรึกษาฟรี ไม่มีข้อผูกมัด — ทีมของเราพร้อมวิเคราะห์และเสนอแนวทางที่เหมาะกับธุรกิจคุณ

### CTA Buttons
- Primary: นัดปรึกษาฟรีทันที → `/contact?source=portfolio`
- Secondary: ดูบริการทั้งหมด → `/services`

### Context-Aware Logic
- ถ้า user มี filter `?service=xxx` ตอนคลิก CTA → ส่งต่อเป็น `/contact?source=portfolio&service=xxx`
- ถ้าไม่มี filter → `/contact?source=portfolio`

---

## Components ที่ต้องใช้

- `<PortfolioCard />` — reusable
- `<PortfolioFilter />` — client component (URL state, sticky)
- `<StatsBar />` — reusable
- `<TrustLogoStrip />` — reusable
- `<GradientCTA />` — reusable
- `<LineFloatingButton />` — sticky LINE button (global ใน layout portfolio)

---

## Lucide Icons

- Filter: `Filter`, `SearchX`, `LayoutGrid`, `List`
- Card: `ArrowRight`, `ExternalLink`
- Stats: `Briefcase`, `Users`, `TrendingUp`, `Heart`
