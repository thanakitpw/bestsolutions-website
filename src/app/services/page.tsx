import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Monitor, BarChart3, TrendingUp, Search, MessageCircle, RefreshCw, Layers, Users, Target, Camera, CloudLightning, Code, Paintbrush, Share2, Rocket, CheckCircle } from "lucide-react";

export const metadata = {
    title: "Solutions | Best Solutions - แก้ปัญหาธุรกิจด้วย Digital Marketing",
    description: "เปลี่ยนปัญหาการตลาดให้เป็นยอดขาย ด้วยโซลูชั่นที่ตอบโจทย์: Build, Attract, Convert ครบวงจร",
};

const pillars = [
    {
        title: "BUILD",
        subtitle: "สร้างรากฐานที่มั่นคง",
        description: "เริ่มต้นธุรกิจด้วยภาพลักษณ์ที่ดี เว็บไซต์ที่น่าเชื่อถือ และระบบที่พร้อมรองรับการเติบโต",
        color: "from-blue-600 to-indigo-600",
        icon: Code,
        services: [
            {
                title: "Modern Web Design & Dev",
                slug: "web-design",
                problem: "เว็บไซต์เก่า โหลดช้า ไม่รองรับมือถือ",
                quote: "UX/UI ไม่ตอบโจทย์พฤติกรรมลูกค้าปัจจุบัน ทำให้เสียโอกาสการขาย",
                features: ["Web Responsive", "Speed Optimization", "SEO Structure"],
                icon: Monitor
            },
            {
                title: "Corporate Identity & Branding",
                slug: "branding",
                problem: "แบรนด์ไม่เป็นที่จดจำ ดูไม่น่าเชื่อถือ",
                quote: "ขาดอัตลักษณ์ (CI) ที่ชัดเจน ทำให้ลูกค้าไม่กล้าตัดสินใจซื้อ",
                features: ["Logo Design", "Visual System", "Brand Tone"],
                icon: Paintbrush
            }
        ]
    },
    {
        title: "ATTRACT",
        subtitle: "ดึงดูดลูกค้าคุณภาพ",
        description: "เปลี่ยนคนแปลกหน้าให้เป็นคนรู้จัก ด้วยการตลาดที่แม่นยำและการค้นหาที่ตรงจุด",
        color: "from-red-500 to-orange-500",
        icon: Rocket,
        services: [
            {
                title: "SEO & Content Marketing",
                slug: "seo-content",
                problem: "คนเข้าเว็บน้อย หาไม่จอบน Google",
                quote: "เว็บไซต์ขาด Keyword Strategy ที่ถูกต้อง",
                features: ["Keyword Research", "On-Page SEO", "Quality Backlinks"],
                icon: Search
            },
            {
                title: "Performance Ads",
                slug: "ads",
                problem: "ยิงแอดไปเยอะ แต่ยอดขายไม่คุ้มทุน",
                quote: "Target ผิดกลุ่ม หรือ Creative ไม่ดึงดูดใจมากพอ",
                features: ["Audience Targeting", "A/B Testing", "ROI Focus"],
                icon: TrendingUp
            }
        ]
    },
    {
        title: "CONVERT",
        subtitle: "เปลี่ยนความสนใจเป็นยอดขาย",
        description: "สร้างความสัมพันธ์ระยะยาวและกระตุ้นให้เกิดการตัดสินใจซื้อด้วยคอนเทนต์ที่โดนใจ",
        color: "from-green-500 to-emerald-600",
        icon: CloudLightning,
        services: [
            {
                title: "Social Media Management",
                slug: "social-media",
                problem: "ลูกค้าทักมาแต่ปิดการขายไม่ได้",
                quote: "ขาด Social Proof หรือ Content ขาดความน่าเชื่อถือ",
                features: ["Engaging Content", "Admin Response", "Community Building"],
                icon: Share2
            },
            {
                title: "Production & Photography",
                slug: "production",
                problem: "สินค้าดี แต่ภาพถ่ายไม่สวย",
                quote: "First Impression สำคัญที่สุด รูปภาพที่ไม่สวยลดมูลค่าสินค้า",
                features: ["Product Shooting", "Short-Form Video", "Motion Graphics"],
                icon: Camera
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#0B0F19] rounded-b-[3rem] shadow-xl">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Radial Gradient for depth */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500/20 blur-[100px] animate-blob"></div>
                <div className="absolute left-0 bottom-1/4 -z-10 h-[310px] w-[310px] rounded-full bg-indigo-500/20 blur-[100px] animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        SOLUTIONS, NOT JUST SERVICES
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        เราไม่ได้แค่รับทำ <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            แต่เราช่วยแก้ปัญหาธุรกิจ
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        เปลี่ยนความยุ่งยากของการตลาดออนไลน์ ให้เป็นระบบที่สร้างยอดขายได้จริง <br className="hidden md:block" />
                        ด้วยทีมงานมืออาชีพที่เข้าใจธุรกิจของคุณ
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg">
                            ปรึกษาผู้เชี่ยวชาญฟรี
                        </Button>
                        <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg backdrop-blur-sm bg-white/5">
                            ดูบริการทั้งหมด
                        </Button>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="pt-20 pb-24 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {pillars.map((pillar, index) => (
                        <div key={index} id={pillar.title.toLowerCase()} className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${pillar.color} text-white shadow-lg`}>
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                        {pillar.title} <span className="text-slate-400 font-normal text-lg">/ {pillar.subtitle}</span>
                                    </h2>
                                    <p className="text-slate-500">{pillar.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {pillar.services.map((service, i) => (
                                    <Link key={i} href={`/services/${service.slug}`} className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col h-full">
                                        <div className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${pillar.color} rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity`} />

                                        <div className="mb-6 bg-red-50 rounded-xl p-4 border border-red-100">
                                            <div className="flex items-center gap-2 text-red-500 font-bold text-xs mb-1 uppercase tracking-wider">
                                                <CloudLightning className="w-3 h-3" /> PROBLEM (อาการที่เจอ)
                                            </div>
                                            <p className="text-slate-900 font-semibold text-lg leading-tight">
                                                {service.problem}
                                            </p>
                                        </div>

                                        <blockquote className="mb-8 text-slate-500 italic text-sm border-l-2 border-slate-200 pl-4">
                                            "{service.quote}"
                                        </blockquote>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className={`p-2 rounded-lg bg-slate-50 group-hover:bg-white group-hover:shadow-md transition-all`}>
                                                    <service.icon className="w-6 h-6 text-slate-700" />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            <div className="space-y-3 mb-8">
                                                {service.features.map((feature, j) => (
                                                    <div key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-end text-slate-400 text-sm font-medium group-hover:text-blue-600 transition-colors">
                                                ดูรายละเอียด <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ไม่แน่ใจว่าธุรกิจของคุณป่วยตรงไหน?
                    </h2>
                    <p className="text-xl text-white/80 mb-10">
                        ให้เราช่วยวิเคราะห์อาการฟรี ไม่มีค่าใช้จ่าย รับคำปรึกษาเบื้องต้นได้ทันที
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-[var(--color-primary-start)] hover:bg-slate-100 text-lg px-10 py-6 h-auto shadow-xl">
                            ขอรับคำปรึกษาฟรี <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
