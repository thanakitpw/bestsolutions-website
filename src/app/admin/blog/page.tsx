import Link from "next/link";
import { getArticles } from "@/lib/services/articleService";
import { Plus, Pencil, Eye, FileText } from "lucide-react";
import { DeleteBlogButton } from "./DeleteBlogButton";

export default async function AdminBlogPage() {
    const posts = await getArticles();

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
                    <p className="text-slate-500 mt-1 text-sm">{posts.length} บทความทั้งหมด</p>
                </div>
                <Link
                    href="/admin/blog/new"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20"
                >
                    <Plus className="w-4 h-4" /> New Post
                </Link>
            </div>

            {/* Table */}
            <div className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <FileText className="w-10 h-10 text-slate-700 mx-auto mb-4" />
                        <p className="text-slate-400 text-lg mb-2">ยังไม่มีบทความ</p>
                        <Link href="/admin/blog/new" className="text-blue-400 text-sm hover:underline">
                            สร้างบทความแรก →
                        </Link>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/8">
                                <th className="text-left px-6 py-3.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">บทความ</th>
                                <th className="text-left px-6 py-3.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">หมวดหมู่</th>
                                <th className="text-left px-6 py-3.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider hidden lg:table-cell">วันที่</th>
                                <th className="text-right px-6 py-3.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {posts.map((post) => (
                                <tr key={post.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {post.cover_image ? (
                                                <img src={post.cover_image} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0 opacity-80" />
                                            ) : (
                                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <FileText className="w-4 h-4 text-slate-600" />
                                                </div>
                                            )}
                                            <div className="min-w-0">
                                                <div className="font-medium text-white text-sm truncate max-w-xs">{post.title}</div>
                                                <div className="text-xs text-slate-600 font-mono mt-0.5">/blog/{post.slug}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 hidden md:table-cell">
                                        {post.category ? (
                                            <span className="px-2.5 py-1 bg-blue-500/15 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                                                {post.category}
                                            </span>
                                        ) : (
                                            <span className="text-slate-600 text-xs">—</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500 hidden lg:table-cell">
                                        {new Date(post.published_at).toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                target="_blank"
                                                className="p-2 text-slate-600 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                title="ดูหน้าเว็บ"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={`/admin/blog/${post.id}/edit`}
                                                className="p-2 text-slate-600 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                                title="แก้ไข"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Link>
                                            <DeleteBlogButton id={post.id} title={post.title} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
