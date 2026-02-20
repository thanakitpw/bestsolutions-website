import { getArticleBySlug, getArticles } from "@/lib/services/articleService";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Tag, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import type { Metadata } from "next";
import TableOfContents, { type TocHeading } from "./TableOfContents";

const BASE_URL = "https://www.bestsolutionscorp.com";

// Inject id="" into h2/h3 and return the heading list for TOC
function addIdsToHeadings(html: string): { html: string; headings: TocHeading[] } {
    const headings: TocHeading[] = [];
    const counts: Record<string, number> = {};

    const processed = html.replace(
        /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
        (_, lvl, attrs, inner) => {
            const text = inner.replace(/<[^>]*>/g, "").trim();
            let base = text
                .replace(/\s+/g, "-")
                .replace(/[^\u0E00-\u0E7Fa-zA-Z0-9-]/g, "")
                .slice(0, 60) || `h-${headings.length + 1}`;
            const count = counts[base] = (counts[base] ?? 0) + 1;
            const id = count > 1 ? `${base}-${count}` : base;
            headings.push({ id, text, level: parseInt(lvl) });
            return `<h${lvl}${attrs} id="${id}">${inner}</h${lvl}>`;
        }
    );

    return { html: processed, headings };
}

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getArticleBySlug(slug);

    if (!post) {
        return { title: "บทความไม่พบ | Best Solutions Corp" };
    }

    const title = post.seo_title ?? `${post.title} | Best Solutions Blog`;
    const description = post.seo_description ?? post.excerpt ?? "";
    const image = post.og_image ?? post.cover_image ?? `${BASE_URL}/og-default.jpg`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime: post.published_at,
            authors: post.author_name ? [post.author_name] : undefined,
            images: [{ url: image, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export async function generateStaticParams() {
    const posts = await getArticles();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getArticleBySlug(slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org", "@type": "Article",
        headline: post.title, description: post.excerpt,
        image: post.cover_image ?? undefined,
        datePublished: post.published_at, dateModified: post.updated_at,
        author: { "@type": "Person", name: post.author_name ?? "Best Solutions Corp" },
        publisher: { "@type": "Organization", name: "Best Solutions Corp", url: BASE_URL },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug}` },
    };

    const allPosts = await getArticles();
    const relatedPosts = allPosts
        .filter((p) => p.id !== post.id && (p.category === post.category || post.tags?.some(t => p.tags?.includes(t))))
        .slice(0, 3);
    const showRelated = relatedPosts.length > 0 ? relatedPosts : allPosts.filter(p => p.id !== post.id).slice(0, 3);
    const wordCount = (post.content ?? "").replace(/<[^>]*>/g, "").split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    const postUrl = `${BASE_URL}/blog/${post.slug}`;
    const { html: contentHtml, headings } = addIdsToHeadings(post.content ?? "");

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* ── Hero Header ── */}
            <header className="relative pt-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fef0f0] via-[#fdf2f4] to-[#f5f0ff]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F51036] rounded-full blur-[180px] opacity-[0.07] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#25137A] rounded-full blur-[160px] opacity-[0.06] pointer-events-none" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#F51036] mb-10 transition-colors text-sm font-medium group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> กลับไปหน้าบทความ
                    </Link>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                        {post.category && (
                            <span className="px-4 py-1.5 bg-gradient-to-r from-[#F51036] to-[#c0002a] text-white font-bold rounded-full text-xs uppercase tracking-wider shadow-md shadow-red-200">
                                {post.category}
                            </span>
                        )}
                        <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.published_at).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                            <Clock className="w-4 h-4" /> {readTime} นาทีอ่าน
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a1a2e] leading-[1.15] tracking-tight mb-8">
                        {post.title}
                    </h1>

                    {post.excerpt && (
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                            {post.excerpt}
                        </p>
                    )}

                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur border border-slate-100 rounded-2xl px-5 py-3 shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F51036] to-[#25137A] flex items-center justify-center overflow-hidden shrink-0">
                            {post.author_avatar
                                ? <img src={post.author_avatar} alt={post.author_name ?? ""} className="w-full h-full object-cover" />
                                : <User className="w-5 h-5 text-white" />}
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900 text-sm">{post.author_name ?? "Best Solutions Corp"}</div>
                            <div className="text-xs text-slate-400">Content Writer · Best Solutions</div>
                        </div>
                    </div>
                </div>

                {post.cover_image && (
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12">
                        <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-white/60">
                            <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                )}
            </header>

            {/* ── Body ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">

                    {/* Article Content */}
                    <article>
                        <div
                            className="
                                [&_p]:text-slate-900 [&_p]:leading-[1.9] [&_p]:text-[1.0625rem] [&_p]:mb-6 [&_p]:[text-indent:1.5em]
                                [&_li]:text-slate-900 [&_li]:leading-relaxed [&_li]:text-[1.0625rem]
                                [&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6
                                [&_ol]:my-5 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6
                                [&_ul>li]:pl-1 [&_ol>li]:pl-1

                                [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-[#1a1a2e] [&_h1]:tracking-tight [&_h1]:leading-tight [&_h1]:mt-14 [&_h1]:mb-6
                                [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-[#1a1a2e] [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-3 [&_h2]:border-b-2 [&_h2]:border-slate-100
                                [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:pl-3 [&_h3]:border-l-4 [&_h3]:border-[#F51036]
                                [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-slate-700 [&_h4]:mt-8 [&_h4]:mb-2
                                [&_h5]:text-base [&_h5]:font-semibold [&_h5]:text-slate-600 [&_h5]:mt-6 [&_h5]:mb-2 [&_h5]:uppercase [&_h5]:tracking-wider

                                [&_strong]:text-slate-900 [&_strong]:font-bold
                                [&_em]:text-slate-700 [&_em]:italic

                                [&_a]:text-[#F51036] [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium

                                [&_blockquote]:border-l-4 [&_blockquote]:border-[#F51036] [&_blockquote]:bg-red-50 [&_blockquote]:rounded-r-2xl [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:not-italic [&_blockquote]:text-slate-700

                                [&_img]:rounded-2xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:w-full

                                [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[#F51036] [&_code]:text-sm [&_code]:font-mono
                                [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:rounded-2xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:my-8

                                [&_hr]:border-slate-200 [&_hr]:my-10

                                [&_table]:w-full [&_table]:border-collapse [&_table]:my-8
                                [&_th]:bg-slate-50 [&_th]:text-slate-900 [&_th]:font-bold [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:border [&_th]:border-slate-200
                                [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-slate-200 [&_td]:text-slate-800
                            "
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Tag className="w-4 h-4 text-slate-400" />
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full text-slate-700 transition-colors cursor-pointer">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Share */}
                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <p className="text-sm font-semibold text-slate-500 mb-4">แชร์บทความนี้</p>
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] text-sm font-medium transition-colors">
                                    <Facebook className="w-4 h-4" /> Facebook
                                </a>
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors">
                                    <Twitter className="w-4 h-4" /> X (Twitter)
                                </a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] text-sm font-medium transition-colors">
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Author Card */}
                        <div className="mt-12 bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl p-8 flex gap-6 items-start shadow-sm">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F51036] to-[#25137A] flex items-center justify-center shrink-0 overflow-hidden">
                                {post.author_avatar
                                    ? <img src={post.author_avatar} alt={post.author_name ?? ""} className="w-full h-full object-cover" />
                                    : <User className="w-8 h-8 text-white" />}
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#F51036] uppercase tracking-wider mb-1">เขียนโดย</p>
                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{post.author_name ?? "Best Solutions Corp"}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    ทีมผู้เชี่ยวชาญด้านการตลาดออนไลน์ SEO และ Digital Strategy จาก Best Solutions Corp
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block space-y-6 sticky top-24">
                        {/* Table of Contents */}
                        {headings.length > 0 && <TableOfContents headings={headings} />}

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
                            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">ข้อมูลบทความ</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                                    <span>{new Date(post.published_at).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                                    <span>ใช้เวลาอ่าน {readTime} นาที</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <User className="w-4 h-4 text-slate-400 shrink-0" />
                                    <span>{post.author_name ?? "Best Solutions"}</span>
                                </div>
                                {post.category && (
                                    <div className="pt-1">
                                        <span className="inline-block px-3 py-1 bg-[#F51036]/10 text-[#F51036] text-xs font-bold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#25137A] to-[#F51036] p-6 text-white">
                            <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">ต้องการความช่วยเหลือ?</p>
                            <h3 className="font-extrabold text-lg leading-tight mb-3">ปรึกษาทีมการตลาดของเราฟรี!</h3>
                            <p className="text-white/70 text-sm mb-5 leading-relaxed">วางแผนกลยุทธ์ดิจิทัลที่ใช่สำหรับธุรกิจคุณ</p>
                            <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-white text-[#F51036] font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                                ติดต่อเราเลย <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {post.tags && post.tags.length > 0 && (
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full text-slate-700 hover:border-[#F51036] hover:text-[#F51036] transition-colors cursor-pointer">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>

            {/* ── Related Posts ── */}
            {showRelated.length > 0 && (
                <section className="bg-slate-50 border-t border-slate-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl font-extrabold text-slate-900">บทความที่เกี่ยวข้อง</h2>
                            <Link href="/blog" className="text-sm text-[#F51036] font-semibold hover:underline flex items-center gap-1">
                                ดูทั้งหมด <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {showRelated.map((p) => (
                                <Link key={p.id} href={`/blog/${p.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                                    <div className="relative h-44 overflow-hidden bg-slate-100">
                                        {p.cover_image
                                            ? <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            : <div className="absolute inset-0 bg-gradient-to-br from-[#F51036]/10 to-[#25137A]/10" />}
                                        {p.category && (
                                            <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-800 rounded-full shadow-sm">
                                                {p.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(p.published_at).toLocaleDateString("th-TH", { year: "numeric", month: "short", day: "numeric" })}
                                        </p>
                                        <h3 className="font-bold text-slate-900 line-clamp-2 group-hover:text-[#F51036] transition-colors leading-snug mb-3">
                                            {p.title}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-[#F51036] text-xs font-semibold mt-auto group-hover:gap-2 transition-all">
                                            อ่านต่อ <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA ── */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#25137A] to-[#F51036] px-8 py-16 md:px-16 text-center relative">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                        <div className="absolute -top-1/2 -left-1/4 w-3/4 h-[200%] bg-white/10 rotate-12 blur-3xl" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">พร้อมยกระดับธุรกิจของคุณหรือยัง?</h2>
                        <p className="text-white/80 mb-8">ปรึกษาทีมผู้เชี่ยวชาญของเราฟรี ไม่มีข้อผูกมัด</p>
                        <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-[#F51036] font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-colors shadow-lg">
                            ปรึกษาฟรีวันนี้ <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
