# Contact Page — Content Plan
> สร้าง: 4 เมษายน 2026

---

## Section Order

| # | Section | Background |
|---|---|---|
| 1 | Hero + Contact Form | White |
| 2 | Contact Info Cards | Gray-50 |
| 3 | FAQ | White |
| 4 | Footer | Dark |

---

## Hero

### Tagline
ติดต่อเรา

### Headline
พร้อมยกระดับธุรกิจของคุณ
ปรึกษาฟรี ไม่มีข้อผูกมัด

### Subheadline
กรอกแบบฟอร์มด้านล่าง หรือติดต่อเราผ่านช่องทางที่สะดวก
ทีมของเราจะติดต่อกลับภายใน 24 ชั่วโมง

---

## Contact Form Fields

| Field | Type | Required |
|---|---|---|
| ชื่อ-นามสกุล | text | Yes |
| อีเมล | email | Yes |
| เบอร์โทร | tel | Yes |
| บริการที่สนใจ | select (7 บริการ + อื่นๆ) | Yes |
| แพ็คเกจ | select (Starter/Growth/Enterprise) | No |
| งบประมาณ | select (range) | No |
| ข้อความเพิ่มเติม | textarea | No |

### หมายเหตุ
- รับ query param: `?service=xxx` → pre-select บริการ
- รับ query param: `?package=xxx` → pre-select แพ็คเกจ
- Submit → บันทึก Supabase + redirect `/thank-you`

---

## Contact Info Cards (3 cards)

### 1. โทรหาเรา
095-385-7029
จันทร์-ศุกร์ 9:00-18:00

### 2. อีเมล
info@bestsolutionscorp.com
ตอบกลับภายใน 24 ชม.

### 3. LINE Official
@bestsolutions
แอดไลน์ปรึกษาฟรี

---

## FAQ (5-6 คำถาม)

1. **ปรึกษาฟรีจริงหรือ?** — ใช่ ปรึกษาฟรีไม่มีค่าใช้จ่ายและไม่มีข้อผูกมัด
2. **จะได้รับการตอบกลับเมื่อไหร่?** — ภายใน 24 ชั่วโมนในวันทำการ
3. **ต้องมีงบขั้นต่ำเท่าไหร่?** — เริ่มต้นที่ 8,000 บาท/เดือน ขึ้นอยู่กับบริการ
4. **ผูกมัดสัญญารายปีไหม?** — ไม่ผูกมัด ยกเลิกได้ตลอดเวลา
5. **รับงานนอกกรุงเทพไหม?** — รับทั่วประเทศ ทำงานผ่าน online ได้

---

## SEO

### Meta Title
ติดต่อเรา | Best Solutions — ปรึกษาฟรี Digital Marketing & AI Automation

### Meta Description
ติดต่อทีม Best Solutions ปรึกษาฟรีไม่มีข้อผูกมัด บริการ Digital Marketing ครบวงจร รับทำเว็บไซต์ ยิงแอด SEO AI Automation โทร 095-385-7029

### Keywords
```typescript
keywords: [
  "ติดต่อเอเจนซี่การตลาด",
  "ปรึกษาการตลาดออนไลน์ฟรี",
  "Best Solutions ติดต่อ",
  "Digital Marketing Agency ติดต่อ"
]
```

---

## Trust Elements (จากรีวิว)
- Stat bar ใต้ปุ่ม submit: "50+ โปรเจกต์ | 95% พึงพอใจ | 5+ ปี"
- PDPA notice: "เราเก็บข้อมูลอย่างปลอดภัยตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล"
- CTA text: "ขอรับคำปรึกษาฟรี" (ไม่ใช่ "ส่งข้อความ")

## Schema Markup (ต้องเพิ่มตอน implement)
- LocalBusiness Schema (ชื่อ, เบอร์, อีเมล, เวลาทำการ)
- FAQPage Schema (5 คำถาม)
- ContactPage Schema

## Layout Notes
- Split layout: Form ซ้าย (60%) + Contact Info ขวา (40%)
- Mobile: stack form ก่อน → cards ด้านล่าง
- LINE ควร highlight เป็น primary channel (QR code)
- เพิ่มฟิลด์ "ชื่อบริษัท/แบรนด์" ตอน implement
