
export interface Project {
    id: string;
    slug: string;
    title: string;
    category: "Web Design" | "Online Marketing" | "SEO" | "Content";
    image: string;
    description: string;
    tags: string[];
    client?: string;
    year?: string;
    challenge?: string;
    solution?: string;
    result?: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "beauty-brand-rebrand",
        title: "Beauty Brand Rebrand",
        category: "Web Design",
        image: "/images/portfolio/beauty-brand.jpg",
        description: "ออกแบบเว็บไซต์ E-Commerce ใหม่สำหรับแบรนด์สกินแคร์ชั้นนำ เน้น UX/UI ที่เรียบหรูและใช้งานง่าย",
        tags: ["UX/UI Design", "E-Commerce", "Shopify"],
        client: "Glow Skincare",
        year: "2025",
        challenge: "เว็บไซต์เดิมใช้งานยาก ไม่รองรับมือถือ และภาพลักษณ์แบรนด์ดูไม่ทันสมัย ทำให้ยอดขายตกลง",
        solution: "ออกแบบ UX/UI ใหม่ทั้งหมดโดยเน้น Mobile-First Design ใช้โทนสีมินิมอลแต่หรูหรา และปรับปรุงระบบ Checkout ให้ง่ายขึ้น",
        result: "ยอดขายเพิ่มขึ้น 200% ภายใน 3 เดือน และอัตราการกดออกจากเว็บ (Bounce Rate) ลดลง 40%"
    },
    {
        id: "2",
        slug: "luxury-condo-launch",
        title: "Luxury Condo Launch",
        category: "Online Marketing",
        image: "/images/portfolio/luxury-condo.jpg",
        description: "แคมเปญโฆษณาเปิดตัวคอนโดมิเนียมหรูใจกลางเมือง สร้าง Lead คุณภาพกว่า 500 รายชื่อใน 1 เดือน",
        tags: ["Facebook Ads", "Google Ads", "Lead Generation"],
        client: "Grand Estate",
        year: "2025",
        challenge: "ต้องการเปิดตัวคอนโดหรูราคา 10 ล้าน+ ในช่วงเศรษฐกิจชะลอตัว และต้องแข่งกับเจ้าใหญ่ในตลาด",
        solution: "ใช้กลยุทธ์ Hyper-Targeting เจาะกลุ่มผู้บริหารและนักลงทุน ยิงแอดแบบ Retargeting เน้นความคุ้มค่าและ Lifestyle",
        result: "ปิดการขายได้ถึง 50 ยูนิตในช่วง Presale และได้รายชื่อผู้สนใจที่มีคุณภาพ (Qualified Leads) 500+ คน"
    },
    {
        id: "3",
        slug: "tech-startup-seo",
        title: "Tech Startup SEO",
        category: "SEO",
        image: "/images/portfolio/tech-startup.jpg",
        description: "ดันอันดับ Keyword หลักขึ้นหน้า 1 Google ภายใน 3 เดือน เพิ่ม Organic Traffic 300%",
        tags: ["On-Page SEO", "Technical SEO", "Content Strategy"],
        client: "TechFlow App",
        year: "2024",
        challenge: "เป็น Startup ใหม่ เว็บไซต์ไม่มีคนเข้า และ Keyword ที่ต้องการแข่งขันสูงมาก",
        solution: "ปรับโครงสร้างเว็บให้เป็นมิตรกับ SEO, เขียนบทความคุณภาพสูง 50+ บทความ และสร้าง Backlink คุณภาพ",
        result: "Keyword หลักติดอันดับ 1-3 บน Google และ Organic Traffic เพิ่มจาก 0 เป็น 10,000 ต่อเดือน"
    },
    {
        id: "4",
        slug: "healthy-food-delivery",
        title: "Healthy Food Delivery",
        category: "Online Marketing",
        image: "/images/portfolio/healthy-food.jpg",
        description: "สร้างแบรนด์และทำการตลาดโซเชียลมีเดียสำหรับบริการส่งอาหารคลีน ยอดขายโต 150%",
        tags: ["Social Media Marketing", "Content Creation", "Photography"],
        client: "Fit Box",
        year: "2024",
        challenge: "ร้านอาหารคลีนเปิดใหม่ ต้องการสร้างฐานลูกค้าประจำและต้องการให้คนจดจำแบรนด์ได้",
        solution: "ถ่ายภาพอาหารให้ดูน่าทาน สร้างคอนเทนต์วิดีโอสั้นลง TikTok/Reels และทำโปรโมชั่น Subscription รายเดือน",
        result: "มียอดสั่งซื้อซ้ำ (Retention Rate) สูงถึง 60% และยอดขายเติบโตเฉลี่ย 150% ต่อเดือน"
    },
    {
        id: "5",
        slug: "corporate-website-revamp",
        title: "Corporate Website Revamp",
        category: "Web Design",
        image: "/images/portfolio/corporate.jpg",
        description: "ปรับโฉมเว็บไซต์องค์กรให้ทันสมัย รองรับทุกหน้าจอ และเพิ่มความน่าเชื่อถือให้กับธุรกิจ",
        tags: ["Corporate Website", "Next.js", "Responsive Design"],
        client: "Asia Logistics Group",
        year: "2024",
        challenge: "เว็บไซต์บริษัทโลจิสติกส์เดิมเก่ามาก โหลดช้า และข้อมูลไม่รองรับภาษาอังกฤษ",
        solution: "พัฒนาใหม่ด้วย Next.js เพื่อความเร็วสูงสุด ออกแบบให้ดูเป็นสากล และทำระบบ Multilingual รองรับ 3 ภาษา",
        result: "บริษัทได้รับคำชมจากพาร์ทเนอร์ต่างชาติ และจำนวนคนติดต่อผ่านหน้าเว็บเพิ่มขึ้น 50%"
    },
    {
        id: "6",
        slug: "fashion-blog-content",
        title: "Fashion Blog Content",
        category: "Content",
        image: "/images/portfolio/fashion-blog.jpg",
        description: "ดูแลการเขียนบทความและทำ Content Strategy ให้กับบล็อกแฟชั่น เพิ่มยอดผู้ติดตาม 50,000 คน",
        tags: ["Blog Writing", "SEO Writing", "Social Media"],
        client: "Trendy Style",
        year: "2023",
        challenge: "ต้องการเพิ่มยอดผู้ติดตามใน Facebook และ Website แต่ไม่มีทีมเขียนคอนเทนต์",
        solution: "วาง Content Calendar รายเดือน เขียนบทความตามเทรนด์แฟชั่น และทำ Infographic สรุปเทรนด์",
        result: "เพจมียอดผู้ติดตามเพิ่มขึ้น 50,000 คน ภายใน 6 เดือน และมีแบรนด์เสื้อผ้าติดต่อลงโฆษณา"
    },
];
