"use client";

import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { Upload, X, Loader2, ImageIcon } from "lucide-react";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ImageUploaderProps {
    bucket: string;
    onUpload: (url: string) => void;
    label?: string;
    currentUrl?: string | null;
}

export function ImageUploader({ bucket, onUpload, label = "Image", currentUrl }: ImageUploaderProps) {
    const [preview, setPreview] = useState<string>(currentUrl ?? "");
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    async function handleFile(file: File) {
        if (!file.type.startsWith("image/")) {
            setError("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setError("ไฟล์ต้องมีขนาดไม่เกิน 5MB");
            return;
        }

        setError(null);
        setUploading(true);

        const ext = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        const { data, error: uploadError } = await supabase.storage
            .from(bucket)
            .upload(fileName, file, { upsert: false });

        if (uploadError) {
            setError(uploadError.message);
            setUploading(false);
            return;
        }

        const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(data.path);
        const publicUrl = urlData.publicUrl;

        setPreview(publicUrl);
        onUpload(publicUrl);
        setUploading(false);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    }

    function handleRemove() {
        setPreview("");
        onUpload("");
        if (inputRef.current) inputRef.current.value = "";
    }

    return (
        <div className="space-y-3">
            {preview ? (
                <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-50">
                    <img src={preview} alt={label} className="w-full h-full object-cover" />
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-red-50 text-slate-500 hover:text-red-500 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => inputRef.current?.click()}
                    className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors aspect-video"
                >
                    {uploading ? (
                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    ) : (
                        <>
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                                <ImageIcon className="w-6 h-6 text-slate-400" />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium text-slate-700">คลิกหรือลากไฟล์มาวาง</p>
                                <p className="text-xs text-slate-400 mt-1">PNG, JPG, WEBP ขนาดไม่เกิน 5MB</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
                                <Upload className="w-3 h-3" /> อัปโหลด {label}
                            </div>
                        </>
                    )}
                </div>
            )}

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
            />

            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}
        </div>
    );
}
