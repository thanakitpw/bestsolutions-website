# User Journey Analysis — Best Solutions Website
> สร้าง: 4 เมษายน 2026

---

## CTA Mapping (ปุ่มทุกตัว → ไปไหน)

### Home Page

| ปุ่ม | URL | หมายเหตุ |
|---|---|---|
| Navbar "ปรึกษาฟรี" | `/contact` | Primary conversion |
| Hero "นัดคุยกับทีมของเรา" | `/contact` | High-intent |
| Hero "ดูบริการทั้งหมด" | `/services` | Discovery |
| Services "ดูรายละเอียด →" | `/services/[slug]` | Per service |
| Services "ดูบริการทั้งหมด" | `/services` | Overview |
| Case Studies "ดูผลงานทั้งหมด" | `/portfolio` | Social proof |
| Case Studies "ปรึกษาฟรี" | `/contact` | Post-trust CTA |
| Pricing "เลือกแพ็คเกจนี้" | `/contact?package=[tier]` | Pre-qualified lead |
| How We Work CTA | `/contact` | Post-process trust |
| Why Us CTA | `/contact` | Post-trust |
| Blog "อ่านบทความทั้งหมด →" | `/blog` | Content nurturing |
| Final CTA "นัดคุยฟรี" | `/contact` | Final push |
| Final CTA "ดูแพ็คเกจบริการ" | `/#pricing` | Compare before decide |

### About Page

| ปุ่ม | URL |
|---|---|
| Team "พูดคุยกับทีมของเรา →" | `/contact` |
| Final CTA "ปรึกษาฟรี" | `/contact` |
| Final CTA "ดูผลงานของเรา" | `/portfolio` |

### Services Overview

| ปุ่ม | URL |
|---|---|
| Cards "ดูรายละเอียด →" | `/services/[slug]` |
| AI "ดูรายละเอียด AI Automation →" | `/services/ai-automation` |
| AI "ขอ Demo AI ฟรี →" | `/contact?service=ai-automation` |
| Final CTA "นัดปรึกษาฟรีทันที" | `/contact` |

---

## User Journey Flows (5 Personas)

### Persona 1: เจ้าของ SME ต้องการเว็บไซต์ใหม่
```
Google "รับทำเว็บไซต์ธุรกิจ" → /services/website-design
  → อ่าน features + pricing
  → /portfolio (ดูผลงานเว็บ)
  → /contact?service=website-design
  → CONVERSION
```
Trigger: Portfolio ที่ตรง industry + ราคาโปร่งใส

### Persona 2: เจ้าของธุรกิจอยากยิงแอดแต่ไม่รู้จะเริ่ม
```
Facebook Ad / Word-of-mouth → / (Home)
  → scroll Hero → Services → คลิก "ดูรายละเอียด" Ads
  → /services/ads → ไม่มั่นใจ → /blog (อ่านบทความ Ads)
  → บทความมี CTA → /contact
  → CONVERSION
```
Trigger: Blog ที่แสดง expertise

### Persona 3: ธุรกิจสนใจ AI Automation
```
Google/LinkedIn "AI automation ธุรกิจ" → /services/ai-automation
  → อ่าน overview → คลิก anchor (#chatbot/#email)
  → "ขอ Demo AI ฟรี →" → /contact?service=ai-automation
  → CONVERSION (high-value lead)
```
Trigger: Use case ที่เฉพาะเจาะจง

### Persona 4: เปรียบเทียบหลายเอเจนซี่
```
Direct URL / Referral → / (Home)
  → /about (ตรวจ credibility)
  → /portfolio (ดูผลงาน)
  → /services (เปรียบเทียบ)
  → /#pricing (ดูราคา)
  → /contact
  → CONVERSION หรือ EXIT (กลับมาทีหลัง)
```
Trigger: About + Pricing ที่โปร่งใส

### Persona 5: เข้ามาจาก Blog/SEO
```
Google Organic → /blog/[slug]
  → อ่านจนจบ → Blog CTA → /services/[related]
  → อ่าน service → /portfolio
  → /contact
  → CONVERSION (nurture path — ช้ากว่า)
```
Trigger: Blog content quality + CTA ในบทความ

---

## Dead Ends & Gaps (จุดที่ต้องแก้)

### CTA ที่ขาดหาย (ต้องเพิ่มตอน implement)

| จุดที่ขาด | CTA ที่ควรเพิ่ม | URL |
|---|---|---|
| About — หลัง Impact Numbers | "ดูว่าเราทำอะไรให้ธุรกิจคุณได้บ้าง" | `/services` |
| Services Hero | scroll CTA หรือปุ่ม | `#services-list` |
| Services "Why Us" | "ปรึกษาฟรีไม่มีข้อผูกมัด" | `/contact` |
| Blog post ท้ายบทความ | "ต้องการความช่วยเหลือ? คุยกับผู้เชี่ยวชาญ" | `/contact?source=blog` |
| Portfolio case study | "สนใจผลลัพธ์แบบนี้? ติดต่อเรา" | `/contact?source=portfolio` |
| /thank-you | "ระหว่างรอ อ่านบทความ" + "ดูผลงาน" | `/blog`, `/portfolio` |
| AI sub-sections | "ขอ demo [Chatbot/Email/Workflow]" | `/contact?service=ai-[type]` |

### Flow ที่ขาดหาย

| ปัญหา | แก้ไข |
|---|---|
| Blog → Service ไม่มี bridge | เพิ่ม "Related Service" widget ท้ายบทความ |
| Portfolio → Contact ไม่ชัด | เพิ่ม CTA "สนใจงานแบบนี้?" ใต้ case study |
| Pricing → Contact ไม่ส่ง context | ส่ง query param `?package=[tier]` |
| /thank-you ไม่มี next step | เพิ่ม timeline + links |

---

## Quick Wins (ทำก่อน launch)

| Action | Impact | Effort |
|---|---|---|
| ใส่ query param ใน Pricing CTA | สูง | ต่ำ |
| เพิ่ม CTA ท้าย blog post | สูง | ต่ำ |
| สร้าง /thank-you ที่มี next steps | กลาง | ต่ำ |
| เพิ่ม CTA หลัง Impact Numbers (About) | สูง | ต่ำ |
| Portfolio case study CTA | สูง | กลาง |
| Blog-to-Service widget | สูง | สูง |

---

## Context-Aware Contact Form

ทุก CTA ควรส่ง query param เพื่อให้ `/contact` แสดงข้อความที่ตรง:
```
/contact?service=website-design    → "สนใจรับทำเว็บไซต์"
/contact?service=ai-automation     → "สนใจ AI Automation"
/contact?package=growth            → "สนใจแพ็คเกจ Growth"
/contact?source=blog&article=xxx   → "มาจากบทความ..."
/contact?source=portfolio          → "สนใจจากผลงาน..."
```
