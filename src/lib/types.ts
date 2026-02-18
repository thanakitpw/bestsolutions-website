// ============================================================
// TypeScript Types for Supabase Database
// ============================================================

export type Database = {
    public: {
        Tables: {
            // blog_posts: website's blog articles
            blog_posts: {
                Row: Article;
                Insert: Omit<Article, "id" | "created_at" | "updated_at">;
                Update: Partial<Omit<Article, "id" | "created_at">>;
            };
            // portfolios: website's portfolio items
            portfolios: {
                Row: Portfolio;
                Insert: Omit<Portfolio, "id" | "created_at" | "updated_at">;
                Update: Partial<Omit<Portfolio, "id" | "created_at">>;
            };
        };
    };
};

export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string | null;
    content: string | null;
    cover_image: string | null;
    category: string | null;
    tags: string[];
    author_name: string | null;
    author_avatar: string | null;
    // SEO
    seo_title: string | null;
    seo_description: string | null;
    og_image: string | null;
    // Source
    original_google_doc_id: string | null;
    // Timestamps
    published_at: string;
    created_at: string;
    updated_at: string;
}

export interface Portfolio {
    id: string;
    slug: string;
    title: string;
    description: string | null;
    content: string | null;
    category: string | null;
    tags: string[];
    image: string | null;
    gallery: { url: string; alt?: string }[];
    client_name: string | null;
    year: string | null;
    // Case Study
    challenge: string | null;
    solution: string | null;
    result: string | null;
    // SEO
    seo_title: string | null;
    seo_description: string | null;
    og_image: string | null;
    // Timestamps
    created_at: string;
    updated_at: string;
}
