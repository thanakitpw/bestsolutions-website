"use client";

import { useState, useRef, useTransition } from "react";
import Link from "next/link";
import {
    ArrowLeft, Upload, FileText, Loader2, CheckCircle2,
    AlertCircle, Eye, EyeOff, Send, Save, ChevronDown, ChevronUp, Info, X, Plus
} from "lucide-react";
import { parseDocxFile, type ParsedDoc } from "./actions";
import { createBlogPost } from "../../actions";
import ImageUploader from "./ImageUploader";

type Step = "upload" | "preview" | "done";

const CATEGORIES = [
    "SEO",
    "Digital Marketing",
    "Social Media",
    "Content Marketing",
    "Google Ads",
    "Facebook Ads",
    "Email Marketing",
    "Web Design",
    "E-Commerce",
    "Branding",
    "Analytics",
    "อื่นๆ",
];

const SUGGESTED_TAGS = [
    "seo", "marketing", "digital", "online", "social-media", "facebook",
    "google", "content", "ads", "branding", "website", "ecommerce",
    "strategy", "tips", "beginner", "business", "analytics", "email",
];

export default function ImportDocxPage() {
    const [isParsing, startParsing] = useTransition();
    const [isSaving, startSaving] = useTransition();
    const fileRef = useRef<HTMLInputElement>(null);
    const [step, setStep] = useState<Step>("upload");
    const [dragOver, setDragOver] = useState(false);
    const [parseError, setParseError] = useState<string | null>(null);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [parsed, setParsed] = useState<ParsedDoc | null>(null);
    const [showRawHtml, setShowRawHtml] = useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const [fileName, setFileName] = useState("");

    // Editable fields after parse
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [tagList, setTagList] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDesc, setSeoDesc] = useState("");
    const [coverImage, setCoverImage] = useState("");

    function addTag(tag: string) {
        const t = tag.trim().toLowerCase().replace(/,/g, "");
        if (t && !tagList.includes(t)) setTagList(prev => [...prev, t]);
        setTagInput("");
    }
    function removeTag(tag: string) {
        setTagList(prev => prev.filter(t => t !== tag));
    }

    function handleFile(file: File) {
        if (!file.name.endsWith(".docx")) {
            setParseError("รองรับเฉพาะไฟล์ .docx เท่านั้น");
            return;
        }
        setFileName(file.name);
        setParseError(null);

        const formData = new FormData();
        formData.set("file", file);

        startParsing(async () => {
            const result = await parseDocxFile(formData);
            if (!result.success || !result.data) {
                setParseError(result.error ?? "เกิดข้อผิดพลาด");
                return;
            }
            const d = result.data;
            setParsed(d);
            setTitle(d.title);
            setSlug(d.slug);
            setExcerpt(d.excerpt);
            setContent(d.content);
            setCategory(d.category);
            setTagList(d.tags);
            setSeoTitle(d.seoTitle.replace(/\*/g, "").trim());
            setSeoDesc(d.seoDescription.replace(/\*/g, "").trim());
            setStep("preview");
        });
    }

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    }

    function handleSave(publish: boolean) {
        setSaveError(null);
        const formData = new FormData();
        formData.set("title", title);
        formData.set("slug", slug);
        formData.set("excerpt", excerpt);
        formData.set("content", content);
        formData.set("category", category);
        formData.set("tags", tagList.join(", "));
        formData.set("seo_title", seoTitle);
        formData.set("seo_description", seoDesc);
        formData.set("cover_image", coverImage);
        formData.set("author_name", "Best Solutions Corp");
        formData.set("publish", publish ? "true" : "false");

        startSaving(async () => {
            const result = await createBlogPost(formData);
            if (result.success) {
                setStep("done");
            } else {
                setSaveError(result.error ?? "เกิดข้อผิดพลาด");
            }
        });
    }

    const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm";
    const labelCls = "block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider";

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/admin/blog" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-400" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-white">Import from Google Docs</h1>
                    <p className="text-slate-500 mt-1 text-sm">Export .docx จาก Google Docs แล้ว upload ที่นี่</p>
                </div>
            </div>

            {/* Guide toggle */}
            <button
                onClick={() => setShowGuide(!showGuide)}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
                <Info className="w-4 h-4" />
                วิธี Export จาก Google Docs + format metadata
                {showGuide ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {showGuide && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 space-y-4 text-sm">
                    <div>
                        <p className="text-blue-300 font-semibold mb-2">📄 วิธี Export จาก Google Docs</p>
                        <p className="text-slate-400">File → Download → Microsoft Word (.docx)</p>
                    </div>
                    <div>
                        <p className="text-blue-300 font-semibold mb-2">🏷️ Format ใน Google Docs</p>
                        <div className="space-y-1 text-slate-400 font-mono text-xs bg-black/30 rounded-xl p-4">
                            <p className="text-white font-bold text-sm">ชื่อบทความ (ใช้ Heading 1)</p>
                            <p className="mt-2">[Category: SEO]</p>
                            <p>[Tags: seo, marketing, digital]</p>
                            <p>[SEO Title: ชื่อที่แสดงใน Google]</p>
                            <p>[SEO Description: คำอธิบาย 150 ตัวอักษร]</p>
                            <p className="mt-2 text-slate-500">--- เนื้อหาบทความด้านล่าง ---</p>
                            <p className="text-white">เนื้อหาย่อหน้าแรก (จะกลายเป็น excerpt)</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-300 font-semibold mb-2">✅ Heading ที่รองรับ</p>
                        <p className="text-slate-400">Heading 1 → <code className="text-blue-300">&lt;h1&gt;</code> (ชื่อบทความ) · Heading 2 → <code className="text-blue-300">&lt;h2&gt;</code> · Heading 3 → <code className="text-blue-300">&lt;h3&gt;</code> · Bold, Italic, Lists ✓</p>
                    </div>
                </div>
            )}

            {/* Step: Upload */}
            {step === "upload" && (
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onClick={() => fileRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-16 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${
                        dragOver
                            ? "border-blue-400 bg-blue-500/10"
                            : "border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                >
                    {isParsing ? (
                        <>
                            <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
                            <p className="text-white font-medium">กำลัง parse ไฟล์...</p>
                            <p className="text-slate-500 text-sm">{fileName}</p>
                        </>
                    ) : (
                        <>
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                                <Upload className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="text-center">
                                <p className="text-white font-semibold text-lg">วาง .docx ที่นี่ หรือคลิกเพื่อเลือกไฟล์</p>
                                <p className="text-slate-500 text-sm mt-1">รองรับ Microsoft Word (.docx) ขนาดไม่เกิน 10MB</p>
                            </div>
                        </>
                    )}
                </div>
            )}

            {parseError && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {parseError}
                </div>
            )}

            <input ref={fileRef} type="file" accept=".docx" onChange={handleInputChange} className="hidden" />

            {/* Step: Preview & Edit */}
            {step === "preview" && parsed && (
                <div className="space-y-5">
                    {/* Success banner */}
                    <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-sm text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Parse สำเร็จ! ตรวจสอบและแก้ไขข้อมูลด้านล่างก่อน save</span>
                        <button
                            onClick={() => { setStep("upload"); setParsed(null); }}
                            className="ml-auto text-xs text-slate-500 hover:text-white underline"
                        >
                            upload ใหม่
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        {/* Main fields */}
                        <div className="col-span-2 space-y-5">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                <h2 className="font-semibold text-white border-b border-white/10 pb-3">เนื้อหา</h2>
                                <div>
                                    <label className={labelCls}>ชื่อบทความ *</label>
                                    <input value={title} onChange={e => setTitle(e.target.value)} className={inputCls} placeholder="ชื่อบทความ" />
                                </div>
                                <div>
                                    <label className={labelCls}>Slug *</label>
                                    <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50">
                                        <span className="px-3 py-3 text-slate-600 text-sm border-r border-white/10">/blog/</span>
                                        <input value={slug} onChange={e => setSlug(e.target.value)} className="flex-1 px-4 py-3 text-white bg-transparent focus:outline-none font-mono text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelCls}>Excerpt <span className="normal-case font-normal text-slate-600">(จาก Key Takeaways)</span></label>
                                    <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={4} className={`${inputCls} resize-none`} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label className={labelCls} style={{ marginBottom: 0 }}>เนื้อหา HTML</label>
                                        <button
                                            type="button"
                                            onClick={() => setShowRawHtml(!showRawHtml)}
                                            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
                                        >
                                            {showRawHtml ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                                            {showRawHtml ? "แก้ไข HTML" : "ดู Preview"}
                                        </button>
                                    </div>
                                    {showRawHtml ? (
                                        <div className="rounded-2xl overflow-hidden border border-white/10">
                                            <div className="bg-white/5 px-4 py-2 text-xs text-slate-500 border-b border-white/10 flex items-center gap-2">
                                                <Eye className="w-3 h-3" /> Preview บทความ
                                            </div>
                                            <div
                                                className="bg-white p-6 text-slate-900 text-sm leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: content
                                                    .replace(/<h2/g, '<h2 style="font-size:1.35rem;font-weight:700;margin:1.75rem 0 0.75rem;color:#1e293b;border-left:4px solid #3b82f6;padding-left:12px;line-height:1.3"')
                                                    .replace(/<h3/g, '<h3 style="font-size:1.1rem;font-weight:600;margin:1.25rem 0 0.5rem;color:#334155;padding-left:4px"')
                                                    .replace(/<h4/g, '<h4 style="font-size:1rem;font-weight:600;margin:1rem 0 0.4rem;color:#475569"')
                                                    .replace(/<p/g, '<p style="margin:0.75rem 0;line-height:1.8;color:#374151"')
                                                    .replace(/<ul/g, '<ul style="margin:0.75rem 0;padding-left:1.5rem;list-style:disc;color:#374151"')
                                                    .replace(/<ol/g, '<ol style="margin:0.75rem 0;padding-left:1.5rem;list-style:decimal;color:#374151"')
                                                    .replace(/<li/g, '<li style="margin:0.35rem 0"')
                                                    .replace(/<strong/g, '<strong style="font-weight:700;color:#1e293b"')
                                                    .replace(/<blockquote/g, '<blockquote style="border-left:4px solid #e2e8f0;padding:0.5rem 1rem;margin:1rem 0;color:#64748b;font-style:italic;background:#f8fafc;border-radius:0 8px 8px 0"')
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <textarea
                                            value={content}
                                            onChange={e => setContent(e.target.value)}
                                            rows={18}
                                            className={`${inputCls} resize-y font-mono text-xs`}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                <h2 className="font-semibold text-white border-b border-white/10 pb-3">SEO</h2>
                                <div>
                                    <label className={labelCls}>SEO Title</label>
                                    <input
                                        value={seoTitle}
                                        onChange={e => setSeoTitle(e.target.value.replace(/\*/g, ""))}
                                        className={inputCls}
                                        placeholder="ถ้าว่างจะใช้ชื่อบทความ"
                                    />
                                    <p className={`text-xs mt-1 ${seoTitle.length > 60 ? "text-amber-400" : "text-slate-600"}`}>
                                        {seoTitle.length}/60 ตัวอักษร
                                    </p>
                                </div>
                                <div>
                                    <label className={labelCls}>SEO Description</label>
                                    <textarea
                                        value={seoDesc}
                                        onChange={e => setSeoDesc(e.target.value.replace(/\*/g, ""))}
                                        rows={3}
                                        className={`${inputCls} resize-none`}
                                        placeholder="150-160 ตัวอักษร"
                                    />
                                    <p className={`text-xs mt-1 ${seoDesc.length > 160 ? "text-red-400" : seoDesc.length >= 140 ? "text-emerald-400" : "text-slate-600"}`}>
                                        {seoDesc.length}/160 ตัวอักษร
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-5">
                            {/* Cover Image */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                                <h2 className="font-semibold text-white border-b border-white/10 pb-3">รูปภาพหน้าปก</h2>
                                <ImageUploader value={coverImage} onChange={setCoverImage} />
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                                <h2 className="font-semibold text-white border-b border-white/10 pb-3">เผยแพร่</h2>
                                {saveError && (
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-xs text-red-400">{saveError}</div>
                                )}
                                <button
                                    onClick={() => handleSave(true)}
                                    disabled={isSaving || !title || !slug}
                                    className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 shadow-lg shadow-blue-500/20 text-sm"
                                >
                                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                    Publish Now
                                </button>
                                <button
                                    onClick={() => handleSave(false)}
                                    disabled={isSaving || !title || !slug}
                                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 border border-white/10 text-sm"
                                >
                                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                    Save as Draft
                                </button>
                            </div>

                            {/* Category & Tags */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                                <h2 className="font-semibold text-white border-b border-white/10 pb-3">จัดหมวดหมู่</h2>

                                {/* Category dropdown */}
                                <div>
                                    <label className={labelCls}>หมวดหมู่</label>
                                    <div className="relative">
                                        <select
                                            value={category}
                                            onChange={e => setCategory(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-slate-900">-- เลือกหมวดหมู่ --</option>
                                            {CATEGORIES.map(c => (
                                                <option key={c} value={c} className="bg-slate-900">{c}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Tags */}
                                <div>
                                    <label className={labelCls}>Tags</label>
                                    {tagList.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {tagList.map(tag => (
                                                <span key={tag} className="flex items-center gap-1 bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs px-2.5 py-1 rounded-full">
                                                    {tag}
                                                    <button onClick={() => removeTag(tag)} className="hover:text-white transition-colors">
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex gap-2">
                                        <input
                                            value={tagInput}
                                            onChange={e => setTagInput(e.target.value)}
                                            onKeyDown={e => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(tagInput); } }}
                                            className={`${inputCls} flex-1`}
                                            placeholder="พิมพ์แล้วกด Enter"
                                        />
                                        <button
                                            onClick={() => addTag(tagInput)}
                                            className="px-3 py-2 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 text-white transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-xs text-slate-600 mb-1.5">แนะนำ:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {SUGGESTED_TAGS.filter(t => !tagList.includes(t)).slice(0, 10).map(tag => (
                                                <button
                                                    key={tag}
                                                    onClick={() => addTag(tag)}
                                                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-500 hover:text-white border border-white/10 transition-colors"
                                                >
                                                    + {tag}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Parse stats */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                                <h2 className="font-semibold text-white border-b border-white/10 pb-3">ผลการ Parse</h2>
                                <div className="space-y-2 text-xs">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">ไฟล์</span>
                                        <span className="text-slate-300 truncate max-w-32 text-right">{fileName}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">ความยาว HTML</span>
                                        <span className="text-slate-300">{content.length.toLocaleString()} chars</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Title</span>
                                        <span className={title ? "text-emerald-400" : "text-red-400"}>{title ? "✓" : "ไม่พบ"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Category</span>
                                        <span className={category ? "text-emerald-400" : "text-slate-600"}>{category || "—"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Tags</span>
                                        <span className={tagList.length > 0 ? "text-emerald-400" : "text-slate-600"}>{tagList.length > 0 ? `${tagList.length} tags` : "—"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">SEO</span>
                                        <span className={seoTitle || seoDesc ? "text-emerald-400" : "text-slate-600"}>
                                            {seoTitle || seoDesc ? "✓" : "—"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Step: Done */}
            {step === "done" && (
                <div className="flex flex-col items-center justify-center py-20 gap-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white mb-2">บันทึกสำเร็จ!</h2>
                        <p className="text-slate-500">บทความ "{title}" ถูกบันทึกเรียบร้อยแล้ว</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/admin/blog" className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 rounded-xl font-medium transition-colors border border-white/10 text-sm">
                            <FileText className="w-4 h-4" /> ดู Blog Posts ทั้งหมด
                        </Link>
                        <button
                            onClick={() => { setStep("upload"); setParsed(null); setFileName(""); }}
                            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors text-sm"
                        >
                            <Upload className="w-4 h-4" /> Import อีกไฟล์
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
