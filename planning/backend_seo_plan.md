# แผนการพัฒนาระบบหลังบ้านและ SEO (Implementation Plan)

## เป้าหมาย (Goal)
พัฒนาระบบจัดการข้อมูลบทความ (Articles) และผลงาน (Portfolio) โดยใช้ **Supabase** เป็นฐานข้อมูล และเชื่อมต่อกับ **Next.js** เพื่อแสดงผลหน้าเว็บที่รองรับ **SEO** สมบูรณ์ พร้อมระบบ **Automation** ดึงบทความจาก Google Docs

## Phase 1: Database & Backend
### 1.1 Database Schema (Supabase)
สร้างตารางใน Supabase:
- `articles`: id, title, slug, content (html), excerpt, cover_image, seo_title, seo_description, original_google_doc_id, published_at
- `portfolios`: id, title, slug, content, gallery (jsonb), client_name, seo_title, seo_description

### 1.2 Backend Services
- `src/lib/supabase.ts`: ตั้งค่า Client
- `src/services/articleService.ts`: ฟังก์ชันดึงบทความ (get all, get by slug)

## Phase 2: Frontend (Next.js)
- แสดงผลบทความและผลงานโดยใช้ Tailwind CSS
- หน้า `/blog` และ `/blog/[slug]`
- หน้า `/portfolio` และ `/portfolio/[slug]`

## Phase 3: SEO
- **Dynamic Metadata**: Title, Description, OpenGraph
- **JSON-LD**: Article Schema, CreativeWork Schema
- **Sitemap**: สร้าง sitemap.xml อัตโนมัติ

## Phase 4: Automation (n8n)
1.  **Google Docs Watcher**: ตรวจจับการเปลี่ยนแปลงหรือรับ Webhook
2.  **AI Processing**:
    -   จัด Heading (H1-H3)
    -   Generate SEO Title/Description
3.  **Supabase Insert**: บันทึกลงฐานข้อมูล
