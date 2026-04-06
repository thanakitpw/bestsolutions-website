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

function thaiToSlug(text: string): string {
    const thaiToEn: Record<string, string> = {
        "การตลาดออนไลน์": "online-marketing",
        "การตลาด": "marketing",
        "ออนไลน์": "online",
        "ดิจิทัล": "digital",
        "ธุรกิจ": "business",
        "มือใหม่": "beginner",
        "คู่มือ": "guide",
        "เริ่มต้น": "getting-started",
        "สำหรับ": "for",
        "และ": "and",
        "หรือ": "or",
        "กับ": "with",
        "ใน": "in",
        "ที่": "at",
        "คือ": "what-is",
        "อะไร": "what",
        "ทำไม": "why",
        "อย่างไร": "how",
        "วิธี": "how-to",
        "เทคนิค": "technique",
        "กลยุทธ์": "strategy",
        "เพิ่ม": "increase",
        "ยอดขาย": "sales",
        "ลูกค้า": "customer",
        "แบรนด์": "brand",
        "เว็บไซต์": "website",
        "โซเชียลมีเดีย": "social-media",
        "เฟซบุ๊ก": "facebook",
        "อินสตาแกรม": "instagram",
        "กูเกิล": "google",
        "คอนเทนต์": "content",
        "บทความ": "article",
        "บล็อก": "blog",
        "ปี": "year",
        "ฟรี": "free",
        "ง่าย": "easy",
        "ดี": "good",
        "ใหม่": "new",
        "ครบ": "complete",
        "จบ": "complete",
        "ทุก": "all",
        "ขั้นตอน": "step",
        "เคล็ดลับ": "tips",
        "ประโยชน์": "benefits",
        "ข้อดี": "advantages",
        "ข้อเสีย": "disadvantages",
        "ตัวอย่าง": "example",
        "สรุป": "summary",
        "SEO": "seo",
        "seo": "seo",
    };
    let result = text;
    for (const [thai, en] of Object.entries(thaiToEn)) {
        result = result.split(thai).join("-" + en + "-");
    }
    return result
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 80);
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

// Convert dash-bullet <p> elements → <ul><li>, and ## markers → headings
function polishContent(html: string): string {
    // 1. Convert markdown heading patterns inside plain <p> tags
    //    e.g. <p>## Key Takeaways</p>  →  <h2>Key Takeaways</h2>
    html = html
        .replace(/<p[^>]*>####\s*(.+?)<\/p>/gi, "<h4>$1</h4>")
        .replace(/<p[^>]*>###\s*(.+?)<\/p>/gi,  "<h3>$1</h3>")
        .replace(/<p[^>]*>##\s*(.+?)<\/p>/gi,   "<h2>$1</h2>");

    // 2. Group consecutive <p>- …</p> or <p>• …</p> into <ul><li>
    type Seg = { type: "dash" | "other"; content: string };
    const segs: Seg[] = [];
    const pRe = /<p[^>]*>[\s\S]*?<\/p>/g;
    let last = 0;
    let m: RegExpExecArray | null;

    while ((m = pRe.exec(html)) !== null) {
        if (m.index > last) segs.push({ type: "other", content: html.slice(last, m.index) });
        const dashMatch = m[0].match(/^<p[^>]*>[-•]\s*([\s\S]*?)<\/p>$/);
        segs.push(dashMatch
            ? { type: "dash",  content: dashMatch[1] }
            : { type: "other", content: m[0] });
        last = m.index + m[0].length;
    }
    if (last < html.length) segs.push({ type: "other", content: html.slice(last) });

    const out: string[] = [];
    let i = 0;
    while (i < segs.length) {
        if (segs[i].type === "dash") {
            const items: string[] = [];
            while (i < segs.length && segs[i].type === "dash") {
                items.push(`<li>${segs[i].content.trim()}</li>`);
                i++;
            }
            out.push(`<ul>${items.join("")}</ul>`);
        } else {
            out.push(segs[i].content);
            i++;
        }
    }
    return out.join("");
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

    // ── Format 1: n8n AI doc format ──────────────────────────────────────────
    // ## Title: ชื่อบทความ
    // *SEO Title:* ...
    // *SEO Description:* ...
    // *Featured Image Link:* ...
    // *Post Content:*
    // (real content below)

    // Extract title from "## Title: ..." or "Title: ..." in any heading/paragraph
    const titlePatterns = [
        /<h[1-3][^>]*>(?:##\s*)?Title:\s*(.*?)<\/h[1-3]>/i,
        /<p[^>]*>(?:<(?:em|strong)>)?(?:##\s*)?Title:(?:<\/(?:em|strong)>)?\s*(.*?)<\/p>/i,
    ];
    for (const re of titlePatterns) {
        const m = cleanContent.match(re);
        if (m) {
            title = stripHtml(m[1]).replace(/\*/g, "").trim();
            cleanContent = cleanContent.replace(m[0], "");
            break;
        }
    }

    // Extract *SEO Title:* — mammoth renders *text* as <em> or <strong>
    const seoTitlePatterns = [
        /<p[^>]*>(?:<(?:em|strong)>)?SEO Title:(?:<\/(?:em|strong)>)?\s*(.*?)<\/p>/i,
        /<p[^>]*>[^<]*SEO Title:\s*([^<]+(?:<(?!\/p)[^<]*)*)<\/p>/i,
    ];
    for (const re of seoTitlePatterns) {
        const m = cleanContent.match(re);
        if (m) {
            seoTitle = stripHtml(m[1]).trim();
            cleanContent = cleanContent.replace(m[0], "");
            break;
        }
    }

    // Extract *SEO Description:*
    const seoDescPatterns = [
        /<p[^>]*>(?:<(?:em|strong)>)?SEO Description:(?:<\/(?:em|strong)>)?\s*(.*?)<\/p>/i,
        /<p[^>]*>[^<]*SEO Description:\s*([^<]+(?:<(?!\/p)[^<]*)*)<\/p>/i,
    ];
    for (const re of seoDescPatterns) {
        const m = cleanContent.match(re);
        if (m) {
            seoDescription = stripHtml(m[1]).trim();
            cleanContent = cleanContent.replace(m[0], "");
            break;
        }
    }

    // Remove *Featured Image Link:* line (handles literal *, <em>, <strong>)
    cleanContent = cleanContent.replace(
        /<p[^>]*>\*?(?:<(?:em|strong)>)?\*?Featured Image Link:\*?(?:<\/(?:em|strong)>)?\*?.*?<\/p>/gi,
        ""
    );

    // Everything before *Post Content:* is metadata — use only what's after
    const postContentMatch = cleanContent.match(
        /<p[^>]*>\*?(?:<(?:em|strong)>)?\*?Post Content:\*?(?:<\/(?:em|strong)>)?\*?\s*<\/p>/i
    );
    if (postContentMatch) {
        const idx = cleanContent.indexOf(postContentMatch[0]);
        cleanContent = cleanContent.slice(idx + postContentMatch[0].length);
    }

    // ── Format 2: bracket format [SEO Title: ...] ────────────────────────────
    const bracketPatterns = [
        { key: "category", regex: /\[(?:category|หมวดหมู่):\s*([^\]]+)\]/i },
        { key: "tags",     regex: /\[(?:tags|แท็ก):\s*([^\]]+)\]/i },
        { key: "seoTitle", regex: /\[(?:seo[\s-]?title|seo[\s-]?ชื่อ):\s*([^\]]+)\]/i },
        { key: "seoDesc",  regex: /\[(?:seo[\s-]?description|seo[\s-]?คำอธิบาย):\s*([^\]]+)\]/i },
    ];
    for (const pattern of bracketPatterns) {
        const match = cleanContent.match(pattern.regex);
        if (match) {
            const value = stripHtml(match[1]).trim();
            if (pattern.key === "category") category = value;
            if (pattern.key === "tags") tags = value.split(",").map(t => t.trim()).filter(Boolean);
            if (pattern.key === "seoTitle" && !seoTitle) seoTitle = value;
            if (pattern.key === "seoDesc"  && !seoDescription) seoDescription = value;
            cleanContent = cleanContent.replace(match[0], "");
        }
    }
    const pTagMeta = cleanContent.match(/<p[^>]*>\[(?:category|tags|seo|หมวดหมู่|แท็ก)[^\]]*\]<\/p>/gi);
    if (pTagMeta) {
        for (const tag of pTagMeta) cleanContent = cleanContent.replace(tag, "");
    }

    // ── Format 3: fallback — H1 as title ─────────────────────────────────────
    if (!title) {
        const h1Match = cleanContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
        if (h1Match) {
            title = stripHtml(h1Match[1]);
            cleanContent = cleanContent.replace(h1Match[0], "");
        }
    }

    // Extract excerpt: first non-bullet <p> after Key Takeaways heading, fallback to first <p>
    let excerpt = "";
    const ktHeadingMatch = cleanContent.match(/<h[2-4][^>]*>[^<]*key\s*takeaway[s]?[^<]*<\/h[2-4]>/i);
    if (ktHeadingMatch) {
        const afterHeading = cleanContent.slice(
            cleanContent.indexOf(ktHeadingMatch[0]) + ktHeadingMatch[0].length
        );
        // Find first paragraph that is not a dash/bullet line
        const pMatches = [...afterHeading.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
        for (const pm of pMatches) {
            const text = stripHtml(pm[1]).trim();
            if (text && !text.startsWith("-") && !text.startsWith("•")) {
                excerpt = text.length > 300 ? text.slice(0, 297) + "..." : text;
                break;
            }
        }
    }
    if (!excerpt) {
        const firstPMatch = cleanContent.match(/<p[^>]*>(.*?)<\/p>/i);
        if (firstPMatch) {
            const raw = stripHtml(firstPMatch[1]).trim();
            excerpt = raw.length > 300 ? raw.slice(0, 297) + "..." : raw;
        }
    }

    // Clean up empty paragraphs and extra whitespace
    cleanContent = cleanContent
        .replace(/<p[^>]*>\s*<\/p>/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    // Convert dash bullets → <ul><li> and ## markers → headings
    cleanContent = polishContent(cleanContent);

    // Use SEO title as the display title; fallback to parsed title — strip stray *
    const displayTitle = (seoTitle || title).replace(/\*/g, "").trim();

    // Generate slug from SEO title (translate Thai → English)
    const hasThai = /[\u0E00-\u0E7F]/.test(seoTitle || title);
    const slug = hasThai
        ? thaiToSlug(seoTitle || title)
        : generateSlug(seoTitle || title);

    return { title: displayTitle, slug, excerpt, category, tags, seoTitle, seoDescription, cleanContent };
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
            data: { title, slug, excerpt, content: cleanContent, category, tags, seoTitle, seoDescription },
        };
    } catch (err) {
        console.error("parseDocxFile error:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "เกิดข้อผิดพลาดในการ parse ไฟล์",
        };
    }
}
