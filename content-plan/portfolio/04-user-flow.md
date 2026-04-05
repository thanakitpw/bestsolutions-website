# Portfolio — User Flow

> สร้าง: 5 เมษายน 2026

---

## Entry Points (ผู้ใช้มาจากไหน?)

| Source | URL Pattern | Intent |
|---|---|---|
| Home "ดูผลงานทั้งหมด" | `/portfolio` | Social proof |
| Services detail "ดูผลงาน" | `/portfolio?service=xxx` | ดูผลงานเฉพาะบริการ |
| Blog CTA ท้ายบทความ | `/portfolio?source=blog` | Nurture |
| Google organic | `/portfolio` หรือ `/portfolio/[slug]` | Research |
| About page "ดูผลงานของเรา" | `/portfolio` | Trust check |
| Direct/Referral | `/portfolio` | - |

---

## Main User Flow

```
[Entry]
  ↓
/portfolio (Listing)
  ↓
Filter by Service or Industry
  ↓ (update URL query)
  ↓
คลิก card ที่สนใจ
  ↓
/portfolio/[slug] (Detail)
  ↓
อ่าน Challenge → Solution → Results
  ↓
[Decision Point]
  ├─ สนใจ → Final CTA → /contact?source=portfolio&service=xxx → CONVERSION
  ├─ อยากดูเพิ่ม → Related Portfolio → /portfolio/[other-slug] (loop)
  ├─ อยากรู้บริการ → Solution Section → /services/[slug]
  └─ ยังไม่พร้อม → EXIT (retarget ผ่าน ad/email)
```

---

## 5 Personas Flow

### Persona 1: SME หาเอเจนซี่ (เปรียบเทียบ)
```
Google "ผลงาน digital marketing agency"
  → /portfolio
  → Filter: อุตสาหกรรมของตัวเอง
  → คลิก 2-3 cases → อ่าน Results
  → /contact?source=portfolio
```
Trigger: ตัวเลขผลลัพธ์ + industry match

### Persona 2: มาจาก Service Detail
```
/services/ads → scroll → "ดูผลงาน Ads ที่เราทำ"
  → /portfolio?service=ads (pre-filtered)
  → คลิก case ที่น่าสนใจ
  → /portfolio/[slug]
  → Final CTA → /contact?source=portfolio&service=ads
```
Trigger: ต่อจาก service page อย่างไร้รอยต่อ

### Persona 3: มาจาก Blog
```
/blog/[slug] (บทความ Ads)
  → CTA "ดูผลงาน Ads จริง" → /portfolio?service=ads
  → /portfolio/[slug]
  → /contact?source=blog
```
Trigger: content-to-proof bridge

### Persona 4: มาจาก Home
```
/ → Case Studies section → "ดูผลงานทั้งหมด"
  → /portfolio
  → Browse โดยไม่ filter
  → คลิก card แรก ๆ
  → /portfolio/[slug]
  → Related Portfolio → อีก case
  → /contact
```
Trigger: visual discovery

### Persona 5: มาจาก Google (ค้น case study)
```
Google "case study เพิ่มยอดขาย 200%"
  → /portfolio/[slug] (direct)
  → อ่านทั้งหน้า
  → Related Portfolio → /portfolio/[other]
  → หรือ /contact?source=portfolio
```
Trigger: organic SEO + structured data

---

## Dead Ends และ Mitigation

| Dead End | ปัญหา | Mitigation |
|---|---|---|
| Filter ไม่เจอผลงาน | User filter อุตสาหกรรมที่ไม่มี → empty state | Empty state + CTA "ติดต่อเราดูผลงานเพิ่ม" + "ดูผลงานทั้งหมด" |
| Detail page จบแล้วไม่ทำอะไรต่อ | User scroll ถึงท้าย → ไม่มี next step | Related Portfolio + Final CTA + Sticky floating LINE |
| ไม่มี testimonial ในบาง case | ดูไม่น่าเชื่อถือ | แสดงผลลัพธ์ตัวเลขชัด + logo ลูกค้า + hide section testimonial ถ้าไม่มี |
| กลัวว่าจะติดต่อแล้วโดนขาย | Friction สูง | CTA copy: "ปรึกษาฟรี ไม่มีข้อผูกมัด" + PDPA notice |
| Gallery รูปโหลดช้า | UX แย่ | next/image + blur placeholder + lazy load |
| Listing โหลดเยอะ | Scroll fatigue | Pagination / load more ทุก 9 รายการ |
| Mobile filter ใช้ยาก | Touch target เล็ก | Horizontal scroll tabs + dropdown industry |

---

## Context-Aware CTA Matrix

| From | To | Query Params |
|---|---|---|
| Listing Final CTA (no filter) | /contact | `?source=portfolio` |
| Listing Final CTA (filtered) | /contact | `?source=portfolio&service={tag}` |
| Detail Final CTA | /contact | `?source=portfolio&service={primary_tag}&ref={slug}` |
| Detail Solution → Service | /services/[slug] | — |
| Related Portfolio | /portfolio/[slug] | — |
| Empty State CTA | /contact | `?source=portfolio&note=no-match` |

---

## Conversion Optimization Checklist

- [ ] Sticky LINE floating button (ทุกหน้า portfolio)
- [ ] Sticky filter bar บน listing (desktop)
- [ ] ตัวเลขผลลัพธ์อยู่ above the fold ใน detail
- [ ] Service tags คลิกได้ทุกที่ (listing card + detail hero)
- [ ] Breadcrumb + Related ช่วยให้ไม่มี dead end
- [ ] Final CTA ทุกหน้าส่ง query param
- [ ] Analytics event: `portfolio_view`, `portfolio_filter`, `portfolio_cta_click`

---

## Exit Intent / Retargeting Hook

- Exit popup (optional): "รอก่อน! รับ checklist ฟรี วิธีเลือก agency"
- Retarget pixel: ทุกคนที่เข้า `/portfolio/*`
- Email capture ใน footer: "รับ case study ใหม่ทุกเดือน"
