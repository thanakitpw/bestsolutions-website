"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { supabase } from "@/lib/supabase";

// ============================================================
// IMAGE UPLOAD
// ============================================================

export async function uploadImageToStorage(
    base64DataUrl: string,
    folder: string = "blog"
): Promise<{ success: boolean; url?: string; error?: string }> {
    try {
        // Check environment
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
            return { success: false, error: "Supabase environment variables missing" };
        }

        // Strip data URL prefix → get raw base64
        const matches = base64DataUrl.match(/^data:(image\/\w+);base64,(.+)$/);
        if (!matches) return { success: false, error: "Invalid image data" };

        const mimeType = matches[1];
        const base64 = matches[2];
        const buffer = Buffer.from(base64, "base64");
        const ext = mimeType === "image/webp" ? "webp" : mimeType.split("/")[1] ?? "jpg";
        const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

        // Check if bucket exists first
        const { data: buckets } = await supabaseAdmin.storage.listBuckets();
        const imagesBucket = buckets?.find(b => b.name === "images");
        
        if (!imagesBucket) {
            return { success: false, error: "Storage bucket 'images' not found. Please create it in Supabase Dashboard." };
        }

        const { error } = await supabaseAdmin.storage
            .from("images")
            .upload(fileName, buffer, {
                contentType: mimeType,
                upsert: false,
            });

        if (error) {
            console.error("Supabase storage error:", error);
            if (error.message.includes("bucket") || error.message.includes("not found")) {
                return { success: false, error: "Bucket 'images' not found or no permissions. Create bucket and set RLS policy." };
            }
            if (error.message.includes("permission") || error.message.includes("unauthorized")) {
                return { success: false, error: "No upload permissions. Check SUPABASE_SERVICE_ROLE_KEY." };
            }
            return { success: false, error: error.message };
        }

        const { data: urlData } = supabaseAdmin.storage
            .from("images")
            .getPublicUrl(fileName);

        return { success: true, url: urlData.publicUrl };
    } catch (err) {
        console.error("Upload error:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Upload failed",
        };
    }
}

// ============================================================
// BLOG POST ACTIONS
// ============================================================

export async function createBlogPost(formData: FormData) {
    try {
        const title = formData.get("title") as string;
        const slug = formData.get("slug") as string;
        const excerpt = formData.get("excerpt") as string;
        const content = formData.get("content") as string;
        const category = formData.get("category") as string;
        const tagsRaw = formData.get("tags") as string;
        const author_name = formData.get("author_name") as string;
        const cover_image = formData.get("cover_image") as string;
        const seo_title = formData.get("seo_title") as string;
        const seo_description = formData.get("seo_description") as string;
        const publish = formData.get("publish") === "true";

        // Validation
        if (!title?.trim()) return { success: false, error: "กรุณากรอกชื่อบทความ" };
        if (!slug?.trim()) return { success: false, error: "กรุณากรอก slug" };

        const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

        const insertData = {
            title: title.trim(),
            slug: slug.trim(),
            excerpt: excerpt?.trim() || null,
            content: content?.trim() || null,
            category: category?.trim() || null,
            tags,
            author_name: author_name?.trim() || null,
            cover_image: cover_image?.trim() || null,
            seo_title: seo_title?.trim() || null,
            seo_description: seo_description?.trim() || null,
            original_google_doc_id: null,
            published_at: publish ? new Date().toISOString() : new Date(0).toISOString(),
        };

        console.log("Creating blog post:", insertData);

        const { error } = await supabaseAdmin.from("blog_posts").insert(insertData);

        if (error) {
            console.error("Database error:", error);
            if (error.code === "23505") {
                return { success: false, error: "Slug นี้มีอยู่แล้ว กรุณาเปลี่ยน slug" };
            }
            if (error.message.includes("permission")) {
                return { success: false, error: "ไม่มีสิทธิ์เขียนข้อมูล ตรวจสอบ RLS policy" };
            }
            return { success: false, error: error.message };
        }

        revalidatePath("/blog");
        revalidatePath("/blog/[slug]");
        revalidatePath("/admin/blog");
        return { success: true };
    } catch (err) {
        console.error("Create blog post error:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "เกิดข้อผิดพลาด",
        };
    }
}

export async function updateBlogPost(id: string, formData: FormData) {
    try {
        const title = formData.get("title") as string;
        const slug = formData.get("slug") as string;
        const excerpt = formData.get("excerpt") as string;
        const content = formData.get("content") as string;
        const category = formData.get("category") as string;
        const tagsRaw = formData.get("tags") as string;
        const author_name = formData.get("author_name") as string;
        const cover_image = formData.get("cover_image") as string;
        const seo_title = formData.get("seo_title") as string;
        const seo_description = formData.get("seo_description") as string;
        const publish = formData.get("publish") === "true";

        // Handle tags - could be JSON string or comma-separated
        let tags: string[] = [];
        if (tagsRaw) {
            try {
                tags = JSON.parse(tagsRaw);
            } catch {
                tags = tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
            }
        }

    const updateData: Record<string, unknown> = {
            title: title?.trim() || null,
            slug: slug?.trim() || null,
            excerpt: excerpt?.trim() || null,
            content: content?.trim() || null,
            category: category?.trim() || null,
            tags,
            author_name: author_name?.trim() || null,
            seo_title: seo_title?.trim() || null,
            seo_description: seo_description?.trim() || null,
        };

        if (cover_image?.trim()) {
            updateData.cover_image = cover_image.trim();
        }

        if (publish) {
            updateData.published_at = new Date().toISOString();
        }

        const { error } = await supabaseAdmin
            .from("blog_posts")
            .update(updateData)
            .eq("id", id);

        if (error) {
            console.error("Update blog post error:", error);
            return { success: false, error: error.message };
        }

        revalidatePath("/blog");
        revalidatePath(`/blog/${slug}`);
        revalidatePath("/admin/blog");
        return { success: true };
    } catch (err) {
        console.error("Update blog post error:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "เกิดข้อผิดพลาด",
        };
    }
}

export async function deleteBlogPost(id: string) {
    const { error } = await supabaseAdmin
        .from("blog_posts")
        .delete()
        .eq("id", id);

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/blog");
    revalidatePath("/admin/blog");
    return { success: true };
}

// ============================================================
// PORTFOLIO ACTIONS
// ============================================================

export async function createPortfolio(formData: FormData) {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const tagsRaw = formData.get("tags") as string;
    const image = formData.get("image") as string;
    const client_name = formData.get("client_name") as string;
    const year = formData.get("year") as string;
    const challenge = formData.get("challenge") as string;
    const solution = formData.get("solution") as string;
    const result = formData.get("result") as string;
    const seo_title = formData.get("seo_title") as string;
    const seo_description = formData.get("seo_description") as string;

    const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

    const { error } = await supabaseAdmin.from("portfolios").insert({
        title,
        slug,
        description: description || null,
        content: content || null,
        category: category || null,
        tags,
        image: image || null,
        gallery: [],
        client_name: client_name || null,
        year: year || null,
        challenge: challenge || null,
        solution: solution || null,
        result: result || null,
        seo_title: seo_title || null,
        seo_description: seo_description || null,
    });

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/portfolio");
    revalidatePath("/admin/portfolio");
    return { success: true };
}

export async function updatePortfolio(id: string, formData: FormData) {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const tagsRaw = formData.get("tags") as string;
    const image = formData.get("image") as string;
    const client_name = formData.get("client_name") as string;
    const year = formData.get("year") as string;
    const challenge = formData.get("challenge") as string;
    const solution = formData.get("solution") as string;
    const result = formData.get("result") as string;
    const seo_title = formData.get("seo_title") as string;
    const seo_description = formData.get("seo_description") as string;

    const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

    const updateData: Record<string, unknown> = {
        title,
        slug,
        description: description || null,
        content: content || null,
        category: category || null,
        tags,
        client_name: client_name || null,
        year: year || null,
        challenge: challenge || null,
        solution: solution || null,
        result: result || null,
        seo_title: seo_title || null,
        seo_description: seo_description || null,
    };

    if (image) {
        updateData.image = image;
    }

    const { error } = await supabaseAdmin
        .from("portfolios")
        .update(updateData)
        .eq("id", id);

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/portfolio");
    revalidatePath(`/portfolio/${slug}`);
    revalidatePath("/admin/portfolio");
    return { success: true };
}

export async function deletePortfolio(id: string) {
    const { error } = await supabaseAdmin
        .from("portfolios")
        .delete()
        .eq("id", id);

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/portfolio");
    revalidatePath("/admin/portfolio");
    return { success: true };
}
