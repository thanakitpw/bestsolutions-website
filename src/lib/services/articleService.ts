import { supabase } from "@/lib/supabase";
import type { Article } from "@/lib/types";

// ดึงบทความทั้งหมด (สำหรับหน้า Listing)
export async function getArticles(): Promise<Article[]> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });

    if (error) {
        console.error("Error fetching articles:", error.message);
        return [];
    }

    return data ?? [];
}

// ดึงบทความตาม slug (สำหรับหน้า Detail)
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const { data, error } = await supabase
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
