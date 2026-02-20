"use client";

import { useRef, useState } from "react";
import { Upload, X, ImageIcon, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { uploadImageToStorage } from "../../../admin/actions";

interface ImageUploaderProps {
    value: string;
    onChange: (url: string) => void;
}

const MAX_WIDTH = 1600;
const MAX_HEIGHT = 900;
const WEBP_QUALITY = 0.82;

async function compressToWebP(file: File): Promise<{ dataUrl: string; sizeBefore: number; sizeAfter: number }> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            URL.revokeObjectURL(url);
            let { width, height } = img;

            // Scale down if larger than max dimensions
            if (width > MAX_WIDTH || height > MAX_HEIGHT) {
                const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
                width = Math.round(width * ratio);
                height = Math.round(height * ratio);
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            if (!ctx) return reject(new Error("Canvas not supported"));
            ctx.drawImage(img, 0, 0, width, height);

            const dataUrl = canvas.toDataURL("image/webp", WEBP_QUALITY);
            // Estimate compressed size from base64
            const base64 = dataUrl.split(",")[1] ?? "";
            const sizeAfter = Math.round((base64.length * 3) / 4);
            resolve({ dataUrl, sizeBefore: file.size, sizeAfter });
        };
        img.onerror = () => reject(new Error("ไม่สามารถโหลดรูปภาพได้"));
        img.src = url;
    });
}

function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function ImageUploader({ value, onChange }: ImageUploaderProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);
    const [phase, setPhase] = useState<"idle" | "compressing" | "uploading" | "done">("idle");
    const [error, setError] = useState<string | null>(null);
    const [stats, setStats] = useState<{ before: number; after: number; w: number; h: number } | null>(null);
    const [preview, setPreview] = useState<string>("");

    async function processFile(file: File) {
        if (!file.type.startsWith("image/")) {
            setError("รองรับเฉพาะไฟล์รูปภาพ (JPG, PNG, WebP, GIF)");
            return;
        }
        if (file.size > 20 * 1024 * 1024) {
            setError("ไฟล์ต้องมีขนาดไม่เกิน 20MB");
            return;
        }
        setError(null);
        setPhase("compressing");
        try {
            // Step 1: Compress → WebP
            const { dataUrl, sizeBefore, sizeAfter } = await compressToWebP(file);

            // Get dimensions for stats
            await new Promise<void>(res => {
                const img = new Image();
                img.onload = () => {
                    setStats({ before: sizeBefore, after: sizeAfter, w: img.width, h: img.height });
                    res();
                };
                img.src = dataUrl;
            });

            setPreview(dataUrl);
            setPhase("uploading");

            // Step 2: Upload to Supabase Storage
            const result = await uploadImageToStorage(dataUrl, "blog");
            if (!result.success || !result.url) {
                // Fallback: use base64 data URL if upload fails
                console.warn("Supabase upload failed, using base64 fallback:", result.error);
                onChange(dataUrl);
                setPhase("done");
                setError(`Upload ล้มเหลว (${result.error}) - ใช้ fallback`);
                return;
            }

            onChange(result.url);
            setPhase("done");
        } catch (e) {
            setError(e instanceof Error ? e.message : "เกิดข้อผิดพลาด");
            setPhase("idle");
        }
    }

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) processFile(file);
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) processFile(file);
        e.target.value = "";
    }

    function handleRemove() {
        onChange("");
        setStats(null);
        setError(null);
        setPreview("");
        setPhase("idle");
    }

    return (
        <div className="space-y-3">
            {/* Preview */}
            {(value || preview) ? (
                <div className="relative rounded-xl overflow-hidden border border-white/10 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={preview || value} alt="cover" className="w-full h-36 object-cover" />
                    {/* Upload progress overlay */}
                    {phase === "compressing" && (
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2">
                            <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                            <p className="text-xs text-white">กำลัง compress...</p>
                        </div>
                    )}
                    {phase === "uploading" && (
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2">
                            <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
                            <p className="text-xs text-white">กำลัง upload...</p>
                        </div>
                    )}
                    {phase === "done" && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button
                                onClick={() => inputRef.current?.click()}
                                className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm transition-colors"
                            >
                                <Upload className="w-3 h-3" /> เปลี่ยนรูป
                            </button>
                            <button
                                onClick={handleRemove}
                                className="flex items-center gap-1.5 bg-red-500/60 hover:bg-red-500/80 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm transition-colors"
                            >
                                <X className="w-3 h-3" /> ลบ
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div
                    onDrop={handleDrop}
                    onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onClick={() => inputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                        dragOver
                            ? "border-blue-400 bg-blue-500/10"
                            : "border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                >
                    <ImageIcon className="w-7 h-7 text-slate-500" />
                    <p className="text-xs text-slate-400 text-center">
                        วางรูปที่นี่ หรือ<span className="text-blue-400"> คลิกเพื่อเลือก</span>
                    </p>
                    <p className="text-xs text-slate-600">JPG · PNG · WebP · GIF · สูงสุด 20MB</p>
                </div>
            )}

            {/* Stats */}
            {stats && phase === "done" && (
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div className="text-xs text-emerald-300 flex flex-wrap gap-x-3 gap-y-0.5">
                        <span>{stats.w} × {stats.h} px · WebP</span>
                        <span>{formatSize(stats.before)} → <strong>{formatSize(stats.after)}</strong></span>
                        <span className="text-emerald-400 font-semibold">
                            -{Math.round((1 - stats.after / stats.before) * 100)}%
                        </span>
                    </div>
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 text-xs text-red-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {error}
                </div>
            )}

            {/* Hint */}
            <div className="rounded-xl border border-white/8 p-3 space-y-1">
                <p className="text-xs font-medium text-slate-400">ขนาดที่แนะนำ</p>
                <div className="space-y-0.5 text-xs text-slate-500">
                    <p>📐 <span className="text-slate-300">1200 × 630 px</span> — OG / Social share</p>
                    <p>📐 <span className="text-slate-300">1600 × 900 px</span> — Banner เต็มหน้า</p>
                    <p>🔄 Auto compress → <span className="text-slate-300">WebP</span> · max {MAX_WIDTH}×{MAX_HEIGHT}px</p>
                </div>
            </div>

            <input ref={inputRef} type="file" accept="image/*" onChange={handleInput} className="hidden" />
        </div>
    );
}
