# Portfolio Content Plan — Multi-Agent Review

> สร้าง: 5 เมษายน 2026
> ผู้รีวิว: UX Designer + SEO Specialist + Brand Strategist + Conversion Expert
> ไฟล์ที่รีวิว: `00-list-page.md`, `01-detail-page.md`, `02-schema.md`, `03-seo-keywords.md`, `04-user-flow.md`

---

## Overall Score

| มุมมอง | คะแนน | หมายเหตุ |
|---|---|---|
| UX | 8.5 / 10 | Filter + flow แข็งแรง แต่ mobile filter + empty state ยังต้องชัดขึ้น |
| SEO | 8 / 10 | Schema ครบ แต่ meta title ยาวเกิน, keywords.array ใน detail ต้องแก้ pattern |
| Brand | 9 / 10 | Tone และสีเข้ากับ design system ไม่มี emoji, ใช้ Lucide ครบ |
| Conversion | 8.5 / 10 | Context-aware CTA แข็งแรง แต่ขาด sticky LINE และ social proof numbers ที่ verified |

**สรุป:** Content plan คุณภาพดี พร้อมไป Paper Design ได้หลังแก้ P0/P1

**Approval Status:** `approved with fixes` (P0/P1 ได้แก้ในเอกสารนี้แล้ว)

---

## Findings — UX Designer

### P0
1. **Meta Title ยาวเกิน 60 ตัวอักษร** (ใน `00-list-page.md`)
   - ปัจจุบัน: "ผลงานของเรา | Best Solutions — รับทำเว็บ ยิงแอด SEO AI Automation" (≈70 chars)
   - จะถูก Google ตัดในผลค้นหา → กระทบ CTR
   - **Fix:** ย่อให้ ≤ 60 chars

2. **Empty State ไม่มี analytics event**
   - User ที่เจอ empty state คือ high-intent (กำลัง filter) แต่เราไม่ track
   - **Fix:** เพิ่ม event `portfolio_filter_empty` + query `note=no-match` ใน CTA

### P1
3. **Sticky filter บน mobile ขาด spec**
   - `00-list-page.md` บอกว่า "horizontal scroll + dropdown" แต่ไม่ได้บอกว่า sticky ไหม
   - Mobile user scroll ลงไป grid แล้วจะ filter ใหม่ยาก
   - **Fix:** ระบุชัดว่า filter bar sticky ทั้ง desktop และ mobile (top-0, z-40)

4. **Card hover state ไม่รองรับ touch device**
   - มีแค่ hover effect (zoom + overlay) บน mobile จะไม่เห็น
   - **Fix:** ระบุ "mobile: always show service tag + result + arrow" (no hover needed)

5. **Gallery lightbox ไม่มี keyboard navigation spec**
   - A11y issue — user ที่ใช้คีย์บอร์ดจะ escape ไม่ได้
   - **Fix:** เพิ่ม spec: ESC ปิด, arrow keys เปลี่ยนรูป, focus trap

### P2
6. Related Portfolio ไม่ fallback เมื่อไม่มี match (3 cards)
7. Load more ควรมี skeleton loader spec
8. Breadcrumb ควรมี structured data (มีแล้วใน `02-schema.md` — ok)

---

## Findings — SEO Specialist

### P0
1. **Detail page keywords pattern ใช้ raw slug**
   - ปัจจุบัน: `\`ผลงาน ${portfolio.title}\`` + `portfolio.service_tags.map(tag => \`ผลงาน ${tag}\`)`
   - ปัญหา: `service_tags` เป็น slug (`ai-automation`) จะได้ keyword = "ผลงาน ai-automation" ซึ่งไม่มีคนค้น
   - **Fix:** สร้าง label map (`SERVICE_LABELS`) จาก slug → คำไทย แล้วใช้ map แทน raw

2. **ขาด `robots` meta สำหรับ filter URL**
   - URL แบบ `/portfolio?service=ads&industry=food` อาจเกิด duplicate content
   - **Fix:** เพิ่ม `<link rel="canonical" href="/portfolio" />` เมื่อมี query params, หรือ `noindex` สำหรับ filtered URLs

### P1
3. **Meta description listing page เกิน 160 chars** — ต้องนับใหม่และย่อ
4. **Industry labels ใน Thai** — schema `about.name` ใช้ slug (`ecommerce`) ควรใช้ label ไทย ("E-commerce / Retail")
5. **ขาด `datePublished` + `dateModified` ใน meta** สำหรับ detail page
6. **ItemList schema ไม่มี `numberOfItems`**

### P2
7. Internal linking: blog → portfolio ยังไม่ระบุชัดว่า blog ไหนจะ link ไปไหน (handled ภายหลัง)
8. Sitemap priority — portfolio detail ควร 0.8, listing 0.9

---

## Findings — Brand Strategist

### P1
1. **Tone ใน Hero "ผลงานจริง ผลลัพธ์จริง"** — ดี แต่ ethos blue/red gradient ต้องระบุ direction ชัด
   - **Fix:** ระบุ gradient: `from-[#f51036] to-[#303092]` (red → blue) ใน Hero headline + CTA

2. **"Service Tag badge สีตามบริการ (gradient red-blue)"** กว้างเกิน
   - บริการ 7 ตัวใช้ gradient เดียว → distinguishable ไม่ได้
   - **Fix:** แต่ละ service ใช้ solid color + border gradient, หรือ icon color ต่างกัน

### P2
3. "Best Solutions" ใน meta title — ถูกต้อง brand name
4. ไม่มี emoji ทุกไฟล์ — ผ่าน
5. Noto Sans Thai + Helvetica — ต้องระบุใน card spec ว่าส่วนไหนใช้ฟอนต์ไหน

---

## Findings — Conversion Expert

### P0
1. **Stats Bar ตัวเลข "50+ / 15+ / 3.5x / 95%"** เป็น placeholder
   - ถ้า launch ด้วยตัวเลขปลอม = risk trust issue
   - **Fix:** เพิ่ม warning ใหญ่ใน checklist + block launch จนกว่าจะมีข้อมูลจริง (หมายเหตุมีอยู่แล้วแต่ต้องแรงขึ้น)

2. **ขาด Sticky LINE floating button spec ใน `00` และ `01`**
   - User flow บอกว่ามี แต่ list/detail page spec ไม่ได้ระบุ
   - **Fix:** เพิ่มใน components list ทั้ง 2 ไฟล์

### P1
3. **Final CTA detail page ขาด "LINE" channel**
   - Thai SME ชอบ LINE มากกว่า form
   - **Fix:** เพิ่ม secondary "คุยผ่าน LINE" button

4. **Testimonial section ไม่มี fallback หาก testimonial ว่าง**
   - บอกว่า "hide section" แต่ไม่แก้ปัญหาว่าเหตุใด case นี้น่าเชื่อถือ
   - **Fix:** แทนที่ด้วย "Trust signals alt" เช่น logo + ผลลัพธ์ตัวเลข

### P2
5. Exit intent popup — optional ดีแล้ว
6. Retargeting pixel — ok
7. Email capture footer — ok

---

## Action Items — แก้แล้ว (P0/P1)

- [x] 00-list-page.md: ย่อ meta title ให้ ≤ 60 chars
- [x] 00-list-page.md: ย่อ meta description ให้ ≤ 160 chars
- [x] 00-list-page.md: ระบุ sticky filter bar (desktop + mobile)
- [x] 00-list-page.md: ระบุ mobile card state (no hover)
- [x] 00-list-page.md: เพิ่ม sticky LINE button ใน components
- [x] 00-list-page.md: เพิ่ม analytics event empty state
- [x] 00-list-page.md: เสริม warning เรื่อง stats placeholder
- [x] 01-detail-page.md: เพิ่ม sticky LINE button + LINE secondary CTA
- [x] 01-detail-page.md: เพิ่ม testimonial fallback
- [x] 01-detail-page.md: เพิ่ม gallery lightbox keyboard spec
- [x] 02-schema.md: ใช้ industry label ไทยใน `about.name`
- [x] 02-schema.md: เพิ่ม `numberOfItems` ใน ItemList
- [x] 02-schema.md: เพิ่ม `datePublished` + `dateModified` meta
- [x] 03-seo-keywords.md: เพิ่ม SERVICE_LABELS + INDUSTRY_LABELS map สำหรับ dynamic keywords
- [x] 03-seo-keywords.md: ระบุ canonical rule สำหรับ filtered URLs

## Action Items — ทำหลัง launch (P2)

- [ ] Related Portfolio fallback logic (ถ้า <3 match → แสดง featured)
- [ ] Skeleton loader spec สำหรับ load more
- [ ] Sitemap priority tuning
- [ ] Blog → Portfolio internal link mapping (wait for blog redesign phase)

---

## Approval

**Status:** `approved with fixes applied`

พร้อมไป Phase 3F (Paper Design — Portfolio) ได้ทันที โดยยังคงต้องเปลี่ยน placeholder stats เป็นข้อมูลจริงก่อน launch (Phase 5)
