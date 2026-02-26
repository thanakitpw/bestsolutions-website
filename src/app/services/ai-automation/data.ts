import { Bot, Zap, MessageSquare, BarChart3, Link2, Clock } from "lucide-react";

export const packages = [
    {
        name: "Starter",
        price: "9,900",
        originalPrice: "15,000",
        badge: null,
        description: "เหมาะสำหรับธุรกิจขนาดเล็ก ร้านค้า คลินิก",
        Icon: Bot,
        accentColor: "text-slate-900",
        borderClass: "border-slate-200",
        badgeBg: "bg-slate-900",
        btnClass: "bg-slate-900 text-white hover:bg-slate-800",
        popular: false,
        features: [
            "AI Chatbot ตอบลูกค้า 1 แพลตฟอร์ม",
            "Auto-reply ตอบคำถามบ่อย 20 ชุด",
            "เชื่อมต่อ LINE หรือ Facebook",
            "แจ้งเตือน Admin เมื่อ AI ตอบไม่ได้",
            "รายงานสถิติรายสัปดาห์",
            "ดูแลระบบหลังส่งมอบ 30 วัน",
        ],
    },
    {
        name: "Business",
        price: "24,900",
        originalPrice: "39,000",
        badge: "ยอดนิยมสุด",
        description: "เหมาะสำหรับธุรกิจขนาดกลาง SME",
        Icon: Zap,
        accentColor: "text-violet-600",
        borderClass: "border-violet-500 ring-2 ring-violet-500/20",
        badgeBg: "bg-violet-600",
        btnClass: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl",
        popular: true,
        features: [
            "AI Chatbot ทุกแพลตฟอร์ม (LINE, FB, IG)",
            "Auto-reply ไม่จำกัดชุดคำถาม",
            "Lead Qualification อัตโนมัติ",
            "ออกใบเสนอราคา Follow-up อัตโนมัติ",
            "เชื่อมต่อ Google Sheets / CRM",
            "Dashboard Real-time + ดูแล 90 วัน",
        ],
    },
    {
        name: "Enterprise",
        price: "ติดต่อเรา",
        originalPrice: null,
        badge: null,
        description: "สำหรับองค์กรขนาดใหญ่ หลายสาขา",
        Icon: Link2,
        accentColor: "text-cyan-600",
        borderClass: "border-slate-200",
        badgeBg: "bg-cyan-600",
        btnClass: "bg-cyan-600 text-white hover:bg-cyan-700",
        popular: false,
        features: [
            "ระบบ AI ออกแบบเฉพาะองค์กร",
            "เชื่อมต่อ ERP / SAP / Salesforce",
            "AI ตอบอีเมล B2B อัตโนมัติ",
            "Multi-language Support",
            "SLA 99.9% Uptime",
            "ทีม Support ประจำ 24/7",
        ],
    },
];

export const whyUs = [
    { icon: Clock, color: "bg-violet-100 text-violet-600", title: "ทำงาน 24/7 ไม่หยุด", desc: "ระบบ AI ทำงานแทนคนได้ตลอด ไม่มีวันหยุด ไม่มีลาป่วย" },
    { icon: Zap, color: "bg-cyan-100 text-cyan-600", title: "ตอบเร็วกว่า 10 เท่า", desc: "ตอบลูกค้าภายใน 1 วินาที ไม่ให้พลาดโอกาสขายแม้แต่ครั้งเดียว" },
    { icon: BarChart3, color: "bg-emerald-100 text-emerald-600", title: "วัดผลได้จริง", desc: "Dashboard แสดงผลลัพธ์ทุกการสนทนา ปรับปรุงระบบได้ตลอด" },
    { icon: MessageSquare, color: "bg-rose-100 text-rose-600", title: "รองรับทุกแพลตฟอร์ม", desc: "LINE, Facebook, Instagram, Website Chat ครบในระบบเดียว" },
];

export const steps = [
    { n: "01", title: "วิเคราะห์ธุรกิจ", desc: "คุยกันเพื่อเข้าใจ Flow การขายและคำถามที่ลูกค้าถามบ่อย" },
    { n: "02", title: "ออกแบบระบบ", desc: "ออกแบบ Chatbot Flow และ Automation ที่เหมาะกับธุรกิจ" },
    { n: "03", title: "ทดสอบระบบ", desc: "ทดสอบ AI กับสถานการณ์จริง ปรับแต่งจนพร้อมใช้งาน" },
    { n: "04", title: "เปิดใช้งาน!", desc: "ติดตั้งและเปิดระบบ ดูแลติดตามผลใน 30 วันแรก" },
];

export const testimonials = [
    { name: "คุณธนวัต", biz: "เจ้าของร้านอาหาร 3 สาขา", text: "แต่ก่อนต้องจ้างพนักงานตอบไลน์คนละ 2 คน ตอนนี้ AI จัดการได้หมด ประหยัดเงินเดือนไปเดือนละ 30,000 บาท", rating: 5 },
    { name: "คุณพรทิพย์", biz: "เจ้าของคลินิกความงาม", text: "ลูกค้าจองนัดผ่าน LINE อัตโนมัติ ไม่ต้องมีคนรับโทรศัพท์ตลอด ลูกค้าพอใจมาก ตอบเร็วมาก", rating: 5 },
    { name: "คุณสิทธิชัย", biz: "SME ธุรกิจ B2B", text: "ส่ง Follow-up ใบเสนอราคาอัตโนมัติ Conversion Rate เพิ่มขึ้น 40% เลยครับ คุ้มมากๆ", rating: 5 },
];

export const faqs = [
    { q: "AI ตอบผิดหรือตอบไม่ได้จะเกิดอะไรขึ้น?", a: "ระบบจะแจ้งเตือน Admin ทันทีผ่าน LINE Notify เพื่อให้เข้ามาจัดการต่อ ลูกค้าจะไม่รู้สึกถูกทิ้ง" },
    { q: "ต้องมีความรู้ IT ไหมถึงจะใช้ได้?", a: "ไม่ต้องเลยครับ เราออกแบบ Dashboard ให้ใช้งานง่ายเหมือนแชทปกติ Admin ทั่วไปก็จัดการได้" },
    { q: "เชื่อมต่อกับระบบที่มีอยู่แล้วได้ไหม?", a: "ได้ครับ รองรับการเชื่อมต่อกับ Google Sheets, CRM, Line OA, Facebook Page และระบบอื่นๆ ผ่าน API" },
    { q: "ใช้ระยะเวลาติดตั้งนานไหม?", a: "แพ็คเกจ Starter พร้อมใช้งานใน 7 วัน แพ็คเกจ Business ประมาณ 14-21 วัน ขึ้นอยู่กับความซับซ้อน" },
];
