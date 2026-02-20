import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Monitor, TrendingUp, Search, Share2, FileText, CheckCircle, ChevronRight } from "lucide-react";

export const metadata = {
    title: "บริการของเรา | Best Solutions - Digital Marketing Agency",
    description: "รับทำเว็บไซต์ ยิงแอดโฆษณา ดูแลเพจโซเชียล รับทำ SEO และผลิตคอนเทนต์ ครบวงจรโดยทีมผู้เชี่ยวชาญ",
    alternates: { canonical: "https://www.bestsolutionscorp.com/services" },
    openGraph: {
        title: "บริการของเรา | Best Solutions",
        description: "รับทำเว็บไซต์ ยิงแอดโฆษณา ดูแลเพจโซเชียล รับทำ SEO และผลิตคอนเทนต์",
        url: "https://www.bestsolutionscorp.com/services",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Best Solutions - บริการ Digital Marketing" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการของเรา | Best Solutions",
        description: "รับทำเว็บไซต์ ยิงแอดโฆษณา ดูแลเพจโซเชียล รับทำ SEO และผลิตคอนเทนต์",
        images: ["/og-default.jpg"],
    },
};

const services = [
    {
        id: "web-design",
        label: "รับทำเว็บไซต์",
        title: "รับทำเว็บไซต์",
        subtitle: "Web Design & Development",
        icon: Monitor,
        gradient: "from-blue-500 to-indigo-600",
        lightBg: "bg-blue-50",
        lightBorder: "border-blue-100",
        accentText: "text-blue-600",
        accentBg: "bg-blue-600",
        problem: "เว็บไซต์เก่า โหลดช้า ไม่รองรับมือถือ ทำให้เสียลูกค้าทุกวัน",
        description: "ออกแบบและพัฒนาเว็บไซต์ที่สวยงาม ทันสมัย รองรับทุกอุปกรณ์ พร้อมโครงสร้าง SEO ที่ดีตั้งแต่ต้น",
        features: [
            "ออกแบบ UI/UX ที่ตอบโจทย์ลูกค้า",
            "Responsive รองรับมือถือ 100%",
            "โหลดเร็ว Core Web Vitals ผ่าน",
            "โครงสร้าง SEO-friendly",
            "ระบบ CMS แก้ไขเองได้",
            "SSL & Security มาตรฐาน",
        ],
        results: ["เพิ่ม Conversion Rate 2-5 เท่า", "ลด Bounce Rate ลงอย่างน้อย 30%", "ติดอันดับ Google ได้เร็วขึ้น"],
    },
    {
        id: "ads",
        label: "ยิงแอดโฆษณา",
        title: "ยิงแอดโฆษณา",
        subtitle: "Facebook & Google Ads",
        icon: TrendingUp,
        gradient: "from-[#F51036] to-orange-500",
        lightBg: "bg-red-50",
        lightBorder: "border-red-100",
        accentText: "text-[#F51036]",
        accentBg: "bg-[#F51036]",
        problem: "ยิงแอดไปเยอะ แต่ยอดขายไม่คุ้มทุน งบหายไปโดยไม่รู้สาเหตุ",
        description: "บริหารโฆษณา Facebook และ Google Ads อย่างมืออาชีพ เน้น ROI วัดผลได้จริง ไม่เผาเงินเปล่า",
        features: [
            "วิเคราะห์กลุ่มเป้าหมายแม่นยำ",
            "ออกแบบ Creative ที่ดึงดูดใจ",
            "A/B Testing ทุก Ad Set",
            "Retargeting เพิ่มโอกาสปิดการขาย",
            "รายงานผลรายสัปดาห์",
            "ปรับ Budget ให้คุ้มค่าสูงสุด",
        ],
        results: ["ROAS เฉลี่ย 3-8 เท่า", "ลด Cost per Lead ลง 40%", "เพิ่มยอดขายจาก Ads ได้จริง"],
    },
    {
        id: "social-media",
        label: "ดูแลเพจโซเชียล",
        title: "ดูแลเพจโซเชียล",
        subtitle: "Social Media Management",
        icon: Share2,
        gradient: "from-purple-500 to-pink-500",
        lightBg: "bg-purple-50",
        lightBorder: "border-purple-100",
        accentText: "text-purple-600",
        accentBg: "bg-purple-600",
        problem: "เพจไม่มีคนติดตาม โพสต์ไม่มีคนเห็น ลูกค้าทักมาแต่ตอบไม่ทัน",
        description: "ดูแลเพจ Facebook, Instagram, TikTok ครบวงจร ตั้งแต่วางแผนคอนเทนต์ โพสต์ ไปจนถึงตอบคอมเมนต์",
        features: [
            "วางแผน Content Calendar รายเดือน",
            "ออกแบบกราฟิกและเขียน Caption",
            "โพสต์ตรงเวลาสม่ำเสมอ",
            "ตอบ Comment & Inbox รวดเร็ว",
            "วิเคราะห์ Insight รายเดือน",
            "ดูแลทั้ง Facebook, IG, TikTok",
        ],
        results: ["เพิ่ม Follower 500-2,000+/เดือน", "Engagement Rate สูงกว่าค่าเฉลี่ย", "สร้าง Brand Awareness ต่อเนื่อง"],
    },
    {
        id: "seo",
        label: "รับทำ SEO",
        title: "รับทำ SEO",
        subtitle: "Search Engine Optimization",
        icon: Search,
        gradient: "from-emerald-500 to-teal-600",
        lightBg: "bg-emerald-50",
        lightBorder: "border-emerald-100",
        accentText: "text-emerald-600",
        accentBg: "bg-emerald-600",
        problem: "เว็บไซต์ติดหน้า 5-10 ของ Google ลูกค้าหาไม่เจอ ต้องพึ่งแอดตลอด",
        description: "ทำ SEO อย่างถูกต้องตามมาตรฐาน Google เน้น Keyword ที่ลูกค้าค้นหาจริง ให้ติดอันดับอย่างยั่งยืน",
        features: [
            "Keyword Research เชิงลึก",
            "On-Page SEO ทุกหน้า",
            "Technical SEO & Site Speed",
            "สร้าง Backlink คุณภาพสูง",
            "เขียน Content ที่ Google ชอบ",
            "ติดตามอันดับรายสัปดาห์",
        ],
        results: ["ติดหน้า 1 Google ภายใน 3-6 เดือน", "Traffic Organic เพิ่ม 200-500%", "ลดการพึ่งพาโฆษณาระยะยาว"],
    },
    {
        id: "content",
        label: "ผลิตคอนเทนต์",
        title: "ผลิตคอนเทนต์",
        subtitle: "Content Production",
        icon: FileText,
        gradient: "from-amber-500 to-orange-500",
        lightBg: "bg-amber-50",
        lightBorder: "border-amber-100",
        accentText: "text-amber-600",
        accentBg: "bg-amber-600",
        problem: "ไม่มีเวลาทำคอนเทนต์ รูปภาพไม่สวย วิดีโอไม่น่าดู ทำให้แบรนด์ดูไม่น่าเชื่อถือ",
        description: "ผลิตคอนเทนต์ครบทุกรูปแบบ ทั้งบทความ กราฟิก ภาพถ่ายสินค้า และวิดีโอ Short-form ที่ดึงดูดใจ",
        features: [
            "เขียนบทความ SEO คุณภาพสูง",
            "ออกแบบกราฟิก Infographic",
            "ถ่ายภาพสินค้า Product Photo",
            "ตัดต่อวิดีโอ Reels/TikTok",
            "Motion Graphics & Animation",
            "Script เขียน Copy โฆษณา",
        ],
        results: ["คอนเทนต์ที่ Viral ได้จริง", "ภาพสินค้าเพิ่มยอดขาย 30%+", "สร้าง Brand Identity ที่แข็งแกร่ง"],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-28 overflow-hidden bg-[#0B0F19]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F51036]/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#25137A]/30 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F51036] text-sm font-semibold mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F51036] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F51036]" />
                        </span>
                        บริการของเรา
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                        ครบทุกบริการ<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] via-orange-400 to-amber-400">
                            ที่ธุรกิจของคุณต้องการ
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        เราดูแลการตลาดออนไลน์ครบวงจร ตั้งแต่สร้างเว็บไซต์ ยิงแอด ดูแลโซเชียล ทำ SEO ไปจนถึงผลิตคอนเทนต์
                    </p>

                    {/* Service quick nav */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {services.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white text-sm font-medium transition-all"
                            >
                                <s.icon className="w-4 h-4" />
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services ── */}
            <div className="divide-y divide-slate-100">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section
                            key={service.id}
                            id={service.id}
                            className="scroll-mt-20 py-20 md:py-28"
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>

                                    {/* Text side */}
                                    <div className={isEven ? "" : "lg:col-start-2"}>
                                        {/* Number + label */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className={`text-5xl font-black bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent opacity-30 leading-none`}>
                                                0{index + 1}
                                            </span>
                                            <div>
                                                <span className={`text-xs font-bold uppercase tracking-widest ${service.accentText}`}>
                                                    {service.subtitle}
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                                    {service.title}
                                                </h2>
                                            </div>
                                        </div>

                                        {/* Problem badge */}
                                        <div className={`inline-flex items-start gap-3 ${service.lightBg} border ${service.lightBorder} rounded-2xl px-5 py-4 mb-6 w-full`}>
                                            <span className="text-lg mt-0.5">⚡</span>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">ปัญหาที่ลูกค้ามักเจอ</p>
                                                <p className={`font-semibold ${service.accentText} leading-snug`}>{service.problem}</p>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 leading-relaxed mb-8 text-[1.05rem]">
                                            {service.description}
                                        </p>

                                        {/* Features grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                            {service.features.map((f) => (
                                                <div key={f} className="flex items-center gap-2.5 text-slate-700 text-sm">
                                                    <CheckCircle className={`w-4 h-4 shrink-0 ${service.accentText}`} />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href="https://lin.ee/IlvhwZV"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r ${service.gradient} shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all`}
                                        >
                                            ปรึกษาบริการนี้ฟรี <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>

                                    {/* Visual side */}
                                    <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                                        <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${service.gradient} p-8 md:p-10 shadow-2xl`}>
                                            {/* Decorative circles */}
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                                            {/* Icon */}
                                            <div className="relative z-10 mb-8">
                                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                                                    <service.icon className="w-8 h-8 text-white" />
                                                </div>
                                            </div>

                                            {/* Results */}
                                            <div className="relative z-10 space-y-3">
                                                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">ผลลัพธ์ที่คาดหวัง</p>
                                                {service.results.map((r, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-white/15 backdrop-blur rounded-xl px-4 py-3">
                                                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                            <ChevronRight className="w-3.5 h-3.5 text-white" />
                                                        </span>
                                                        <span className="text-white font-semibold text-sm">{r}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* ── CTA ── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#25137A] to-[#F51036] px-8 py-16 md:px-16 text-center relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="relative z-10">
                        <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-3">ไม่แน่ใจว่าต้องการบริการไหน?</p>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                            ปรึกษาเราฟรี เราจะแนะนำ<br className="hidden md:block" />บริการที่เหมาะกับธุรกิจคุณ
                        </h2>
                        <p className="text-white/70 mb-10 text-lg">ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด ได้คำแนะนำจากผู้เชี่ยวชาญทันที</p>
                        <a
                            href="https://lin.ee/IlvhwZV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-[#F51036] font-bold px-10 py-4 rounded-full hover:bg-slate-50 transition-colors shadow-xl text-lg"
                        >
                            ปรึกษาฟรีผ่าน LINE <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
