import { getPortfolios } from "@/lib/services/portfolioService";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "ผลงานของเรา | Best Solutions Corp",
    description: "ตัวอย่างผลงานเว็บไซต์ การตลาดออนไลน์ และ SEO ที่เราภูมิใจนำเสนอ",
    openGraph: {
        title: "ผลงานของเรา | Best Solutions Corp",
        description: "ตัวอย่างผลงานเว็บไซต์ การตลาดออนไลน์ และ SEO ที่เราภูมิใจนำเสนอ",
        type: "website",
    },
};

export default async function PortfolioPage() {
    const projects = await getPortfolios();

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="text-[var(--color-primary-start)] font-bold tracking-wider text-sm uppercase mb-4 block">
                        Our Portfolio
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                        ผลงานและความสำเร็จ<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
                            ของเรา
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                        เราภูมิใจที่ได้เป็นส่วนหนึ่งในช่วงเวลาสำคัญของธุรกิจลูกค้า
                        นี่คือตัวอย่างผลงานบางส่วนที่เราได้สร้างสรรค์ขึ้น
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {projects.length === 0 ? (
                        <div className="text-center py-20 text-slate-400">
                            <p className="text-xl">ยังไม่มีผลงานในขณะนี้</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <article key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col">
                                    <div className="relative h-52 overflow-hidden bg-slate-200">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-900 rounded-full shadow-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
                                                {project.title}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.tags?.slice(0, 3).map((tag) => (
                                                <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-start)] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">
                                            {project.description}
                                        </p>
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            className="inline-flex items-center text-[var(--color-primary-start)] font-medium text-sm hover:underline mt-auto"
                                        >
                                            ดูรายละเอียด <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">ชอบสไตล์งานของเราหรือเปล่า?</h2>
                    <p className="text-slate-500 mb-8">
                        มาร่วมสร้างโปรเจกต์ถัดไปของคุณให้ปังกว่าใคร ปรึกษาเราได้เลย
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
