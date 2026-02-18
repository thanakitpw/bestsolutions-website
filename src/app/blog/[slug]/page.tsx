
import { blogPosts } from "@/lib/data/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Tag } from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "บทความไม่พบ | Best Solutions Corp",
        };
    }

    return {
        title: `${post.title} | Best Solutions Blog`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Progress Bar (Simple Implementation) */}
            <div className="fixed top-0 left-0 h-1 bg-[var(--color-primary-start)] z-50 w-full" style={{ width: '100%' }}></div>

            <article>
                {/* Article Header */}
                <header className="pt-32 pb-12 md:pt-48 md:pb-16 bg-slate-50 border-b border-slate-100 relative overflow-hidden">

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-[var(--color-primary-start)] mb-8 transition-colors text-sm font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2" /> กลับไปหน้าบทความ
                        </Link>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm text-slate-500">
                            <span className="px-3 py-1 bg-[var(--color-primary-start)]/10 text-[var(--color-primary-start)] font-bold rounded-full uppercase tracking-wider text-xs">
                                {post.category}
                            </span>
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 นาทีอ่าน</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center">
                            <div className="mr-3 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                                <User className="w-6 h-6 text-slate-400" />
                                {/* <Image src={post.author.avatar} alt={post.author.name} width={48} height={48} /> */}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-slate-900">{post.author.name}</div>
                                <div className="text-xs text-slate-500">Content Writer</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16 relative z-20">
                    <div className="aspect-[21/9] bg-slate-200 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center text-slate-400 font-medium text-xl">
                        {post.title} Cover Image
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div
                        className="prose prose-lg md:prose-xl prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700
                prose-a:text-[var(--color-primary-start)] prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-2xl prose-img:shadow-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags & Share */}
                    <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-sm font-medium text-slate-500 mr-2 flex items-center">
                                <Tag className="w-4 h-4 mr-1" /> Tags:
                            </span>
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-slate-500 mr-2">Share:</span>
                            <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:text-blue-600 hover:border-blue-200">
                                <Facebook className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:text-sky-500 hover:border-sky-200">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full w-10 h-10 hover:text-blue-700 hover:border-blue-200">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="outline" className="rounded-full w-10 h-10">
                                <Share2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </article>

            <section className="bg-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">บทความน่าสนใจอื่นๆ</h2>
                    {/* Reuse Grid from listing page logic, just a snippet here */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                            <div key={p.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                                <div className="text-xs font-bold text-[var(--color-primary-start)] mb-2">{p.category}</div>
                                <Link href={`/blog/${p.slug}`} className="block mb-2">
                                    <h3 className="font-bold text-slate-900 line-clamp-2 hover:underline">{p.title}</h3>
                                </Link>
                                <div className="text-xs text-slate-500">{p.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
