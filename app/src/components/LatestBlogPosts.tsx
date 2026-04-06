import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getArticles } from "@/lib/services/articleService";

export async function LatestBlogPosts() {
  const latestPosts = (await getArticles()).slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[var(--color-primary-start)] font-bold tracking-wider text-sm uppercase">Latest Insights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">บทความและเกร็ดความรู้</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center text-slate-600 hover:text-[var(--color-primary-start)] font-medium transition-colors">
            อ่านบทความทั้งหมด <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {latestPosts.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <p>ยังไม่มีบทความในขณะนี้</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  {post.cover_image
                    ? <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    : <div className="absolute inset-0 bg-gradient-to-br from-[#F51036]/10 to-[#25137A]/10" />}
                  {post.category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-800 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.published_at).toLocaleDateString("th-TH", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                  <h3 className="font-bold text-slate-900 line-clamp-2 group-hover:text-[#F51036] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4">{post.excerpt}</p>
                  )}
                  <span className="inline-flex items-center gap-1 text-[#F51036] text-xs font-semibold mt-auto group-hover:gap-2 transition-all">
                    อ่านต่อ <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center text-[var(--color-primary-start)] font-bold">
            อ่านบทความทั้งหมด <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
