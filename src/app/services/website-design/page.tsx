import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Clock, Shield, Star, Users, MessageCircle, ArrowRight } from "lucide-react";
import { packages, whyUs, steps, examples, testimonials, faqs } from "./data";

export const metadata = {
    title: "เว็บไซต์ 5,000 บาท! พร้อมใช้งานใน 7 วัน | Best Solutions",
    description: "รับทำเว็บไซต์ราคาถูกที่สุดในตลาด เริ่มต้นเพียง 5,000 บาท พร้อมใช้งานใน 7 วัน รองรับมือถือ 100%",
    alternates: { canonical: "https://www.bestsolutionscorp.com/services/website-design" },
    openGraph: {
        title: "เว็บไซต์ 5,000 บาท! พร้อมใช้งานใน 7 วัน",
        description: "รับทำเว็บไซต์ราคาถูกที่สุดในตลาด เริ่มต้นเพียง 5,000 บาท",
        url: "https://www.bestsolutionscorp.com/services/website-design",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "เว็บไซต์ 5,000 บาท" }],
    },
};

const LINE_URL = "https://lin.ee/IlvhwZV";

export default function WebDesignLandingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO */}
            <section className="relative pt-28 overflow-hidden bg-[#0B0F19]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F51036]/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#25137A]/30 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <div className="pb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F51036]/10 border border-[#F51036]/30 text-[#F51036] text-sm font-semibold mb-8">
                                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F51036] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#F51036]" /></span>
                                รับเพียง 5 เว็บไซต์ต่อเดือน
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                                เว็บไซต์
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] via-orange-400 to-amber-400">เริ่มต้น 5,000 บาท!</span>
                                พร้อมใช้ใน 7 วัน
                            </h1>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                                ไม่ต้องจ่ายแพง ก็มีเว็บสวยงาม รองรับมือถือ 100% พร้อม SEO ไม่มีค่าใช้จ่ายแอบแฝง
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F51036] to-orange-500 text-white font-bold text-lg rounded-full shadow-lg shadow-red-500/30 hover:scale-[1.02] transition-all">
                                    <MessageCircle className="w-5 h-5" />ปรึกษาฟรีผ่าน LINE
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[{icon:Shield,label:"ดูแลเว็บไซต์หลังส่งมอบ 30 วัน",color:"text-green-400"},{icon:Clock,label:"7 วันเสร็จ",color:"text-blue-400"},{icon:Users,label:"500+ ลูกค้าไว้วางใจ",color:"text-purple-400"}].map(({icon:Icon,label,color})=>(
                                    <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                                        <Icon className={`w-3.5 h-3.5 ${color}`}/>{label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Browser mockup */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[520px]">
                                <div className="bg-[#1a1f2e] rounded-t-2xl border border-white/10 shadow-2xl overflow-hidden">
                                    <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-b border-white/10">
                                        <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/80"/><div className="w-3 h-3 rounded-full bg-yellow-500/80"/><div className="w-3 h-3 rounded-full bg-green-500/80"/></div>
                                        <div className="flex-1 mx-4 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 font-mono">www.yourwebsite.com</div>
                                    </div>
                                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-9 bg-white/5 border-b border-white/10 flex items-center px-4 gap-4">
                                            <div className="w-14 h-2.5 bg-[#F51036] rounded-full"/>
                                            <div className="flex gap-3 ml-auto">{[1,2,3,4].map(i=><div key={i} className="w-7 h-1.5 bg-white/20 rounded"/>)}</div>
                                        </div>
                                        <div className="absolute top-9 left-0 right-0 h-[55%] bg-gradient-to-br from-[#F51036]/20 to-[#25137A]/20 flex items-center px-6 gap-4">
                                            <div className="flex-1"><div className="w-3/4 h-4 bg-white/40 rounded mb-2"/><div className="w-1/2 h-3 bg-white/20 rounded mb-4"/><div className="w-24 h-6 bg-[#F51036] rounded-full"/></div>
                                            <div className="w-24 h-20 bg-white/10 rounded-xl"/>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-[35%] px-4 pb-3 flex gap-3 items-end">
                                            {[1,2,3].map(i=><div key={i} className="flex-1 bg-white/10 rounded-xl p-2"><div className="w-full h-2 bg-white/30 rounded mb-1.5"/><div className="w-2/3 h-1.5 bg-white/20 rounded"/></div>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-4 bg-[#1a1f2e] border-x border-b border-white/10 rounded-b-sm mx-4"/>
                                <div className="h-2 bg-[#0d1117] rounded-b-xl border-x border-b border-white/10"/>
                                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#F51036] to-orange-500 text-white rounded-2xl px-4 py-2 shadow-xl text-sm font-bold">✓ เสร็จใน 7 วัน</div>
                                <div className="absolute -bottom-2 -left-4 bg-white rounded-2xl px-4 py-2 shadow-xl text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <span className="text-[#F51036] text-lg font-black">฿5K</span><span className="text-slate-500 text-xs">เริ่มต้นเท่านี้!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-16">
                    <svg viewBox="0 0 1440 60" className="w-full fill-white" preserveAspectRatio="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/></svg>
                </div>
            </section>

            {/* PRICING */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#F51036] font-bold tracking-wider text-sm uppercase">แพ็คเกจราคา</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-3">เลือกแพ็คเกจที่เหมาะกับคุณ</h2>
                        <p className="text-slate-500 text-lg">ราคาถูกที่สุดในตลาด ไม่มีค่าใช้จ่ายแอบแฝง</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {packages.map((pkg, idx) => (
                            <div key={pkg.name} className={`relative rounded-3xl p-8 bg-white border-2 ${pkg.borderClass} shadow-lg hover:shadow-2xl transition-all ${idx === 1 ? "scale-[1.03]" : ""}`}>
                                {idx === 1 && pkg.badge && (<div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 ${pkg.badgeBg} text-white text-sm font-bold rounded-full shadow-lg`}>{pkg.badge}</div>)}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center ${pkg.accentColor}`}><pkg.Icon className="w-6 h-6"/></div>
                                    <div><h3 className="text-xl font-extrabold text-slate-900">{pkg.name}</h3><p className="text-slate-500 text-xs">{pkg.description}</p></div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className={`text-4xl font-black ${pkg.accentColor}`}>฿{pkg.price}</span>
                                        <span className="text-slate-400 line-through text-sm">฿{pkg.originalPrice}</span>
                                    </div>
                                    <div className="text-xs text-green-600 font-semibold mt-1">
                                        ประหยัด ฿{(parseInt(pkg.originalPrice.replace(",",""))-parseInt(pkg.price.replace(",",""))).toLocaleString()} จากราคาปกติ
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((f)=>(
                                        <li key={f} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5"/><span className="text-slate-700 text-sm leading-snug">{f}</span></li>
                                    ))}
                                </ul>
                                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] ${pkg.btnClass}`}>
                                    เลือกแพ็คเกจนี้ <ArrowRight className="w-4 h-4"/>
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-slate-400 text-sm mt-8">* ราคาเริ่มต้น สามารถปรับตามความต้องการได้ · ปรึกษาฟรีไม่มีค่าใช้จ่าย</p>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#F51036] font-bold tracking-wider text-sm uppercase">ทำไมต้องเรา</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">เราคือทางเลือกที่ดีที่สุด</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyUs.map(({icon:Icon,color,title,desc})=>(
                            <div key={title} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
                                <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mx-auto mb-5`}><Icon className="w-8 h-8"/></div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#F51036] font-bold tracking-wider text-sm uppercase">ขั้นตอน</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">เริ่มต้นง่ายๆ เพียง 4 ขั้นตอน</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                        {steps.map((s,i)=>(
                            <div key={s.n} className="relative flex flex-col items-center text-center px-4">
                                {i < steps.length-1 && <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-gradient-to-r from-[#F51036]/40 to-transparent"/>}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F51036] to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-500/20 mb-5 relative z-10">{s.n}</div>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXAMPLES */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#F51036] font-bold tracking-wider text-sm uppercase">ตัวอย่างผลงาน</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">เหมาะกับธุรกิจทุกประเภท</h2>
                        <p className="text-slate-500 mt-3">ไม่ว่าจะเป็นธุรกิจอะไร เราทำได้ทั้งหมด</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {examples.map((ex)=>(
                            <div key={ex.title} className="group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                                <div className={`aspect-[4/3] bg-gradient-to-br ${ex.gradient} relative flex flex-col items-center justify-center p-6`}>
                                    <div className="absolute top-0 left-0 right-0 h-7 bg-black/20 flex items-center px-3 gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-white/40"/><div className="w-2 h-2 rounded-full bg-white/40"/><div className="w-2 h-2 rounded-full bg-white/40"/>
                                        <div className="flex-1 mx-2 h-3 bg-white/20 rounded-full"/>
                                    </div>
                                    <span className="text-5xl mb-3 mt-4">{ex.emoji}</span>
                                    <div className="w-3/4 h-2.5 bg-white/50 rounded-full mb-2"/>
                                    <div className="w-1/2 h-2 bg-white/30 rounded-full mb-4"/>
                                    <div className="w-20 h-6 bg-white/30 rounded-full"/>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-extrabold text-slate-900 mb-1">{ex.title}</h3>
                                    <p className="text-slate-500 text-sm mb-3">{ex.desc}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {ex.tags.map(tag=><span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">{tag}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#F51036] font-bold tracking-wider text-sm uppercase">รีวิวลูกค้า</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">ลูกค้าพูดถึงเรา</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t)=>(
                            <div key={t.name} className="bg-slate-50 rounded-3xl p-8">
                                <div className="text-5xl text-slate-200 font-serif leading-none mb-4">"</div>
                                <div className="flex gap-0.5 mb-4">{[...Array(t.rating)].map((_,i)=><Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400"/>)}</div>
                                <p className="text-slate-700 leading-relaxed mb-6 text-[0.95rem]">{t.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F51036] to-orange-500 flex items-center justify-center text-white font-bold text-sm">{t.name.charAt(2)}</div>
                                    <div><div className="font-bold text-slate-900 text-sm">{t.name}</div><div className="text-slate-500 text-xs">{t.biz}</div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-[#F51036] font-bold tracking-wider text-sm uppercase">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">คำถามที่พบบ่อย</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq,i)=>(
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                <h3 className="font-extrabold text-slate-900 mb-2 flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#F51036]/10 text-[#F51036] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">Q</span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 leading-relaxed pl-9 text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#25137A] to-[#F51036] px-8 py-16 md:px-16 text-center relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"/>
                    <div className="relative z-10">
                        <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-3">พร้อมเริ่มต้นแล้วหรือยัง?</p>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                            เว็บไซต์ที่ดีสร้างได้<br className="hidden md:block"/>ในราคาที่คุณจ่ายได้
                        </h2>
                        <p className="text-white/70 mb-10 text-lg">ทักมาหาเราวันนี้ ปรึกษาฟรี ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#F51036] font-bold px-10 py-4 rounded-full hover:bg-slate-50 transition-colors shadow-xl text-lg">
                                <MessageCircle className="w-5 h-5"/>ทักมาหาเราผ่าน LINE
                            </a>
                        </div>
                        <p className="text-white/50 text-sm mt-8">ตอบทุกคำถามภายใน 5 นาที · เปิดบริการทุกวัน 9:00 - 21:00 น.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
