# Website Redesign Workflow Guidebook
> ใช้ได้กับทุกโปรเจค Website Redesign / New Website
> สร้างจากประสบการณ์โปรเจค Best Solutions (เมษายน 2026)

---

## สารบัญ

1. [ภาพรวม Workflow](#1-ภาพรวม-workflow)
2. [เครื่องมือที่ใช้](#2-เครื่องมือที่ใช้)
3. [Phase 1: วิเคราะห์และวางแผน](#3-phase-1-วิเคราะห์และวางแผน)
4. [Phase 2: วางแผนเนื้อหา](#4-phase-2-วางแผนเนื้อหา)
5. [Phase 3: ออกแบบ UI](#5-phase-3-ออกแบบ-ui)
6. [Phase 4: พัฒนาเว็บจริง](#6-phase-4-พัฒนาเว็บจริง)
7. [Phase 5: Review และ Launch](#7-phase-5-review-และ-launch)
8. [Agent & Skill Reference](#8-agent--skill-reference)
9. [โครงสร้างไฟล์](#9-โครงสร้างไฟล์)

---

## 1. ภาพรวม Workflow

```
Phase 1: วิเคราะห์        Phase 2: เนื้อหา        Phase 3: ออกแบบ        Phase 4: พัฒนา        Phase 5: Launch
─────────────────    ─────────────────    ─────────────────    ─────────────────    ─────────────────
 วิเคราะห์เว็บเก่า     Brainstorm            Design System        Component Build      Testing
 Screenshot เก่า       Content Strategy      Wireframe (Paper)    Frontend Code        SEO Audit
 Checklist ปัญหา       Copywriting           UI Design (Paper)    Backend/API          Performance
 Site Structure        SEO Keywords          User Review          Integration          Deploy
 Competitor Research   Multi-Agent Review    Approve Design       Code Review          Monitor
```

**กฎสำคัญ: ห้ามข้ามขั้น** — ต้อง approve แต่ละ phase ก่อนไปขั้นถัดไป

---

## 2. เครื่องมือที่ใช้

### Agents (Claude Code)

| Agent | บทบาท | ใช้ใน Phase |
|---|---|---|
| `website-analyzer` | วิเคราะห์สถานะเว็บปัจจุบัน | 1 |
| `project-manager` | วางแผน จัดลำดับ track progress | 1, 2 |
| `team-lead` | คุมทีม แบ่งงาน review ผลลัพธ์ | ทุก phase |
| `blog-writer` | เขียน copy/content | 2 |
| `ui-ux-improver` | review/suggest UI | 3, 5 |
| `component-builder` | สร้าง React component | 4 |
| `fullstack-dev` | Backend, API, Database | 4 |
| `dev-server` | จัดการ dev server | 4 |

### Skills (`.claude/skills/`)

| Skill | บทบาท | ใช้ใน Phase |
|---|---|---|
| `brainstorming` | ระดมไอเดียแบบมีโครงสร้าง | 2 |
| `multi-agent-brainstorming` | Review ด้วย 5 มุมมอง (Designer, Skeptic, Guardian, User, Arbiter) | 2, 3 |
| `content-strategy` | วาง content strategy, topic clusters | 2 |
| `copywriting` | เขียน marketing copy เน้น conversion | 2 |
| `landing-page-generator` | วางโครงสร้าง landing page (PAS/AIDA) | 2, 3 |
| `ai-seo` | SEO สำหรับ AI search engines | 2, 5 |
| `fixing-metadata` | Audit Open Graph, JSON-LD | 5 |
| `frontend-design` | UI/interaction quality | 3 |
| `product-design` | Design systems, UX flows | 3 |
| `nextjs-app-router-patterns` | Next.js patterns | 4 |
| `react-best-practices` | React optimization | 4 |
| `performance-optimizer` | แก้ bottlenecks | 5 |

### MCP Tools

| Tool | บทบาท | ใช้ใน Phase |
|---|---|---|
| Paper MCP | ออกแบบ UI บน canvas | 3 |
| n8n MCP | Automation workflows | 4 |
| Notion MCP | จัดการเอกสาร | ทุก phase |

---

## 3. Phase 1: วิเคราะห์และวางแผน

### ขั้นตอน

```
1.1  Screenshot เว็บเก่าทุกหน้า
1.2  วิเคราะห์ปัญหา → สร้าง checklist
1.3  สร้าง Site Structure
1.4  กำหนด Design System (สี, ฟอนต์, components)
1.5  วาง reference เก่าใน Paper
```

### Agents/Skills ที่ใช้

```bash
# วิเคราะห์เว็บปัจจุบัน
→ Agent: website-analyzer

# สร้าง checklist
→ เขียน website-redesign-checklist.md

# สร้าง Site Structure
→ เขียน site-structure.md + ออกแบบใน Paper

# Design System
→ สร้างใน Paper: Colors, Typography, Buttons, Cards
```

### Output ที่ได้

```
project/
├── website-redesign-checklist.md    ← ปัญหาที่ต้องแก้
├── site-structure.md                ← โครงสร้างเว็บ
└── [Paper] Design System artboard   ← สี, ฟอนต์, components
└── [Paper] Reference artboard       ← screenshot เก่า
```

---

## 4. Phase 2: วางแผนเนื้อหา

### ขั้นตอน (ทำทีละหน้า)

```
2.1  Brainstorm ไอเดียเนื้อหา
2.2  Content Strategy — จัด message hierarchy
2.3  Copywriting — เขียน copy จริง
2.4  SEO Keyword Research
2.5  Competitor Research
2.6  Multi-Agent Review — challenge ก่อน approve
```

### Flow การใช้ Agents

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  blog-writer    │     │  general-purpose │     │  general-purpose │
│  เขียน copy     │     │  competitor      │     │  SEO keywords   │
│  ทุก section    │     │  research        │     │  research       │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  สังเคราะห์ผลลัพธ์       │
                    │  สร้างไฟล์ content plan  │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  /multi-agent-           │
                    │  brainstorming           │
                    │  Review + Approve        │
                    └─────────────────────────┘
```

### Output ที่ได้

```
content-plan/
├── WORKFLOW-GUIDEBOOK.md            ← ไฟล์นี้
└── home/
    ├── 01-hero.md                   ← copy + layout notes
    ├── 02-client-logos.md
    ├── 03-services-preview.md
    ├── 04-case-studies.md
    ├── 05-how-we-work.md
    ├── 06-testimonials.md
    ├── 07-pricing-hint.md
    ├── 08-team.md
    ├── 09-latest-blog.md
    ├── 10-final-cta.md
    ├── seo-keywords.md              ← keyword research
    └── competitor-analysis.md       ← competitor research
```

---

## 5. Phase 3: ออกแบบ UI

### ขั้นตอน

```
3.1  สร้าง artboard ใน Paper ตาม content plan
3.2  ออกแบบทีละ section (เรียงตาม content plan)
3.3  Review checkpoint ทุก 2-3 sections
3.4  User approve design
3.5  ทำ responsive (mobile, tablet) ถ้าจำเป็น
```

### Review Checkpoint Criteria

ทุกครั้งที่ review ใน Paper ให้เช็ค:
- **Spacing** — ช่องว่างสม่ำเสมอไหม
- **Typography** — อ่านง่ายไหม hierarchy ชัดไหม
- **Contrast** — ข้อความชัดบนพื้นหลังไหม
- **Alignment** — จัดตรงไหม
- **Clipping** — มีอะไรถูกตัดไหม

### Agents/Skills ที่ใช้

```
→ Paper MCP: สร้าง design
→ Skill: frontend-design, product-design
→ Agent: ui-ux-improver (review)
→ Skill: multi-agent-brainstorming (final review)
```

---

## 6. Phase 4: พัฒนาเว็บจริง

### ขั้นตอน

```
4.1  สร้าง/แก้ component ตาม design ที่ approve
4.2  เชื่อมต่อ database (Supabase)
4.3  ทดสอบ localhost
4.4  Code review
4.5  Commit & Push
```

### Agents/Skills ที่ใช้

```
→ Agent: component-builder (สร้าง component)
→ Agent: fullstack-dev (backend + API)
→ Agent: dev-server (รัน localhost)
→ Skill: nextjs-app-router-patterns
→ Skill: react-best-practices
```

---

## 7. Phase 5: Review และ Launch

### ขั้นตอน

```
5.1  SEO audit (meta tags, Open Graph, JSON-LD)
5.2  Performance audit (Core Web Vitals)
5.3  Accessibility check
5.4  Cross-browser testing
5.5  Deploy to production
5.6  Monitor
```

### Agents/Skills ที่ใช้

```
→ Skill: fixing-metadata (SEO audit)
→ Skill: ai-seo (AI search optimization)
→ Skill: performance-optimizer
→ Agent: ui-ux-improver (final review)
```

---

## 8. Agent & Skill Reference

### วิธีเรียกใช้ Skill

```
# ใน Claude Code พิมพ์:
/brainstorming [topic]
/multi-agent-brainstorming [topic]
/copywriting [topic]
```

### วิธีใช้ Agent

```
# Claude จะ spawn agent อัตโนมัติ หรือสั่งได้:
"ใช้ ui-ux-improver review หน้า Home"
"ใช้ blog-writer เขียน copy สำหรับ Hero section"
"ใช้ team-lead แบ่งงานทีม"
```

### วิธีรัน Agents พร้อมกัน (Parallel)

```
"รัน 3 agents พร้อมกัน:
1. blog-writer เขียน copy
2. general-purpose research คู่แข่ง
3. general-purpose research SEO keywords"
```

---

## 9. โครงสร้างไฟล์

```
project/
├── .claude/
│   ├── agents/                      ← Agent definitions
│   │   ├── team-lead.md
│   │   ├── project-manager.md
│   │   ├── ui-ux-improver.md
│   │   ├── component-builder.md
│   │   ├── fullstack-dev.md
│   │   ├── blog-writer.md
│   │   ├── website-analyzer.md
│   │   └── dev-server.md
│   └── skills/                      ← Skill definitions
│       ├── brainstorming.md
│       ├── multi-agent-brainstorming.md
│       ├── copywriting.md
│       ├── content-strategy.md
│       ├── landing-page-generator.md
│       ├── ai-seo.md
│       ├── fixing-metadata.md
│       ├── frontend-design.md
│       ├── product-design.md
│       ├── nextjs-app-router-patterns.md
│       ├── react-best-practices.md
│       └── performance-optimizer.md
├── content-plan/                    ← Content plans per page
│   ├── WORKFLOW-GUIDEBOOK.md        ← ไฟล์นี้
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── blog/
│   └── contact/
├── website-redesign-checklist.md    ← ปัญหาที่ต้องแก้
├── site-structure.md                ← โครงสร้างเว็บ
└── CLAUDE.md                        ← Project instructions
```

---

## Tips

1. **ทำทีละหน้า** — อย่าทำหลายหน้าพร้อมกัน จะสับสน
2. **Approve ก่อนไปต่อ** — ตรวจ content plan → approve → design → approve → code
3. **ใช้ agents parallel** — research + copywriting + SEO ทำพร้อมกันได้
4. **เก็บทุกอย่างเป็นไฟล์** — content plan, design decisions, keyword research
5. **Review ด้วย multi-agent-brainstorming** — ก่อน finalize ทุกครั้ง
6. **ห้ามใช้ emoji ในเว็บ** — ใช้ icon library (Lucide React) แทน
