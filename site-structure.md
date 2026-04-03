# Site Structure — bestsolutionscorp.com
> อัปเดต: 3 เมษายน 2026

---

## โครงสร้างหลัก

```
Home (/)
├── About (/about)
├── Services (/services)
│   ├── รับทำเว็บไซต์ (/services/website-design)
│   ├── ยิงแอดโฆษณา (/services/ads)
│   ├── รับทำ SEO (/services/seo-content)
│   ├── ดูแลโซเชียลมีเดีย (/services/social-media)
│   ├── AI Automation (/services/ai-automation)  ← หน้าเดียว มี anchor sections
│   │   ├── #chatbot — ตอบลูกค้าอัตโนมัติ 24/7
│   │   ├── #email — ส่งอีเมลอัจฉริยะ
│   │   ├── #workflow — เชื่อมต่อระบบอัตโนมัติ
│   │   ├── #document — จัดการเอกสารด้วย AI
│   │   └── #pricing — แพ็คเกจราคา
│   ├── Video Production (/services/video-production)
│   └── Lead Generation (/services/lead-generation)
├── Portfolio (/portfolio)
│   └── [slug] (/portfolio/[slug])
├── Blog (/blog)
│   └── [slug] (/blog/[slug])
├── Contact (/contact)
└── Thank You (/thank-you)
```

---

## Admin (Protected — ต้อง login)

```
/admin/login          — หน้า login
/admin                — Dashboard
/admin/blog           — จัดการบทความ (draft/published)
/admin/blog/new       — สร้างบทความใหม่
/admin/blog/[id]/edit — แก้ไขบทความ
/admin/blog/import    — Import จาก .docx
/admin/portfolio/new  — เพิ่มผลงาน
/admin/portfolio/[id]/edit — แก้ไขผลงาน
/admin/contacts       — ดูข้อความจากลูกค้า
```

---

## สรุปบริการ (7 บริการ)

| # | ชื่อบริการ | Route | หมายเหตุ |
|---|---|---|---|
| 1 | รับทำเว็บไซต์ | /services/website-design | มี packages/pricing |
| 2 | ยิงแอดโฆษณา | /services/ads | Facebook, Google, TikTok Ads |
| 3 | รับทำ SEO | /services/seo-content | SEO + Content Marketing |
| 4 | ดูแลโซเชียลมีเดีย | /services/social-media | จัดการ Social Media |
| 5 | AI Automation | /services/ai-automation | รวม Chatbot, Email, Workflow, Document ในหน้าเดียว |
| 6 | Video Production | /services/video-production | ถ่ายวิดีโอ, Reels, TikTok, YouTube |
| 7 | Lead Generation | /services/lead-generation | หาลูกค้าใหม่, B2B Outreach, Sales Funnel |

---

## การเปลี่ยนแปลงจากเว็บเก่า

| เปลี่ยนแปลง | รายละเอียด |
|---|---|
| ลบ Branding | ตัดบริการ branding ออก |
| Production → Video Production | เปลี่ยนชื่อและ scope ให้ชัดเจนขึ้น |
| AI Automation รวมหน้าเดียว | จาก 5 หน้า (1 overview + 4 sub-pages) → 1 หน้า พร้อม anchor sections |
| ลบ /services/ai-email ซ้ำซ้อน | redirect ไป /services/ai-automation#email |
| ลบ /services/[slug] dynamic | ใช้ dedicated pages แทน dynamic route |

---

## Navigation (Navbar)

```
หน้าแรก | เกี่ยวกับเรา | บริการ ▾ | ผลงาน | บทความ | ติดต่อเรา | [ปรึกษาฟรี]
                          │
                          ├── รับทำเว็บไซต์
                          ├── ยิงแอดโฆษณา
                          ├── รับทำ SEO
                          ├── ดูแลโซเชียลมีเดีย
                          ├── AI Automation
                          ├── Video Production
                          └── Lead Generation
```

---

## Design System

- **สี**: Primary Red #f51036 + Primary Blue #303092 + Gradients
- **ฟอนต์**: Noto Sans Thai (ไทย) + Helvetica (อังกฤษ)
- **Tone**: Light (พื้นขาว)
- **Icons**: Lucide React (ห้ามใช้ emoji)
