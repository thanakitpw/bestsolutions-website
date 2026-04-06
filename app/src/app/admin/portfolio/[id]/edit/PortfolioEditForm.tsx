"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { updatePortfolio } from "../../../actions";
import type { Portfolio } from "@/lib/types";
import { Loader2, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
    project: Portfolio;
}

export function PortfolioEditForm({ project }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [image, setImage] = useState(project.image ?? "");
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);
        formData.set("image", image);

        startTransition(async () => {
            const result = await updatePortfolio(project.id, formData);
            if (result.success) {
                router.push("/admin/portfolio");
            } else {
                setError(result.error ?? "เกิดข้อผิดพลาด");
            }
        });
    }

    const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all";
    const inputSmCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 text-sm transition-all";
    const labelCls = "block text-sm font-medium text-slate-400 mb-2";
    const cardCls = "bg-white/5 border border-white/8 rounded-2xl p-6 space-y-5";

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-5">
                    <div className={cardCls}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">ข้อมูลผลงาน</h2>
                        <div>
                            <label className={labelCls}>ชื่อผลงาน *</label>
                            <input name="title" defaultValue={project.title} required className={inputCls} />
                        </div>
                        <div>
                            <label className={labelCls}>Slug *</label>
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-violet-500/50">
                                <span className="px-3 py-3 text-slate-600 text-sm border-r border-white/10">/portfolio/</span>
                                <input name="slug" defaultValue={project.slug} required className="flex-1 px-4 py-3 text-white bg-transparent focus:outline-none font-mono text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className={labelCls}>คำอธิบายสั้น</label>
                            <textarea name="description" rows={3} defaultValue={project.description ?? ""} className={`${inputCls} resize-none`} />
                        </div>
                        <div>
                            <label className={labelCls}>เนื้อหา (HTML)</label>
                            <textarea name="content" rows={10} defaultValue={project.content ?? ""} className={`${inputCls} resize-y font-mono text-sm`} />
                        </div>
                    </div>

                    <div className={cardCls}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">Case Study</h2>
                        <div>
                            <label className={labelCls}>โจทย์และความท้าทาย</label>
                            <textarea name="challenge" rows={4} defaultValue={project.challenge ?? ""} className={`${inputCls} resize-none`} />
                        </div>
                        <div>
                            <label className={labelCls}>วิธีแก้ปัญหา</label>
                            <textarea name="solution" rows={4} defaultValue={project.solution ?? ""} className={`${inputCls} resize-none`} />
                        </div>
                        <div>
                            <label className={labelCls}>ผลลัพธ์</label>
                            <textarea name="result" rows={3} defaultValue={project.result ?? ""} className={`${inputCls} resize-none`} />
                        </div>
                    </div>

                    <div className={cardCls}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">SEO</h2>
                        <div>
                            <label className={labelCls}>SEO Title</label>
                            <input name="seo_title" defaultValue={project.seo_title ?? ""} className={inputCls} />
                        </div>
                        <div>
                            <label className={labelCls}>SEO Description</label>
                            <textarea name="seo_description" rows={3} defaultValue={project.seo_description ?? ""} className={`${inputCls} resize-none`} />
                        </div>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className={`${cardCls} space-y-4`}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">บันทึก</h2>
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-sm text-red-400">{error}</div>
                        )}
                        <button type="submit" disabled={isPending}
                            className="w-full flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors disabled:opacity-60 shadow-lg shadow-violet-500/20">
                            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            Update Project
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/8 rounded-2xl p-5">
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3 mb-4">รูปภาพหลัก</h2>
                        <ImageUploader bucket="portfolio-images" currentUrl={project.image} onUpload={setImage} label="Project Image" />
                    </div>

                    <div className={`${cardCls} space-y-4`}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">ข้อมูลโครงการ</h2>
                        <div>
                            <label className={labelCls}>หมวดหมู่</label>
                            <input name="category" defaultValue={project.category ?? ""} className={inputSmCls} />
                        </div>
                        <div>
                            <label className={labelCls}>Tags <span className="text-slate-600 font-normal">คั่นด้วย comma</span></label>
                            <input name="tags" defaultValue={project.tags?.join(", ") ?? ""} className={inputSmCls} />
                        </div>
                        <div>
                            <label className={labelCls}>ชื่อลูกค้า</label>
                            <input name="client_name" defaultValue={project.client_name ?? ""} className={inputSmCls} />
                        </div>
                        <div>
                            <label className={labelCls}>ปีที่ทำ</label>
                            <input name="year" defaultValue={project.year ?? ""} className={inputSmCls} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
