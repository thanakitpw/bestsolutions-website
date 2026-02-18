-- ============================================================
-- Best Solutions Corp - Database Schema
-- ============================================================
-- Run this in your Supabase SQL Editor to create all tables.
-- ============================================================

-- ============================================================
-- TABLE: blog_posts (บทความ)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    slug        text NOT NULL UNIQUE,
    title       text NOT NULL,
    excerpt     text,
    content     text,                          -- HTML content (from Google Docs via n8n)
    cover_image text,
    category    text,                          -- e.g. "Technology", "Marketing", "Design", "Business"
    tags        text[] DEFAULT '{}',           -- Array of tags
    author_name text,
    author_avatar text,
    -- SEO Fields
    seo_title       text,                      -- Custom SEO title (falls back to title)
    seo_description text,                      -- Custom meta description (falls back to excerpt)
    og_image        text,                      -- Open Graph image (falls back to cover_image)
    -- Source tracking
    original_google_doc_id text,               -- Google Doc ID (for n8n automation)
    -- Timestamps
    published_at    timestamptz DEFAULT now(),
    created_at      timestamptz DEFAULT now(),
    updated_at      timestamptz DEFAULT now()
);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- TABLE: portfolios (ผลงาน)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.portfolios (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    slug        text NOT NULL UNIQUE,
    title       text NOT NULL,
    description text,
    content     text,                          -- Detailed HTML content
    category    text,                          -- e.g. "Web Design", "SEO", "Online Marketing", "Content"
    tags        text[] DEFAULT '{}',
    image       text,                          -- Main cover image
    gallery     jsonb DEFAULT '[]',            -- Array of image URLs: [{"url": "...", "alt": "..."}]
    client_name text,
    year        text,
    -- Case Study fields
    challenge   text,
    solution    text,
    result      text,
    -- SEO Fields
    seo_title       text,
    seo_description text,
    og_image        text,
    -- Timestamps
    created_at  timestamptz DEFAULT now(),
    updated_at  timestamptz DEFAULT now()
);

CREATE TRIGGER update_portfolios_updated_at
    BEFORE UPDATE ON public.portfolios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================
-- Enable RLS for security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;

-- Allow public READ access (website visitors)
CREATE POLICY "Allow public read blog_posts"
    ON public.blog_posts FOR SELECT
    USING (true);

CREATE POLICY "Allow public read portfolios"
    ON public.portfolios FOR SELECT
    USING (true);

-- ============================================================
-- INDEXES (for performance)
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolios_slug ON public.portfolios(slug);

-- ============================================================
-- SEED DATA (นำข้อมูลเดิมเข้าฐานข้อมูล)
-- ============================================================
INSERT INTO public.blog_posts (slug, title, excerpt, content, cover_image, category, tags, author_name, published_at) VALUES
(
    'future-of-ai-marketing',
    'อนาคตของการตลาดในยุค AI: ปรับตัวอย่างไรให้รอด?',
    'AI กำลังเข้ามาเปลี่ยนแปลงวงการการตลาดอย่างสิ้นเชิง นักการตลาดต้องปรับตัวอย่างไรเพื่อใช้ประโยชน์จาก AI ให้ได้มากที่สุด',
    '<p>ปัญญาประดิษฐ์ (AI) ไม่ใช่เรื่องไกลตัวอีกต่อไป...</p><h2>1. AI ช่วยวิเคราะห์ Customer Journey ได้แม่นยำขึ้น</h2><p>เครื่องมือ Analytics สมัยใหม่ใช้ AI ในการทำนายพฤติกรรมลูกค้า</p>',
    '/images/blog/ai-marketing.jpg',
    'Marketing',
    ARRAY['AI', 'Digital Trends', 'MarTech'],
    'Thanakit C.',
    '2024-02-15'
),
(
    'web-design-trends-2025',
    'เจาะลึกเทรนด์ Web Design ปี 2025: น้อยแต่มาก เรียบแต่โก้',
    'รวมเทรนด์การออกแบบเว็บไซต์ที่กำลังมาแรงในปี 2025 เน้นความเร็ว, Accessibility และ Micro-interactions',
    '<p>ปี 2025 เป็นปีแห่งการกลับสู่สามัญ...</p><h2>1. Bento Grids Layout</h2><p>ได้รับอิทธิพลจาก Apple</p>',
    '/images/blog/web-design-2025.jpg',
    'Design',
    ARRAY['UX/UI', 'Web Design', 'Trends'],
    'Sarah Designers',
    '2024-02-10'
),
(
    'seo-checklist-for-business',
    'Checklist ทำ SEO สำหรับธุรกิจ SME: เริ่มต้นยังไงให้ติดหน้าแรก?',
    'คู่มือทำ SEO ฉบับจับมือทำ สำหรับเจ้าของธุรกิจที่อยากเพิ่มยอดขายแบบ Organic',
    '<p>SEO คือการลงทุนระยะยาวที่คุ้มค่าที่สุดสำหรับ SME...</p><h2>1. Keyword Research</h2>',
    '/images/blog/seo-checklist.jpg',
    'Technology',
    ARRAY['SEO', 'SME', 'Digital Marketing'],
    'Mike SEO',
    '2024-01-28'
),
(
    'content-strategy-guide',
    'วิธีวาง Content Strategy ให้แบรนด์ดูแพงและน่าเชื่อถือ',
    'การเขียนคอนเทนต์ไม่ใช่แค่การโพสต์ไปวันๆ แต่ต้องมีการวางกลยุทธ์',
    '<p>Content is King ยังคงเป็นคำจริงเสมอ...</p>',
    '/images/blog/content-strategy.jpg',
    'Business',
    ARRAY['Content', 'Branding', 'Strategy'],
    'Thanakit C.',
    '2024-01-15'
);

INSERT INTO public.portfolios (slug, title, description, category, tags, image, client_name, year, challenge, solution, result) VALUES
(
    'beauty-brand-rebrand',
    'Beauty Brand Rebrand',
    'ออกแบบเว็บไซต์ E-Commerce ใหม่สำหรับแบรนด์สกินแคร์ชั้นนำ เน้น UX/UI ที่เรียบหรูและใช้งานง่าย',
    'Web Design',
    ARRAY['UX/UI Design', 'E-Commerce', 'Shopify'],
    '/images/portfolio/beauty-brand.jpg',
    'Glow Skincare', '2025',
    'เว็บไซต์เดิมใช้งานยาก ไม่รองรับมือถือ และภาพลักษณ์แบรนด์ดูไม่ทันสมัย',
    'ออกแบบ UX/UI ใหม่ทั้งหมดโดยเน้น Mobile-First Design',
    'ยอดขายเพิ่มขึ้น 200% ภายใน 3 เดือน'
),
(
    'luxury-condo-launch',
    'Luxury Condo Launch',
    'แคมเปญโฆษณาเปิดตัวคอนโดมิเนียมหรูใจกลางเมือง สร้าง Lead คุณภาพกว่า 500 รายชื่อใน 1 เดือน',
    'Online Marketing',
    ARRAY['Facebook Ads', 'Google Ads', 'Lead Generation'],
    '/images/portfolio/luxury-condo.jpg',
    'Grand Estate', '2025',
    'ต้องการเปิดตัวคอนโดหรูราคา 10 ล้าน+ ในช่วงเศรษฐกิจชะลอตัว',
    'ใช้กลยุทธ์ Hyper-Targeting เจาะกลุ่มผู้บริหารและนักลงทุน',
    'ปิดการขายได้ถึง 50 ยูนิตในช่วง Presale'
),
(
    'tech-startup-seo',
    'Tech Startup SEO',
    'ดันอันดับ Keyword หลักขึ้นหน้า 1 Google ภายใน 3 เดือน เพิ่ม Organic Traffic 300%',
    'SEO',
    ARRAY['On-Page SEO', 'Technical SEO', 'Content Strategy'],
    '/images/portfolio/tech-startup.jpg',
    'TechFlow App', '2024',
    'เป็น Startup ใหม่ เว็บไซต์ไม่มีคนเข้า และ Keyword ที่ต้องการแข่งขันสูงมาก',
    'ปรับโครงสร้างเว็บให้เป็นมิตรกับ SEO, เขียนบทความคุณภาพสูง 50+ บทความ',
    'Keyword หลักติดอันดับ 1-3 บน Google'
),
(
    'healthy-food-delivery',
    'Healthy Food Delivery',
    'สร้างแบรนด์และทำการตลาดโซเชียลมีเดียสำหรับบริการส่งอาหารคลีน ยอดขายโต 150%',
    'Online Marketing',
    ARRAY['Social Media Marketing', 'Content Creation', 'Photography'],
    '/images/portfolio/healthy-food.jpg',
    'Fit Box', '2024',
    'ร้านอาหารคลีนเปิดใหม่ ต้องการสร้างฐานลูกค้าประจำ',
    'ถ่ายภาพอาหารให้ดูน่าทาน สร้างคอนเทนต์วิดีโอสั้นลง TikTok/Reels',
    'มียอดสั่งซื้อซ้ำ (Retention Rate) สูงถึง 60%'
),
(
    'corporate-website-revamp',
    'Corporate Website Revamp',
    'ปรับโฉมเว็บไซต์องค์กรให้ทันสมัย รองรับทุกหน้าจอ และเพิ่มความน่าเชื่อถือให้กับธุรกิจ',
    'Web Design',
    ARRAY['Corporate Website', 'Next.js', 'Responsive Design'],
    '/images/portfolio/corporate.jpg',
    'Asia Logistics Group', '2024',
    'เว็บไซต์บริษัทโลจิสติกส์เดิมเก่ามาก โหลดช้า และข้อมูลไม่รองรับภาษาอังกฤษ',
    'พัฒนาใหม่ด้วย Next.js เพื่อความเร็วสูงสุด',
    'บริษัทได้รับคำชมจากพาร์ทเนอร์ต่างชาติ'
),
(
    'fashion-blog-content',
    'Fashion Blog Content',
    'ดูแลการเขียนบทความและทำ Content Strategy ให้กับบล็อกแฟชั่น เพิ่มยอดผู้ติดตาม 50,000 คน',
    'Content',
    ARRAY['Blog Writing', 'SEO Writing', 'Social Media'],
    '/images/portfolio/fashion-blog.jpg',
    'Trendy Style', '2023',
    'ต้องการเพิ่มยอดผู้ติดตามใน Facebook และ Website แต่ไม่มีทีมเขียนคอนเทนต์',
    'วาง Content Calendar รายเดือน เขียนบทความตามเทรนด์แฟชั่น',
    'เพจมียอดผู้ติดตามเพิ่มขึ้น 50,000 คน ภายใน 6 เดือน'
);
