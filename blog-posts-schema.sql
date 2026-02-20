-- ============================================================
-- Blog Posts Table Schema for Supabase
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================================

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT,
    category TEXT,
    tags TEXT[] DEFAULT '{}',
    author_name TEXT,
    cover_image TEXT,
    seo_title TEXT,
    seo_description TEXT,
    original_google_doc_id TEXT,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT '1970-01-01 00:00:00 UTC',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON public.blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON public.blog_posts USING GIN(tags);

-- Enable RLS (Row Level Security)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to read published posts
CREATE POLICY "Allow public read access to published posts"
ON public.blog_posts FOR SELECT
USING (published_at > '1970-01-01 00:00:00 UTC');

-- Allow authenticated users to read all posts
CREATE POLICY "Allow authenticated read access to all posts"
ON public.blog_posts FOR SELECT
USING (auth.role() = 'authenticated');

-- Allow service role (admin) full access
CREATE POLICY "Allow service role full access to blog_posts"
ON public.blog_posts FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Create trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- ============================================================
-- Verify table creation
-- ============================================================

-- Check table exists
SELECT table_name, table_type 
FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name = 'blog_posts';

-- Check columns
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_schema = 'public' AND table_name = 'blog_posts'
ORDER BY ordinal_position;
