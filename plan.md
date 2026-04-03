# AI Email Automation System — Project Plan
**Client:** B2B Industrial Machinery & Equipment Business  
**Developed by:** Best Solutions Corp (bestsolutionscorp.com)  
**Updated:** February 2026  
**Architecture:** No n8n — built-in system (SaaS-ready)

---

## Overview

ระบบ AI ตอบอีเมลอัตโนมัติสำหรับธุรกิจ B2B เครื่องจักร โดยใช้ RAG (Retrieval-Augmented Generation)
ค้นหาข้อมูลสินค้าที่ถูกต้องก่อนสร้างคำตอบ มี Admin Panel จัดการหลังบ้านครบวงจร
ออกแบบให้รองรับ Multi-tenant SaaS ตั้งแต่แรก

---

## Architecture

```
[Gmail Inbox]
     │
     ▼  (node-cron poll ทุก 5 นาที — ไม่ใช้ n8n)
[Email Processor — Node.js]
  - Language detection (TH/EN)
  - Intent classification
     │
     ▼
[RAG Engine]
  - Embed email query → pgvector search
  - ดึงสินค้าที่ match top 3-5
     │
     ▼
[Prompt Builder]
  - System Prompt (บริษัท + กฎ)    ← Admin ตั้งค่าได้
  - Product Context                 ← RAG ดึงมาอัตโนมัติ
  - Customer Email                  ← อีเมลที่รับมา
     │
     ▼
[Claude AI via OpenRouter — Direct HTTP]
  - temperature: 0.3
  - Confidence scoring
     │
     ├── score ≥ 0.7 → Draft พร้อม review
     └── score < 0.7 → Line Notify แจ้ง admin
     │
     ▼
[Admin Panel — React]
  - ดู draft, แก้ไข, Approve → Gmail API ส่ง
```

---

## Tech Stack

| Layer | Technology | หมายเหตุ |
|---|---|---|
| Frontend | React + TypeScript + Tailwind | Admin panel |
| Backend | Node.js + Express | API server |
| Database | PostgreSQL + pgvector | สินค้า + embeddings |
| AI | Claude 3.5 Sonnet via OpenRouter | Direct HTTP call |
| Embeddings | text-embedding-3-small | via OpenRouter |
| Scheduler | node-cron | แทน n8n — poll Gmail |
| Email | Gmail API (OAuth2) | Read + Send |
| Notifications | Line Notify | แจ้งเตือน admin |
| Hosting | Railway | Backend + DB |
| Frontend Host | Vercel | React app |

---

## วิธีให้ข้อมูลกับ AI (3 ช่องทาง)

### ช่องทางที่ 1 — System Prompt (ข้อมูลคงที่)

ตั้งค่าครั้งเดียว ใช้ทุก request — แก้ไขได้ใน Admin → AI Settings

```
คุณคือผู้ช่วยตอบอีเมลของบริษัท [ชื่อบริษัท]
กฎ:
1. ตอบได้เฉพาะข้อมูลที่อยู่ใน PRODUCT CONTEXT เท่านั้น
2. ถ้าไม่มีข้อมูล ให้ตอบว่า "ขอให้ทีมงานติดต่อกลับ"
3. ตอบภาษาเดียวกับลูกค้า (ไทย หรือ อังกฤษ)
4. ห้ามแต่งราคา spec หรือข้อมูลที่ไม่มีในระบบ
5. สุภาพ เป็นทางการ กระชับ
```

### ช่องทางที่ 2 — RAG / Product Database (หัวใจหลัก)

Admin เพิ่มข้อมูลสินค้าได้ 3 วิธี:

| วิธี | เหมาะกับ | เวลา |
|---|---|---|
| **A. กรอกฟอร์ม** | สินค้าใหม่ทีละรายการ | 5 นาที/รายการ |
| **B. Upload PDF** | มี catalog/spec sheet อยู่แล้ว | 1 นาที/ไฟล์ |
| **C. Import CSV** | สินค้าจำนวนมาก (100+ SKU) | 5 นาที/ทั้งหมด |

Flow หลังจาก save ข้อมูลสินค้า:
```
บันทึกข้อมูล → ระบบ embed อัตโนมัติ → เก็บใน pgvector → พร้อมใช้งาน
```

### ช่องทางที่ 3 — Email Context (อัตโนมัติ)

ระบบประกอบ prompt สมบูรณ์ก่อนส่ง AI ทุกครั้ง:
```javascript
const fullPrompt = {
  system: systemPrompt,           // ช่องทาง 1 — กฎ + บริษัท
  context: retrievedProducts,     // ช่องทาง 2 — RAG ดึงสินค้ามา
  user: customerEmailContent      // ช่องทาง 3 — อีเมลลูกค้า
}
```

---

## Database Schema

```sql
-- Multi-tenant support
CREATE TABLE tenants (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                 VARCHAR(255) NOT NULL,
  slug                 VARCHAR(100) UNIQUE NOT NULL,
  plan                 VARCHAR(50) DEFAULT 'starter',
  system_prompt        TEXT,
  confidence_threshold DECIMAL(3,2) DEFAULT 0.70,
  created_at           TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE products (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id      UUID REFERENCES tenants(id) ON DELETE CASCADE,
  name           VARCHAR(255) NOT NULL,
  name_en        VARCHAR(255),
  sku            VARCHAR(100) NOT NULL,
  category       VARCHAR(100),
  description    TEXT,
  description_en TEXT,
  specs          JSONB,
  price_range    VARCHAR(100),
  is_active      BOOLEAN DEFAULT true,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tenant_id, sku)
);

-- Product embeddings (RAG)
CREATE TABLE product_embeddings (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  content    TEXT,
  embedding  vector(1536),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Spec sheets
CREATE TABLE spec_sheets (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id     UUID REFERENCES products(id) ON DELETE CASCADE,
  filename       VARCHAR(255),
  extracted_text TEXT,
  file_url       VARCHAR(500),
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- Email logs
CREATE TABLE email_logs (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id        UUID REFERENCES tenants(id) ON DELETE CASCADE,
  gmail_message_id VARCHAR(255),
  sender_email     VARCHAR(255),
  sender_name      VARCHAR(255),
  subject          VARCHAR(500),
  body_text        TEXT,
  language         VARCHAR(10),
  intent           VARCHAR(100),
  ai_draft         TEXT,
  confidence_score DECIMAL(3,2),
  matched_products JSONB,
  status           VARCHAR(50) DEFAULT 'pending',
  reviewed_by      VARCHAR(255),
  sent_at          TIMESTAMPTZ,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX ON product_embeddings USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX ON email_logs(tenant_id, status);
CREATE INDEX ON email_logs(created_at DESC);
CREATE INDEX ON products(tenant_id, is_active);
```

---

## API Endpoints

### Products
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/products | List products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Soft delete |
| POST | /api/products/:id/upload-spec | Upload PDF |
| POST | /api/products/:id/embed | Re-embed |
| POST | /api/products/import-csv | Bulk import |

### Emails
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/emails | List emails + filter |
| GET | /api/emails/:id | Email + AI draft |
| PUT | /api/emails/:id/draft | Edit draft |
| POST | /api/emails/:id/approve | Approve & send |
| POST | /api/emails/:id/reject | Reject |

### AI
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/ai/search | RAG search test |
| POST | /api/ai/generate | Generate reply test |
| GET | /api/ai/settings | Get system prompt |
| PUT | /api/ai/settings | Update system prompt |

### Analytics
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/analytics/summary | Dashboard stats |
| GET | /api/analytics/emails | Email volume chart |
| GET | /api/analytics/products | Top asked products |

---

## Admin Panel Screens

| Screen | หน้าที่ |
|---|---|
| Dashboard | ภาพรวม stats + recent activity |
| Email Inbox | รับ-ตรวจสอบ-approve อีเมล |
| Product Catalog | จัดการรายการสินค้า |
| Product Form | เพิ่ม/แก้ไขสินค้า + PDF upload |
| AI Settings | แก้ system prompt + confidence threshold |
| Analytics | charts + insights |

---

## File Structure

```
ai-email-automation/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── products.routes.js
│   │   │   ├── emails.routes.js
│   │   │   ├── ai.routes.js
│   │   │   └── analytics.routes.js
│   │   ├── services/
│   │   │   ├── ai.service.js         ← OpenRouter + prompt builder
│   │   │   ├── rag.service.js        ← pgvector search
│   │   │   ├── embedding.service.js  ← generate & store embeddings
│   │   │   ├── gmail.service.js      ← read + send email
│   │   │   ├── pdf.service.js        ← extract text from PDF
│   │   │   └── notify.service.js     ← Line Notify
│   │   ├── jobs/
│   │   │   └── gmail.poller.js       ← node-cron every 5 min
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   ├── db/
│   │   │   ├── schema.sql
│   │   │   └── index.js
│   │   └── app.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── EmailInbox.tsx
│   │   │   ├── ProductCatalog.tsx
│   │   │   ├── ProductForm.tsx
│   │   │   ├── AISettings.tsx
│   │   │   └── Analytics.tsx
│   │   ├── components/
│   │   │   ├── EmailCard.tsx
│   │   │   ├── AIDraftPanel.tsx
│   │   │   ├── ConfidenceBadge.tsx
│   │   │   ├── ProductTable.tsx
│   │   │   └── SpecsEditor.tsx
│   │   └── App.tsx
│   └── package.json
│
└── README.md
```

---

## Environment Variables

```env
DATABASE_URL=postgresql://user:pass@host:5432/ai_email_db
OPENROUTER_API_KEY=sk-or-...
GMAIL_CLIENT_ID=...
GMAIL_CLIENT_SECRET=...
GMAIL_REFRESH_TOKEN=...
LINE_NOTIFY_TOKEN=...
PORT=3001
NODE_ENV=production
CONFIDENCE_THRESHOLD=0.70
POLL_INTERVAL_MINUTES=5
```

---

## Token Cost (Production)

| Usage | Tokens | Cost |
|---|---|---|
| Input per email | ~1,500 | ~$0.0045 |
| Output per email | ~500 | ~$0.0075 |
| **รวมต่ออีเมล** | ~2,000 | **~0.43 บาท** |
| 100 emails/month | 200,000 | **~43 บาท** |

---

## Task Breakdown (แบ่งย่อยทุก task)

---

### 🟦 Phase 0 — Presentation Demo
> เป้าหมาย: มีหน้าตาโปรแกรมใส่ใน presentation ได้ทันที ไม่ต้องรอ build จริง

- [ ] **P0-1** สร้าง Static HTML demo — Dashboard screen
- [ ] **P0-2** สร้าง Static HTML demo — Email Inbox + AI Draft panel
- [ ] **P0-3** สร้าง Static HTML demo — Product Catalog screen
- [ ] **P0-4** สร้าง Static HTML demo — AI Settings screen
- [ ] **P0-5** เพิ่ม mock data สินค้าเครื่องจักรจำลอง (5-10 รายการ)
- [ ] **P0-6** เพิ่ม mock email + AI draft ตัวอย่าง (3 รายการ)
- [ ] **P0-7** Screenshot ทุก screen ใส่ PowerPoint presentation

---

### 🟩 Phase 1 — Foundation (สัปดาห์ที่ 1-2)
> เป้าหมาย: Project setup + จัดการสินค้าได้ครบ

**1.1 Project Setup**
- [ ] **1.1-1** สร้าง repo + โครงสร้าง folder (backend + frontend)
- [ ] **1.1-2** ติดตั้ง dependencies backend (express, pg, dotenv, cors)
- [ ] **1.1-3** ติดตั้ง dependencies frontend (react, typescript, tailwind, axios)
- [ ] **1.1-4** ตั้งค่า .env + .env.example
- [ ] **1.1-5** สร้าง PostgreSQL database + enable pgvector extension

**1.2 Database**
- [ ] **1.2-1** สร้าง table: tenants
- [ ] **1.2-2** สร้าง table: products
- [ ] **1.2-3** สร้าง table: product_embeddings
- [ ] **1.2-4** สร้าง table: spec_sheets
- [ ] **1.2-5** สร้าง table: email_logs
- [ ] **1.2-6** สร้าง indexes ทั้งหมด
- [ ] **1.2-7** เขียน seed data สินค้าตัวอย่าง 5 รายการ

**1.3 Product API**
- [ ] **1.3-1** GET /api/products — list + filter + pagination
- [ ] **1.3-2** GET /api/products/:id — get single product
- [ ] **1.3-3** POST /api/products — create product
- [ ] **1.3-4** PUT /api/products/:id — update product
- [ ] **1.3-5** DELETE /api/products/:id — soft delete (is_active = false)
- [ ] **1.3-6** POST /api/products/import-csv — bulk import

**1.4 PDF Service**
- [ ] **1.4-1** ติดตั้ง pdf-parse library
- [ ] **1.4-2** POST /api/products/:id/upload-spec — รับไฟล์ PDF
- [ ] **1.4-3** extract text จาก PDF → บันทึกใน spec_sheets
- [ ] **1.4-4** parse ข้อมูล spec จาก text → เพิ่มใน product.specs (JSONB)

**1.5 Frontend — Layout & Navigation**
- [ ] **1.5-1** สร้าง sidebar navigation (Dashboard, Emails, Products, Analytics, Settings)
- [ ] **1.5-2** สร้าง layout component (sidebar + main content area)
- [ ] **1.5-3** ตั้งค่า React Router (6 routes)
- [ ] **1.5-4** สร้าง API client (axios instance + base URL)

**1.6 Frontend — Product Management**
- [ ] **1.6-1** ProductCatalog page — table แสดงสินค้าทั้งหมด
- [ ] **1.6-2** เพิ่ม search + filter by category
- [ ] **1.6-3** ปุ่ม Add / Edit / Delete
- [ ] **1.6-4** ProductForm page — ฟอร์มเพิ่ม/แก้ไขสินค้า
- [ ] **1.6-5** SpecsEditor component — key-value pairs สำหรับ specs
- [ ] **1.6-6** PDF upload section + แสดง extracted text preview
- [ ] **1.6-7** Import CSV button + modal อธิบาย format

---

### 🟨 Phase 2 — RAG Engine (สัปดาห์ที่ 2-3)
> เป้าหมาย: AI ค้นหาสินค้าและตอบอีเมลได้ถูกต้อง

**2.1 Embedding Service**
- [ ] **2.1-1** เชื่อมต่อ OpenRouter สำหรับ embeddings
- [ ] **2.1-2** function: textToEmbedding(text) → vector[1536]
- [ ] **2.1-3** function: embedProduct(productId) → บันทึกใน product_embeddings
- [ ] **2.1-4** function: embedAllProducts() → batch process ทั้งหมด
- [ ] **2.1-5** POST /api/products/:id/embed — trigger re-embed
- [ ] **2.1-6** auto-embed เมื่อ save product ใหม่หรืออัปเดต

**2.2 RAG Search**
- [ ] **2.2-1** function: searchProducts(query, tenantId) → top 5 products
- [ ] **2.2-2** pgvector cosine similarity query
- [ ] **2.2-3** filter เฉพาะ is_active = true + tenant_id ถูกต้อง
- [ ] **2.2-4** format ผลลัพธ์เป็น product context string
- [ ] **2.2-5** POST /api/ai/search — test endpoint สำหรับ debug

**2.3 Prompt Builder**
- [ ] **2.3-1** function: buildSystemPrompt(tenant) → string
- [ ] **2.3-2** function: buildProductContext(products) → formatted string
- [ ] **2.3-3** function: buildFullPrompt(email, products, tenant) → messages[]
- [ ] **2.3-4** language detection (TH/EN) จาก email content

**2.4 AI Service**
- [ ] **2.4-1** เชื่อมต่อ OpenRouter API (direct HTTP)
- [ ] **2.4-2** function: generateReply(email, tenantId) → { reply, confidence }
- [ ] **2.4-3** confidence scoring logic
- [ ] **2.4-4** retry logic (max 3 attempts + exponential backoff)
- [ ] **2.4-5** POST /api/ai/generate — manual trigger สำหรับ test

**2.5 AI Settings**
- [ ] **2.5-1** GET /api/ai/settings — ดึง system prompt + threshold
- [ ] **2.5-2** PUT /api/ai/settings — อัปเดต system prompt + threshold
- [ ] **2.5-3** Frontend: AISettings page — textarea แก้ system prompt
- [ ] **2.5-4** Frontend: confidence threshold slider (0.5 – 0.9)
- [ ] **2.5-5** Frontend: ปุ่ม "Test Prompt" — ทดสอบด้วย email จำลอง

---

### 🟧 Phase 3 — Email Automation (สัปดาห์ที่ 3-4)
> เป้าหมาย: รับอีเมลอัตโนมัติ → สร้าง draft → admin approve → ส่ง

**3.1 Gmail Service**
- [ ] **3.1-1** ตั้งค่า Gmail OAuth2 credentials ใน Google Cloud Console
- [ ] **3.1-2** function: getAccessToken() → refresh token flow
- [ ] **3.1-3** function: fetchUnreadEmails() → emails[]
- [ ] **3.1-4** function: markAsRead(messageId)
- [ ] **3.1-5** function: sendReply(to, subject, body, threadId)
- [ ] **3.1-6** parse email body (รองรับ plain text + HTML)

**3.2 Gmail Poller (แทน n8n)**
- [ ] **3.2-1** ติดตั้ง node-cron
- [ ] **3.2-2** สร้าง gmail.poller.js — cron job ทุก 5 นาที
- [ ] **3.2-3** deduplication — เช็ค gmail_message_id ก่อน process
- [ ] **3.2-4** เรียก AI generate → บันทึกใน email_logs
- [ ] **3.2-5** ถ้า confidence < threshold → เรียก Line Notify

**3.3 Line Notify**
- [ ] **3.3-1** สมัคร Line Notify token
- [ ] **3.3-2** function: sendLineNotify(message)
- [ ] **3.3-3** แจ้งเตือน: "มีอีเมลใหม่รอ review จาก [sender] — confidence: [score]"

**3.4 Email API**
- [ ] **3.4-1** GET /api/emails — list พร้อม filter by status
- [ ] **3.4-2** GET /api/emails/:id — email detail + AI draft + matched products
- [ ] **3.4-3** PUT /api/emails/:id/draft — แก้ไข draft ก่อน approve
- [ ] **3.4-4** POST /api/emails/:id/approve — approve + ส่งผ่าน Gmail API
- [ ] **3.4-5** POST /api/emails/:id/reject — reject + บันทึกเหตุผล

**3.5 Frontend — Email Inbox**
- [ ] **3.5-1** EmailInbox page — 2 column layout (email list + detail panel)
- [ ] **3.5-2** Email list: sender, subject, date, status badge, confidence score
- [ ] **3.5-3** Status badge: pending (เหลือง) / approved (เขียว) / rejected (แดง) / sent (น้ำเงิน)
- [ ] **3.5-4** Email detail panel: แสดงอีเมลต้นฉบับ
- [ ] **3.5-5** AI Draft panel: แสดง draft พร้อม confidence indicator
- [ ] **3.5-6** ConfidenceBadge component (🟢 ≥0.8, 🟡 0.6–0.8, 🔴 <0.6)
- [ ] **3.5-7** Matched products panel: แสดงสินค้าที่ RAG ดึงมา
- [ ] **3.5-8** Edit draft textarea + Approve button + Reject button
- [ ] **3.5-9** Toast notification หลัง approve/reject
- [ ] **3.5-10** Badge count (pending) ใน sidebar — อัปเดต real-time

---

### 🟥 Phase 4 — Polish & Deploy (สัปดาห์ที่ 5-6)
> เป้าหมาย: ระบบสมบูรณ์ พร้อม production

**4.1 Dashboard**
- [ ] **4.1-1** GET /api/analytics/summary — stats รายเดือน
- [ ] **4.1-2** GET /api/analytics/emails — email volume 30 วัน
- [ ] **4.1-3** GET /api/analytics/products — top products ที่ถูกถามบ่อย
- [ ] **4.1-4** Stat cards: total emails, pending review, avg response time, AI success rate
- [ ] **4.1-5** Email volume line chart (recharts)
- [ ] **4.1-6** Top products bar chart (recharts)
- [ ] **4.1-7** Recent activity feed (10 รายการล่าสุด)

**4.2 Error Handling & Reliability**
- [ ] **4.2-1** Global error handler middleware (backend)
- [ ] **4.2-2** Retry + exponential backoff สำหรับ OpenRouter API
- [ ] **4.2-3** Retry สำหรับ Gmail API
- [ ] **4.2-4** Error logging
- [ ] **4.2-5** Frontend error boundary + toast สำหรับ API errors
- [ ] **4.2-6** Graceful shutdown (ปิด cron ก่อน server stop)

**4.3 Security**
- [ ] **4.3-1** JWT authentication
- [ ] **4.3-2** Auth middleware ป้องกันทุก endpoint
- [ ] **4.3-3** Rate limiting (express-rate-limit)
- [ ] **4.3-4** Input validation (zod)
- [ ] **4.3-5** helmet.js (HTTP security headers)
- [ ] **4.3-6** CORS config เฉพาะ domain ที่อนุญาต

**4.4 Deployment**
- [ ] **4.4-1** สร้าง Railway project + PostgreSQL addon
- [ ] **4.4-2** ตั้งค่า environment variables ใน Railway
- [ ] **4.4-3** enable pgvector extension ใน Railway PostgreSQL
- [ ] **4.4-4** deploy backend → Railway
- [ ] **4.4-5** deploy frontend → Vercel
- [ ] **4.4-6** ทดสอบ end-to-end บน production
- [ ] **4.4-7** เขียน README.md (setup guide)
- [ ] **4.4-8** เขียน handoff document สำหรับลูกค้า

---

## สรุป Task ทั้งหมด

| Phase | Tasks | ระยะเวลา |
|---|---|---|
| Phase 0 — Demo | 7 tasks | 1-2 วัน |
| Phase 1 — Foundation | 27 tasks | สัปดาห์ที่ 1-2 |
| Phase 2 — RAG Engine | 20 tasks | สัปดาห์ที่ 2-3 |
| Phase 3 — Email Auto | 18 tasks | สัปดาห์ที่ 3-4 |
| Phase 4 — Deploy | 20 tasks | สัปดาห์ที่ 5-6 |
| **รวม** | **92 tasks** | **4-6 สัปดาห์** |

---

*Best Solutions Corp — AI-Powered Digital Marketing — bestsolutionscorp.com*
