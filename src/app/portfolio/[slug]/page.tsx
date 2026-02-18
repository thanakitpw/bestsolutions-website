import { getPortfolioBySlug, getPortfolios } from "@/lib/services/portfolioService";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { Metadata } from "next";

const BASE_URL = "https://bestsolutions.co.th";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = await getPortfolioBySlug(slug);

    if (!project) {
        return { title: "ผลงานไม่พบ | Best Solutions Corp" };
    }

    const title = project.seo_title ?? `${project.title} | Best Solutions Portfolio`;
    const description = project.seo_description ?? project.description ?? "";
    const image = project.og_image ?? project.image ?? `${BASE_URL}/og-default.jpg`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            images: [{ url: image, width: 1200, height: 630, alt: project.title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export async function generateStaticParams() {
    const projects = await getPortfolios();
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = await getPortfolioBySlug(slug);

    if (!project) notFound();

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: project.image ?? undefined,
        dateCreated: project.year ? `${project.year}-01-01` : undefined,
        creator: {
            "@type": "Organization",
            name: "Best Solutions Corp",
            url: BASE_URL,
        },
        url: `${BASE_URL}/portfolio/${project.slug}`,
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-50 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link href="/portfolio" className="inline-flex items-center text-slate-500 hover:text-[var(--color-primary-start)] mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> กลับไปหน้าผลงาน
                    </Link>
                    <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-start)]/10 text-[var(--color-primary-start)] text-xs font-bold uppercase tracking-wider mb-4">
                        {project.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Image */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-video mb-16 relative">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 font-medium text-xl">
                                {project.title} Showcase Image
                            </div>
                        )}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Sidebar / Info */}
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 sticky top-32">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                                    ข้อมูลโครงการ
                                </h3>
                                <div className="space-y-6">
                                    {project.client_name && (
                                        <div>
                                            <div className="flex items-center text-slate-500 mb-2 text-sm">
                                                <User className="w-4 h-4 mr-2" /> ลูกค้า
                                            </div>
                                            <div className="font-semibold text-slate-900">{project.client_name}</div>
                                        </div>
                                    )}
                                    {project.year && (
                                        <div>
                                            <div className="flex items-center text-slate-500 mb-2 text-sm">
                                                <Calendar className="w-4 h-4 mr-2" /> ปีที่ทำ
                                            </div>
                                            <div className="font-semibold text-slate-900">{project.year}</div>
                                        </div>
                                    )}
                                    {project.tags && project.tags.length > 0 && (
                                        <div>
                                            <div className="flex items-center text-slate-500 mb-2 text-sm">
                                                บริการที่ใช้
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-600">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <p className="text-slate-500 text-sm mb-4">สนใจทำโปรเจกต์แบบนี้?</p>
                                    <Link href="/contact" className="w-full block">
                                        <Button className="w-full" variant="gradient">ขอคำปรึกษาฟรี</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Case Study Detail */}
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            {/* Rich HTML content if available */}
                            {project.content ? (
                                <div
                                    className="prose prose-lg max-w-none prose-slate"
                                    dangerouslySetInnerHTML={{ __html: project.content }}
                                />
                            ) : (
                                <div className="prose prose-lg max-w-none prose-slate">
                                    {project.challenge && (
                                        <>
                                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                                <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
                                                โจทย์และความท้าทาย (The Challenge)
                                            </h2>
                                            <p className="text-slate-600 leading-relaxed bg-red-50 p-6 rounded-2xl border border-red-100">
                                                {project.challenge}
                                            </p>
                                            <div className="h-10"></div>
                                        </>
                                    )}

                                    {project.solution && (
                                        <>
                                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                                                วิธีแก้ปัญหาของเรา (Our Solution)
                                            </h2>
                                            <p className="text-slate-600 leading-relaxed">
                                                {project.solution}
                                            </p>
                                            <div className="h-10"></div>
                                        </>
                                    )}

                                    {project.result && (
                                        <>
                                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                                <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                                                ผลลัพธ์ที่ได้ (The Result)
                                            </h2>
                                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                                <p className="text-green-800 font-medium text-lg">
                                                    {project.result}
                                                </p>
                                            </div>
                                        </>
                                    )}
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
