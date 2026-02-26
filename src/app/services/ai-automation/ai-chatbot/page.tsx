"use client";

import { metadata } from "./metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Star, MessageCircle, Bot, Zap, Link2, BarChart3, Clock, ArrowRight, Shield } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "../../website-design/AnimatedSection";
import { FaqAndForm } from "../../website-design/PackageSelectClient";
import { ScrollToFormButton } from "../../website-design/PackageSelectClient";
import { useState } from "react";

const LINE_URL = "https://lin.ee/IlvhwZV";

const whyUs = [
    { icon: Clock, color: "bg-violet-100 text-violet-600", title: "24/7 ไม่มีวันหยุด", desc: "AI ทำงานตลอดเวลา ไม่มีวันหยุด ลูกค้าติดต่อได้ทุกเมื่อ" },
    { icon: Zap, color: "bg-amber-100 text-amber-600", title: "ตอบทันที < 1 วินาที", desc: "AI ตอบกลับทันทีหลังลูกค้าพิมพ์ ไม่ต้องรอ Admin ทำให้ลูกค้าไม่เบื่อ" },
    { icon: MessageCircle, color: "bg-emerald-100 text-emerald-600", title: "เข้าใจบริบท", desc: "AI เข้าใจความหมาย ไม่ใช่แค่จับคำ สามารถสนทนาธรรมชาติได้" },
    { icon: BarChart3, color: "bg-blue-100 text-blue-600", title: "Analytics Dashboard", desc: "ดูสถิติการสนทนา คำถามยอดนิยม และ Conversion Rate แบบ Real-time" },
];

const steps = [
    { n: "01", title: "Upload FAQ", desc: "เพิ่มคำถาม-คำตอบ หรือให้ AI อ่านจากเว็บ/เอกสารของคุณ" },
    { n: "02", title: "เชื่อมต่อแพลตฟอร์ม", desc: "เชื่อม LINE Official Account, Facebook Page หรือ Instagram" },
    { n: "03", title: "Custom Flow", desc: "กำหนดการทำงานพิเศษ เช่น ส่งโปรโมชั่น หรือส่งข้อมูลให้ Admin" },
    { n: "04", title: "Go Live", desc: "เปิดใช้งาน AI Chatbot 24 ชั่วโมง ติดตามผลได้จาก Dashboard" },
];

const testimonials = [
    { name: "คุณสมศรี", biz: "ร้านอาหาร", text: "ลูกค้าถามเรื่องเมนู ที่อยู่ โปรโมชั่นตอนดึกๆ ตอนนี้ AI ตอบให้หมด ไม่ต้องตื่นมาดูเอง", rating: 5 },
    { name: "คุณวีระ", biz: "คลินิกเสริมความงาม", text: "คนนัดหมายผ่าน LINE เยอะมาก AI ช่วยตอบเรื่องเวลา แพ็คเกจ ทำให้ทีมมีเวลาดูแลลูกค้ามากขึ้น", rating: 5 },
    { name: "คุณจิตรา", biz: "สปา", text: "AI ตอบคำถามซ้ำๆ อย่างราคา บริการ ได้แม่นยำ ลูกค้าประทับใจว่าตอบไวมาก", rating: 5 },
];

const faqs = [
    { q: "AI Chatbot ต่างจาก Chatbot ธรรมดาอย่างไร?", a: "AI Chatbot เข้าใจบริบทของการสนทนา ไม่ใช่แค่จับคำสำคัญ สามารถตอบคำถามที่หลากหลายได้โดยไม่ต้องกำหนดทุก pattern ล่วงหน้า" },
    { q: "ใช้เวลาติดตั้งนานแค่ไหน?", a: "แพ็คเกจ Starter พร้อมใช้งานใน 5-7 วัน Business 14-21 วัน ขึ้นอยู่กับจำนวน FAQ และ Flow ที่ต้องการ" },
    { q: "ถ้า AI ตอบผิดจะเกิดอะไรขึ้น?", a: "ระบบมีการตั้ง Confidence Threshold ถ้า AI ไม่แน่ใจจะส่งต่อให้ Admin ทันที ลูกค้าไม่รู้สึกถูกทิ้ง" },
    { q: "รองรับกี่ภาษา?", a: "รองรับภาษาไทยและอังกฤษในทุกแพ็คเกจ และภาษาจีนสำหรับแพ็คเกจ Enterprise" },
];

export default function AiChatbotPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const packages = [
        {
            name: "Starter",
            price: isAnnual ? "9,900" : "15,900",
            originalPrice: isAnnual ? "15,000" : "25,000",
            badge: null,
            description: "เหมาะกับร้านค้า คลินิก ธุรกิจเริ่มต้น",
            Icon: MessageCircle,
            accentColor: "text-slate-900",
            borderClass: "border-slate-200",
            badgeBg: "bg-slate-900",
            btnClass: "bg-slate-900 text-white hover:bg-slate-800",
            popular: false,
            features: [
                "AI Chatbot 1 แพลตฟอร์ม (LINE หรือ FB)",
                "ตอบคำถาม FAQ อัตโนมัติ 30 ชุด",
                "ส่งแจ้งเตือน Admin เมื่อตอบไม่ได้",
                "บันทึก Lead ลง Google Sheets",
                "รายงานสถิติรายสัปดาห์",
                `ดูแลระบบ ${isAnnual ? "1 ปี" : "ตลอดชีพ"} หลังส่งมอบ`,
            ],
        },
        {
            name: "Business",
            price: isAnnual ? "15,900" : "22,900",
            originalPrice: isAnnual ? "25,000" : "35,000",
            badge: "ยอดนิยมสุด",
            description: "สำหรับธุรกิจ SME ที่ต้องการ Chatbot เต็มรูปแบบ",
            Icon: Bot,
            accentColor: "text-violet-600",
            borderClass: "border-violet-500 ring-2 ring-violet-500/20",
            badgeBg: "bg-violet-600",
            btnClass: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl",
            popular: true,
            features: [
                "AI Chatbot ทุกแพลตฟอร์ม (LINE + FB + IG)",
                "ตอบคำถามไม่จำกัดชุด",
                "Lead Qualification อัตโนมัติ",
                "ส่งใบเสนอราคา / Catalog อัตโนมัติ",
                "เชื่อมต่อ CRM / Google Sheets",
                "Dashboard Real-time + ดูแล 90 วัน",
                `ดูแลระบบ ${isAnnual ? "1 ปี" : "ตลอดชีพ"} หลังส่งมอบ`,
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
                "Chatbot ออกแบบเฉพาะองค์กร",
                "เชื่อมต่อระบบ ERP / SAP",
                "Multi-language Support",
                "Custom AI Training",
                "SLA 99.9% Uptime",
                `Support ประจำ 24/7 (${isAnnual ? "1 ปี" : "ตลอดชีพ"})`,
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO */}
            <section className="relative pt-28 pb-20 overflow-hidden bg-[#0B0F19]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeUp delay={0} className="pb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-semibold mb-8">
                                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" /></span>
                                AI Chatbot — ตอบลูกค้าอัตโนมัติ
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                                AI Chatbot
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400">24/7 ไม่มีวันหยุด</span>
                                ตอบไว แม่นยำ
                            </h1>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                                ระบบ AI Chatbot ตอบลูกค้าอัตโนมัติทุกแพลตฟอร์ม LINE, Facebook, Instagram — ลดภาระ Admin 70% เพิ่ม Conversion 2-3 เท่า
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-lg shadow-violet-500/30 hover:scale-[1.02] transition-all">
                                    <MessageCircle className="w-5 h-5" />
                                    ปรึกษาฟรี
                                </a>
                                <a href="#packages" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                    <BarChart3 className="w-5 h-5" />
                                    ดูแพ็คเกจ
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />ไม่ต้องจ้างพนักงานเพิ่ม</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />ติดตั้งง่าย 5-7 วัน</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />รองรับภาษาไทย 100%</div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2} className="relative">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">LINE Official Account</span>
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="bg-slate-800/50 rounded-xl p-3">
                                                <p className="text-slate-300 text-sm mb-2">ลูกค้า</p>
                                                <p className="text-white">มีโปรโมชั่นอะไรบ้างครับ</p>
                                            </div>
                                            <div className="bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-xl p-3 border border-violet-500/30">
                                                <p className="text-slate-300 text-sm mb-2">AI Chatbot</p>
                                                <p className="text-white">สวัสดีครับ โปรโมชั่นเดือนนี้มี:<br/>✨ ลด 20% บริการ Premium<br/>🎁 แถมฟรี 1 เดือน<br/>ต้องการสอบถามเพิ่มเติมไหมครับ</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-3 py-1 bg-violet-600 text-white text-xs rounded-full">สนใจ</button>
                                            <button className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">ขอข้อมูล</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-16 bg-gradient-to-br from-violet-600 to-cyan-600">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[{ v: "24/7", l: "ทำงานไม่หยุด" }, { v: "< 1s", l: "ตอบกลับ" }, { v: "70%", l: "ลด Admin" }, { v: "2-3×", l: "เพิ่ม Conversion" }].map(s => (
                        <div key={s.l}><p className="text-4xl font-black text-white">{s.v}</p><p className="text-white/70 text-sm mt-1">{s.l}</p></div>
                    ))}
                </div>
            </section>

            {/* PACKAGES */}
            <section id="packages" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">แพ็คเกจ</span>
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
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">วิธีทำงาน</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">4 ขั้นตอน เริ่มใช้ AI Chatbot</h2>
                        </div>
                    </FadeUp>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="text-center relative">
                                    {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-slate-200" />}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 text-white flex items-center justify-center font-black text-xl shadow-lg">{s.n}</div>
                                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                                    <p className="text-slate-600 text-sm">{s.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">ทำไมต้องเรา</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">AI Chatbot ที่ต่างจากที่อื่น</h2>
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
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">เสียงจากลูกค้า</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">ลูกค้าพูดถึงเรา</h2>
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
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">คำถาม</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">คำถามที่พบบ่อย</h2>
                        </div>
                    </FadeUp>
                    <FaqAndForm faqs={faqs} serviceId="ai-chatbot" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
