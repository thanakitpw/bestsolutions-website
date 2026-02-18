
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content for now, or Markdown if we parse it later
    coverImage: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
    category: "Technology" | "Marketing" | "Design" | "Business";
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "future-of-ai-marketing",
        title: "อนาคตของการตลาดในยุค AI: ปรับตัวอย่างไรให้รอด?",
        excerpt: "AI กำลังเข้ามาเปลี่ยนแปลงวงการการตลาดอย่างสิ้นเชิง นักการตลาดต้องปรับตัวอย่างไรเพื่อใช้ประโยชน์จาก AI ให้ได้มากที่สุด",
        content: `
      <p>ปัญญาประดิษฐ์ (AI) ไม่ใช่เรื่องไกลตัวอีกต่อไป แต่กลายเป็นเครื่องมือสำคัญที่นักการตลาดในยุคปัจจุบันขาดไม่ได้ ตั้งแต่การวิเคราะห์ข้อมูลลูกค้า การสร้างคอนเทนต์ ไปจนถึงการยิงโฆษณาที่แม่นยำขึ้น</p>
      
      <h2>1. AI ช่วยวิเคราะห์ Customer Journey ได้แม่นยำขึ้น</h2>
      <p>เครื่องมือ Analytics สมัยใหม่ใช้ AI ในการทำนายพฤติกรรมลูกค้า ทำให้เรารู้ว่าลูกค้าจะซื้อสินค้าเมื่อไหร่ และควรนำเสนออะไรในช่วงเวลานั้น</p>

      <h2>2. Personalized Marketing ระดับ Hyper-Scale</h2>
      <p>จากเดิมที่เราแบ่งลูกค้าเป็น Segment กว้างๆ ตอนนี้ AI ช่วยให้เราทำ Personalization ได้แบบ "หนึ่งต่อหนึ่ง" (1:1) โปรโมชั่นหรือข้อความที่ส่งหาลูกค้าแต่ละคนจะไม่เหมือนกันเลย</p>

      <h2>3. Content Creation ที่รวดเร็ว</h2>
      <p>Generative AI เช่น ChatGPT หรือ Claude ช่วยให้นักการตลาดร่างไอเดีย เขียนแคปชั่น หรือแม้แต่เขียนบทความได้เร็วขึ้น แต่ความท้าทายคือการใส่ความเป็นมนุษย์ (Human Touch) ลงไปให้งานยังดูจริงใจ</p>

      <h3>สรุป</h3>
      <p>การเข้ามาของ AI ไม่ได้มาแย่งงานนักการตลาด แต่มาช่วยให้เราทำงานได้ฉลาดขึ้น (Work Smarter) คนที่ปรับตัวและใช้เครื่องมือเป็นจะเป็นผู้ชนะในสมรภูมินี้</p>
    `,
        coverImage: "/images/blog/ai-marketing.jpg",
        date: "2024-02-15",
        author: {
            name: "Thanakit C.",
            avatar: "/images/team/thanakit.jpg",
        },
        category: "Marketing",
        tags: ["AI", "Digital Trends", "MarTech"],
    },
    {
        id: "2",
        slug: "web-design-trends-2025",
        title: "เจาะลึกเทรนด์ Web Design ปี 2025: น้อยแต่มาก เรียบแต่โก้",
        excerpt: "รวมเทรนด์การออกแบบเว็บไซต์ที่กำลังมาแรงในปี 2025 เน้นความเร็ว, Accessibility และ Micro-interactions",
        content: `
      <p>ปี 2025 เป็นปีแห่งการกลับสู่สามัญ (Back to Basics) แต่แฝงไปด้วยเทคโนโลยีล้ำสมัย เว็บไซต์ที่ดีไม่ใช่แค่สวย แต่ต้อง "ใช้งานง่าย" และ "เข้าถึงได้ทุกคน"</p>

      <h2>1. Bento Grids Layout</h2>
      <p>ได้รับอิทธิพลจาก Apple การจัดวางเนื้อหาแบบกล่องสี่เหลี่ยมหลายขนาด (Bento Box) ช่วยให้หน้าเว็บดูเป็นระเบียบและ Responsive ได้ง่ายมาก</p>

      <h2>2. Dark Mode เป็นมาตรฐาน</h2>
      <p>ไม่ใช่แค่ตัวเลือกเสริมอีกต่อไป แต่เว็บยุคใหม่ต้องรองรับ Dark Mode ตั้งแต่ต้น (First-class citizen) เพื่อถนอมสายตาผู้ใช้งาน</p>

      <h2>3. Micro-Interactions</h2>
      <p>การขยับเล็กๆ น้อยๆ เมื่อเอาเมาส์ไปวาง (Hover) หรือกดปุ่ม ช่วยเพิ่ม Feedback ให้ผู้ใช้รู้สึกว่าเว็บ "มีชีวิต" และตอบสนองได้ดี</p>
    `,
        coverImage: "/images/blog/web-design-2025.jpg",
        date: "2024-02-10",
        author: {
            name: "Sarah Designers",
            avatar: "/images/team/sarah.jpg",
        },
        category: "Design",
        tags: ["UX/UI", "Web Design", "Trends"],
    },
    {
        id: "3",
        slug: "seo-checklist-for-business",
        title: "Checklist ทำ SEO สำหรับธุรกิจ SME: เริ่มต้นยังไงให้ติดหน้าแรก?",
        excerpt: "คู่มือทำ SEO ฉบับจับมือทำ สำหรับเจ้าของธุรกิจที่อยากเพิ่มยอดขายแบบ Organic โดยไม่ต้องพึ่งโฆษณาตลอดไป",
        content: `
      <p>SEO (Search Engine Optimization) คือการลงทุนระยะยาวที่คุ้มค่าที่สุดสำหรับ SME มาเช็คกันว่าเว็บของคุณพร้อมหรือยัง?</p>

      <h2>1. Keyword Research</h2>
      <p>รู้หรือยังว่าลูกค้าค้นหาคำว่าอะไร? อย่าเดาเอง ให้ใช้เครื่องมืออย่าง Google Keyword Planner หรือ Ubersuggest หาคำที่มี Search Volume จริงๆ</p>

      <h2>2. On-Page Optimization</h2>
      <p>ใส่ Keyword ใน Title, H1, Meta Description และเนื้อหาให้เป็นธรรมชาติ อย่า nhồi Keyword (Keyword Stuffing) จนอ่านไม่รู้เรื่อง</p>

      <h2>3. Page Speed</h2>
      <p>เว็บโหลดช้า = คนปิดหนี = Google ไม่ปลื้ม ตรวจสอบความเร็วเว็บที่ PageSpeed Insights และทำให้ได้คะแนนเขียว (90+)</p>
    `,
        coverImage: "/images/blog/seo-checklist.jpg",
        date: "2024-01-28",
        author: {
            name: "Mike SEO",
            avatar: "/images/team/mike.jpg",
        },
        category: "Technology",
        tags: ["SEO", "SME", "Digital Marketing"],
    },
    {
        id: "4",
        slug: "content-strategy-guide",
        title: "วิธีวาง Content Strategy ให้แบรนด์ดูแพงและน่าเชื่อถือ",
        excerpt: "การเขียนคอนเทนต์ไม่ใช่แค่การโพสต์ไปวันๆ แต่ต้องมีการวางกลยุทธ์เพื่อให้แบรนด์มีทิศทางและดึงดูดลูกค้าที่ใช่",
        content: `
      <p>Content is King ยังคงเป็นคำจริงเสมอ แต่ King ที่ไม่มีแผนการรบก็แพ้สงครามได้ มาดูวิธีวาง Content Strategy ให้ชนะใจลูกค้ากัน</p>
    `,
        coverImage: "/images/blog/content-strategy.jpg",
        date: "2024-01-15",
        author: {
            name: "Thanakit C.",
            avatar: "/images/team/thanakit.jpg",
        },
        category: "Business",
        tags: ["Content", "Branding", "Strategy"],
    }
];
