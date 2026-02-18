"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { updateBlogPost } from "../../../actions";
import type { Article } from "@/lib/types";
import { Loader2, Send, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
    post: Article;
}

export function BlogEditForm({ post }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [coverImage, setCoverImage] = useState(post.cover_image ?? "");
    const [error, setError] = useState<string | null>(null);
    const [publishMode, setPublishMode] = useState<"publish" | "draft" | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>, publish: boolean) {
        e.preventDefault();
        setError(null);
        setPublishMode(publish ? "publish" : "draft");

        const formData = new FormData(e.currentTarget);
        formData.set("cover_image", coverImage);
        formData.set("publish", publish ? "true" : "false");

        startTransition(async () => {
            const result = await updateBlogPost(post.id, formData);
            if (result.success) {
                router.push("/admin/blog");
            } else {
                setError(result.error ?? "เกิดข้อผิดพลาด");
                setPublishMode(null);
            }
        });
    }

    const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all";
    const inputSmCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-sm transition-all";
    const labelCls = "block text-sm font-medium text-slate-400 mb-2";
    const cardCls = "bg-white/5 border border-white/8 rounded-2xl p-6 space-y-5";

    return (
        <form onSubmit={(e) => handleSubmit(e, true)}>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-5">
                    <div className={cardCls}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">เนื้อหา</h2>
                        <div>
                            <label className={labelCls}>ชื่อบทความ *</label>
                            <input name="title" defaultValue={post.title} required className={inputCls} />
                        </div>
                        <div>
                            <label className={labelCls}>Slug *</label>
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50">
                                <span className="px-3 py-3 text-slate-600 text-sm border-r border-white/10">/blog/</span>
                                <input name="slug" defaultValue={post.slug} required className="flex-1 px-4 py-3 text-white bg-transparent focus:outline-none font-mono text-sm" />
                            </div>
                        </div>
                        <div>
                            <label className={labelCls}>สรุปย่อ</label>
                            <textarea name="excerpt" rows={3} defaultValue={post.excerpt ?? ""} className={`${inputCls} resize-none`} />
                        </div>
                        <div>
                            <label className={labelCls}>เนื้อหา (HTML)</label>
                            <textarea name="content" rows={16} defaultValue={post.content ?? ""} className={`${inputCls} resize-y font-mono text-sm`} />
                        </div>
                    </div>

                    <div className={cardCls}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">SEO</h2>
                        <div>
                            <label className={labelCls}>SEO Title</label>
                            <input name="seo_title" defaultValue={post.seo_title ?? ""} className={inputCls} />
                        </div>
                        <div>
                            <label className={labelCls}>SEO Description</label>
                            <textarea name="seo_description" rows={3} defaultValue={post.seo_description ?? ""} className={`${inputCls} resize-none`} />
                        </div>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className={`${cardCls} space-y-4`}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">เผยแพร่</h2>
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-sm text-red-400">{error}</div>
                        )}
                        <button type="submit" disabled={isPending}
                            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors disabled:opacity-60 shadow-lg shadow-blue-500/20">
                            {isPending && publishMode === "publish" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            Update & Publish
                        </button>
                        <button type="button" disabled={isPending}
                            onClick={(e) => {
                                const form = (e.target as HTMLElement).closest("form") as HTMLFormElement;
                                handleSubmit({ currentTarget: form, preventDefault: () => { } } as React.FormEvent<HTMLFormElement>, false);
                            }}
                            className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-3 rounded-xl font-medium transition-colors disabled:opacity-60 border border-white/10">
                            {isPending && publishMode === "draft" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save Only
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/8 rounded-2xl p-5">
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3 mb-4">รูปภาพ</h2>
                        <ImageUploader bucket="blog-images" currentUrl={post.cover_image} onUpload={setCoverImage} label="Cover Image" />
                    </div>

                    <div className={`${cardCls} space-y-4`}>
                        <h2 className="font-semibold text-white border-b border-white/8 pb-3">ข้อมูลเพิ่มเติม</h2>
                        <div>
                            <label className={labelCls}>หมวดหมู่</label>
                            <input name="category" defaultValue={post.category ?? ""} className={inputSmCls} />
                        </div>
                        <div>
                            <label className={labelCls}>Tags <span className="text-slate-600 font-normal">คั่นด้วย comma</span></label>
                            <input name="tags" defaultValue={post.tags?.join(", ") ?? ""} className={inputSmCls} />
                        </div>
                        <div>
                            <label className={labelCls}>ผู้เขียน</label>
                            <input name="author_name" defaultValue={post.author_name ?? ""} className={inputSmCls} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
