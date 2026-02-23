import { Globe, Smartphone, ShoppingBag, TrendingUp, Clock, Shield, Award } from "lucide-react";

export const packages = [
    {
        name: "Starter",
        price: "5,000",
        originalPrice: "8,000",
        badge: null,
        description: "เหมาะกับธุรกิจเริ่มต้น ร้านค้า คลินิก",
        Icon: Globe,
        accentColor: "text-slate-900",
        borderClass: "border-slate-200",
        badgeBg: "bg-slate-900",
        btnClass: "bg-slate-900 text-white hover:bg-slate-800",
        popular: false,
        features: [
            "เว็บไซต์ 4 หน้า",
            "Responsive Design รองรับมือถือ 100%",
            "ฟรี Domain 1 ปี + Hosting 1 ปี",
            "ฟรี SSL Certificate",
            "มีระบบหลังบ้าน",
            "ดูแลเว็บไซต์หลังส่งมอบ 30 วัน",
        ],
    },
    {
        name: "Business",
        price: "9,900",
        originalPrice: "15,000",
        badge: "ยอดนิยมสุด",
        description: "เหมาะกับธุรกิจขนาดกลาง บริษัท",
        Icon: Smartphone,
        accentColor: "text-[#F51036]",
        borderClass: "border-[#F51036] ring-2 ring-[#F51036]/20",
        badgeBg: "bg-[#F51036]",
        btnClass: "bg-gradient-to-r from-[#F51036] to-orange-500 text-white shadow-lg shadow-red-500/30 hover:shadow-xl",
        popular: true,
        features: [
            "เว็บไซต์ 10 หน้า",
            "ทุกอย่างในแพ็คเกจ Starter",
            "ระบบจองสินค้า/นัดหมาย",
            "ติดตั้ง Google Analytics",
            "พื้นฐาน SEO พร้อมใช้",
            "ดูแลเว็บไซต์หลังส่งมอบ 90 วัน",
        ],
    },
    {
        name: "E-commerce",
        price: "15,000",
        originalPrice: "25,000",
        badge: null,
        description: "สำหรับร้านค้าออนไลน์ ขายสินค้า",
        Icon: ShoppingBag,
        accentColor: "text-emerald-600",
        borderClass: "border-slate-200",
        badgeBg: "bg-emerald-500",
        btnClass: "bg-emerald-600 text-white hover:bg-emerald-700",
        popular: false,
        features: [
            "เว็บขายของออนไลน์",
            "ระบบตะกร้าสินค้า",
            "รับบัตรเครดิต/พร้อมเพย์",
            "จัดการสินค้า 100 ชิ้น",
            "ทุกอย่างในแพ็คเกจ Business",
            "ดูแลเว็บไซต์หลังส่งมอบ 180 วัน",
        ],
    },
];

export const whyUs = [
    { icon: TrendingUp, color: "bg-red-100 text-[#F51036]", title: "ราคาถูกที่สุด", desc: "เทียบไม่ได้กับที่อื่นในตลาด เริ่มต้นเพียง 5,000 บาท" },
    { icon: Clock, color: "bg-blue-100 text-blue-600", title: "ทำเว็บเร็ว 7 วัน", desc: "ไม่ต้องรอนาน ส่งมอบงานตรงเวลาทุกครั้ง" },
    { icon: Shield, color: "bg-green-100 text-green-600", title: "ไม่มีค่าแอบแฝง", desc: "ราคาที่เห็นคือราคาสุทธิ ไม่มีค่าใช้จ่ายเพิ่มเติม" },
    { icon: Award, color: "bg-purple-100 text-purple-600", title: "รับประกัน 100%", desc: "ไม่พอใจแก้ไขฟรีจนพอใจ หรือคืนเงินทันที" },
];

export const steps = [
    { n: "01", title: "คุยกันฟรี", desc: "บอกความต้องการ เราให้คำปรึกษาฟรีไม่มีค่าใช้จ่าย" },
    { n: "02", title: "จ่ายมัดจำ 50%", desc: "เริ่มออกแบบและพัฒนาเว็บไซต์ตามที่ตกลงกัน" },
    { n: "03", title: "ดูเว็บตัวอย่าง", desc: "แก้ไขตามต้องการได้ตามจำนวนครั้งในแพ็คเกจ" },
    { n: "04", title: "รับเว็บไปใช้!", desc: "จ่ายส่วนที่เหลือ รับไฟล์และเว็บไซต์พร้อมใช้ทันที" },
];

export const examples = [
    { title: "ร้านอาหาร", desc: "เมนู พิกัด จองโต๊ะออนไลน์", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", tags: ["เมนูอาหาร", "จองโต๊ะ", "Google Map"] },
    { title: "ร้านขายของ", desc: "แสดงสินค้า ราคา ช่องทางติดต่อ", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", tags: ["แคตตาล็อก", "ราคา", "LINE/FB"] },
    { title: "บริษัท/ออฟฟิศ", desc: "แนะนำบริการ ทีมงาน ผลงาน", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", tags: ["บริการ", "ทีมงาน", "ผลงาน"] },
    { title: "คลินิก/สปา", desc: "บริการ ราคา นัดหมายออนไลน์", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800", tags: ["บริการ", "ราคา", "นัดหมาย"] },
];

export const testimonials = [
    { name: "คุณสมชาย", biz: "เจ้าของร้านอาหาร", text: "เว็บสวยงาม ราคาถูกกว่าที่อื่นเยอะมาก ลูกค้าเข้ามาจากเว็บเพิ่มขึ้นเลย ประทับใจมาก", rating: 5 },
    { name: "คุณมานี", biz: "เจ้าของร้านขายของ", text: "ทำเสร็จใน 5 วัน เร็วมากๆ แก้ไขตามที่ต้องการได้ ทีมงานดูแลดีมาก", rating: 5 },
    { name: "คุณวีระ", biz: "เจ้าของคลินิก", text: "มีคนเข้าเว็บเพิ่มขึ้น 30% หลังทำเว็บใหม่ คุ้มค่ามากๆ แนะนำเลย", rating: 5 },
];

export const faqs = [
    { q: "ทำเว็บใช้เวลานานแค่ไหน?", a: "โดยปกติจะใช้เวลา 7 วัน หลังจากได้ข้อมูลครบถ้วนและยืนยันการสั่งทำ" },
    { q: "มีค่าบริการรายปีไหม?", a: "มีค่า Domain และ Hosting รายปี แต่ฟรีปีแรก! ปีต่อไปเริ่มต้นที่ 1,500 บาท/ปี" },
    { q: "แก้ไขข้อมูลเองได้ไหม?", a: "สามารถแจ้งทีมซัพพอร์ตได้เลย เราพร้อมช่วยแก้ไขให้คุณ" },
    { q: "รับประกันอย่างไร?", a: "มีรับประกันเว็บไซต์หลังส่งมอบทุกแพ็คเกจ ตามระยะเวลาที่กำหนดในแต่ละแพ็คเกจ" },
];
