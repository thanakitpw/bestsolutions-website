# Thank You Page — Content Plan
> สร้าง: 5 เมษายน 2026
> Route: `/thank-you` (internal — เข้าได้หลัง submit form สำเร็จเท่านั้น)

---

## วัตถุประสงค์

1. ยืนยันว่าระบบรับข้อความแล้ว (ลดความกังวลลูกค้า)
2. ตั้งความคาดหวัง — บอกขั้นตอนถัดไปให้ชัดเจน
3. Engage ลูกค้าระหว่างรอทีมติดต่อกลับ (LINE, social, blog, portfolio)
4. ลด bounce — ให้ลูกค้ามี next action เสมอ
5. Track conversion ให้ครบ (analytics)

---

## Section Order

| # | Section | Background |
|---|---|---|
| 1 | Hero Confirmation | White + subtle gradient |
| 2 | Next Steps Timeline (3 ขั้น) | Gray-50 |
| 3 | While You Wait (LINE OA + Social) | White |
| 4 | Related Content (context-aware) | Gray-50 |
| 5 | Social Proof Mini | White |
| 6 | Footer | Dark |

---

## 1. SEO

### Meta Robots
```
noindex, nofollow
```
> เหตุผล: หน้า internal ไม่ต้องการให้ Google index กัน direct traffic และกัน duplicate content

### Meta Title
ขอบคุณที่ติดต่อ Best Solutions | ทีมจะติดต่อกลับภายใน 24 ชม.

### Meta Description
ได้รับข้อความของคุณเรียบร้อยแล้ว ทีม Best Solutions จะติดต่อกลับภายใน 24 ชั่วโมง ระหว่างรอสามารถแอด LINE หรือดูผลงานของเรา

### Canonical
ไม่ต้องตั้ง (noindex อยู่แล้ว)

---

## 2. Hero Confirmation

### Visual
- Lucide icon: `CheckCircle2` (ขนาดใหญ่ 96px) สีเขียว `#10b981` หรือ gradient #f51036 → #303092
- Confetti animation เบา ๆ ตอนโหลดหน้า (Framer Motion, 2-3 วินาที)

### Headline (H1)
**ได้รับข้อความของคุณแล้ว ขอบคุณครับ/ค่ะ**

### Subheadline
ทีม Best Solutions จะติดต่อกลับภายใน **24 ชั่วโมง** (ในวันทำการ จ-ศ 9:00-18:00)
หากเร่งด่วน สามารถโทร **095-385-7029** หรือแอด **LINE @bestsolutions** ได้ทันที

### Secondary CTA
- ปุ่ม primary: "แอด LINE ปรึกษาทันที" → ลิงก์ LINE OA
- ปุ่ม ghost: "กลับสู่หน้าแรก" → `/`

---

## 3. Next Steps Timeline (3 ขั้นตอน)

### Section Headline
**ขั้นตอนถัดไปเป็นอย่างไร?**

### Subheadline
เราทำงานอย่างเป็นระบบ คุณจะรู้สถานะทุกขั้นตอน

### Timeline

| # | Step | Icon (Lucide) | Time | Description |
|---|---|---|---|---|
| 1 | ทีมติดต่อกลับ | `PhoneCall` | ภายใน 24 ชม. | ผู้เชี่ยวชาญของเราจะโทร/ส่งข้อความเพื่อยืนยันความต้องการและนัดหมาย |
| 2 | นัดคุยฟรี 30 นาที | `Video` | วันถัดไป | ปรึกษาผ่าน Zoom/Meet หรือที่ออฟฟิศ เพื่อเข้าใจธุรกิจของคุณ |
| 3 | ส่ง Proposal + ใบเสนอราคา | `FileText` | ภายใน 3 วันทำการ | ได้รับ Proposal รายละเอียดบริการ + ราคาที่เหมาะกับคุณ ไม่มีข้อผูกมัด |

### Layout
- Desktop: 3 cards วางแนวนอน มีเส้น connector ระหว่าง icon
- Mobile: Stack แนวตั้ง + vertical line connector

---

## 4. While You Wait

### Section Headline
**ระหว่างรอ ติดตามเราได้ที่นี่**

### 4.1 LINE Official Account (เด่น)
- Card ใหญ่ พื้น gradient #f51036 → #303092
- ซ้าย: QR code LINE OA (รูปจริง)
- ขวา:
  - Headline: "แอด LINE รับข้อมูลก่อนใคร"
  - Sub: "ตอบเร็วกว่าอีเมล + มี promotion พิเศษสำหรับสมาชิก LINE"
  - Button: "เปิด LINE" (deep link `https://line.me/R/ti/p/@bestsolutions`)
  - LINE ID: `@bestsolutions`

### 4.2 Social Media Row
Card เล็ก 4 ช่อง พร้อม Lucide icon + ลิงก์:

| Platform | Icon | Label |
|---|---|---|
| Facebook | `Facebook` | Best Solutions Corp |
| Instagram | `Instagram` | @bestsolutions.co |
| YouTube | `Youtube` | Best Solutions Channel |
| TikTok | `Music2` (placeholder) | @bestsolutions |

> หมายเหตุ: เปิดในแท็บใหม่ (`target="_blank" rel="noopener"`)

---

## 5. Related Content (Context-Aware)

### Logic
อ่าน query param จาก URL (Next.js `useSearchParams`) เพื่อแสดงเนื้อหาที่ตรงกับ interest ของลูกค้า

### Rules

| Query Param | แสดงเนื้อหา |
|---|---|
| `?service=website-design` | 3 blog เกี่ยวกับเว็บ + 3 portfolio หมวดเว็บ |
| `?service=ai-automation` | 3 AI case studies + 2 blog AI |
| `?service=ads` | 3 blog เรื่อง Facebook/Google Ads + 2 ads case study |
| `?service=seo-content` | 3 blog SEO + 2 portfolio SEO |
| `?service=social-media` | 3 blog social + 2 portfolio social |
| `?service=video-production` | 3 video case studies + 2 blog video |
| `?service=lead-generation` | 3 blog lead gen + 2 case study |
| ไม่มี param / `?service=other` | Top 3 blog ล่าสุด + Top 3 portfolio highlighted |
| `?source=line` | เน้น LINE section ให้ใหญ่ขึ้น |
| `?package=starter\|growth\|enterprise` | แสดง badge "แพ็คเกจที่สนใจ: XXX" ที่ hero |

### Section Layout
- Headline: "เนื้อหาที่คุณอาจสนใจ" (หรือ dynamic: "บทความเกี่ยวกับ[บริการ]")
- 2 tabs:
  - Tab 1: บทความ (3 blog cards)
  - Tab 2: ผลงาน (3 portfolio cards)
- แต่ละ card: thumbnail + title + category + ปุ่ม "อ่านต่อ/ดูผลงาน"

### Fallback
ถ้า fetch blog/portfolio ล้มเหลว → แสดง static hardcode 3 อันที่เป็น evergreen

---

## 6. Social Proof Mini

### Section Headline
**ลูกค้ากว่า 50+ แบรนด์ไว้ใจเรา**

### Content
- Testimonial 3 อัน (สั้น 1-2 บรรทัด) แบบ carousel หรือ grid
- ใต้ testimonial: client logo row (6-8 logos grayscale)

### Testimonial ตัวอย่าง

| # | Quote | Client |
|---|---|---|
| 1 | "ทีมงานมืออาชีพ ตอบไว แก้ปัญหาจบในที่เดียว" | คุณสมชาย — เจ้าของร้านค้าออนไลน์ |
| 2 | "ยอดขายเพิ่ม 3 เท่าใน 6 เดือน หลังใช้บริการยิงแอด" | แบรนด์ความงาม ABC |
| 3 | "AI Chatbot ช่วยลดงาน CS ได้ 70% คุ้มมาก" | บริษัทอสังหา XYZ |

### Stats Bar (ใต้ testimonial)
`50+ โปรเจกต์` | `95% พึงพอใจ` | `5+ ปีประสบการณ์`

---

## 7. Analytics Events

ต้อง track ผ่าน GA4 + dataLayer

| Event Name | Trigger | Parameters |
|---|---|---|
| `form_submit_success` | ฟอร์ม contact submit สำเร็จ (fire จากหน้า contact ก่อน redirect) | `service`, `package`, `budget` |
| `thank_you_view` | หน้า `/thank-you` โหลด | `service`, `source`, `package` |
| `line_click` | คลิกปุ่ม LINE OA / QR | `location` (hero/while-you-wait) |
| `social_click` | คลิก social icon | `platform` (fb/ig/yt/tiktok) |
| `blog_click` | คลิก blog card ใน related content | `blog_slug`, `blog_title` |
| `portfolio_click` | คลิก portfolio card | `portfolio_slug`, `category` |
| `phone_click` | คลิกเบอร์โทร | `location` |
| `back_home_click` | คลิกปุ่มกลับหน้าแรก | — |

### Conversion Goal
- GA4 Conversion: `form_submit_success` → ตั้งเป็น primary conversion
- Facebook Pixel: `Lead` event
- Google Ads: Conversion tag firing on `thank_you_view`

---

## 8. Implementation Notes

### Technical Requirements

| Item | Detail |
|---|---|
| Route | `app/src/app/thank-you/page.tsx` |
| Rendering | Client Component (ต้องใช้ `useSearchParams`, Framer Motion, sessionStorage) |
| Metadata | `export const metadata` — set `robots: { index: false, follow: false }` |
| Session check | อ่าน `sessionStorage.getItem('formSubmitted')` ถ้าไม่มี → redirect `/contact` (กัน direct access) |
| Auto scroll top | `window.scrollTo(0, 0)` ตอน mount |
| Confetti | `framer-motion` — particles fly from center, 2-3s, fade out |
| Query params | `useSearchParams()` → decide related content |
| Fallback data | ถ้าไม่มี blog/portfolio ใน Supabase → ใช้ static `data/featured.ts` |

### Session Check Flow
```
1. หน้า /contact submit form สำเร็จ
   → sessionStorage.setItem('formSubmitted', 'true')
   → sessionStorage.setItem('submittedService', service)
   → router.push('/thank-you?service=xxx')
2. หน้า /thank-you mount
   → check sessionStorage.getItem('formSubmitted')
   → ถ้าไม่มี → router.replace('/contact')
   → ถ้ามี → แสดงหน้า + clear flag หลัง 5 วินาที
```

### Accessibility
- H1 ต้องมีแค่ตัวเดียว
- Confetti ต้อง respect `prefers-reduced-motion`
- ปุ่ม LINE / social ต้องมี `aria-label`
- Icon ต้อง decorative (`aria-hidden="true"`)

### Performance
- Lazy load section 4-6 (below the fold)
- Blog/portfolio ดึงจาก Supabase ด้วย `revalidate: 3600`
- Confetti component dynamic import (`next/dynamic`)

### Design Tokens
- สี: gradient #f51036 → #303092 สำหรับ hero accent + LINE card
- Success green: `#10b981` สำหรับ checkmark
- Font: Noto Sans Thai (Thai) + Helvetica (EN)
- ไม่ใช้ emoji — Lucide icons เท่านั้น

---

## 9. Copy ย่อ (Ready to Paste)

```
H1: ได้รับข้อความของคุณแล้ว ขอบคุณครับ/ค่ะ
Sub: ทีม Best Solutions จะติดต่อกลับภายใน 24 ชั่วโมง (จ-ศ 9:00-18:00)
     หากเร่งด่วน โทร 095-385-7029 หรือแอด LINE @bestsolutions

Step 1: ทีมติดต่อกลับ — ภายใน 24 ชม.
Step 2: นัดคุยฟรี 30 นาที — วันถัดไป
Step 3: ส่ง Proposal — ภายใน 3 วันทำการ

LINE CTA: แอด LINE รับข้อมูลก่อนใคร
Footer CTA: กลับสู่หน้าแรก | ดูผลงานทั้งหมด
```

---

## 10. Checklist ก่อน Implement

- [ ] รูป QR code LINE OA (PNG)
- [ ] ลิงก์ social ทั้ง 4 แพลตฟอร์ม
- [ ] Testimonial 3 ประโยคจริง + ชื่อลูกค้า
- [ ] Client logos 6-8 อัน
- [ ] GA4 + FB Pixel IDs
- [ ] `data/featured.ts` สำหรับ fallback
- [ ] ตรวจสอบ `/contact` ให้ set `sessionStorage` ก่อน redirect
