# CLAUDE.md — Best Solutions Website

## ภาษาที่ใช้สื่อสาร

**สื่อสารและตอบกลับเป็นภาษาไทยเสมอ** ไม่ว่าผู้ใช้จะถามเป็นภาษาอะไรก็ตาม

---

## โครงสร้างโปรเจกต์

```
bestsolutions-website/
├── app/                        # Next.js app (โฟลเดอร์หลัก)
│   ├── src/
│   │   ├── app/               # App Router (Next.js)
│   │   │   ├── page.tsx       # หน้าแรก (Home)
│   │   │   ├── about/         # หน้าเกี่ยวกับเรา
│   │   │   ├── blog/          # บล็อก (list + [slug])
│   │   │   ├── contact/       # หน้าติดต่อ
│   │   │   ├── portfolio/     # ผลงาน (list + [slug])
│   │   │   ├── services/      # บริการ (website-design, ai-automation ฯลฯ)
│   │   │   ├── admin/         # หน้า Admin (blog, portfolio, contacts)
│   │   │   └── landing/       # Landing pages
│   │   ├── components/        # Shared components
│   │   │   ├── layout/        # Navbar, Footer
│   │   │   ├── admin/         # Admin components
│   │   │   ├── portfolio/     # Portfolio components
│   │   │   └── ui/            # UI primitives (button ฯลฯ)
│   │   ├── lib/               # Utilities, Supabase client
│   │   └── data/              # Static data files
│   ├── public/                # Static assets
│   ├── supabase/              # Supabase config/migrations
│   └── scripts/               # Repair/utility scripts
```

---

## Tech Stack

| เทคโนโลยี | เวอร์ชัน |
|---|---|
| Next.js | 16.1.6 (App Router + Turbopack) |
| React | 19.2.3 |
| TypeScript | ^5 |
| Tailwind CSS | v4 |
| Supabase | ^2.96.0 (Database + Auth) |
| Framer Motion | ^12 |
| Tiptap | ^3.20 (Rich Text Editor) |
| Google Generative AI | ^0.24.1 |

---

## คำสั่งสำคัญ

```bash
# รัน dev server (ใช้อันนี้แทน npm run dev เพราะ npm@10.5.0 มี bug)
cd app && npx next dev

# หรือ
cd app && ./node_modules/.bin/next dev

# Build
cd app && npx next build

# Start production
cd app && npx next start
```

> **หมายเหตุ**: `npm run dev` ไม่ทำงานเพราะ npm v10.5.0 มี bug กับ Node v20.12.2
> ใช้ `npx next dev` แทนเสมอ

---

## Database

- ใช้ **Supabase** เป็น backend (PostgreSQL)
- Supabase client อยู่ที่ `src/lib/`
- Migration files อยู่ที่ `supabase/`

---

## Convention ที่ใช้

- **App Router** เท่านั้น (ไม่ใช้ Pages Router)
- **Server Components** เป็น default — ใส่ `"use client"` เมื่อต้องการ interactivity
- ใช้ **TypeScript** ทุกไฟล์
- **Tailwind CSS v4** สำหรับ styling
- ชื่อ component ใช้ **PascalCase**
- ชื่อไฟล์ page/layout ใช้ lowercase ตาม Next.js convention

---

## Git & Repository

- **GitHub**: https://github.com/thanakitpw/bestsolutions-website.git
- **Branch หลัก**: `main`
- อย่า commit ไฟล์ `.env`, `node_modules/`

---

## ปัญหาที่พบบ่อย

### npm run dev ไม่ทำงาน
→ ใช้ `npx next dev` แทน (npm@10.5.0 bug)

### Git crash (exit code 138)
→ มีไฟล์ sparse/corrupted ใน `.git/` ดูรายละเอียดใน memory/MEMORY.md

### node_modules ติด git
→ ใช้ `git rm -r --cached app/node_modules/` แล้วเพิ่ม `**/node_modules` ใน `.gitignore`
