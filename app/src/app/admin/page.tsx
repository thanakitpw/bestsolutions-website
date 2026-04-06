import Link from "next/link";
import { getArticles } from "@/lib/services/articleService";
import { getPortfolios } from "@/lib/services/portfolioService";
import {
    FileText, Briefcase, Plus, ArrowRight, ArrowUpRight,
    TrendingUp, Eye, Pencil, AlertCircle, Sparkles,
} from "lucide-react";

export default async function AdminDashboard() {
    let posts: Awaited<ReturnType<typeof getArticles>> = [];
    let portfolios: Awaited<ReturnType<typeof getPortfolios>> = [];
    let fetchError: string | null = null;

    try {
        [posts, portfolios] = await Promise.all([getArticles(), getPortfolios()]);
    } catch (err) {
        console.error("Admin dashboard fetch error:", err);
        fetchError = err instanceof Error ? err.message : "ไม่สามารถเชื่อมต่อฐานข้อมูลได้";
    }

    const recentPosts = posts.slice(0, 5);
    const recentPortfolios = portfolios.slice(0, 4);

    const now = new Date();
    const greeting =
        now.getHours() < 12 ? "Good morning" :
        now.getHours() < 17 ? "Good afternoon" : "Good evening";

    return (
        <div className="max-w-6xl mx-auto space-y-8">

            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-slate-500 text-sm mb-1">{greeting}, Thanakit 👋</p>
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/admin/blog/new"
                        className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-rose-500/20"
                    >
                        <Plus className="w-4 h-4" /> New Post
                    </Link>
                    <Link
                        href="/admin/portfolio/new"
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors border border-white/10"
                    >
                        <Plus className="w-4 h-4" /> New Project
                    </Link>
                </div>
            </div>

            {/* Error Banner */}
            {fetchError && (
                <div className="flex items-start gap-4 bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-red-400 font-semibold text-sm">Database connection failed</p>
                        <p className="text-red-500/70 text-xs mt-1">{fetchError}</p>
                    </div>
                </div>
            )}

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    {
                        label: "Blog Posts",
                        value: posts.length,
                        icon: FileText,
                        color: "from-blue-500 to-indigo-600",
                        glow: "shadow-blue-500/20",
                        href: "/admin/blog",
                    },
                    {
                        label: "Portfolio",
                        value: portfolios.length,
                        icon: Briefcase,
                        color: "from-violet-500 to-purple-600",
                        glow: "shadow-violet-500/20",
                        href: "/admin/portfolio",
                    },
                    {
                        label: "Published",
                        value: posts.filter(p => new Date(p.published_at) > new Date(1000)).length,
                        icon: Eye,
                        color: "from-emerald-500 to-teal-600",
                        glow: "shadow-emerald-500/20",
                        href: "/blog",
                    },
                    {
                        label: "Total Content",
                        value: posts.length + portfolios.length,
                        icon: Sparkles,
                        color: "from-rose-500 to-pink-600",
                        glow: "shadow-rose-500/20",
                        href: "/admin",
                    },
                ].map((stat) => (
                    <Link
                        key={stat.label}
                        href={stat.href}
                        className="group bg-white/5 hover:bg-white/8 border border-white/8 rounded-2xl p-5 transition-all duration-200 hover:border-white/15"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg ${stat.glow}`}>
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-slate-500 text-sm">{stat.label}</div>
                    </Link>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                {/* Recent Blog Posts */}
                <div className="lg:col-span-3 bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-400" />
                            <h2 className="text-white font-semibold text-sm">Recent Blog Posts</h2>
                        </div>
                        <Link href="/admin/blog" className="text-xs text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
                            View all <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                    <div className="divide-y divide-white/5">
                        {recentPosts.length === 0 ? (
                            <div className="px-6 py-12 text-center">
                                <FileText className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                                <p className="text-slate-500 text-sm">ยังไม่มีบทความ</p>
                                <Link href="/admin/blog/new" className="text-blue-400 text-xs hover:underline mt-2 inline-block">
                                    สร้างบทความแรก →
                                </Link>
                            </div>
                        ) : recentPosts.map((post) => (
                            <div key={post.id} className="flex items-center gap-4 px-6 py-3.5 hover:bg-white/5 transition-colors group">
                                {post.cover_image ? (
                                    <img src={post.cover_image} alt="" className="w-9 h-9 rounded-lg object-cover shrink-0 opacity-80" />
                                ) : (
                                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <FileText className="w-4 h-4 text-slate-600" />
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-medium truncate">{post.title}</p>
                                    <p className="text-slate-600 text-xs mt-0.5">
                                        {new Date(post.published_at).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" })}
                                        {post.category && <span className="ml-2 text-blue-500">· {post.category}</span>}
                                    </p>
                                </div>
                                <Link
                                    href={`/admin/blog/${post.id}/edit`}
                                    className="p-1.5 rounded-lg text-slate-600 hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <Pencil className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Portfolio */}
                <div className="lg:col-span-2 bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                        <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-violet-400" />
                            <h2 className="text-white font-semibold text-sm">Portfolio</h2>
                        </div>
                        <Link href="/admin/portfolio" className="text-xs text-slate-500 hover:text-white flex items-center gap-1 transition-colors">
                            View all <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                    <div className="divide-y divide-white/5">
                        {recentPortfolios.length === 0 ? (
                            <div className="px-6 py-12 text-center">
                                <Briefcase className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                                <p className="text-slate-500 text-sm">ยังไม่มีผลงาน</p>
                                <Link href="/admin/portfolio/new" className="text-violet-400 text-xs hover:underline mt-2 inline-block">
                                    เพิ่มผลงานแรก →
                                </Link>
                            </div>
                        ) : recentPortfolios.map((p) => (
                            <div key={p.id} className="flex items-center gap-3 px-6 py-3.5 hover:bg-white/5 transition-colors group">
                                {p.image ? (
                                    <img src={p.image} alt="" className="w-9 h-9 rounded-lg object-cover shrink-0 opacity-80" />
                                ) : (
                                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <Briefcase className="w-4 h-4 text-slate-600" />
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-medium truncate">{p.title}</p>
                                    <p className="text-slate-600 text-xs mt-0.5">{p.category ?? "—"}</p>
                                </div>
                                <Link
                                    href={`/admin/portfolio/${p.id}/edit`}
                                    className="p-1.5 rounded-lg text-slate-600 hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <Pencil className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { label: "New Blog Post", href: "/admin/blog/new", icon: FileText, color: "text-blue-400", bg: "bg-blue-500/10 hover:bg-blue-500/15 border-blue-500/20" },
                    { label: "New Portfolio", href: "/admin/portfolio/new", icon: Briefcase, color: "text-violet-400", bg: "bg-violet-500/10 hover:bg-violet-500/15 border-violet-500/20" },
                    { label: "View Blog", href: "/blog", icon: Eye, color: "text-emerald-400", bg: "bg-emerald-500/10 hover:bg-emerald-500/15 border-emerald-500/20" },
                    { label: "View Portfolio", href: "/portfolio", icon: TrendingUp, color: "text-rose-400", bg: "bg-rose-500/10 hover:bg-rose-500/15 border-rose-500/20" },
                ].map((action) => (
                    <Link
                        key={action.label}
                        href={action.href}
                        target={action.href.startsWith("/blog") || action.href.startsWith("/portfolio") ? "_blank" : undefined}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all ${action.bg}`}
                    >
                        <action.icon className={`w-4 h-4 ${action.color} shrink-0`} />
                        <span className="text-white text-sm font-medium">{action.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
