# Blog Review & Plan — Best Solutions

> สร้าง: 2026-04-05
> Reviewer: UX + SEO Agent
> Scope: `/blog` (listing) และ `/blog/[slug]` (detail)

---

## 1. Current State Analysis

### ไฟล์และ components ที่มี

| ไฟล์ | หน้าที่ |
|---|---|
| `app/src/app/blog/page.tsx` | Blog listing (Featured + Grid + Newsletter CTA) |
| `app/src/app/blog/[slug]/page.tsx` | Blog detail (Hero + Article + Sidebar + Related + CTA) |
| `app/src/app/blog/[slug]/TableOfContents.tsx` | TOC component (client) — มีแล้ว |
| `app/src/lib/services/articleService.ts` | Supabase data layer |
| `app/src/components/LatestBlogPosts.tsx` | ใช้ใน home (แยกอิสระ) |

ไม่มี `BlogCard` แยก — markup inline ในหน้า list

### Features ที่มีอยู่แล้ว (ดีมาก)

**Listing (`/blog/page.tsx`)**
- Hero header ขาว + title "Knowledge Hub"
- Featured post block (2-col split)
- Grid 3 columns สำหรับโพสต์ที่เหลือ
- Category badge, date, author, excerpt
- Newsletter CTA dark section ตอนท้าย
- `revalidate = 60` (ISR)
- Metadata (title, description, OG)
- Lucide icons (Calendar, User, ArrowRight, Tag)

**Detail (`/blog/[slug]/page.tsx`)**
- Hero แบบ gradient background `#fef0f0 -> #f5f0ff` + red/blue blur orbs (ตรงกับ design system)
- Category pill gradient `#F51036 -> #c0002a`
- Read time calculation + calendar + clock
- Author card (gradient avatar #F51036 -> #25137A)
- Cover image 16:9 rounded-3xl shadow
- Prose styling ครบ (h1-h5, blockquote, code, table, img, a)
- **Table of Contents** (sticky sidebar, รองรับภาษาไทย)
- Tags section + Share buttons (Facebook, X, LinkedIn)
- Author bio card
- Sidebar: TOC + Article Info + Gradient CTA card + Tags
- **Related posts** (category/tag match, fallback 3 latest)
- Final CTA gradient section
- **JSON-LD Article schema** (headline, author, publisher, datePublished, dateModified, mainEntityOfPage)
- `generateMetadata` — title, description, OG (article type), Twitter card, images
- `generateStaticParams` + `revalidate = 3600`

### Style ปัจจุบัน

- ใช้สี `#F51036`, `#25137A`, `#c0002a`, `#1a1a2e` — **ตรงกับ design system ใหม่**
- Gradient red->blue ใน hero, CTA, author avatar
- พื้นขาว / slate-50 — tone light ถูกต้อง
- Lucide icons เท่านั้น ไม่มี emoji
- Typography: font ยังไม่ได้บังคับ Noto Sans Thai + Helvetica ในระดับ page (น่าจะมาจาก root layout)

---

## 2. Gap Analysis — เทียบกับ Design System ใหม่

| มิติ | Design System ใหม่ | Blog ปัจจุบัน | Gap |
|---|---|---|---|
| สีหลัก | `#f51036` + `#303092` | `#F51036` + `#25137A` | Blue ใช้ `#25137A` (เข้มกว่า) — **ไม่ตรงเป๊ะ** |
| Gradient | red->blue | red->blue | OK |
| Tone | Light พื้นขาว | Light (ขาว + slate-50) | OK |
| Font | Noto Sans Thai + Helvetica | ขึ้นกับ root layout | ต้องเช็ค (น่าจะ OK) |
| Icon | Lucide | Lucide | OK |
| Emoji | ห้าม | ไม่มี | OK |
| CTA button | Gradient pill | Solid + gradient pill | OK |
| Rounded corners | rounded-2xl/3xl | rounded-2xl/3xl | OK |

### Listing page gaps (ใหญ่กว่า)

1. **Hero แบนเรียบมาก** — ไม่มี gradient blur orbs เหมือน detail page และหน้าใหม่อื่น ไม่ consistent กับ Home/About/Services
2. **Featured card สีแดงไม่เท่าที่ควร** — ใช้ `bg-[var(--color-primary-start)]/10` ซึ่งน่าจะ OK แต่ไม่มี accent blue
3. **ไม่มี category filter / tabs** — ถ้าโพสต์เยอะจะหายาก
4. **ไม่มี search** — nice to have
5. **Newsletter CTA สี `bg-slate-900`** — ขัดกับ design system ที่เน้น gradient red->blue
6. **ไม่มี pagination / load more** — ถ้าโพสต์เกิน 20-30 จะยาวเกิน
7. **SEO: ไม่มี canonical, ไม่มี BreadcrumbList, ไม่มี Blog schema**
8. **ไม่ใช้ `next/image`** — ใช้ `<img>` ธรรมดา (เสีย performance, LCP)

### Detail page gaps (เล็ก)

1. **Blue ใช้ `#25137A` ไม่ใช่ `#303092`** — ต่างเล็กน้อย อาจปรับหรือคงไว้ถ้าดู premium ดีอยู่แล้ว
2. **ไม่มี BreadcrumbList JSON-LD** (Home > Blog > Post)
3. **ไม่มี canonical URL** ใน metadata
4. **ไม่ใช้ `next/image`** สำหรับ cover image (performance impact)
5. **Share buttons ไม่มี LINE** — target ไทย ควรมี
6. **ไม่มี reading progress bar** — nice to have สำหรับบทความยาว
7. **Related posts filter ดี** แต่ไม่มี inline CTA กลางบทความ (แค่ sidebar + ท้าย) — miss opportunity
8. **TOC mobile** — ซ่อน `hidden lg:block` → mobile ไม่มี TOC เลย
9. **Tags ซ้ำ 2 ที่** (ใต้ article + sidebar) — redundant

---

## 3. Verdict

### **Minor tweaks only** (ไม่ต้อง redesign ใหม่หมด)

**เหตุผล:**
- Detail page ทำมาดีมากแล้ว — design language, color, gradient, typography, TOC, share, related posts, JSON-LD schema ครบถ้วน และตรงกับ design system ใหม่ประมาณ 90%
- Listing page ใช้การได้อยู่แล้ว แค่ขาด visual polish และ SEO schema บางส่วน
- ไม่มี ROI พอที่จะ rewrite ใหม่หมด — เสียเวลาแทนที่จะไปทำหน้า P0/P1 (Home, Services, Contact)
- ตรงกับ priority ใน REDESIGN-CHECKLIST ที่จัด Blog เป็น P3

**แก้ไขเพียง P0/P1 checklist ด้านล่างก็พอแล้ว** ใช้เวลาประมาณ 1 วัน dev + 0.5 วัน QA

---

## 4. Action Items

### P0 (ต้องทำก่อน launch — SEO / Performance critical)

- [ ] **Listing: เพิ่ม BreadcrumbList + Blog JSON-LD schema**
- [ ] **Detail: เพิ่ม BreadcrumbList JSON-LD** (Home > Blog > Post)
- [ ] **เพิ่ม canonical URL** ในทั้ง listing และ detail metadata (`alternates.canonical`)
- [ ] **เปลี่ยน `<img>` เป็น `next/image`** — cover images ทั้ง listing และ detail (LCP สำคัญ)
- [ ] **Listing: เพิ่ม OG image เริ่มต้น** (ยังไม่มี `images` ใน metadata)

### P1 (ควรทำ — ความสอดคล้อง UX)

- [ ] **Listing hero: ใส่ gradient blur orbs** (red + blue) ให้เหมือน detail/Home — 10 บรรทัด
- [ ] **Listing newsletter CTA: เปลี่ยนจาก `bg-slate-900` เป็น gradient `#f51036 -> #303092`** + ลิงก์ไป LINE OA (`https://lin.ee/IlvhwZV`) แทนปุ่มเฉยๆ
- [ ] **Unify blue**: แทนที่ `#25137A` ด้วย `#303092` (หรือเก็บ `#25137A` เป็น deep variant) — หา/แทนทั้ง 2 ไฟล์
- [ ] **Detail: เพิ่ม LINE share button** (target ไทย)
- [ ] **Detail: TOC mobile** — ทำเป็น collapsible accordion บนมือถือ แทนการซ่อน
- [ ] **Detail: ลบ Tags ซ้ำ** — เก็บแค่ sidebar หรือแค่ใต้ article (เลือก 1)
- [ ] **Listing: เพิ่ม category filter** (pill tabs ด้านบน grid) — ใช้ค่า `category` ที่มีอยู่แล้ว

### P2 (nice to have)

- [ ] **Reading progress bar** ใน detail page (client component, scroll progress)
- [ ] **Inline CTA กลางบทความ** (ถ้ามี mechanism insert `<!-- CTA -->` marker ใน content)
- [ ] **Search box** บน listing (client-side filter)
- [ ] **Pagination / Load More** — ถ้า >20 โพสต์
- [ ] **เพิ่ม author page** `/blog/author/[slug]`
- [ ] **RSS feed** `/blog/rss.xml`
- [ ] **Estimated read time** แสดงใน card ของ listing

---

## 5. Content Plan Summary

### Listing Layout (หลัง tweak)

```
[Navbar]
[Hero — bg-white + gradient blur orbs red/blue, H1 "Knowledge Hub", subtitle]
[Category Filter Tabs — pill style, all + categories]
[Featured Post — 2-col split, ขนาดใหญ่]
[Recent Posts Grid — 3 cols desktop, 2 tablet, 1 mobile]
[LINE OA CTA — gradient red->blue แทน slate-900]
[Footer]
```

### Detail Layout (หลัง tweak — ของเดิมดีอยู่แล้ว)

```
[Navbar]
[Hero — gradient pastel bg + blur orbs + category pill + title + excerpt + author card]
[Cover image 16:9 rounded-3xl]
[Body — 2 col grid]
  [Article prose + Tags + Share (+LINE) + Author bio]
  [Sidebar sticky: TOC (collapsible on mobile) + Article Info + Gradient CTA card]
[Related Posts — 3 cards, category/tag matched]
[Final CTA — gradient red->blue]
[Footer]
```

### SEO Schema เพิ่มเติม

**Listing:**
```json
{ "@type": "Blog", "name": "Best Solutions Knowledge Hub", "url": ".../blog", "publisher": {...} }
{ "@type": "BreadcrumbList", "itemListElement": [Home, Blog] }
```

**Detail:** (มี Article อยู่แล้ว เพิ่ม:)
```json
{ "@type": "BreadcrumbList", "itemListElement": [Home, Blog, Post Title] }
```

---

## 6. Estimated Effort

| งาน | เวลา |
|---|---|
| P0 SEO schemas + canonical + next/image | 3-4 ชม |
| P1 Visual tweaks (hero orbs, CTA gradient, blue unify) | 2 ชม |
| P1 TOC mobile accordion | 1-2 ชม |
| P1 Category filter | 2-3 ชม |
| P1 LINE share + de-dup tags | 1 ชม |
| QA / Test | 2-3 ชม |
| **รวม** | **~1.5 วัน** |
