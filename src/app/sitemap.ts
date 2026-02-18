import { MetadataRoute } from "next";
import { getArticles } from "@/lib/services/articleService";
import { getPortfolios } from "@/lib/services/portfolioService";

const BASE_URL = "https://bestsolutions.co.th";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        "",
        "/about",
        "/services",
        "/portfolio",
        "/blog",
        "/contact",
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const articles = await getArticles();
        blogRoutes = articles.map((post) => ({
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.updated_at ?? post.published_at),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));
    } catch {
        // Fallback: sitemap still works even if Supabase is unavailable
    }

    let projectRoutes: MetadataRoute.Sitemap = [];
    try {
        const projects = await getPortfolios();
        projectRoutes = projects.map((project) => ({
            url: `${BASE_URL}/portfolio/${project.slug}`,
            lastModified: new Date(project.updated_at ?? new Date()),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));
    } catch {
        // Fallback: sitemap still works even if Supabase is unavailable
    }

    return [...routes, ...blogRoutes, ...projectRoutes];
}
