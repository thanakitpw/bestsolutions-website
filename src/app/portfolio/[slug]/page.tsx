
import { projects } from "@/lib/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

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
                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 font-medium text-xl">
                            {project.title} Full Showcase Image
                        </div>
                        {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Sidebar / Info */}
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 sticky top-32">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                                    ข้อมูลโครงการ
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center text-slate-500 mb-2 text-sm">
                                            <User className="w-4 h-4 mr-2" /> ลูกค้า
                                        </div>
                                        <div className="font-semibold text-slate-900">{project.client}</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center text-slate-500 mb-2 text-sm">
                                            <Calendar className="w-4 h-4 mr-2" /> ปีที่ทำ
                                        </div>
                                        <div className="font-semibold text-slate-900">{project.year}</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center text-slate-500 mb-2 text-sm">
                                            บริการที่ใช้
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-600">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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
                            <div className="prose prose-lg max-w-none prose-slate">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                    <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
                                    โจทย์และความท้าทาย (The Challenge)
                                </h2>
                                <p className="text-slate-600 leading-relaxed bg-red-50 p-6 rounded-2xl border border-red-100">
                                    {project.challenge}
                                </p>

                                <div className="h-10"></div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                    <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                                    วิธีแก้ปัญหาของเรา (Our Solution)
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {project.solution}
                                </p>

                                <div className="h-10"></div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                    <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                                    ผลลัพธ์ที่ได้ (The Result)
                                </h2>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                    <p className="text-green-800 font-medium text-lg">
                                        {project.result}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
