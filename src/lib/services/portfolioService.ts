import { supabase } from "@/lib/supabase";
import type { Portfolio } from "@/lib/types";

// ดึงผลงานทั้งหมด (สำหรับหน้า Listing)
export async function getPortfolios(): Promise<Portfolio[]> {
    const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching portfolios:", error.message);
        return [];
    }

    return data ?? [];
}

// ดึงผลงานตาม slug (สำหรับหน้า Detail)
export async function getPortfolioBySlug(slug: string): Promise<Portfolio | null> {
    const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        console.error(`Error fetching portfolio "${slug}":`, error.message);
        return null;
    }

    return data;
}

// ดึง slugs ทั้งหมด (สำหรับ generateStaticParams)
export async function getAllPortfolioSlugs(): Promise<string[]> {
    const { data, error } = await supabase
        .from("portfolios")
        .select("id, slug");

    if (error) {
        console.error("Error fetching portfolio slugs:", error.message);
        return [];
    }

    return (data ?? []).map((row) => (row as { id: string; slug: string }).slug);
}
