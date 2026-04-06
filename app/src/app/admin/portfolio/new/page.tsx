"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { createPortfolio } from "../../actions";
import { Loader2, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";

function generateSlug(title: string) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

export default function NewPortfolioPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [slugManual, setSlugManual] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
        if (!slugManual) setSlug(generateSlug(e.target.value));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        const formData = new FormData(e.currentTarget);
        formData.set("image", image);

        startTransition(async () => {
            const result = await createPortfolio(formData);
            if (result.success) {
                router.push("/admin/portfolio");
            } else {
                setError(result.error ?? "เกิดข้อผิดพลาด");
            }
        });
    }

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/portfolio" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-400" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-white">New Portfolio Project</h1>
                    <p className="text-slate-500 mt-1 text-sm">เพิ่มผลงานใหม่</p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-6">
                    {/* Main */}
                    <div className="col-span-2 space-y-5">
                        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 space-y-5">
                            <h2 className="font-semibold text-white border-b border-white/8 pb-3">ข้อมูลผลงาน</h2>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">ชื่อผลงาน *</label>
                                <input name="title" value={title} onChange={handleTitleChange} required
                                    placeholder="เช่น Beauty Brand Rebrand"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Slug *</label>
                                <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-violet-500/50 focus-within:border-violet-500/50">
                                    <span className="px-3 py-3 text-slate-600 text-sm border-r border-white/10">/portfolio/</span>
                                    <input name="slug" value={slug} onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }} required
                                        placeholder="beauty-brand-rebrand"
                                        className="flex-1 px-4 py-3 text-white bg-transparent focus:outline-none font-mono text-sm placeholder:text-slate-600" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">คำอธิบายสั้น</label>
                                <textarea name="description" rows={3} placeholder="สรุปสั้นๆ ว่าผลงานนี้เกี่ยวกับอะไร..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">เนื้อหา (HTML)</label>
                                <textarea name="content" rows={10} placeholder="<h2>หัวข้อ</h2><p>เนื้อหา...</p>"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-y font-mono text-sm transition-all" />
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 space-y-5">
                            <h2 className="font-semibold text-white border-b border-white/8 pb-3">Case Study</h2>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">โจทย์และความท้าทาย</label>
                                <textarea name="challenge" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">วิธีแก้ปัญหา</label>
                                <textarea name="solution" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">ผลลัพธ์</label>
                                <textarea name="result" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none transition-all" />
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/8 rounded-2xl p-6 space-y-5">
                            <h2 className="font-semibold text-white border-b border-white/8 pb-3">SEO</h2>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">SEO Title</label>
                                <input name="seo_title" placeholder="ชื่อที่แสดงใน Google..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">SEO Description</label>
                                <textarea name="seo_description" rows={3}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-5">
                        <div className="bg-white/5 border border-white/8 rounded-2xl p-5 space-y-4">
                            <h2 className="font-semibold text-white border-b border-white/8 pb-3">บันทึก</h2>
                            {error && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-sm text-red-400">{error}</div>
                            )}
                            <button type="submit" disabled={isPending}
                                className="w-full flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors disabled:opacity-60 shadow-lg shadow-violet-500/20">
                                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                Save Project
                            </button>
                        </div>

                        <div className="bg-white/5 border border-white/8 rounded-2xl p-5">
                            <h2 className="font-semibold text-white border-b border-white/8 pb-3 mb-4">รูปภาพหลัก</h2>
                            <ImageUploader bucket="portfolio-images" onUpload={setImage} label="Project Image" />
                        </div>

                        <div className="bg-white/5 border border-white/8 rounded-2xl p-5 space-y-4">
                            <h2 className="font-semibold text-white border-b border-white/8 pb-3">ข้อมูลโครงการ</h2>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">หมวดหมู่</label>
                                <input name="category" placeholder="เช่น E-Commerce, Branding"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Tags <span className="text-slate-600 font-normal">คั่นด้วย comma</span></label>
                                <input name="tags" placeholder="branding, ux, web"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">ชื่อลูกค้า</label>
                                <input name="client_name" placeholder="ชื่อบริษัทลูกค้า"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">ปีที่ทำ</label>
                                <input name="year" placeholder="2024"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-sm transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
