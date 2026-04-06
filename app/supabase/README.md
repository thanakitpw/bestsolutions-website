# วิธีการรัน SQL Schema ใน Supabase

## 📋 ขั้นตอนทำตาม

### 1. เข้าสู่ Supabase Dashboard
1. เปิดเว็บ https://supabase.com
2. ล็อกอินด้วย email และรหัสษ
3. เลือก project ของคุณ (Best Solutions)

### 2. ไปที่ SQL Editor
1. ในแดชบอร์ด Supabase
2. คลิก **SQL Editor** ในเมนูด้านซ้าย
3. จะเห็นหน้า SQL Editor พร้อม text editor

### 3. รัน SQL Schema
1. **คัดลอก** SQL code ด้านล่างนี้
2. **วางใน SQL Editor**
3. **คลิก Run** หรือ กด `Ctrl + Enter`

## 📝 SQL Code ที่ต้องรัน

```sql
-- Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    service TEXT,
    message TEXT,
    timestamp TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy for reading contacts
CREATE POLICY "Contacts are viewable by authenticated users" ON public.contacts
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for inserting contacts
CREATE POLICY "Anyone can insert contacts" ON public.contacts
    FOR INSERT WITH CHECK (true);

-- Create policy for updating contacts
CREATE POLICY "Authenticated users can update contacts" ON public.contacts
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create indexes
CREATE INDEX IF NOT EXISTS contacts_status_idx ON public.contacts(status);
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_timestamp_idx ON public.contacts(timestamp);

-- Function to update updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER handle_contacts_updated_at
    BEFORE UPDATE ON public.contacts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
```

## ✅ หลังการตรวจสอบ

### 1. ตรวจสอบว่า Table ถูกสร้าง
```sql
SELECT * FROM contacts LIMIT 1;
```

### 2. ตรวจสอบ Policies
```sql
SELECT 
  schemaname, 
  tablename, 
  policyname, 
  permissive, 
  roles, 
  cmd, 
  qual 
FROM pg_policies 
WHERE tablename = 'contacts';
```

### 3. ตรวจสอบ Indexes
```sql
SELECT 
  indexname, 
  tablename, 
  indexdef 
FROM pg_indexes 
WHERE tablename = 'contacts';
```

### 4. ตรวจสอบ Trigger
```sql
SELECT 
  trigger_name, 
  event_manipulation, 
  trigger_def 
FROM information_schema.triggers 
WHERE trigger_name = 'handle_contacts_updated_at';
```

## 🔧 การตั้งค่าเพิ่มเติม (ถ้าต้องการ)

### 1. ตั้งค่า RLS ให้ทุกคนสามารถอ่านข้อมูล
```sql
-- ถ้าต้องการให้ทุกคนสามารถอ่านข้อมูล
DROP POLICY IF EXISTS "Contacts are viewable by authenticated users" ON public.contacts;
CREATE POLICY "Contacts are viewable by everyone" ON public.contacts
    FOR SELECT USING (true);
```

### 2. เพิ่ม column ใหม่ (ถ้าต้องการ)
```sql
ALTER TABLE public.contacts 
ADD COLUMN ip_address TEXT,
ADD COLUMN source TEXT DEFAULT 'website';
```

## 🚀 การทดสอบ

### 1. ทดสอบ Contact Form
1. ไปที่ `/contact`
2. กรอกข้อมูลและส่งฟอร์ม
3. ตรวจสอบว่าข้อมูลถูกบันทึกใน Supabase

### 2. ทดสอบ Admin Page
1. ไปที่ `/admin/contacts`
2. ดูว่าข้อมูลแสดงขึ้นมาจาก database
3. ลองอัปเดตสถานะ

## 📱 การตรวจสอบใน Supabase

### 1. ใน Table Editor
- ไปที่ **Table Editor**
- เลือก `contacts` table
- ดูข้อมูลที่ถูกบันทึก

### 2. ใน API Documentation
- ไปที่ **API** → **Documentation**
- ดู REST API endpoints สำหรับ contacts table

### 3. ใน Database
- ไปที่ **Database** → **Tables**
- ดู `contacts` table และ relationships

## 🎯 หลังการตรวจสอบว่าสำเร็จ

1. ✅ รัน SQL schema สำเร็จแล้ว
2. ✅ ตรวจสอบ table ถูกสร้าง
3. ✅ ทดสอบ contact form ส่งข้อมูลได้
4. ✅ ทดสอบ admin page แสดงข้อมูลจาก database
5. ✅ สามารถอัปเดตสถานะและดูข้อมูล

---

**🎉 เสร็จแล้ว!** ตอนนี้ระบบฐานข้อมูล contacts พร้อมใช้งานจริงแล้ว!
