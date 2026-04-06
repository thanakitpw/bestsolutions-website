import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { portfolioProjects, serviceCategories } from "@/data/portfolio";
import { PortfolioTabs } from "@/components/PortfolioTabs";

export const metadata: Metadata = {
    title: "ผลงานของเรา | Best Solutions Corp",
    description: "ตัวอย่างผลงานเว็บไซต์ การตลาดออนไลน์ และ SEO ที่เราภูมิใจนำเสนอ",
    openGraph: {
        title: "ผลงานของเรา | Best Solutions Corp",
        description: "ตัวอย่างผลงานเว็บไซต์ การตลาดออนไลน์ และ SEO ที่เราภูมิใจนำเสนอ",
        type: "website",
    },
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#1a0a2e] to-slate-900">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#F51036]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#25137A]/30 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F51036] animate-pulse" />
                        Portfolio & Demo Works
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
                        ตัวอย่างผลงาน<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] to-[#ff6b8a]">
                            แต่ละบริการ
                        </span>
                    </h1>
                    <p className="max-w-xl mx-auto text-white/55 text-lg leading-relaxed">
                        เลือกดูตัวอย่างตามบริการที่คุณสนใจ ทุกชิ้นงานพัฒนาโดยทีม Best Solutions
                    </p>

                    {/* Service category pills */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {serviceCategories.map((cat) => (
                            <div key={cat.id} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white/70 text-sm">
                                <span className="font-medium">{cat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tabs + Grid — Client Component */}
            <PortfolioTabs projects={portfolioProjects} categories={serviceCategories} />

            {/* CTA */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#25137A] to-[#F51036] px-8 py-16 md:px-16 md:py-20">
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="absolute -top-1/2 -left-1/4 w-[80%] h-[200%] bg-white/10 rotate-12 blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                อยากมีแบบนี้สำหรับธุรกิจของคุณ?
                            </h2>
                            <p className="text-white/75 text-lg mb-8">
                                ปรึกษาทีมของเราฟรี ไม่มีข้อผูกมัด
                            </p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="bg-white text-[#25137A] hover:bg-slate-50 border-0 h-14 px-10 text-base rounded-full font-bold shadow-xl">
                                        ปรึกษาฟรีเดี๋ยวนี้
                                    </Button>
                                </a>
                                <Link href="/services">
                                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white h-14 px-10 text-base rounded-full bg-transparent">
                                        ดูบริการทั้งหมด <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
