# การตั้งค่า Google Ads Conversion Tracking

## 🎯 วิธีการตั้งค่า Conversion Tracking ใน Google Ads

### 1. สร้าง Conversion Action ใน Google Ads

1. เข้าสู่ระบบ [Google Ads](https://ads.google.com/)
2. ไปที่ **Tools & Settings** (เครื่องมือและการตั้งค่า) → **Conversions**
3. คลิก **+ New conversion action**
4. เลือก **Website**
5. ตั้งค่าดังนี้:
   - **Conversion name**: "Contact Form Submission"
   - **Category**: "Lead"
   - **Value**: เลือก "Use different values for each conversion" (ถ้าต้องการตามราคาแพ็คเกจ)
   - **Count**: "One"
   - **Click-through conversion window**: 7 days (default)
   - **Engagement-based conversion window**: ไม่ต้องเลือก
   - **Include in "Conversions"**: เลือก "Yes"

### 2. รับ Conversion ID และ Conversion Label

หลังจากสร้างเสร็จ Google Ads จะให้:
- **Conversion ID** (เช่น: AW-123456789)
- **Conversion Label** (เช่น: AbcDefGHIjklMNOP)

### 3. อัปเดตโค้ดในหน้า Thank You

แก้ไขไฟล์ `/src/app/thank-you/page.tsx`:

```typescript
<Script id="google-ads-conversion">
  {`
    gtag('event', 'conversion', {
      'send_to': 'AW-YOUR_CONVERSION_ID/YOUR_CONVERSION_LABEL',
      'value': 1.0,
      'currency': 'THB'
    });
  `}
</Script>
```

แทนที่:
- `YOUR_CONVERSION_ID` ด้วย Conversion ID จริง
- `YOUR_CONVERSION_LABEL` ด้วย Conversion Label จริง

### 4. ตัวเลือกการตั้งค่ามูลค่า (Advanced)

ถ้าต้องการติดตามมูลค่าตามแพ็คเกจ:

```typescript
// ส่งข้อมูลแพ็คเกจไปกับ URL เวลา redirect
router.push(`/thank-you?package=${formData.package}&value=${getPackageValue(formData.package)}`);

// ในหน้า thank-you ดึงค่าจาก URL parameters
const searchParams = useSearchParams();
const packageValue = searchParams.get('value') || '1.0';

<Script id="google-ads-conversion">
  {`
    gtag('event', 'conversion', {
      'send_to': 'AW-YOUR_CONVERSION_ID/YOUR_CONVERSION_LABEL',
      'value': ${packageValue},
      'currency': 'THB'
    });
  `}
</Script>
```

### 5. การตรวจสอบว่าใช้งานได้

1. **Google Tag Assistant**: ติดตั้ง extension และทดสอบ
2. **Test Mode**: ใช้ URL ทดสอบของ Google Ads:
   ```
   https://your-website.com/thank-you?gclic=TEST
   ```
3. **Real-time Report**: ดูใน Google Ads ภายใน 30 นาที

## 📊 การตีความข้อมูล

### Conversion Metrics ที่สำคัญ:
- **Conversion Rate**: เปอร์เซ็นต์ของผู้ที่ส่งฟอร์มต่อคลิก
- **Cost per Conversion**: ต้นทุนต่อการได้ลูกค้า
- **Conversion Value**: มูลค่ารวมของการแปลง

### การปรับปรุง:
- ทดสอบหัวข้อโฆษณาต่างๆ
- ปรับปรุงหน้า Landing Page
- ตรวจสอบคุณภาพของลูกค้าที่ได้

## ⚠️ ข้อควรระวัง

1. **Noindex Page**: หน้า thank-you ถูกตั้งค่า `noindex` เพื่อไม่ให้ Google index
2. **Testing**: ทดสอบในโหมด sandbox ก่อนใช้งานจริง
3. **Privacy**: แจ้งในนโยบายความเป็นส่วนตัวว่ามีการ tracking
4. **GDPR**: ถ้าเป้าหมายยุโรป ต้องมี consent management

## 🚀 Best Practices

- **Single Conversion**: ใช้ conversion action เดียวต่อเป้าหมาย
- **Value Tracking**: ติดตามมูลค่าจริงเพื่อ ROI ที่แม่นยำ
- **Attribution Model**: ใช้ "Data-driven" ถ้ามีข้อมูลเพียงพอ
- **Remarketing**: สร้าง audience จากผู้ที่เข้าหน้า thank-you

---

**📞 ต้องการความช่วยเหลือเพิ่มเติม?**
- ติดต่อทีม Digital Marketing
- ดูวิดีโอสอนใช้ Google Ads
- อ่านเอกสารอย่างเป็นทางการของ Google
