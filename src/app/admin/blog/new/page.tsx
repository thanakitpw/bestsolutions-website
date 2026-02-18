"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { createBlogPost } from "../../actions";
import { Loader2, Send, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

function generateSlug(title: string) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

export default function NewBlogPostPage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [coverImage, setCoverImage] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [slugManual, setSlugManual] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [publishMode, setPublishMode] = useState<"publish" | "draft" | null>(null);

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
        if (!slugManual) {
            setSlug(generateSlug(e.target.value));
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>, publish: boolean) {
        e.preventDefault();
        setError(null);
        setPublishMode(publish ? "publish" : "draft");

        const formData = new FormData(e.currentTarget);
        formData.set("cover_image", coverImage);
        formData.set("publish", publish ? "true" : "false");

        startTransition(async () => {
            const result = await createBlogPost(formData);
            if (result.success) {
                router.push("/admin/blog");
            } else {
                setError(result.error ?? "เกิดข้อผิดพลาด");
                setPublishMode(null);
            }
        });
    }

    return (
        <div className="p-8 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/blog" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-500" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">New Blog Post</h1>
                    <p className="text-slate-500 mt-1">สร้างบทความใหม่</p>
                </div>
            </div>

            <form onSubmit={(e) => handleSubmit(e, true)}>
                <div className="grid grid-cols-3 gap-8">
                    {/* Main content */}
                    <div className="col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-5">
                            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-3">เนื้อหา</h2>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">ชื่อบทความ *</label>
                                <input
                                    name="title"
                                    value={title}
                                    onChange={handleTitleChange}
                                    required
                                    placeholder="เช่น 5 เทคนิค SEO ที่ต้องรู้ในปี 2025"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Slug (URL) *
                                    <span className="text-xs font-normal text-slate-400 ml-2">จะแสดงที่ /blog/slug</span>
                                </label>
                                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                                    <span className="px-3 py-3 bg-slate-50 text-slate-400 text-sm border-r border-slate-200">/blog/</span>
                                    <input
                                        name="slug"
                                        value={slug}
                                        onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
                                        required
                                        placeholder="my-blog-post"
                                        className="flex-1 px-4 py-3 text-slate-900 focus:outline-none font-mono text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">สรุปย่อ (Excerpt)</label>
                                <textarea
                                    name="excerpt"
                                    rows={3}
                                    placeholder="สรุปสั้นๆ ว่าบทความนี้เกี่ยวกับอะไร..."
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    เนื้อหา (HTML)
                                    <span className="text-xs font-normal text-slate-400 ml-2">รองรับ HTML tags</span>
                                </label>
                                <textarea
                                    name="content"
                                    rows={16}
                                    placeholder="<h2>หัวข้อ</h2><p>เนื้อหา...</p>"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y font-mono text-sm"
                                />
                            </div>
                        </div>

                        {/* SEO */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-5">
                            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-3">SEO</h2>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    SEO Title
                                    <span className="text-xs font-normal text-slate-400 ml-2">ถ้าว่างจะใช้ชื่อบทความ</span>
                                </label>
                                <input
                                    name="seo_title"
                                    placeholder="ชื่อที่แสดงใน Google..."
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">SEO Description</label>
                                <textarea
                                    name="seo_description"
                                    rows={3}
                                    placeholder="คำอธิบายที่แสดงใน Google (150-160 ตัวอักษร)..."
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Publish */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
                            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-3">เผยแพร่</h2>

                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-60 shadow-sm"
                            >
                                {isPending && publishMode === "publish" ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Send className="w-4 h-4" />
                                )}
                                Publish Now
                            </button>

                            <button
                                type="button"
                                disabled={isPending}
                                onClick={(e) => {
                                    const form = (e.target as HTMLElement).closest("form") as HTMLFormElement;
                                    handleSubmit({ currentTarget: form, preventDefault: () => { } } as React.FormEvent<HTMLFormElement>, false);
                                }}
                                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-3 rounded-xl font-medium hover:bg-slate-200 transition-colors disabled:opacity-60"
                            >
                                {isPending && publishMode === "draft" ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Save className="w-4 h-4" />
                                )}
                                Save Draft
                            </button>
                        </div>

                        {/* Image */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">รูปภาพ</h2>
                            <ImageUploader
                                bucket="blog-images"
                                onUpload={setCoverImage}
                                label="Cover Image"
                            />
                        </div>

                        {/* Meta */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
                            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-3">ข้อมูลเพิ่มเติม</h2>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">หมวดหมู่</label>
                                <input
                                    name="category"
                                    placeholder="เช่น SEO, Marketing"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Tags
                                    <span className="text-xs font-normal text-slate-400 ml-2">คั่นด้วย comma</span>
                                </label>
                                <input
                                    name="tags"
                                    placeholder="seo, marketing, digital"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">ผู้เขียน</label>
                                <input
                                    name="author_name"
                                    placeholder="ชื่อผู้เขียน"
                                    defaultValue="Best Solutions Corp"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
