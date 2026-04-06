import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Tag } from "lucide-react";
import type { Metadata } from "next";
import { portfolioProjects, getProjectBySlug } from "@/data/portfolio";

const BASE_URL = "https://www.bestsolutionscorp.com";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: "ผลงานไม่พบ | Best Solutions Corp" };
    return {
        title: `${project.title} | Best Solutions Portfolio`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Best Solutions Portfolio`,
            description: project.description,
            type: "website",
            images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
        },
    };
}

export function generateStaticParams() {
    return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: project.image,
        creator: { "@type": "Organization", name: "Best Solutions Corp", url: BASE_URL },
        url: `${BASE_URL}/portfolio/${project.slug}`,
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-950 via-[#1a0a2e] to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#F51036]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/portfolio" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" /> กลับไปหน้าผลงาน
                    </Link>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#F51036]/20 text-[#ff6b8a] text-xs font-bold uppercase tracking-wider">
                            {project.serviceCategory}
                        </span>
                        <span className="text-white/40 text-xs">{project.industryTag}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                        {project.subtitle}
                    </p>
                </div>
            </section>

            {/* Live Demo Iframe */}
            {project.demoUrl && (
                <section className="bg-[#0d0d1a] py-8 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-[#1e1e2e] rounded-t-2xl px-4 py-3 flex items-center gap-3 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 bg-white/8 rounded-lg px-4 py-1.5 text-white/40 text-sm font-mono">
                                {project.demoUrl}
                            </div>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10">
                                <ExternalLink className="w-3.5 h-3.5" /> เปิดเว็บจริง
                            </a>
                        </div>
                        <div className="rounded-b-2xl overflow-hidden border border-t-0 border-white/5 bg-white" style={{ height: "600px" }}>
                            <iframe
                                src={project.demoUrl}
                                className="w-full h-full border-0"
                                loading="lazy"
                                title={`${project.title} Live Demo`}
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Detail */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Sidebar */}
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-32 space-y-6">
                                <h3 className="text-lg font-bold text-slate-900 pb-4 border-b border-slate-200">ข้อมูลโครงการ</h3>

                                <div>
                                    <div className="flex items-center text-slate-400 mb-2 text-xs font-semibold uppercase tracking-wider">
                                        <Tag className="w-3.5 h-3.5 mr-1.5" /> เทคโนโลยีที่ใช้
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-white border border-slate-200 px-2.5 py-1 rounded-full text-slate-600 font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-200">
                                    <p className="text-slate-400 text-sm mb-3">สนใจทำโปรเจกต์แบบนี้?</p>
                                    <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer" className="block">
                                        <Button className="w-full" variant="gradient">ขอคำปรึกษาฟรี</Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">
                            <p className="text-slate-600 text-lg leading-relaxed">{project.description}</p>

                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h2 className="text-xl font-bold text-slate-900 mb-5">จุดเด่นของโปรเจกต์นี้</h2>
                                <ul className="space-y-4">
                                    {project.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-[#F51036]/10 text-[#F51036] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                                {i + 1}
                                            </span>
                                            <span className="text-slate-700 leading-relaxed">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {project.demoUrl && (
                                <div className="flex gap-3 pt-4 flex-wrap">
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="gradient" size="lg" className="rounded-full px-8">
                                            <ExternalLink className="w-4 h-4 mr-2" /> ดู Live Demo
                                        </Button>
                                    </a>
                                    <Link href="/portfolio">
                                        <Button variant="outline" size="lg" className="rounded-full px-8 border-slate-200 text-slate-700">
                                            ดูผลงานอื่น
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
