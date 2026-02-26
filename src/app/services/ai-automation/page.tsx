import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Clock, Shield, Star, Zap, MessageCircle, ArrowRight, Bot, Link2, BarChart3 } from "lucide-react";
import { packages, whyUs, steps, testimonials, faqs } from "./data";
import { FadeUp, StaggerChildren, StaggerItem } from "../website-design/AnimatedSection";
import { ScrollToFormButton, FaqAndForm } from "../website-design/PackageSelectClient";

export const metadata = {
    title: "AI Automation & Chatbot | ระบบ AI ตอบลูกค้าอัตโนมัติ 24/7 | Best Solutions",
    description: "ระบบ AI Chatbot และ Automation ที่ทำงานแทนคนได้ 24 ชั่วโมง ตอบลูกค้าเร็วขึ้น 10 เท่า ลด Admin 60-80% รองรับ LINE, Facebook, Instagram",
    alternates: { canonical: "https://www.bestsolutionscorp.com/services/ai-automation" },
    openGraph: {
        title: "AI Automation & Chatbot | ระบบ AI ตอบลูกค้าอัตโนมัติ 24/7",
        description: "ระบบ AI ทำงานแทนคนได้ 24 ชั่วโมง ลด Admin 60-80% เพิ่ม Conversion 2-3 เท่า",
        url: "https://www.bestsolutionscorp.com/services/ai-automation",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "AI Automation Best Solutions" }],
    },
};

const LINE_URL = "https://lin.ee/IlvhwZV";

export default function AiAutomationLandingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO */}
            <section className="relative pt-28 overflow-hidden bg-[#0B0F19]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <FadeUp delay={0} className="pb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-semibold mb-8">
                                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" /></span>
                                บริการใหม่ — AI Automation
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                                ให้ AI ทำงาน
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">แทนคุณ 24/7</span>
                                ไม่มีวันหยุด
                            </h1>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                                ระบบ AI Chatbot &amp; Automation ที่ตอบลูกค้าเร็วกว่า 10 เท่า ลดงาน Admin ลง 60-80% และไม่พลาดโอกาสขายแม้แต่ครั้งเดียว
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-lg shadow-violet-500/30 hover:scale-[1.02] transition-all">
                                    <MessageCircle className="w-5 h-5" />ปรึกษาฟรีผ่าน LINE
                                </a>
                                <a href="#packages" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition-all">
                                    ดูแพ็คเกจ <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { icon: Clock, label: "ทำงาน 24/7 ไม่หยุด", color: "text-violet-400" },
                                    { icon: Zap, label: "ตอบลูกค้าภายใน 1 วินาที", color: "text-cyan-400" },
                                    { icon: Shield, label: "ระบบเสถียร Uptime 99.9%", color: "text-emerald-400" },
                                ].map(({ icon: Icon, label, color }) => (
                                    <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                                        <Icon className={`w-3.5 h-3.5 ${color}`} />{label}
                                    </div>
                                ))}
                            </div>
                        </FadeUp>

                        {/* Visual: AI Dashboard mockup */}
                        <FadeUp delay={0.2} className="relative flex justify-center lg:justify-end pb-0">
                            <div className="relative w-full max-w-[520px]">
                                <div className="bg-[#1a1f2e] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                                    {/* Window bar */}
                                    <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-b border-white/10">
                                        <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/80" /><div className="w-3 h-3 rounded-full bg-yellow-500/80" /><div className="w-3 h-3 rounded-full bg-green-500/80" /></div>
                                        <div className="flex-1 mx-4 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 font-mono">AI Automation Dashboard</div>
                                    </div>
                                    {/* Dashboard content */}
                                    <div className="p-5 space-y-3">
                                        {/* Stats row */}
                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { label: "ตอบอัตโนมัติ", value: "94.2%", color: "text-violet-400" },
                                                { label: "ตอบไปแล้ว", value: "1,248", color: "text-cyan-400" },
                                                { label: "Lead ใหม่", value: "37", color: "text-emerald-400" },
                                            ].map((s) => (
                                                <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                                                    <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                                                    <p className="text-white/40 text-[10px] mt-0.5">{s.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Chat preview */}
                                        <div className="bg-white/5 rounded-xl p-4 space-y-3">
                                            <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Recent Conversations</p>
                                            {[
                                                { user: "ลูกค้า A", msg: "สนใจสอบถามราคาครับ", time: "13:42", status: "AI ตอบแล้ว" },
                                                { user: "ลูกค้า B", msg: "ขอใบเสนอราคาได้เลยไหม", time: "13:38", status: "ส่งใบเสนอราคาแล้ว" },
                                                { user: "ลูกค้า C", msg: "มีบริการหลังการขายไหม?", time: "13:21", status: "AI ตอบแล้ว" },
                                            ].map((c, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">{c.user.slice(-1)}</div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-white/80 text-xs font-semibold truncate">{c.msg}</p>
                                                        <p className="text-violet-400 text-[10px]">{c.status}</p>
                                                    </div>
                                                    <p className="text-white/30 text-[10px] shrink-0">{c.time}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Bottom bar */}
                                        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2.5">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <p className="text-white/50 text-xs">AI กำลังทำงาน — ตอบไปแล้ว 1,248 ข้อความวันนี้</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* PAIN POINTS */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">ปัญหาที่คุณอาจเจออยู่</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">คุณกำลังเสียเงิน<br />โดยไม่รู้ตัวทุกวัน</h2>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-2 gap-5">
                        {[
                            { title: "ตอบช้า = เสียลูกค้า", desc: "ลูกค้าทักมาแล้วรอนาน 2-3 ชั่วโมง? คู่แข่งรับไปแล้ว ทุก 1 นาทีที่ช้าคือโอกาสที่หายไป" },
                            { title: "จ้างทีม Admin ราคาแพง", desc: "เสียเงินเดือนพนักงานตอบแชท 15,000-25,000 บาท/คน/เดือน ทั้งที่ AI ทำได้ดีกว่าและไม่ลาป่วย" },
                            { title: "งานซ้ำซ้อนกินเวลาทีม", desc: "ทีมเสียเวลาตอบคำถามเดิมซ้ำๆ แทนที่จะโฟกัสงานที่สร้างคุณค่าจริงๆ ให้ธุรกิจ" },
                            { title: "พลาด Lead นอกเวลาทำการ", desc: "ลูกค้าทักตีสี่ ตอนเช้ามาดูปรากฏว่าเขาซื้อที่อื่นไปแล้ว ระบบ AI จะไม่ให้เกิดเหตุการณ์นี้อีก" },
                        ].map((p, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex gap-5">
                                    <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                                        <span className="text-red-500 font-black text-lg">!</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg mb-1">{p.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">ฟีเจอร์หลัก</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">ระบบ AI ที่ทำได้ทุกอย่าง</h2>
                            <p className="text-slate-500 mt-3 max-w-xl mx-auto">ครบทุก Workflow ที่ธุรกิจต้องการ ตั้งแต่รับ Lead จนปิดการขาย</p>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: MessageCircle, color: "bg-violet-100 text-violet-600", title: "AI Chatbot 24/7", desc: "ตอบลูกค้าอัตโนมัติด้วย AI ที่เข้าใจบริบทและเรียนรู้จากข้อมูลธุรกิจของคุณ" },
                            { icon: Bot, color: "bg-cyan-100 text-cyan-600", title: "Lead Qualification", desc: "คัดกรอง Lead อัตโนมัติ ส่งต่อเฉพาะลูกค้าที่พร้อมซื้อจริงให้ทีมขาย" },
                            { icon: Zap, color: "bg-amber-100 text-amber-600", title: "Auto Follow-up", desc: "ส่ง Follow-up ใบเสนอราคาและข้อความอัตโนมัติตามเวลาที่ตั้งไว้ ไม่พลาดทุก Lead" },
                            { icon: Link2, color: "bg-emerald-100 text-emerald-600", title: "Multi-Platform", desc: "เชื่อมต่อ LINE, Facebook, Instagram ในระบบเดียว บริหารง่าย ไม่ต้องสลับแอป" },
                            { icon: BarChart3, color: "bg-rose-100 text-rose-600", title: "Google Sheets / CRM", desc: "บันทึก Lead และข้อมูลลูกค้าลง Google Sheets หรือ CRM ของคุณอัตโนมัติ" },
                            { icon: Clock, color: "bg-purple-100 text-purple-600", title: "Real-time Dashboard", desc: "ติดตามสถิติการสนทนา Conversion Rate และประสิทธิภาพ AI แบบ Real-time" },
                        ].map((f, i) => (
                            <StaggerItem key={i}>
                                <div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all">
                                    <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <f.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{f.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-20 bg-[#0B0F19] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-400 font-bold text-xs uppercase tracking-widest">ทำไมต้องเรา</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">ผลลัพธ์ที่ลูกค้าได้รับจริง</h2>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {whyUs.map((w, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all">
                                    <div className={`w-12 h-12 rounded-xl ${w.color} flex items-center justify-center mb-4`}>
                                        <w.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-white text-lg mb-2">{w.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "60-80%", label: "ลดงาน Admin" },
                            { value: "10×", label: "ตอบเร็วขึ้น" },
                            { value: "2-3×", label: "เพิ่ม Conversion" },
                            { value: "24/7", label: "ทำงานไม่หยุด" },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{s.value}</p>
                                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PACKAGES */}
            <section id="packages" className="py-20 bg-slate-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">แพ็คเกจ</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">เลือกแพ็คเกจที่เหมาะกับคุณ</h2>
                            <p className="text-slate-500 mt-3">ราคาลดพิเศษเฉพาะลูกค้าที่ติดต่อเดือนนี้เท่านั้น</p>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-3 gap-6">
                        {packages.map((pkg, i) => (
                            <StaggerItem key={i}>
                                <div className={`relative bg-white rounded-3xl p-8 border-2 ${pkg.borderClass} shadow-lg flex flex-col h-full`}>
                                    {pkg.badge && (
                                        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full ${pkg.badgeBg} text-white text-xs font-bold whitespace-nowrap shadow-lg`}>
                                            {pkg.badge}
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <div className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 ${pkg.accentColor}`}>
                                            <pkg.Icon className="w-6 h-6" />
                                        </div>
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
                                        {pkg.price !== "ติดต่อเรา" && <p className="text-slate-400 text-sm">ราคาครั้งเดียว (one-time)</p>}
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

            {/* HOW WE WORK */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">ขั้นตอน</span>
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
                                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white flex items-center justify-center text-xl font-black shadow-lg mb-4">
                                        {s.n}
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed px-2">{s.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeUp>
                        <div className="text-center mb-12">
                            <span className="text-violet-600 font-bold text-xs uppercase tracking-widest">รีวิวจากลูกค้า</span>
                            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">ลูกค้าพูดถึงเราว่าอย่างไร</h2>
                        </div>
                    </FadeUp>
                    <StaggerChildren className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <StaggerItem key={i}>
                                <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm h-full flex flex-col">
                                    <div className="flex gap-1 mb-4">
                                        {Array(t.rating).fill(0).map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 leading-relaxed flex-1 mb-5">&ldquo;{t.text}&rdquo;</p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                                            {t.name.slice(2, 4)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                                            <p className="text-slate-500 text-xs">{t.biz}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* FAQ + FORM */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FaqAndForm faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
