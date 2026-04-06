"use client";

import { metadata } from "./metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Star, FileText, Bot, Zap, ArrowRight, BarChart3, Clock, Eye, Shield } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "../../website-design/AnimatedSection";
import { FaqAndForm } from "../../website-design/PackageSelectClient";
import { ScrollToFormButton } from "../../website-design/PackageSelectClient";
import { useState } from "react";

const LINE_URL = "https://lin.ee/IlvhwZV";

const whyUs = [
    { icon: Eye, color: "bg-orange-100 text-orange-600", title: "แม่นยำ 99%+", desc: "AI อ่านภาษาไทยและอังกฤษ จดจำ Layout ทุกแบบ แม่นยำกว่า OCR ทั่วไป" },
    { icon: Zap, color: "bg-amber-100 text-amber-600", title: "เร็ว 10 เท่า", desc: "ประมวลผล 1000 หน้าใน 5 นาที เทียบกับคนพิมพ์ใช้เวลา 8 ชั่วโมง" },
    { icon: Bot, color: "bg-violet-100 text-violet-600", title: "AI แยกข้อมูลอัจฉริยะ", desc: "AI เข้าใจความหมาย แยกข้อมูลสำคัญ ไม่ใช่แค่ OCR ธรรมดา" },
    { icon: Clock, color: "bg-blue-100 text-blue-600", title: "ทำงาน 24/7", desc: "Upload PDF แล้วไปนอนได้เลย ระบบทำงานตลอดเวลาไม่มีหยุด" },
];

const steps = [
    { n: "01", title: "Upload PDF", desc: "อัปโหลดเอกสาร PDF หรือรูปภาพ ทีละไฟล์หรือหลายไฟล์พร้อมกัน" },
    { n: "02", title: "AI อ่านเอกสาร", desc: "AI วิเคราะห์โครงสร้าง อ่านข้อความ แยกข้อมูลสำคัญอัตโนมัติ" },
    { n: "03", title: "ตรวจสอบข้อมูล", desc: "Review ข้อมูลที่ AI แยกออกมา แก้ไขได้ถ้าต้องการ มี Confidence Score ให้ดู" },
    { n: "04", title: "Export", desc: "ส่งออกเป็น Excel, CSV หรือ API ไปยังระบบอื่นๆ ได้ทันที" },
];

const testimonials = [
    { name: "คุณสมชาย", biz: "บริษัทบัญชี", text: "แต่ก่อนทีมต้องนั่งพิมพ์ใบเสนอราคาจาก PDF ทั้งวัน ตอนนี้ AI ทำให้หมดภายใน 30 นาที แม่นยำกว่าคนด้วย", rating: 5 },
    { name: "คุณนันทิกา", biz: "ฝ่ายจัดซื้อ", text: "ใบเก็บเงินจาก Supplier มาหลายร้อยฉบับต่อเดือน AI แยกข้อมูลลง Excel ได้หมด ทำให้ทีมมีเวลาทำงานอื่น", rating: 5 },
    { name: "คุณธีระ", biz: "โรงพยาบาล", text: "Medical Record ที่เป็น PDF AI อ่านได้แม่นยำมาก ช่วยแพทย์เข้าถึงข้อมูลได้เร็วขึ้น", rating: 5 },
];

const faqs = [
    { q: "AI อ่านภาษาไทยได้ดีแค่ไหน?", a: "AI ของเรา Train ด้วยเอกสารภาษาไทยมากกว่า 1 ล้านหน้า อ่านได้แม่นยำ 99%+ รองรับฟอนต์ทุกประเภท" },
    { q: "รองรับเอกสารแบบไหนบ้าง?", a: "รองรับ PDF, JPG, PNG ทั้งที่เป็นแบบ Scan และ Digital PDF อ่านได้ทั้งภาษาไทยและอังกฤษ" },
    { q: "ถ้า AI อ่านผิดจะทำอย่างไร?", a: "ระบบจะแสดง Confidence Score ถ้าต่ำจะแจ้งเตือนให้ตรวจสอบ สามารถแก้ไขได้ก่อน Export" },
    { q: "สามารถเชื่อมต่อกับระบบอื่นได้ไหม?", a: "ได้ มี API ให้เชื่อมต่อกับ ERP, CRM หรือระบบอื่นๆ ได้ทันที" },
];

export default function AiDocumentPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const packages = [
        {
            name: "Starter",
            price: isAnnual ? "9,900" : "15,900",
            originalPrice: isAnnual ? "15,000" : "25,000",
            badge: null,
            description: "เหมาะกับธุรกิจที่มีเอกสาร 100-500 ฉบับ/เดือน",
            Icon: FileText,
            accentColor: "text-slate-900",
            borderClass: "border-slate-200",
            badgeBg: "bg-slate-900",
            btnClass: "bg-slate-900 text-white hover:bg-slate-800",
            popular: false,
            features: [
                "ประมวลผลได้ 500 หน้า/เดือน",
                "AI OCR ภาษาไทย + อังกฤษ",
                "แยกข้อมูลพื้นฐาน (ชื่อ, ราคา, วันที่)",
                "Export Excel/CSV",
                "Dashboard สถิติรายเดือน",
                `ดูแลระบบ ${isAnnual ? "1 ปี" : "ตลอดชีพ"} หลังส่งมอบ`,
            ],
        },
        {
            name: "Business",
            price: isAnnual ? "15,900" : "22,900",
            originalPrice: isAnnual ? "25,000" : "35,000",
            badge: "ยอดนิยมสุด",
            description: "เหมาะกับธุรกิจที่มีเอกสารมากกว่า 1000 ฉบับ/เดือน",
            Icon: Bot,
            accentColor: "text-orange-600",
            borderClass: "border-orange-500 ring-2 ring-orange-500/20",
            badgeBg: "bg-orange-600",
            btnClass: "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl",
            popular: true,
            features: [
                "ประมวลผลได้ไม่จำกัด",
                "AI OCR ทุกภาษา + Custom Template",
                "แยกข้อมูลซับซ้อน (Table, Formula)",
                "API Access + Webhook",
                "เชื่อมต่อ ERP/CRM อัตโนมัติ",
                "Multi-user + ดูแล 90 วัน",
                `ดูแลระบบ ${isAnnual ? "1 ปี" : "ตลอดชีพ"} หลังส่งมอบ`,
            ],
        },
        {
            name: "Enterprise",
            price: "ติดต่อเรา",
            originalPrice: null,
            badge: null,
            description: "สำหรับองค์กรขนาดใหญ่ ต้องการความปลอดภัยสูง",
            Icon: Shield,
            accentColor: "text-red-600",
            borderClass: "border-slate-200",
            badgeBg: "bg-red-600",
            btnClass: "bg-red-600 text-white hover:bg-red-700",
            popular: false,
            features: [
                "On-premise Deployment",
                "Custom AI Model Training",
                "Unlimited Users",
                "Advanced Security & Encryption",
                "Dedicated Support Team",
                `Support ประจำ (${isAnnual ? "1 ปี" : "ตลอดชีพ"})`,
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO */}
            <section className="relative pt-28 pb-20 overflow-hidden bg-[#0B0F19]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <FadeUp delay={0} className="pb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-8">
                                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" /></span>
                                AI Document Automation — OCR อัจฉริยะ
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                                แปลง PDF เป็น
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">ข้อมูลดิจิทัล</span>
                                แม่นยำ 99%
                            </h1>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                                AI OCR อ่านเอกสาร PDF ใบเสนอราคา ใบเก็บเงิน แปลงเป็น Excel/CSV อัตโนมัติ ลดเวลาทำงาน 90% ไม่ต้องพิมพ์เองอีกต่อไป
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full shadow-lg shadow-orange-500/30 hover:scale-[1.02] transition-all">
                                    <FileText className="w-5 h-5" />
                                    ปรึกษาฟรี
                                </a>
                                <a href="#packages" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                    <BarChart3 className="w-5 h-5" />
                                    ดูแพ็คเกจ
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />แม่นยำ 99%+</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />รองรับไทย 100%</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />เร็ว 10 เท่า</div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2} className="relative">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">AI OCR Processing</span>
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="bg-slate-800/50 rounded-xl p-3 border border-orange-500/30">
                                                <p className="text-orange-400 text-xs mb-2">Input: PDF Document</p>
                                                <div className="bg-slate-700/50 rounded p-2 text-center text-xs text-slate-300">ใบเสนอราคา.pdf</div>
                                            </div>
                                            <div className="flex justify-center">
                                                <ArrowRight className="w-5 h-5 text-slate-500" />
                                            </div>
                                            <div className="bg-slate-800/50 rounded-xl p-3 border border-red-500/30">
                                                <p className="text-red-400 text-xs mb-2">AI Analysis</p>
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-slate-400">Confidence:</span>
                                                        <span className="text-green-400">99.2%</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-slate-400">Fields:</span>
                                                        <span className="text-slate-300">12 detected</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <ArrowRight className="w-5 h-5 text-slate-500" />
                                            </div>
                                            <div className="bg-slate-800/50 rounded-xl p-3 border border-pink-500/30">
                                                <p className="text-pink-400 text-xs mb-2">Output: Excel</p>
                                                <div className="bg-slate-700/50 rounded p-2 text-center text-xs text-slate-300">ใบเสนอราคา.xlsx</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[{ v: "99%+", l: "ความแม่นยำ" }, { v: "10x", l: "เร็วขึ้น" }, { v: "90%", l: "ลดเวลา" }, { v: "24/7", l: "ทำงานอัตโนมัติ" }].map(s => (
                        <div key={s.l}><p className="text-4xl font-black text-white">{s.v}</p><p className="text-white/70 text-sm mt-1">{s.l}</p></div>
                    ))}
                </div>
            </section>

            {/* PACKAGES */}
            <section id="packages" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">แพ็คเกจ</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">เลือกแพ็คเกจที่เหมาะกับธุรกิจ</h2>
                        </div>
                    </FadeUp>
                    
                    {/* Pricing Toggle */}
                    <FadeUp delay={0.1}>
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full p-1">
                                <button
                                    onClick={() => setIsAnnual(true)}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${isAnnual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                                >
                                    รายปี
                                </button>
                                <button
                                    onClick={() => setIsAnnual(false)}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isAnnual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                                >
                                    ตลอดชีพ
                                </button>
                            </div>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-3 gap-6">
                        {packages.map((pkg, i) => (
                            <StaggerItem key={i}>
                                <div className={`relative bg-white rounded-3xl p-8 border-2 ${pkg.borderClass} shadow-lg flex flex-col h-full`}>
                                    {pkg.badge && <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full ${pkg.badgeBg} text-white text-xs font-bold whitespace-nowrap shadow-lg`}>{pkg.badge}</div>}
                                    <div className="mb-6">
                                        <div className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 ${pkg.accentColor}`}><pkg.Icon className="w-6 h-6" /></div>
                                        <h3 className={`text-2xl font-extrabold ${pkg.accentColor}`}>{pkg.name}</h3>
                                        <p className="text-slate-500 text-sm mt-1">{pkg.description}</p>
                                    </div>
                                    <div className="mb-6">
                                        {pkg.originalPrice && <p className="text-slate-400 line-through text-sm">฿{pkg.originalPrice}</p>}
                                        <p className="text-slate-900 font-black text-4xl">{pkg.price === "ติดต่อเรา" ? pkg.price : `฿${pkg.price}`}</p>
                                        {pkg.price !== "ติดต่อเรา" && <p className="text-slate-400 text-sm">{isAnnual ? "ราคาต่อปี" : "ราคาถาวร (จ่ายครั้งเดียว)"}</p>}
                                    </div>
                                    <ul className="space-y-2.5 mb-8 flex-1">
                                        {pkg.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-slate-700 text-sm">
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.accentColor}`} />{f}
                                            </li>
                                        ))}
                                    </ul>
                                    <ScrollToFormButton pkgId={pkg.name} btnClass={pkg.btnClass} />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">วิธีทำงาน</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">AI OCR แปลงเอกสาร 4 ขั้นตอน</h2>
                        </div>
                    </FadeUp>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="text-center relative">
                                    {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-slate-200" />}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center justify-center font-black text-xl shadow-lg">{s.n}</div>
                                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                                    <p className="text-slate-600 text-sm">{s.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOCUMENT TYPES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">เอกสารที่รองรับ</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">AI อ่านได้ทุกประเภท</h2>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-slate-50 rounded-3xl p-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {[
                                        { name: "ใบเสนอราคา", icon: "📄", desc: "ดึงรายการสินค้า ราคา ส่วนลด" },
                                        { name: "ใบเก็บเงิน", icon: "🧾", desc: "แยกข้อมูลลูกค้า ยอดชำระ VAT" },
                                        { name: "ใบสำคัญรับ/จ่าย", icon: "📋", desc: "จัดการบัญชี แยกประเภทค่าใช้จ่าย" },
                                        { name: "สัญญา", icon: "📝", desc: "ดึงข้อความสำคัญ วันที่ ลายเซ็น" },
                                        { name: "บัตรประชาชน", icon: "🆔", desc: "แยกชื่อ เลขบัตร ที่อยู่" },
                                        { name: "ใบขนสินค้า", icon: "📦", desc: "จัดการข้อมูลศุลกากร นำเข้า-ส่งออก" },
                                        { name: "Medical Record", icon: "🏥", desc: "จัดการประวัติผู้ป่วย การวินิจฉัย" },
                                        { name: "เอกสารอื่นๆ", icon: "📚", desc: "Custom Template ได้ทุกประเภท" },
                                    ].map((doc, i) => (
                                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                            <div className="text-3xl mb-3 text-center">{doc.icon}</div>
                                            <h3 className="font-bold text-slate-900 text-sm mb-2 text-center">{doc.name}</h3>
                                            <p className="text-slate-600 text-xs text-center">{doc.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">ทำไมต้องเรา</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">AI OCR ที่ดีที่สุด</h2>
                        </div>
                    </FadeUp>
                    <div className="grid md:grid-cols-2 gap-8">
                        {whyUs.map((w, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="flex gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${w.color} flex items-center justify-center shrink-0`}>
                                        <w.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{w.title}</h3>
                                        <p className="text-slate-600 text-sm">{w.desc}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">เสียงจากลูกค้า</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">ลูกค้าใช้งานจริง</h2>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <StaggerItem key={i}>
                                <FadeUp delay={i * 0.1}>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                        <div className="flex mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-500 fill-current" />)}</div>
                                        <p className="text-slate-700 text-sm mb-4 italic">"{t.text}"</p>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                                            <p className="text-slate-500 text-xs">{t.biz}</p>
                                        </div>
                                    </div>
                                </FadeUp>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* FAQ & FORM */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">คำถาม</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">คำถามที่พบบ่อย</h2>
                        </div>
                    </FadeUp>
                    <FaqAndForm faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
