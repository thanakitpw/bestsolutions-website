
import { blogPosts } from "@/lib/data/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export const metadata = {
    title: "บทความและข่าวสาร | Best Solutions Corp",
    description: "อัปเดตเทรนด์การตลาดออนไลน์, SEO, Web Design และเทคโนโลยีใหม่ๆ เพื่อธุรกิจของคุณ",
};

export default function BlogPage() {
    // Highlight the first post as "Featured"
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header Section */}
            <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Knowledge Hub
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        อัปเดตเทรนด์ดิจิทัล เทคนิคการตลาด และไอเดียธุรกิจใหม่ๆ <br className="hidden md:inline" /> ส่งตรงจากทีมงานผู้เชี่ยวชาญของเรา
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Featured Post */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                            <span className="w-1.5 h-8 bg-[var(--color-primary-start)] rounded-full mr-3"></span>
                            บทความแนะนำ (Featured)
                        </h2>
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 grid md:grid-cols-2 group">
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:animate-none"></div> {/* Placeholder for Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium z-10">
                                    Featured Image
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                    <span className="px-3 py-1 bg-[var(--color-primary-start)]/10 text-[var(--color-primary-start)] font-bold rounded-full">
                                        {featuredPost.category}
                                    </span>
                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {featuredPost.date}</span>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary-start)] transition-colors">
                                    <Link href={`/blog/${featuredPost.slug}`}>
                                        {featuredPost.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 text-lg mb-8 line-clamp-3">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 mr-3 flex items-center justify-center text-slate-400">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-900">{featuredPost.author.name}</span>
                                    </div>
                                    <Link href={`/blog/${featuredPost.slug}`}>
                                        <Button variant="outline" className="group/btn">
                                            อ่านต่อ <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Posts Grid */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                        <span className="w-1.5 h-8 bg-slate-300 rounded-full mr-3"></span>
                        บทความล่าสุด
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
                                <div className="relative h-48 overflow-hidden bg-slate-200">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-900 rounded-full shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
                                        Topic Image
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
                                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                        <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author.name}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[var(--color-primary-start)] transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[var(--color-primary-start)] font-medium text-sm hover:underline mt-auto">
                                        อ่านบทความนี้ <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">ไม่พลาดทุกข่าวดิจิทัล!</h2>
                    <p className="text-slate-300 mb-8 text-lg">
                        ติดตามเทคนิคดีๆ และข่าวสารอัปเดตก่อนใคร เพียงแอดไลน์ของเรา
                    </p>
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8">
                        แอด LINE Official Account
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
