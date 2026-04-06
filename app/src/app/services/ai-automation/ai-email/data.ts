import { Mail, Bot, BarChart3, Zap, Shield, Clock } from "lucide-react";

export const packages = [
    {
        name: "Starter",
        price: "15,900",
        originalPrice: "25,000",
        badge: null,
        description: "เหมาะกับบริษัทที่รับอีเมลลูกค้า 50-200 ฉบับ/เดือน",
        Icon: Mail,
        accentColor: "text-slate-900",
        borderClass: "border-slate-200",
        badgeBg: "bg-slate-900",
        btnClass: "bg-slate-900 text-white hover:bg-slate-800",
        popular: false,
        features: [
            "AI ตอบอีเมลอัตโนมัติ ถึง 200 ฉบับ/เดือน",
            "RAG Engine จับคู่สินค้า/บริการ",
            "Draft Reply พร้อมส่งได้ทันที",
            "แจ้งเตือน LINE เมื่อ Confidence ต่ำ",
            "Dashboard สถิติรายเดือน",
            "ดูแลระบบหลังส่งมอบ 30 วัน",
            "ประจำปี หรือ ถาวร (เลือกได้)",
        ],
    },
    {
        name: "Business",
        price: "25,900",
        originalPrice: "40,000",
        badge: "ยอดนิยมสุด",
        description: "เหมาะกับบริษัท B2B ที่มี Product Catalog หลากหลาย",
        Icon: Bot,
        accentColor: "text-blue-600",
        borderClass: "border-blue-500 ring-2 ring-blue-500/20",
        badgeBg: "bg-blue-600",
        btnClass: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl",
        popular: true,
        features: [
            "AI ตอบอีเมลอัตโนมัติ ไม่จำกัด",
            "RAG Engine + Product Catalog Manager",
            "ออกใบเสนอราคาอัตโนมัติ",
            "Multi-language (ไทย/อังกฤษ/จีน)",
            "เชื่อมต่อ CRM / Google Sheets",
            "Analytics Dashboard + ดูแล 90 วัน",
            "ประจำปี หรือ ถาวร (เลือกได้)",
        ],
    },
    {
        name: "Enterprise",
        price: "ติดต่อเรา",
        originalPrice: null,
        badge: null,
        description: "สำหรับองค์กรขนาดใหญ่ หลาย Inbox หลายทีม",
        Icon: Shield,
        accentColor: "text-indigo-600",
        borderClass: "border-slate-200",
        badgeBg: "bg-indigo-600",
        btnClass: "bg-indigo-600 text-white hover:bg-indigo-700",
        popular: false,
        features: [
            "Multi-inbox & Multi-department",
            "Custom AI Model Fine-tuning",
            "เชื่อมต่อ ERP / SAP",
            "Compliance & Data Security",
            "SLA 99.9% + Support 24/7",
            "ออกแบบระบบเฉพาะองค์กร",
        ],
    },
];

export const whyUs = [
    { icon: Clock, color: "bg-blue-100 text-blue-600", title: "ประหยัดเวลา 80%", desc: "ไม่ต้องนั่งตอบอีเมลซ้ำๆ ทุกวัน AI จัดการอัตโนมัติตั้งแต่อ่านจนถึงส่ง Draft" },
    { icon: Zap, color: "bg-amber-100 text-amber-600", title: "ตอบทันที ไม่รอ 24h", desc: "ลูกค้า B2B ต้องการคำตอบเร็ว ระบบ AI ตอบภายในนาทีพร้อมข้อมูลสินค้าครบถ้วน" },
    { icon: BarChart3, color: "bg-emerald-100 text-emerald-600", title: "แม่นยำด้วย RAG", desc: "ระบบ RAG อ่านข้อมูลสินค้าจริงของคุณ ตอบถูกต้อง ไม่ hallucinate ไม่เสี่ยงข้อมูลผิด" },
    { icon: Bot, color: "bg-violet-100 text-violet-600", title: "Admin Review ได้ตลอด", desc: "Admin ตรวจสอบและ Approve Draft ก่อนส่งได้ทุกฉบับ หรือตั้งให้ส่งอัตโนมัติก็ได้" },
];

export const steps = [
    { n: "01", title: "Upload สินค้า/บริการ", desc: "อัปโหลด Product Catalog และข้อมูลบริษัทเพื่อให้ AI เรียนรู้" },
    { n: "02", title: "ตั้งค่า AI", desc: "กำหนด System Prompt, Tone of Voice และ Confidence Threshold ตามต้องการ" },
    { n: "03", title: "ทดสอบกับอีเมลจริง", desc: "ทดสอบกับอีเมลลูกค้าจริง ปรับแต่งจนได้ Draft ที่พร้อมส่งได้เลย" },
    { n: "04", title: "เปิดใช้งาน", desc: "เปิดระบบ AI รับอีเมลจริง Dashboard แสดงผลแบบ Real-time" },
];

export const testimonials = [
    { name: "คุณพิชัย", biz: "ผู้จัดการฝ่ายขาย บริษัทอุตสาหกรรม", text: "แต่ก่อนทีมขาย 5 คนต้องนั่งตอบอีเมลใบเสนอราคาทั้งวัน ตอนนี้ AI จัดการ Draft ให้หมด เราแค่ตรวจสอบและกด Send เวลาเซลล์ไปหาลูกค้าได้มากขึ้นมาก", rating: 5 },
    { name: "คุณสุชาติ", biz: "เจ้าของธุรกิจนำเข้าอุปกรณ์", text: "ลูกค้าต่างชาติอีเมลมาเป็นภาษาอังกฤษ AI ตอบกลับได้ถูกต้องทั้งภาษาและข้อมูลสินค้า Conversion Rate เพิ่ม 35% เลยครับ", rating: 5 },
    { name: "คุณอรวรรณ", biz: "ฝ่าย Customer Service บริษัทนำเข้า", text: "ระบบ RAG จับคู่สินค้าได้แม่นยำมาก ลูกค้าถามอะไรมา AI ดึงข้อมูล Spec ราคา และ Lead Time มาตอบได้ครบเลย", rating: 5 },
];

export const faqs = [
    { q: "AI ตอบผิดหรือข้อมูลผิดจะเกิดอะไรขึ้น?", a: "ระบบมี Confidence Score ถ้า AI ไม่แน่ใจจะแจ้งเตือน Admin ทันที ไม่ส่งอัตโนมัติ Admin สามารถแก้ไข Draft ก่อนส่งได้เสมอ" },
    { q: "รองรับภาษาอะไรบ้าง?", a: "รองรับภาษาไทย อังกฤษ และจีน (แพ็คเกจ Business ขึ้นไป) AI ตรวจจับภาษาของอีเมลลูกค้าและตอบกลับในภาษาเดียวกันโดยอัตโนมัติ" },
    { q: "เชื่อมต่อกับ Email Client ที่ใช้อยู่ได้ไหม?", a: "รองรับ Gmail, Microsoft Outlook และ Email Server ที่มี IMAP/SMTP ครับ ติดตั้งได้โดยไม่ต้องเปลี่ยน Email ที่ใช้อยู่" },
    { q: "ข้อมูลของบริษัทปลอดภัยไหม?", a: "ข้อมูล Product Catalog และอีเมลลูกค้าเก็บบน Server ที่มีการเข้ารหัส ไม่แชร์กับบุคคลที่สามครับ มี Option เก็บบน Private Server สำหรับแพ็คเกจ Enterprise" },
];
