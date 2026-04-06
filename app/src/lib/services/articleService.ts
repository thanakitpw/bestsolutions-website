import { supabase } from "@/lib/supabase";
import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Article } from "@/lib/types";

// ดึงบทความที่ publish แล้ว (สำหรับหน้า Blog สาธารณะ)
export async function getArticles(): Promise<Article[]> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .gt("published_at", "1970-01-01T00:00:00Z") // Only published posts
        .order("published_at", { ascending: false });

    if (error) {
        console.error("Error fetching articles:", error.message);
        return [];
    }

    return data ?? [];
}

// ดึงบทความทั้งหมด รวม draft (สำหรับหน้า Admin) — ใช้ service role key เพื่อ bypass RLS
export async function getAllArticlesAdmin(): Promise<Article[]> {
    const { data, error } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching all articles:", error.message);
        return [];
    }

    return data ?? [];
}

// ดึงบทความตาม id (สำหรับ Admin Edit) — ใช้ service role key เพื่อ bypass RLS
export async function getArticleById(id: string): Promise<Article | null> {
    const { data, error } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(`Error fetching article id "${id}":`, error.message);
        return null;
    }

    return data as Article;
}

// ดึงบทความตาม slug (สำหรับหน้า Detail) — ใช้ service role key เพื่อ bypass RLS
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const { data, error } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        console.error(`Error fetching article "${slug}":`, error.message);
        return null;
    }

    return data;
}

// ดึง slugs ทั้งหมด (สำหรับ generateStaticParams)
export async function getAllArticleSlugs(): Promise<string[]> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug");

    if (error) {
        console.error("Error fetching article slugs:", error.message);
        return [];
    }

    return (data ?? []).map((row) => (row as { id: string; slug: string }).slug);
}
