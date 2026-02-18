"use server";

import mammoth from "mammoth";

export interface ParsedDoc {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    seoTitle: string;
    seoDescription: string;
}

function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
        .slice(0, 80);
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function extractMetaFromHtml(html: string): {
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    tags: string[];
    seoTitle: string;
    seoDescription: string;
    cleanContent: string;
} {
    let title = "";
    let category = "";
    let tags: string[] = [];
    let seoTitle = "";
    let seoDescription = "";
    let cleanContent = html;

    // Extract H1 as title (first one)
    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (h1Match) {
        title = stripHtml(h1Match[1]);
        // Remove the first H1 from content (it becomes the page title)
        cleanContent = cleanContent.replace(h1Match[0], "");
    }

    // Look for metadata block: lines starting with specific keywords
    // Format: <!-- meta: key: value --> or [meta: key: value]
    const metaPatterns = [
        // [Category: xxx] or [หมวดหมู่: xxx]
        { key: "category", regex: /\[(?:category|หมวดหมู่):\s*([^\]]+)\]/i },
        // [Tags: xxx, yyy] or [แท็ก: xxx, yyy]
        { key: "tags", regex: /\[(?:tags|แท็ก):\s*([^\]]+)\]/i },
        // [SEO Title: xxx]
        { key: "seoTitle", regex: /\[(?:seo[\s-]?title|seo[\s-]?ชื่อ):\s*([^\]]+)\]/i },
        // [SEO Description: xxx]
        { key: "seoDesc", regex: /\[(?:seo[\s-]?description|seo[\s-]?คำอธิบาย):\s*([^\]]+)\]/i },
    ];

    for (const pattern of metaPatterns) {
        const match = cleanContent.match(pattern.regex);
        if (match) {
            const value = stripHtml(match[1]).trim();
            if (pattern.key === "category") category = value;
            if (pattern.key === "tags") tags = value.split(",").map(t => t.trim()).filter(Boolean);
            if (pattern.key === "seoTitle") seoTitle = value;
            if (pattern.key === "seoDesc") seoDescription = value;
            // Remove meta lines from content
            cleanContent = cleanContent.replace(match[0], "");
        }
    }

    // Also check for <p> tags containing meta patterns (mammoth wraps everything in <p>)
    const pTagMeta = cleanContent.match(/<p[^>]*>\[(?:category|tags|seo|หมวดหมู่|แท็ก)[^\]]*\]<\/p>/gi);
    if (pTagMeta) {
        for (const tag of pTagMeta) {
            cleanContent = cleanContent.replace(tag, "");
        }
    }

    // Extract excerpt from first <p> paragraph
    const firstPMatch = cleanContent.match(/<p[^>]*>(.*?)<\/p>/i);
    const excerpt = firstPMatch ? stripHtml(firstPMatch[1]).slice(0, 200) : "";

    // Clean up empty paragraphs and extra whitespace
    cleanContent = cleanContent
        .replace(/<p[^>]*>\s*<\/p>/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    const slug = generateSlug(title);

    return { title, slug, excerpt, category, tags, seoTitle, seoDescription, cleanContent };
}

export async function parseDocxFile(formData: FormData): Promise<{
    success: boolean;
    data?: ParsedDoc;
    error?: string;
}> {
    try {
        const file = formData.get("file") as File;
        if (!file) return { success: false, error: "ไม่พบไฟล์" };
        if (!file.name.endsWith(".docx")) {
            return { success: false, error: "รองรับเฉพาะไฟล์ .docx เท่านั้น" };
        }
        if (file.size > 10 * 1024 * 1024) {
            return { success: false, error: "ไฟล์ต้องมีขนาดไม่เกิน 10MB" };
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const result = await mammoth.convertToHtml(
            { buffer },
            {
                styleMap: [
                    "p[style-name='Heading 1'] => h1:fresh",
                    "p[style-name='Heading 2'] => h2:fresh",
                    "p[style-name='Heading 3'] => h3:fresh",
                    "p[style-name='Heading 4'] => h4:fresh",
                    "p[style-name='Quote'] => blockquote:fresh",
                    "p[style-name='Code'] => pre:fresh",
                ],
            }
        );

        const rawHtml = result.value;
        const { title, slug, excerpt, category, tags, seoTitle, seoDescription, cleanContent } =
            extractMetaFromHtml(rawHtml);

        return {
            success: true,
            data: {
                title,
                slug,
                excerpt,
                content: cleanContent,
                category,
                tags,
                seoTitle,
                seoDescription,
            },
        };
    } catch (err) {
        console.error("parseDocxFile error:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "เกิดข้อผิดพลาดในการ parse ไฟล์",
        };
    }
}
