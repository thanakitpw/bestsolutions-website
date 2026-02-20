# เริ่มต้นใช้งานเว็บไซต์ใหม่ (Best Solutions)

เว็บไซต์นี้ถูกสร้างด้วย **Next.js 16 (App Router)** และ **Tailwind CSS v4**
มีการตั้งค่า Design System (สี Gradient, ฟอนต์ IBM Plex Sans Thai) เรียบร้อยแล้ว

## วิธีรันเว็บไซต์ (How to run)

1.  เปิด Terminal ในโฟลเดอร์นี้
2.  รันคำสั่งเพื่อเริ่มเซิร์ฟเวอร์:
    ```bash
    npm run dev
    ```
3.  เปิด Browser ไปที่: [http://localhost:3000](http://localhost:3000)

## โครงสร้างโปรเจกต์
*   `src/app/page.tsx`: หน้าแรก (Home Page) - แก้ไขข้อความ Hero Section ได้ที่นี่
*   `src/components/layout/Navbar.tsx`: เมนูบาร์ด้านบน
*   `src/components/ui/button.tsx`: ปุ่มต่างๆ (มี variant `gradient` ให้ใช้)
*   `src/app/globals.css`: ตั้งค่าสีและฟอนต์หลัก

## ขั้นตอนต่อไป
*   [ ] สร้างหน้า About (`src/app/about/page.tsx`)
*   [ ] สร้างหน้า Services (`src/app/services/page.tsx`)
*   [ ] เชื่อมต่อ WordPress Headless (ถ้าต้องการ)
