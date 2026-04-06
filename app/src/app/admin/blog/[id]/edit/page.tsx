import { getArticleById } from "@/lib/services/articleService";
import { BlogEditForm } from "./BlogEditForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function BlogEditPage({ params }: PageProps) {
    const { id } = await params;
    const post = await getArticleById(id);

    if (!post) notFound();

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/blog" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-400" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-white">Edit Blog Post</h1>
                    <p className="text-slate-500 mt-1 text-sm truncate max-w-md">{post.title}</p>
                </div>
            </div>
            <BlogEditForm post={post} />
        </div>
    );
}
