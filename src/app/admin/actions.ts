"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { supabase } from "@/lib/supabase";

// ============================================================
// BLOG POST ACTIONS
// ============================================================

export async function createBlogPost(formData: FormData) {
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

    const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

    const { error } = await supabaseAdmin.from("blog_posts").insert({
        title,
        slug,
        excerpt: excerpt || null,
        content: content || null,
        category: category || null,
        tags,
        author_name: author_name || null,
        cover_image: cover_image || null,
        seo_title: seo_title || null,
        seo_description: seo_description || null,
        original_google_doc_id: null,
        published_at: publish ? new Date().toISOString() : new Date(0).toISOString(),
    });

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/blog");
    revalidatePath("/admin/blog");
    return { success: true };
}

export async function updateBlogPost(id: string, formData: FormData) {
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

    const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

    const updateData: Record<string, unknown> = {
        title,
        slug,
        excerpt: excerpt || null,
        content: content || null,
        category: category || null,
        tags,
        author_name: author_name || null,
        seo_title: seo_title || null,
        seo_description: seo_description || null,
    };

    if (cover_image) {
        updateData.cover_image = cover_image;
    }

    if (publish) {
        updateData.published_at = new Date().toISOString();
    }

    const { error } = await supabaseAdmin
        .from("blog_posts")
        .update(updateData)
        .eq("id", id);

    if (error) {
        return { success: false, error: error.message };
    }

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/admin/blog");
    return { success: true };
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
