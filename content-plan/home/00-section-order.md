# Home Page — Section Order (Final)
> Approved after multi-agent-brainstorming review (3 เมษายน 2026)

---

## ลำดับ Sections

| # | Section | ไฟล์ | หมายเหตุ |
|---|---|---|---|
| 1 | Hero | 01-hero.md | + sr-only H1 SEO + LINE CTA |
| 2 | Client Logo Bar | 02-client-logos.md | logos จริง grayscale marquee |
| 3 | Services Preview | 03-services-preview.md | แสดง 4 หลัก + ปุ่มดูทั้งหมด |
| 4 | Case Studies | 04-case-studies.md | TODO: ใช้ข้อมูลจริง |
| 5 | Pricing Hint | 07-pricing-hint.md | ย้ายขึ้น — ลูกค้า SME สนราคาก่อน |
| 6 | How We Work | 05-how-we-work.md | เพิ่ม "ปรึกษาฟรี" ใน Step 1 |
| 7 | Why Us + Testimonials | 06-testimonials.md | TODO: ใช้ testimonial จริง |
| 8 | Latest Blog | 09-latest-blog.md | ดึง 3 โพสต์ล่าสุดจาก DB |
| 9 | Final CTA | 10-final-cta.md | gradient bg + LINE CTA |

## ย้ายออกจากหน้า Home
- **Team Section** → ย้ายไปหน้า About (`_moved-to-about-team.md`)

## Global Elements
- **LINE Floating Button** — ลอยมุมขวาล่างตลอดทั้งหน้า
- **Navbar** — logo + 5 nav links + CTA "ปรึกษาฟรี"
- **Footer** — links + contact info + social

## Revisions จาก Multi-Agent Review
1. เพิ่ม sr-only H1 สำหรับ SEO keyword
2. เพิ่ม LINE floating button + LINE CTA ใน Hero/Final CTA
3. ลด Services จาก 7 → 4 cards หลัก + ปุ่มดูทั้งหมด
4. ย้าย Pricing ขึ้นก่อน How We Work
5. เพิ่ม "ปรึกษาฟรี" ใน How We Work Step 1
6. ย้าย Team ไปหน้า About
7. เพิ่ม TODO สำหรับ Case Study + Testimonials ว่าต้องใช้ข้อมูลจริง
8. สร้าง data/pricing.ts เป็น single source of truth สำหรับ pricing
