import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://bestsolutions.co.th";

    // Core pages
    const routes = [
        "",
        "/about",
        "/services",
        "/portfolio",
        "/blog",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic Blog Posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    // Dynamic Portfolio Projects
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes, ...projectRoutes];
}
