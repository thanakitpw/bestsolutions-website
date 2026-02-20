# Design System: Best Solutions Corp

## 1. Design Philosophy
-   **Mood:** Professional, Trustworthy, Modern, Dynamic (Digital Agency)
-   **Style:** Clean Business, "Tech-forward" with vibrant accents.
-   **Core Principle:** "Premium Simplicity" - ใช้ Space และ Typography นำสายตา ไม่รก

## 2. Color Palette (Semantic Tokens)

เราจะใช้ระบบ Semantic Tokens เพื่อให้ง่ายต่อการปรับเปลี่ยนและรองรับ Dark Mode ในอนาคต

| Token Name | Hex Color (Light) | Role |
| :--- | :--- | :--- |
| **Primary** | `#0F172A` (Deep Navy) | สีหลักของแบรนด์, background บางส่วน, หัวข้อหลัก (สื่อถึงความมั่นคง) |
| **Secondary** | `#F97316` (Vibrant Orange) | ปุ่ม CTA, จุดเน้น, ไอคอนกึ่งหนึ่ง (สื่อถึงพลังและความคิดสร้างสรรค์) |
| **Accent** | `#3B82F6` (Bright Blue) | ลิงก์, สถานะ Active, องค์ประกอบตกแต่ง |
| **Background** | `#FFFFFF` | พื้นหลังหลัก |
| **Surface** | `#F8FAFC` (Slate 50) | พื้นหลัง Card, Section รอง |
| **Text-Primary** | `#1E293B` (Slate 800) | เนื้อหาหลัก |
| **Text-Muted** | `#64748B` (Slate 500) | เนื้อหารอง, คำอธิบาย |

## 3. Typography (Font Stack)

เลือกใช้ฟอนต์ที่ดูทันสมัยและรองรับทั้งไทย/อังกฤษได้ดีเยียม

*   **Headings:** **IBM Plex Sans Thai**
    *   บุคลิก: ทันสมัย, มั่นคง, ดู Tech
    *   Weights: Seamlessly Bold (700), SemiBold (600)
*   **Body:** **IBM Plex Sans Thai Looped** (หรือ **Sarabun** ถ้าชอบมีหัว)
    *   *Recommendation:* ใช้ **IBM Plex Sans Thai** (ไม่มีหัว) ทั้งเว็บเพื่อความ Modern สูงสุด หรือใช้ **Inter** คู่กับ **IBM Plex Sans Thai**
    *   Weights: Regular (400), Medium (500)

## 4. UI Components Strategy

### Buttons
*   **Primary Button:** Background สีส้ม (Secondary), Text สีขาว, Rounded-lg, Hover: Brighten
*   **Secondary Button:** Border สี Primary, Text สี Primary, Hover: Bg-Slate-100

### Cards (Service/Blog)
*   **Style:** White Background, Subtle Shadow (`shadow-md`), Rounded-xl
*   **Interact:** Hover แล้วลอยขึ้น (`hover:-translate-y-1`), Shadow เข้มขึ้น

### Layout
*   **Container:** Max-width `1280px` (XL), Padding `px-4 sm:px-6 lg:px-8`
*   **Grid:** 12-column grid system

## 5. Tailwind Configuration (Preview)

```js
// tailwind.config.js snippet
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-ibm-plex)', 'sans-serif'],
    },
    colors: {
      primary: {
        DEFAULT: '#0F172A', // Slate 900
        foreground: '#F8FAFC',
      },
      secondary: {
        DEFAULT: '#F97316', // Orange 500
        foreground: '#FFFFFF',
      },
    }
  }
}
```
