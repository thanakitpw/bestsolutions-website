# การติดตั้ง Google Analytics

โปรเจคนี้มีการเชื่อมต่อกับ Google Analytics 4 (GA4) สำหรับติดตามพฤติกรรมผู้ใช้และการแปลง

## วิธีการติดตั้ง

### 1. รับ Measurement ID ของคุณ

1. ไปที่ [Google Analytics](https://analytics.google.com/)
2. สร้าง GA4 property ใหม่ หรือใช้ property ที่มีอยู่
3. ไปที่ Admin → Data Streams → Web Stream
4. คัดลอก "Measurement ID" (รูปแบบ: `G-XXXXXXXXXX`)

### 2. ตั้งค่า Environment Variable

อัปเดตไฟล์ `.env.local` ด้วย Measurement ID จริงของคุณ:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR_ACTUAL_MEASUREMENT_ID
```

แทนที่ `G-YOUR_ACTUAL_MEASUREMENT_ID` ด้วย Measurement ID จริงของคุณ

### 3. รีสตาร์ท Development Server

หลังจากอัปเดต environment variable ให้รีสตาร์ท dev server:

```bash
npm run dev
```

## สิ่งที่ถูกติดตาม

มีการติดตามเหตุการณ์ต่อไปนี้โดยอัตโนมัติ:

### การดูหน้าเพจ (Page Views)
- การนำทางทุกหน้าถูกติดตามโดยอัตโนมัติ

### เหตุการณ์แบบกำหนดเอง (Custom Events)
- `submit_contact_form` - เมื่อมีการส่งฟอร์มติดต่อ
  - หมวดหมู่: engagement
  - ป้ายกำกับ: package_{type} (basic, business, ecommerce, custom)
  
- `select_package` - เมื่อคลิกปุ่มเลือกแพ็คเกจ
  - หมวดหมู่: engagement  
  - ป้ายกำกับ: package_{type}

- `click_button` - การคลิกปุ่มทั่วไป
  - หมวดหมู่: engagement
  - ป้ายกำกับ: {location}_{button_name}

- `click_external_link` - การคลิกลิงก์ภายนอก
  - หมวดหมู่: outbound
  - ป้ายกำกับ: URL

## การใช้งานใน Components

```typescript
import { trackButtonClick, trackExternalLink } from '@/lib/analytics';

// ติดตามการคลิกปุ่ม
trackButtonClick('contact_cta', 'homepage');

// ติดตามลิงก์ภายนอก
trackExternalLink('https://example.com');
```

## Development vs Production

- ในโหมด development GA scripts จะโหลดแต่ไม่ส่งข้อมูลไปยัง production property
- ควรใช้ GA property แยกสำหรับ development/testing หากจำเป็น
- Component จะจัดการกรณีที่ GA ไม่ได้ตั้งค่าโดยอัตโนมัติ

## หมายเหตุด้านความเป็นส่วนตัว

การใช้งานนี้ใช้ Google Analytics กับ gtag.js มาตรฐาน ตรวจสอบให้แน่ใจว่า:
- อัปเดตนโยบายความเป็นส่วนตัวเพื่อระบุการใช้ Google Analytics
- พิจารณาการจัดการความยินยอมหากจำเป็นตามกฎหมายในเขตอำนาจศาลของคุณ
- ตรวจสอบเอกสาร Google Analytics สำหรับแนวทางปฏิบัติที่ดีที่สุดล่าสุด
