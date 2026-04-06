"use client";

import { metadata } from "./metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Star, Mail, Bot, BarChart3, Zap, Shield, Clock, ArrowRight, Database } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "../../website-design/AnimatedSection";
import { FaqAndForm } from "../../website-design/PackageSelectClient";
import { ScrollToFormButton } from "../../website-design/PackageSelectClient";
import { useState } from "react";

const LINE_URL = "https://lin.ee/IlvhwZV";

const whyUs = [
    { icon: Clock, color: "bg-blue-100 text-blue-600", title: "ประหยัดเวลา 80%", desc: "ไม่ต้องนั่งตอบอีเมลซ้ำๆ ทุกวัน AI จัดการอัตโนมัติตั้งแต่อ่านจนถึงสร้าง Draft" },
    { icon: Zap, color: "bg-amber-100 text-amber-600", title: "ตอบทันที ไม่รอ 24h", desc: "ลูกค้า B2B ต้องการคำตอบเร็ว ระบบ AI ตอบภายในนาทีพร้อมข้อมูลสินค้าครบถ้วน" },
    { icon: Database, color: "bg-emerald-100 text-emerald-600", title: "แม่นยำด้วย RAG", desc: "RAG อ่านข้อมูลสินค้าจริงของคุณก่อนตอบทุกครั้ง ไม่ Hallucinate ไม่แต่งข้อมูล" },
    { icon: Bot, color: "bg-violet-100 text-violet-600", title: "Admin Review ได้ตลอด", desc: "Admin ตรวจสอบและ Approve Draft ก่อนส่งได้ทุกฉบับ หรือตั้งให้ส่งอัตโนมัติก็ได้" },
];

const steps = [
    { n: "01", title: "Upload ข้อมูลสินค้า", desc: "เพิ่มสินค้าจาก Form, Import CSV หรือ Upload PDF Spec Sheet ระบบ Embed อัตโนมัติ" },
    { n: "02", title: "ตั้งค่า System Prompt", desc: "กำหนดกฎการตอบ Tone of Voice และ Confidence Threshold ผ่าน Admin Panel" },
    { n: "03", title: "ทดสอบกับอีเมลจริง", desc: "ทดสอบกับอีเมลลูกค้า ปรับแต่งจนได้ Draft ที่ถูกต้องและพร้อมส่ง" },
    { n: "04", title: "เปิดใช้งาน", desc: "ระบบรับอีเมลอัตโนมัติทุก 5 นาที Admin Review & Approve ผ่าน Dashboard" },
];

const testimonials = [
    { name: "คุณพิชัย", biz: "ผู้จัดการฝ่ายขาย บริษัทอุตสาหกรรม", text: "แต่ก่อนทีมขาย 5 คนต้องนั่งตอบอีเมลใบเสนอราคาทั้งวัน ตอนนี้ AI สร้าง Draft ให้หมด เราแค่ตรวจและกด Approve เวลาเซลล์ไปหาลูกค้าได้มากขึ้นมาก", rating: 5 },
    { name: "คุณสุชาติ", biz: "เจ้าของธุรกิจนำเข้าอุปกรณ์", text: "ลูกค้าต่างชาติอีเมลมาเป็นภาษาอังกฤษ AI ตอบกลับได้ถูกต้องทั้งภาษาและข้อมูลสินค้า Conversion Rate เพิ่ม 35%", rating: 5 },
    { name: "คุณอรวรรณ", biz: "ฝ่าย Customer Service บริษัทนำเข้า", text: "RAG จับคู่สินค้าได้แม่นยำมาก ลูกค้าถามอะไรมา AI ดึง Spec ราคา และ Lead Time มาตอบได้ครบเลย", rating: 5 },
];

const faqs = [
    { q: "AI ตอบอีเมลแม่นยำแค่ไหน?", a: "ระบบใช้ RAG อ่านข้อมูลสินค้าจริงก่อนตอบทุกครั้ง ความแม่นยำ 95%+ สำหรับคำถามเกี่ยวกับสินค้า และมี Admin Review ก่อนส่งเสมอ" },
    { q: "รองรับภาษาอะไรบ้าง?", a: "รองรับไทย อังกฤษ และจีน AI จะตอบเป็นภาษาเดียวกับที่ลูกค้าส่งมา" },
    { q: "ติดตั้งนานแค่ไหน?", a: "ขึ้นอยู่กับจำนวนสินค้า ปกติ 7-14 วัน สำหรับการ Upload ข้อมูลและทดสอบจนพร้อมใช้งาน" },
    { q: "สามารถเชื่อมต่อกับระบบอื่นได้ไหม?", a: "ได้ รองรับการเชื่อมต่อกับ CRM, ERP และ Google Sheets เพื่อส่งข้อมูลลูกค้าและใบเสนอราคาอัตโนมัติ" },
];

export default function AiEmailPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const packages = [
        {
            name: "Starter",
            price: isAnnual ? "9,900" : "15,900",
            originalPrice: isAnnual ? "15,000" : "25,000",
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
                `ดูแลระบบ ${isAnnual ? "1 ปี" : "ตลอดชีพ"} หลังส่งมอบ`,
            ],
        },
        {
            name: "Business",
            price: isAnnual ? "15,900" : "22,900",
            originalPrice: isAnnual ? "25,000" : "35,000",
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
                `ดูแลระบบ ${isAnnual ? "1 ปี" : "ตลอดชีพ"} หลังส่งมอบ`,
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
                "Multi-Inbox Support",
                "Custom AI Model Training",
                "On-premise Deployment",
                "Dedicated Account Manager",
                "SLA 99.9% Uptime",
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <FadeUp delay={0} className="pb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8">
                                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" /></span>
                                AI Email Automation — สำหรับธุรกิจ B2B
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                                AI ตอบอีเมล
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">ลูกค้าแทนคุณ</span>
                                ถูก แม่น ไว
                            </h1>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                                ระบบ AI อ่านอีเมลลูกค้า ค้นหาข้อมูลสินค้าจาก Catalog ออก Draft ตอบกลับ พร้อมส่งใบเสนอราคา — ทั้งหมดอัตโนมัติภายใน 1 นาที
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-all">
                                    <Mail className="w-5 h-5" />
                                    ปรึกษาฟรี
                                </a>
                                <a href="#packages" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                    <BarChart3 className="w-5 h-5" />
                                    ดูแพ็คเกจ
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />RAG ค้นหาข้อมูลจริง</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />Admin Review ก่อนส่ง</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />รองรับ 3 ภาษา</div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2} className="relative">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Gmail Inbox</span>
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="bg-slate-800/50 rounded-xl p-3">
                                                <p className="text-slate-300 text-sm mb-2">ลูกค้า</p>
                                                <p className="text-white text-sm">สอบถามราคาสินค้า Model X-200 จำนวน 100 ชิ้น</p>
                                            </div>
                                            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl p-3 border border-blue-500/30">
                                                <p className="text-slate-300 text-sm mb-2">AI Draft Response</p>
                                                <p className="text-white text-sm">เรียน คุณลูกค้า<br/>ขอบคุณที่สนใจ Model X-200<br/>ราคา ฿500/ชิ้น (รวม VAT)<br/>ส่งฟรีเมื่อสั่ง 100 ชิ้นขึ้นไป...</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">Approve</button>
                                            <button className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[{ v: "1 นาที", l: "ตอบกลับ" }, { v: "95%+", l: "ความแม่นยำ" }, { v: "80%", l: "ลดเวลา Admin" }, { v: "3x", l: "เพิ่ม Conversion" }].map(s => (
                        <div key={s.l}><p className="text-4xl font-black text-white">{s.v}</p><p className="text-white/70 text-sm mt-1">{s.l}</p></div>
                    ))}
                </div>
            </section>

            {/* PACKAGES */}
            <section id="packages" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">แพ็คเกจ</span>
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
                                        {pkg.originalPrice && (
                                            <p className="text-slate-400 line-through text-sm">฿{pkg.originalPrice}</p>
                                        )}
                                        <p className="text-slate-900 font-black text-4xl">
                                            {pkg.price === "ติดต่อเรา" ? pkg.price : `฿${pkg.price}`}
                                        </p>
                                        {pkg.price !== "ติดต่อเรา" && <p className="text-slate-400 text-sm">{isAnnual ? "ราคาต่อปี" : "ราคาถาวร (จ่ายครั้งเดียว)"}</p>}
                                    </div>
                                    <ul className="space-y-2.5 mb-8 flex-1">
                                        {pkg.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-slate-700 text-sm">
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.accentColor}`} />
                                                {f}
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
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">วิธีทำงาน</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">RAG + Claude AI ตอบอีเมลอัตโนมัติ</h2>
                        </div>
                    </FadeUp>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="text-center relative">
                                    {i < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-slate-100" />
                                    )}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-lg">
                                        {s.n}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                                    <p className="text-slate-600 text-sm">{s.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ADMIN PANEL MOCKUP */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Admin Panel</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">จัดการได้ทั้งหมดในที่เดียว</h2>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {/* Inbox View */}
                                    <div className="bg-slate-800 rounded-2xl p-6">
                                        <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Mail className="w-5 h-5 text-blue-400" />Inbox</h3>
                                        <div className="space-y-3">
                                            {[{ from: "john@example.com", subj: "สอบถามราคาสินค้า", time: "2 นาที", status: "AI Draft" }, { from: "sara@company.com", subj: "ขอใบเสนอราคา", time: "15 นาที", status: "Approved" }, { from: "mike@trade.co", subj: "สั่งซื้อสินค้า", time: "1 ชม.", status: "Sent" }].map((email, i) => (
                                                <div key={i} className="bg-slate-700/50 rounded-lg p-3 border border-slate-600">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <p className="text-white text-sm font-medium">{email.from}</p>
                                                        <span className="text-xs text-slate-400">{email.time}</span>
                                                    </div>
                                                    <p className="text-slate-300 text-xs mb-2">{email.subj}</p>
                                                    <span className={`inline-block px-2 py-0.5 rounded text-xs ${email.status === "AI Draft" ? "bg-blue-500/20 text-blue-400" : email.status === "Approved" ? "bg-green-500/20 text-green-400" : "bg-slate-500/20 text-slate-400"}`}>{email.status}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* AI Response */}
                                    <div className="bg-slate-800 rounded-2xl p-6">
                                        <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Bot className="w-5 h-5 text-violet-400" />AI Response</h3>
                                        <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                                            <p className="text-slate-300 text-xs mb-2">Confidence Score</p>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-slate-600 rounded-full h-2">
                                                    <div className="bg-green-400 h-2 rounded-full" style={{ width: "92%" }}></div>
                                                </div>
                                                <span className="text-green-400 text-sm font-bold">92%</span>
                                            </div>
                                        </div>
                                        <div className="bg-slate-700/50 rounded-lg p-4">
                                            <p className="text-white text-sm mb-2">Generated Response</p>
                                            <p className="text-slate-300 text-xs leading-relaxed">เรียน คุณลูกค้า<br/>ขอบคุณที่สนใจสินค้าของเรา...<br/><br/>ราคาพิเศษสำหรับคุณ:<br/>- Model X-200: ฿500/ชิ้น<br/>- ขั้นต่ำ: 100 ชิ้น<br/>- การจัดส่ง: ฟรี</p>
                                        </div>
                                    </div>
                                    
                                    {/* Analytics */}
                                    <div className="bg-slate-800 rounded-2xl p-6">
                                        <h3 className="text-white font-bold mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-emerald-400" />Analytics</h3>
                                        <div className="space-y-4">
                                            <div className="bg-slate-700/50 rounded-lg p-3">
                                                <p className="text-slate-400 text-xs mb-1">Emails Processed Today</p>
                                                <p className="text-white text-2xl font-bold">47</p>
                                            </div>
                                            <div className="bg-slate-700/50 rounded-lg p-3">
                                                <p className="text-slate-400 text-xs mb-1">Avg Response Time</p>
                                                <p className="text-white text-2xl font-bold">1.2 นาที</p>
                                            </div>
                                            <div className="bg-slate-700/50 rounded-lg p-3">
                                                <p className="text-slate-400 text-xs mb-1">Auto-Approved</p>
                                                <p className="text-white text-2xl font-bold">78%</p>
                                            </div>
                                        </div>
                                    </div>
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
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">ทำไมต้องเรา</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">AI Email Automation ที่ดีที่สุด</h2>
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

            {/* SETUP STEPS */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">ขั้นตอน</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">เริ่มใช้งานได้ใน 4 ขั้นตอน</h2>
                        </div>
                    </FadeUp>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="text-center relative">
                                    {i < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-slate-100" />
                                    )}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-lg">
                                        {s.n}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                                    <p className="text-slate-600 text-sm">{s.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">เสียงจากลูกค้า</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">ลูกค้า B2B ใช้งานจริง</h2>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <StaggerItem key={i}>
                                <FadeUp delay={i * 0.1}>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                        <div className="flex mb-3">
                                            {[...Array(t.rating)].map((_, j) => (
                                                <Star key={j} className="w-4 h-4 text-yellow-500 fill-current" />
                                            ))}
                                        </div>
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
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">คำถาม</span>
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
