# Website Redesign Checklist — Best Solutions

> สร้าง: 4 เมษายน 2026
> Workflow: Content Plan --> Design (Paper) --> Implement --> Review/Launch
> กฎสำคัญ: ห้ามข้ามขั้น -- ต้อง approve แต่ละ phase ก่อนไปขั้นถัดไป

---

## สถานะรวม

| หมวด | สถานะ |
|---|---|
| Phase 1: วิเคราะห์และวางแผน | เสร็จแล้ว |
| Phase 2: Content Plan (Home) | เสร็จแล้ว |
| Phase 2: Content Plan (หน้าอื่น) | ยังไม่ได้ทำ |
| Phase 3: Design (Home) | กำลังทำ |
| Phase 4: Implement | ยังไม่ได้ทำ |
| Phase 5: Review/Launch | ยังไม่ได้ทำ |

---

## Phase 1: วิเคราะห์และวางแผน

- [x] Screenshot เว็บเก่าทุกหน้า
- [x] วิเคราะห์ปัญหา สร้าง checklist
- [x] สร้าง Site Structure (`site-structure.md`)
- [x] กำหนด Design System (สี, ฟอนต์, icons)
- [x] สร้าง Workflow Guidebook (`WORKFLOW-GUIDEBOOK.md`)
- [x] ตั้ง agents และ skills

---

## Phase 2: วางแผนเนื้อหา (Content Plan)

### 2A. Home Page

- [x] Section order approved (`00-section-order.md`)
- [x] Hero (`01-hero.md`)
- [x] Client Logo Bar (`02-client-logos.md`)
- [x] Services Preview (`03-services-preview.md`)
- [x] Case Studies (`04-case-studies.md`)
- [x] How We Work (`05-how-we-work.md`)
- [x] Why Us + Testimonials (`06-testimonials.md`)
- [x] Pricing Hint (`07-pricing-hint.md`)
- [x] Latest Blog (`09-latest-blog.md`)
- [x] Final CTA (`10-final-cta.md`)
- [x] SEO Keywords (`seo-keywords.md`)
- [x] Competitor Analysis (`competitor-analysis.md`)
- [x] Layout Spec (`layout-spec.md`)
- [x] Multi-Agent Review -- approved

### 2B. About Page

- [x] Brainstorm sections (Company Story, Vision/Mission, Team, Stats)
- [x] Content Strategy -- message hierarchy
- [x] Copywriting -- copy จริง (draft — ต้องใส่ข้อมูลจริงก่อน launch)
- [x] Team Section -- ย้ายมาจาก Home (`05-team.md`)
- [x] SEO Keyword Research
- [x] Multi-Agent Review -- approved พร้อมปรับแก้ตาม recommendations

### 2C. Services Overview Page (`/services`)

- [x] Brainstorm layout -- service cards overview (3 กลุ่ม: Foundation/Growth/AI)
- [x] Content Strategy -- จัดกลุ่มบริการ 7 ตัวตาม customer journey
- [x] Copywriting -- headline, subhead, short description ทุกบริการ
- [x] SEO Keyword Research
- [x] Paper Design -- ออกแบบเสร็จ + review checkpoint passed

### 2D. Service Detail Pages (7 หน้า)

**รับทำเว็บไซต์ (`/services/website-design`)**
- [x] Content Plan + Copywriting + SEO Keywords
- [x] Multi-Agent Review — approved + แก้ H1, เพิ่ม Social Proof, Schema

**ยิงแอดโฆษณา (`/services/ads`)**
- [x] Content Plan + Copywriting + SEO Keywords
- [x] Multi-Agent Review — approved + แก้ H1, เพิ่มงบแนะนำ, Schema

**รับทำ SEO (`/services/seo-content`)**
- [x] Content Plan + Copywriting + SEO Keywords
- [x] Multi-Agent Review — approved + แก้ H1, Schema

**ดูแลโซเชียลมีเดีย (`/services/social-media`)**
- [x] Content Plan + Copywriting + SEO Keywords
- [x] Multi-Agent Review — approved + แก้ H1, เพิ่ม Results + ทำไมต้องเรา, Schema

**AI Automation (`/services/ai-automation`)**
- [x] Content Plan + Copywriting + SEO Keywords + Sticky Anchor Nav
- [x] Multi-Agent Review — approved + แก้ H1, เพิ่ม sub-CTA, LINE OA, Trust, Schema

**Video Production (`/services/video-production`)**
- [x] Content Plan + Copywriting + SEO Keywords
- [x] Multi-Agent Review — approved + แก้ H1, เพิ่ม Results, Schema

**Lead Generation (`/services/lead-generation`)**
- [x] Content Plan + Copywriting + SEO Keywords
- [x] Multi-Agent Review — approved + แก้ H1, เพิ่ม Ad Spend, PDPA FAQ, Schema

### 2E. Portfolio Page (`/portfolio`)

- [x] Content Plan -- listing layout, filter/categories, card design
- [x] Copywriting -- page headline, description
- [x] Portfolio Detail Page template
- [x] SEO Keywords
- [x] Multi-Agent Review — approved + แก้ meta title/desc length, sticky filter mobile, SERVICE_LABELS/INDUSTRY_LABELS map, LINE sticky button, testimonial fallback, lightbox a11y, schema dateModified + numberOfItems, canonical rule filtered URLs

### 2F. Blog Page (`/blog`) -- มีอยู่แล้ว

- [x] Review design ปัจจุบัน — **Verdict: Minor tweaks only** (`blog/00-review-and-plan.md`)
- [x] Blog listing layout — ไม่ rewrite, ทำ tweak (hero orbs, category filter, LINE CTA)
- [x] Blog detail page — ไม่ rewrite, ของเดิมตรง design system ~90%
- P0: BreadcrumbList + Blog schema, canonical, next/image (LCP)
- P1: hero blur orbs, unify blue `#303092`, category filter, LINE share, TOC mobile accordion
- P2: reading progress, inline CTA, search, pagination, RSS

### 2G. Contact Page (`/contact`)

- [x] Content Plan -- Hero, Contact Form, Contact Info, LINE, FAQ
- [x] Copywriting
- [x] SEO Keywords
- [x] Paper Design -- ดีไซน์เสร็จ + review checkpoint passed

### 2H. Thank You Page (`/thank-you`)

- [x] Content Plan -- confirmation message, next steps, upsell
- [x] Copywriting

---

## Phase 3: ออกแบบ UI (Paper Design)

### 3A. Global Elements

- [x] Design System artboard (สี, ฟอนต์, buttons, cards)
- [ ] Logo จัดวางใน Navbar + Footer
- [ ] Navbar -- desktop + mobile (hamburger)
- [ ] Footer -- links, contact info, social icons
- [ ] LINE Floating Button
- [ ] Common components -- section headers, badges

### 3B. Home Page (9 sections)

- [x] Hero -- split layout, gradient text, mockup placeholder
- [x] Client Logo Bar -- grayscale placeholders
- [x] Services Preview -- 4 cards + ปุ่มดูทั้งหมด
- [x] Case Studies -- dark bg, 3 metrics cards
- [x] Pricing Hint -- 3 packages, Growth เน้น
- [x] How We Work -- 4 steps + "ปรึกษาฟรี"
- [x] Why Us + Testimonials -- split layout
- [x] Latest Blog -- 3 posts cards
- [x] Final CTA -- gradient bg
- [x] Footer -- 4 columns
- [ ] Review checkpoint final
- [ ] User approve

### 3C. About Page

- [x] ออกแบบทุก section ใน Paper (7 sections + Navbar)
- [x] Review checkpoint
- [ ] User approve

### 3D. Services Overview

- [x] ออกแบบ overview page ใน Paper
- [x] Review checkpoint
- [ ] User approve

### 3E. Service Detail Pages (7 หน้า)

- [x] Website Design page
- [x] Ads page
- [x] SEO page
- [x] Social Media page
- [x] AI Automation page (single page + anchors)
- [x] Video Production page
- [x] Lead Generation page
- [ ] Review checkpoint
- [ ] User approve

### 3F. Portfolio Page

- [x] Portfolio listing
- [x] Portfolio detail page
- [ ] Review checkpoint
- [ ] User approve

### 3G. Blog Page (review)

- [x] Blog listing redesign — **ไม่ต้องออกแบบใหม่ใน Paper** (ใช้ของเดิม + tweak)
- [x] Blog detail redesign — **ไม่ต้องออกแบบใหม่ใน Paper** (ตรง design system แล้ว)
- ดู action items ใน `content-plan/blog/00-review-and-plan.md`

### 3H. Contact Page

- [x] ออกแบบ Contact page
- [x] Review checkpoint
- [ ] User approve

### 3I. Responsive Design

- [ ] Mobile layout ทุกหน้า
- [ ] Tablet layout (ถ้าจำเป็น)

---

## Phase 4: พัฒนาเว็บจริง (Implement)

### 4A. Global / Shared

- [ ] Navbar redesign -- dropdown services menu
- [ ] Footer redesign
- [ ] LINE Floating Button component
- [ ] Button component update (gradient variant)
- [ ] Section Header component (reusable)
- [ ] Card component (reusable)
- [ ] `data/pricing.ts` -- single source of truth
- [ ] `data/services.ts` -- update 7 services
- [ ] `data/team.ts` -- team data

### 4B. Home Page

- [ ] Hero section (sr-only H1 + visual headline)
- [ ] Client Logo Bar
- [ ] Services Preview (4 cards + expand)
- [ ] Case Studies (ข้อมูลจริง)
- [ ] Pricing Hint (3 packages)
- [ ] How We Work (4 steps)
- [ ] Why Us + Testimonials (ข้อมูลจริง)
- [ ] Latest Blog (มีแล้ว -- ปรับ design)
- [ ] Final CTA

### 4C. About Page

- [ ] Company Story
- [ ] Vision / Mission
- [ ] Team Section
- [ ] Stats / Achievements
- [ ] CTA

### 4D. Services

- [ ] Services Overview page
- [ ] Website Design page (redesign)
- [ ] Ads page (ใหม่)
- [ ] SEO page (ใหม่)
- [ ] Social Media page (ใหม่)
- [ ] AI Automation page (redesign -- single page + anchors)
- [ ] Video Production page (ใหม่)
- [ ] Lead Generation page (ใหม่)

### 4E. Cleanup Routes เก่า

- [ ] ลบ `/services/[slug]` dynamic route
- [ ] ลบ `/services/ai-email` (redirect ไป `/services/ai-automation#email`)
- [ ] ลบ `/services/ai-automation/ai-chatbot/`
- [ ] ลบ `/services/ai-automation/ai-email/`
- [ ] ลบ `/services/ai-automation/ai-workflow/`
- [ ] ลบ `/services/ai-automation/ai-document/`
- [ ] Setup redirects ใน `next.config.ts`

### 4F. Portfolio

- [ ] Portfolio listing page
- [ ] Portfolio detail page
- [ ] เชื่อม Supabase data

### 4G. Blog (review)

- [ ] Blog listing -- review/tweak
- [ ] Blog detail -- review/tweak

### 4H. Contact

- [ ] Contact page redesign
- [ ] Contact form เชื่อม Supabase
- [ ] Google Map / Address
- [ ] LINE QR code

### 4I. Thank You Page

- [ ] Thank you page redesign

---

## Phase 5: Review และ Launch

### 5A. SEO Audit

- [ ] Meta tags ทุกหน้า (title, description)
- [ ] Open Graph tags ทุกหน้า
- [ ] JSON-LD structured data (Organization, Service, FAQ, BreadcrumbList)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] AI Search optimization

### 5B. Performance

- [ ] Core Web Vitals (LCP, FID, CLS)
- [ ] Image optimization (next/image, WebP, lazy loading)
- [ ] Bundle size check
- [ ] Lighthouse score target: 90+

### 5C. Accessibility

- [ ] Color contrast (WCAG AA)
- [ ] Keyboard navigation
- [ ] Screen reader test
- [ ] Alt text ทุกรูป
- [ ] Focus indicators

### 5D. Cross-browser Testing

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile iOS
- [ ] Mobile Android

### 5E. Functional Testing

- [ ] Contact form submit
- [ ] Blog listing + detail
- [ ] Portfolio listing + detail
- [ ] Service pages navigation
- [ ] LINE button
- [ ] Admin panel
- [ ] 404 page

### 5F. Analytics

- [ ] Google Analytics
- [ ] Event tracking (CTA clicks, form submissions)
- [ ] Google Search Console

### 5G. Deploy

- [ ] Build success (`npx next build`)
- [ ] Vercel deploy
- [ ] DNS / SSL check
- [ ] Monitor first 48 hours

---

## Resources ที่ต้องเตรียม

### รูปภาพ

- [x] Logo (`Best Solutions Logo.png`)
- [ ] Hero mockup image
- [ ] Client logos จริง (6-10 logos)
- [ ] Case study images
- [ ] Team photos (3-5 คน)
- [ ] Portfolio images
- [ ] Service page images / illustrations
- [ ] OG images สำหรับ social sharing
- [ ] Favicon (BS icon)

### ข้อมูลจริง

- [ ] Case studies -- ชื่อลูกค้า, ตัวเลขผลลัพธ์
- [ ] Testimonials -- 5-6 reviews จริง
- [ ] Pricing -- packages + ราคา ballpark
- [ ] Team info -- ชื่อ, ตำแหน่ง, รูป
- [ ] Company info -- ปีก่อตั้ง, จำนวนลูกค้า
- [ ] FAQ content ทุก service page
- [ ] Contact info -- ที่อยู่, เบอร์, email, LINE ID

---

## ลำดับการทำงาน (Priority)

| Priority | หน้า | เหตุผล |
|---|---|---|
| P0 | Home | หน้าแรก, มี content plan แล้ว |
| P0 | Navbar + Footer | ใช้ทุกหน้า |
| P1 | Services Overview | ลูกค้าต้องเห็นบริการ |
| P1 | Contact | ลูกค้าต้องติดต่อได้ |
| P1 | Website Design detail | บริการหลัก |
| P1 | AI Automation detail | จุดขายหลัก |
| P2 | About | ความน่าเชื่อถือ |
| P2 | Ads, SEO, Social Media details | บริการหลักถัดไป |
| P2 | Portfolio | social proof |
| P3 | Video Production, Lead Generation details | บริการเสริม |
| P3 | Blog redesign | มีอยู่แล้ว ใช้ได้ |
| P3 | Thank You | ไม่ urgent |
