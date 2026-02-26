"use client";

import { metadata } from "./metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Star, Bot, Zap, ArrowRight, BarChart3, Clock, Puzzle, Shield } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "../../website-design/AnimatedSection";
import { FaqAndForm } from "../../website-design/PackageSelectClient";
import { ScrollToFormButton } from "../../website-design/PackageSelectClient";
import { useState } from "react";

const LINE_URL = "https://lin.ee/IlvhwZV";

const whyUs = [
    { icon: Puzzle, color: "bg-emerald-100 text-emerald-600", title: "1000+ แอปพลิเคชัน", desc: "รองรับทุกแอปที่คุณใช้ Google Sheets, LINE, Slack, Gmail และอื่นๆ อีกมากมาย" },
    { icon: Zap, color: "bg-amber-100 text-amber-600", title: "สร้างได้ 5 นาที", desc: "ไม่ต้องเขียนโค้ด แค่เลือก Trigger + Action และ Map ข้อมูล ปุ่มเดียวเสร็จ" },
    { icon: Bot, color: "bg-violet-100 text-violet-600", title: "AI ช่วย Map ข้อมูล", desc: "AI แนะนำการ Map ข้อมูลอัตโนมัติ ไม่ต้องทอยสมองเอง" },
    { icon: Clock, color: "bg-blue-100 text-blue-600", title: "ทำงาน 24/7 ไม่มีหยุด", desc: "Workflow ทำงานอัตโนมัติตลอดเวลา แม้คุณหลับอยู่" },
];

const steps = [
    { n: "01", title: "เลือก Trigger", desc: "เลือกเหตุการณ์เริ่มต้น เช่น มี Order ใหม่, มีแบบฟอร์มใหม่, มีอีเมลใหม่" },
    { n: "02", title: "เลือก Action", desc: "เลือกสิ่งที่ต้องการให้ทำ เช่น ส่ง LINE, บันทึก Google Sheets, ส่งอีเมล" },
    { n: "03", title: "Map ข้อมูล", desc: "คลิกเลือกข้อมูลจาก Trigger ไปยัง Action แค่ 2-3 คลิก" },
    { n: "04", title: "เปิดใช้งาน", desc: "ทดสอบ Workflow และเปิดใช้งานได้ทันที ติดตามผลได้จาก Dashboard" },
];

const testimonials = [
    { name: "คุณวีระ", biz: "ร้านออนไลน์", text: "ทำเว็บมี Order ใหม่ ส่ง LINE พร้อมรายละเอียดอัตโนมัติเลย ไม่ต้องมานั่งดูทุกวันอีก สะดวกมาก", rating: 5 },
    { name: "คุณจิตรา", biz: "บริษัทคอนสตรัคชั่น", text: "เชื่อม Google Form กับ Google Sheets และส่งแจ้งเตือน Team ทุกคน ทำงานเร็วขึ้นเยอะ", rating: 5 },
    { name: "คุณสมศรี", biz: "อสังหาริมทรัพย์", text: "ลูกค้ากรอกแบบฟอร์มสอบถาม ระบบส่งข้อมูลไปยัง Sales และ CRM ทันที ไม่พลาด Lead แน่นอน", rating: 5 },
];

const faqs = [
    { q: "ใช้ยากไหม? ต้องเขียนโค้ดไหม?", a: "ไม่ต้องเขียนโค้ดเลย ใช้ Drag & Drop และคลิกเลือกเท่านั้น ทีมงานจะสอนใช้งานให้ฟรี" },
    { q: "รองรับแอปอะไรบ้าง?", a: "รองรับ 1000+ แอป Google Workspace, Microsoft 365, LINE, Slack, Notion, Airtable และอื่นๆ" },
    { q: "สร้าง Workflow ได้กี่ตัว?", a: "แพ็คเกจ Starter สร้างได้ 10 Workflow, Business ไม่จำกัด สามารถเพิ่มได้ตลอด" },
    { q: "ถ้าเกิดข้อผิดพลาดจะทำอย่างไร?", a: "ระบบจะแจ้งเตือนทันทีพร้อม Log ให้ตรวจสอบ มีทีมช่วยแก้ไข 24 ชั่วโมง" },
];

export default function AiWorkflowPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const packages = [
        {
            name: "Starter",
            price: isAnnual ? "9,900" : "15,900",
            originalPrice: isAnnual ? "15,000" : "25,000",
            badge: null,
            description: "เหมาะกับธุรกิจที่เริ่มใช้ Automation 10-20 งาน/เดือน",
            Icon: Zap,
            accentColor: "text-slate-900",
            borderClass: "border-slate-200",
            badgeBg: "bg-slate-900",
            btnClass: "bg-slate-900 text-white hover:bg-slate-800",
            popular: false,
            features: [
                "สร้าง Workflow ได้ 10 ตัว",
                "รันงานได้ 1,000 ครั้ง/เดือน",
                "เชื่อมต่อได้ 100+ แอป",
                "Trigger และ Action พื้นฐาน",
                "Dashboard สถิติรายเดือน",
                `ดูแลระบบ ${isAnnual ? "1 ปี" : "ตลอดชีพ"} หลังส่งมอบ`,
            ],
        },
        {
            name: "Business",
            price: isAnnual ? "15,900" : "22,900",
            originalPrice: isAnnual ? "25,000" : "35,000",
            badge: "ยอดนิยมสุด",
            description: "เหมาะกับธุรกิจที่ต้องการ Automation แบบเต็มรูปแบบ",
            Icon: Bot,
            accentColor: "text-emerald-600",
            borderClass: "border-emerald-500 ring-2 ring-emerald-500/20",
            badgeBg: "bg-emerald-600",
            btnClass: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl",
            popular: true,
            features: [
                "สร้าง Workflow ไม่จำกัด",
                "รันงานไม่จำกัด",
                "เชื่อมต่อได้ 1000+ แอป",
                "Advanced Trigger & Action",
                "Custom Logic & Conditions",
                "Multi-step Workflows + ดูแล 90 วัน",
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
            accentColor: "text-blue-600",
            borderClass: "border-slate-200",
            badgeBg: "bg-blue-600",
            btnClass: "bg-blue-600 text-white hover:bg-blue-700",
            popular: false,
            features: [
                "On-premise Deployment",
                "Custom App Integration",
                "Dedicated Server",
                "SSO & Advanced Security",
                "SLA 99.99% Uptime",
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-600/15 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <FadeUp delay={0} className="pb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-8">
                                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" /></span>
                                AI Workflow Automation — Zapier Alternative
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                                เชื่อมต่อทุกแอป
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">ทำงานอัตโนมัติ</span>
                                ไม่ต้องเขียนโค้ด
                            </h1>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                                สร้าง Workflow อัตโนมัติเชื่อมต่อ 1000+ แอป Google Sheets, LINE, Gmail และอื่นๆ ลดงานซ้ำ 90% เพิ่มประสิทธิภาพทีม 3 เท่า
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-full shadow-lg shadow-emerald-500/30 hover:scale-[1.02] transition-all">
                                    <Zap className="w-5 h-5" />
                                    ปรึกษาฟรี
                                </a>
                                <a href="#packages" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                    <BarChart3 className="w-5 h-5" />
                                    ดูแพ็คเกจ
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />ไม่ต้องเขียนโค้ด</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />1000+ แอป</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />ทำงาน 24/7</div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2} className="relative">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Workflow Builder</span>
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="bg-slate-800/50 rounded-xl p-3 border border-emerald-500/30">
                                                <p className="text-emerald-400 text-xs mb-2">Trigger: Google Form</p>
                                                <p className="text-white text-sm">มีคนกรอกแบบฟอร์มใหม่</p>
                                            </div>
                                            <div className="flex justify-center">
                                                <ArrowRight className="w-5 h-5 text-slate-500" />
                                            </div>
                                            <div className="bg-slate-800/50 rounded-xl p-3 border border-teal-500/30">
                                                <p className="text-teal-400 text-xs mb-2">Action: LINE Notify</p>
                                                <p className="text-white text-sm">ส่งข้อความแจ้งเตือน</p>
                                            </div>
                                            <div className="flex justify-center">
                                                <ArrowRight className="w-5 h-5 text-slate-500" />
                                            </div>
                                            <div className="bg-slate-800/50 rounded-xl p-3 border border-cyan-500/30">
                                                <p className="text-cyan-400 text-xs mb-2">Action: Google Sheets</p>
                                                <p className="text-white text-sm">บันทึกข้อมูลอัตโนมัติ</p>
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
            <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[{ v: "1000+", l: "แอปพลิเคชัน" }, { v: "5 นาที", l: "สร้าง Workflow" }, { v: "90%", l: "ลดงานซ้ำ" }, { v: "24/7", l: "ทำงานอัตโนมัติ" }].map(s => (
                        <div key={s.l}><p className="text-4xl font-black text-white">{s.v}</p><p className="text-white/70 text-sm mt-1">{s.l}</p></div>
                    ))}
                </div>
            </section>

            {/* PACKAGES */}
            <section id="packages" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">แพ็คเกจ</span>
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
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">วิธีทำงาน</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">สร้าง Workflow อัตโนมัติ 4 ขั้นตอน</h2>
                        </div>
                    </FadeUp>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="text-center relative">
                                    {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-slate-200" />}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center font-black text-xl shadow-lg">{s.n}</div>
                                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                                    <p className="text-slate-600 text-sm">{s.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* APP INTEGRATIONS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Integrations</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">เชื่อมต่อได้ทุกแอปที่คุณใช้</h2>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-slate-50 rounded-3xl p-8">
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                                    {[
                                        { name: "Google Sheets", icon: "📊" },
                                        { name: "Gmail", icon: "📧" },
                                        { name: "LINE", icon: "💬" },
                                        { name: "Slack", icon: "🔔" },
                                        { name: "Notion", icon: "📝" },
                                        { name: "Airtable", icon: "🗂️" },
                                        { name: "Facebook", icon: "📘" },
                                        { name: "Instagram", icon: "📷" },
                                        { name: "Shopify", icon: "🛍️" },
                                        { name: "WordPress", icon: "🌐" },
                                        { name: "Calendly", icon: "📅" },
                                        { name: "Zoom", icon: "🎥" },
                                    ].map((app, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl hover:shadow-md transition-shadow">{app.icon}</div>
                                            <p className="text-xs text-slate-600">{app.name}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-8">
                                    <p className="text-slate-600">และอีก 1000+ แอปพลิเคชัน...</p>
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
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">ทำไมต้องเรา</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Workflow Automation ที่ดีที่สุด</h2>
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
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">เสียงจากลูกค้า</span>
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
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">คำถาม</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">คำถามที่พบบ่อย</h2>
                        </div>
                    </FadeUp>
                    <FaqAndForm faqs={faqs} serviceId="ai-workflow" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
