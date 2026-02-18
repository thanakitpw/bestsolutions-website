import { Monitor, BarChart3, TrendingUp, Camera, MessageCircle, Code, Paintbrush, Rocket, CloudLightning, Search, Share2, Video, PenTool } from "lucide-react";

export interface ServiceDetail {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    icon: any;
    color: string;
    heroImage?: string;
    painPoints: {
        title: string;
        description: string;
    }[];
    solutions: {
        title: string;
        description: string;
        points: string[];
    }[];
    process: {
        step: string;
        title: string;
        description: string;
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
}

export const servicesData: Record<string, ServiceDetail> = {
    "web-design": {
        slug: "web-design",
        title: "Modern Web Design & Development",
        subtitle: "เปลี่ยนเว็บไซต์ธรรมดา ให้เป็นพนักงานขายมือทอง 24 ชม.",
        description: "บริการรับทำเว็บไซต์ที่ไม่ได้เน้นแค่ความสวยงาม แต่เน้นผลลัพธ์ทางธุรกิจ รองรับ SEO โหลดไว ใช้งานง่ายบนมือถือ และปิดการขายได้จริง",
        icon: Monitor,
        color: "from-blue-600 to-indigo-600",
        painPoints: [
            {
                title: "เข้าเว็บแล้วโหลดช้า ลูกค้าหนี",
                description: "รู้ไหมว่าลูกค้ากว่า 53% จะปิดเว็บทันทีถ้าโหลดนานเกิน 3 วินาที เราทำเว็บที่เร็วแรง"
            },
            {
                title: "ไม่รองรับมือถือ (Unresponsive)",
                description: "ลูกค้าส่วนใหญ่เข้าผ่านมือถือ ถ้าเว็บเปิดยาก ตัวหนังสือเล็ก คุณเสียลูกค้าไปแล้ว 80%"
            },
            {
                title: "เว็บสวยแต่ขายไม่ได้",
                description: "ดีไซน์ที่ไม่มี UX/UI รองรับ คือศิลปะที่ไม่ทำเงิน เราออกแบบโดยเน้น Conversion Rate"
            },
            {
                title: "หาไม่เจอบน Google",
                description: "ทำเว็บแพงแค่ไหน ถ้าลูกค้าหาไม่เจอก็ไร้ความหมาย โครงสร้างเว็บเราเป็นมิตรกับ SEO 100%"
            }
        ],
        solutions: [
            {
                title: "High Performance Tech Stack",
                description: "เราใช้เทคโนโลยีล่าสุด (Next.js, Tailwind) แบบเดียวกับบริษัทระดับโลก",
                points: ["โหลดไวระดับ Lightning Speed", "Security สูง ปลอดภัยจากการแฮ็ก", "รองรับการขยายตัวในอนาคต"]
            },
            {
                title: "Conversion-Focused Design",
                description: "ทุกพิกเซลถูกวางมาเพื่อโน้มน้าวใจและปิดการขาย",
                points: ["UX/UI Research จากกลุ่มเป้าหมายจริง", "Call-to-Action ที่โดดเด่น", "Trust Elements สร้างความน่าเชื่อถือ"]
            },
            {
                title: "SEO-Ready Structure",
                description: "วางโครงสร้างให้ Google รักตั้งแต่วันแรก",
                points: ["Sitemap & Schema.org ครบถ้วน", "Meta Tags Optimization", "Core Web Vitals ผ่านเกณฑ์เขียว"]
            }
        ],
        process: [
            {
                step: "01",
                title: "Discovery & Strategy",
                description: "พูดคุยเพื่อเข้าใจธุรกิจ กลุ่มเป้าหมาย และคู่แข่ง เพื่อวางแผนโครงสร้างเว็บไซต์"
            },
            {
                step: "02",
                title: "UX/UI Design",
                description: "ออกแบบหน้าตาเว็บไซต์ (Wireframe & Mockup) ให้คุณอนุมัติก่อนเริ่มเขียนโค้ดจริง"
            },
            {
                step: "03",
                title: "Development",
                description: "ลงมือเขียนโค้ดด้วย Next.js พร้อมเชื่อมต่อระบบ CMS ให้คุณจัดการเนื้อหาเองได้ง่ายๆ"
            },
            {
                step: "04",
                title: "Testing & Launch",
                description: "ทดสอบการใช้งานจริงทุกอุปกรณ์ ตรวจสอบความเร็วก่อนปล่อยเว็บไซต์สู่สาธารณะ"
            }
        ],
        faq: [
            {
                question: "ทำเว็บไซต์ใช้เวลานานแค่ไหน?",
                answer: "โดยปกติจะใช้เวลาประมาณ 14-30 วัน ขึ้นอยู่กับความซับซ้อนของฟีเจอร์และจำนวนหน้าครับ"
            },
            {
                question: "มีค่าบริการรายปีไหม?",
                answer: "ทางเรามีค่าบริการ Hosting และ Domain Name รายปีครับ (ฟรีปีแรก) และมีบริการดูแลรักษา (Maintenance) หากต้องการให้เราดูแลต่อเนื่อง"
            },
            {
                question: "แก้ไขข้อมูลเองได้ไหม?",
                answer: "ได้แน่นอนครับ เราทำระบบหลังบ้าน (CMS) ที่ใช้งานง่ายเหมือน Facebook ให้ลูกค้าอัปเดตบทความหรือสินค้าเองได้เลย"
            },
            {
                question: "รองรับมือถือไหม?",
                answer: "รองรับ 100% ครับ เราทำเว็บไซต์แบบ Responsive Design ที่แสดงผลสวยงามบนทุกอุปกณ์"
            }
        ]
    },
    "branding": {
        slug: "branding",
        title: "Corporate Identity & Branding",
        subtitle: "สร้างแบรนด์ให้เป็นที่จดจำ แตกต่าง และน่าเชื่อถือตั้งแต่แรกเห็น",
        description: "บริการออกแบบอัตลักษณ์องค์กร (CI) ที่ไม่ได้มีแค่โลโก้ แต่คือระบบภาพจำที่สะท้อนตัวตนธุรกิจของคุณ สร้างความน่าเชื่อถือในทุก Touchpoint",
        icon: PenTool,
        color: "from-pink-500 to-rose-500",
        painPoints: [
            {
                title: "แบรนด์ดูบ้านๆ ไม่น่าเชื่อถือ",
                description: "สินค้าดีแต่ภาพลักษณ์ดูไม่แพง ทำให้ขายราคาที่ควรจะได้ไม่ได้"
            },
            {
                title: "ลูกค้าจำไม่ได้ แยกไม่ออก",
                description: "โลโก้คล้ายคู่แข่ง ไม่มีความโดดเด่น ทำให้ลูกค้าสับสนและไม่เกิด Loyalty"
            },
            {
                title: "ใช้งานยาก วางตรงไหนก็ไม่สวย",
                description: "มีแต่โลโก้ แต่ไม่มีคู่มือการใช้ (Brand Guidelines) ทำให้ทีมงานนำไปใช้สะเปะสะปะ"
            },
            {
                title: "ไม่มี Story ที่จับใจ",
                description: "ขาดเรื่องราว (Brand Story) ที่เชื่อมโยงความรู้สึกกับลูกค้า ทำให้แบรนด์ดูแห้งแล้ง"
            }
        ],
        solutions: [
            {
                title: "Visual Identity System",
                description: "ออกแบบระบบอัตลักษณ์ที่ครอบคลุมการใช้งานจริง",
                points: ["Logo Design ที่มีเอกลักษณ์", "Color Palette & Typography", "Graphic Elements & Patterns"]
            },
            {
                title: "Brand Strategy & Storytelling",
                description: "วางกลยุทธ์แบรนด์ให้ชัดเจน",
                points: ["Brand Archetype & Personality", "Tone of Voice", "Slogan & Key Message"]
            },
            {
                title: "Comprehensive Brand Guidelines",
                description: "คู่มือการใช้งานเพื่อให้ทีมงานทำงานต่อได้ถูกต้อง",
                points: ["Logo Usage Rules", "Do's & Don'ts", "Example Applications (Mockups)"]
            }
        ],
        process: [
            {
                step: "01",
                title: "Brand Audit",
                description: "วิเคราะห์แบรนด์ปัจจุบัน คู่แข่ง และกลุ่มเป้าหมาย เพื่อหาจุดยืนที่แตกต่าง"
            },
            {
                step: "02",
                title: "Concept & Mood",
                description: "นำเสนอ Mood & Tone และทิศทางการออกแบบ 2-3 ทางเลือก"
            },
            {
                step: "03",
                title: "Design Development",
                description: "พัฒนาแบบที่เลือกให้สมบูรณ์ ออกแบบองค์ประกอบร่วมต่างๆ"
            },
            {
                step: "04",
                title: "Guideline Delivery",
                description: "ส่งมอบไฟล์งานพร้อมคู่มือ Brand Guidelines ฉบับสมบูรณ์"
            }
        ],
        faq: [
            {
                question: "ได้ไฟล์อะไรบ้าง?",
                answer: "ได้ไฟล์ Vector (Ai, EPS) สำหรับการพิมพ์ และไฟล์ภาพ (JPG, PNG) พร้อมคู่มือ Brand Guidelines PDF ครับ"
            },
            {
                question: "มีแก้แบบได้กี่ครั้ง?",
                answer: "เราให้แก้ได้ 3 ครั้งในขั้นตอนพัฒนาแบบครับ เพื่อให้งานออกมาตรงใจที่สุด"
            }
        ]
    },
    "seo-content": {
        slug: "seo-content",
        title: "SEO & Content Marketing",
        subtitle: "ให้ลูกค้าหาคุณเจอเป็นคนแรก บน Google โดยไม่ต้องจ่ายค่าโฆษณา",
        description: "บริการทำ SEO สายขาว ปลอดภัย ยั่งยืน เน้นคุณภาพเนื้อหาที่ Google รัก และลูกค้าชอบ ช่วยเพิ่ม Traffic และยอดขายในระยะยาว",
        icon: Search,
        color: "from-green-500 to-emerald-600",
        painPoints: [
            {
                title: "เว็บไซต์ร้าง ไม่มีคนเข้า",
                description: "ทำเว็บมาสวยแต่ไม่มี Traffic เหมือนเปิดร้านในซอยลึกที่ไม่มีใครรู้จัก"
            },
            {
                title: "เสิร์ชอะไรก็เจอแต่คู่แข่ง",
                description: "เสียโอกาสขายทุกวัน เพราะลูกค้าไปเจอคู่แข่งในหน้าแรก Google"
            },
            {
                title: "ยิงแอดแพง สู้ราคาไม่ไหว",
                description: "ต้องจ่ายค่าแอดตลอดไป หยุดจ่ายเมื่อไหร่ยอดตกทันที"
            },
            {
                title: "เขียนบทความแล้วไม่มีคนอ่าน",
                description: "คอนเทนต์ไม่มีคุณภาพ หรือไม่ตอบโจทย์สิ่งที่คนค้นหา (Search Intent)"
            }
        ],
        solutions: [
            {
                title: "Technical SEO Optimization",
                description: "ปรับโครงสร้างเว็บให้ Google Bot เข้ามาเก็บข้อมูลได้ง่าย",
                points: ["Site Speed Optimization", "Mobile-Friendly Fixes", "Sitemap & Robots.txt Config"]
            },
            {
                title: "Keyword & Content Strategy",
                description: "วางแผนคีย์เวิร์ดที่ 'ทำเงิน' ไม่ใช่แค่ Traffic เยอะ",
                points: ["Buyer Intent Keywords", "High-Quality Blog Posts", "Content Refresh Strategy"]
            },
            {
                title: "Quality Link Building",
                description: "สร้าง Backlink คุณภาพสูงเพื่อเพิ่มความน่าเชื่อถือ (Domain Authority)",
                points: ["White-Hat Link Building", "PR & Guest Posting", "Internal Linking Optimization"]
            }
        ],
        process: [
            {
                step: "01",
                title: "SEO Audit",
                description: "ตรวจสุขภาพเว็บไซต์ปัจจุบัน หาจุดอ่อนและโอกาสในการทำอันดับ"
            },
            {
                step: "02",
                title: "Keyword Strategy",
                description: "คัดเลือกคีย์เวิร์ดที่มีโอกาสติดอันดับและสร้างยอดขายจริง"
            },
            {
                step: "03",
                title: "Content & On-Page",
                description: "ปรับปรุงเนื้อหาและโครงสร้างภายในเว็บให้สอดคล้องกับคีย์เวิร์ด"
            },
            {
                step: "04",
                title: "Off-Page & Report",
                description: "สร้าง Backlinks และสรุปผลอันดับพร้อม Traffic Report ทุกเดือน"
            }
        ],
        faq: [
            {
                question: "นานแค่ไหนกว่าจะเห็นผล?",
                answer: "SEO เป็นเกมระยะยาวครับ โดยปกติจะเริ่มเห็นความเปลี่ยนแปลงชัดเจนในเดือนที่ 3-6 ขึ้นอยู่กับความยากง่ายของคีย์เวิร์ด"
            },
            {
                question: "รับประกันอันดับไหม?",
                answer: "Google มีการปรับอัลกอริทึมตลอดเวลา จึงไม่มีใครการันตีอันดับ 1 ได้ 100% แต่เราการันตีการทำงานและแนวโน้ม Traffic ที่ดีขึ้นครับ"
            }
        ]
    },
    "ads": {
        slug: "ads",
        title: "Performance Ads (FB/Google/TikTok)",
        subtitle: "เลิกตำน้ำพริกละลายแม่น้ำ ยิงแอดให้ตรงกลุ่ม คุ้มค่าทุกบาท",
        description: "บริการยิงโฆษณาที่เน้นผลลัพธ์ (ROAS/ROI) เจาะกลุ่มเป้าหมายแม่นยำ พร้อม Dashboard ติดตามผลแบบ Real-time",
        icon: TrendingUp,
        color: "from-orange-500 to-red-500",
        painPoints: [
            {
                title: "ยิงแอดไปเป็นแสน ยอดเท่าเดิม",
                description: "ถมเงินโฆษณาไปเรื่อยๆ แต่ยอดขายไม่โตตาม กำไรบางลงทุกวัน"
            },
            {
                title: "ค่าแอดแพงขึ้นทุกวัน",
                description: "คู่แข่งเยอะขึ้น ราคาประมูลแพงขึ้น ถ้าไม่ Optimize ก็สู้ไม่ไหว"
            },
            {
                title: "ยิงมั่ว ไม่รู้กลุ่มเป้าหมาย",
                description: "ตั้งกลุ่มเป้าหมายกว้างเกินไป หรือผิดกลุ่ม ทำให้เสียเงินฟรีโชว์คนที่ไม่ซื้อ"
            },
            {
                title: "ปิดการขายไม่ได้",
                description: "คนคลิกเยอะ ทักแชทเยอะ แต่ไม่ซื้อ ปัญหาอาจอยู่ที่ Ads Creative หรือ Sales Script"
            }
        ],
        solutions: [
            {
                title: "Data-Driven Targeting",
                description: "ใช้ข้อมูลจริงในการหาลูกค้า ไม่ใช่การเดา",
                points: ["Custom Audiences & Lookalike", "Pixel & API Conversion Tracking", "Audience Segmentation"]
            },
            {
                title: "Creative A/B Testing",
                description: "ทดสอบรูปภาพ วิดีโอ และข้อความ เพื่อหา Ad ที่ทำเงินที่สุด",
                points: ["Visual Hook Optimization", "Copywriting for Conversion", "Format Variation Testing"]
            },
            {
                title: "Funnel Optimization",
                description: "วางกลยุทธ์ Retargeting เพื่อตามหลอกหลอนจนกว่าจะซื้อ",
                points: ["Full Funnel Strategy (Awareness -> Conversion)", "Cross-Platform Retargeting", "Abandoned Cart Recovery"]
            }
        ],
        process: [
            {
                step: "01",
                title: "Objective Setup",
                description: "กำหนดเป้าหมาย (KPIs) และงบประมาณร่วมกัน"
            },
            {
                step: "02",
                title: "Audience & Creative",
                description: "วิเคราะห์กลุ่มเป้าหมายและเตรียมสื่อโฆษณา (Banner/Video)"
            },
            {
                step: "03",
                title: "Launch & Test",
                description: "เริ่มยิงโฆษณาและทำการ A/B Testing อย่างเข้มข้นในช่วงแรก"
            },
            {
                step: "04",
                title: "Scale & Optimize",
                description: "คัดแอดที่ดีที่สุดมาเพิ่มงบ และปิดแอดที่แย่เพื่อลดต้นทุน"
            }
        ],
        faq: [
            {
                question: "งบประมาณขั้นต่ำเท่าไหร่?",
                answer: "เราแนะนำงบประมาณค่าโฆษณาขั้นต่ำ 15,000 - 30,000 บาท/เดือน เพื่อให้ AI ของแพลตฟอร์มทำงานได้เต็มประสิทธิภาพครับ"
            },
            {
                question: "ค่าบริการคิดยังไง?",
                answer: "ค่าบริการดูแล (Management Fee) เริ่มต้นที่ 15% ของงบโฆษณา หรือขั้นต่ำตามตกลงครับ"
            }
        ]
    },
    "social-media": {
        slug: "social-media",
        title: "Social Media Management",
        subtitle: "สร้างแฟนพันธุ์แท้ ไม่ใช่แค่ผู้ติดตาม เปลี่ยนเพจร้างให้เป็น Community",
        description: "บริการดูแลเพจ Facebook/Instagram/TikTok แบบครบวงจร ตั้งแต่วางแผนคอนเทนต์ กราฟิก จนถึงดูแลลูกเพจ",
        icon: Share2,
        color: "from-purple-500 to-fuchsia-600",
        painPoints: [
            {
                title: "เพจเงียบเป็นป่าช้า",
                description: "โพสต์ไปไม่มีใครไลค์ ไม่มีใครเมเมนต์ Engagement ต่ำเตี้ยเรี่ยดิน"
            },
            {
                title: "ไม่มีเวลาทำคอนเทนต์",
                description: "ยุ่งกับธุรกิจหลัก จนไม่มีเวลาคิดแคปชั่น หรือทำรูปสวยๆ ลงเพจ"
            },
            {
                title: "คอนเทนต์สะเปะสะปะ",
                description: "โพสต์ตามอารมณ์ ไม่มีธีม ไม่มี CI แบรนด์ดูไม่เป็นมืออาชีพ"
            },
            {
                title: "ตอบแชทไม่ทัน ลูกค้าหนี",
                description: "ลูกค้าทักมาแล้วรอนาน ก็เปลี่ยนใจไปซื้อคู่แข่งแทน"
            }
        ],
        solutions: [
            {
                title: "Content Marketing Strategy",
                description: "วางแผนคอนเทนต์รายเดือน (Content Calendar) ไม่ให้เพจร้าง",
                points: ["Educational Content", "Lifestyle & Engagement Posts", "Sales & Promotion Posts"]
            },
            {
                title: "Professional Graphic Design",
                description: "ออกแบบภาพกราฟิกให้สวยงาม คุมโทนแบรนด์ (CI)",
                points: ["Single Image & Album Post", "Infographics", "Short Video Reels"]
            },
            {
                title: "Community Engagement",
                description: "สร้างปฏิสัมพันธ์กับลูกเพจ เพื่อเปลี่ยน Stranger เป็น Super Fan",
                points: ["Comment Reply", "Activity & Kampaigns", "Brand Voice consistency"]
            }
        ],
        process: [
            {
                step: "01",
                title: "Brand Voice",
                description: "กำหนดคาแรคเตอร์ของแบรนด์และแนวทางการสื่อสาร"
            },
            {
                step: "02",
                title: "Content Plan",
                description: "นำเสนอแผนคอนเทนต์ล่วงหน้า 1 เดือน ให้ลูกค้าอนุมัติ"
            },
            {
                step: "03",
                title: "Production",
                description: "เขียนแคปชั่นและทำกราฟิกตามแผนงาน"
            },
            {
                step: "04",
                title: "Publish & Report",
                description: "โพสต์ตามตารางเวลาและสรุปผล Engagement รายเดือน"
            }
        ],
        faq: [
            {
                question: "ต้องเตรียมรูปภาพสินค้าให้ไหม?",
                answer: "ถ้าลูกค้ามีรูปถ่ายสินค้ามาแล้ว ส่งให้เราทำกราฟิกต่อได้เลยครับ หรือถ้าต้องการให้เราถ่ายภาพด้วย ก็มีบริการเสริมครับ"
            },
            {
                question: "รวมตอบแชทด้วยไหม?",
                answer: "แพ็คเกจมาตรฐานจะรวมการตอบคอมเมนต์หน้าเพจครับ ส่วนการตอบแชทปิดการขายจะเป็น Add-on เสริมครับ"
            }
        ]
    },
    "production": {
        slug: "production",
        title: "Production & Photography",
        subtitle: "ภาพสวยขายได้ด้วยตัวเอง หยุดนิ้วโป้งลูกค้าด้วย Visual คุณภาพสูง",
        description: "บริการถ่ายภาพสินค้าและผลิตวิดีโอ Reeks/TikTok ที่ไม่ได้แค่สวยแต่ 'ขายได้' โดยทีมงานมืออาชีพ",
        icon: Video,
        color: "from-sky-500 to-cyan-500",
        painPoints: [
            {
                title: "สินค้าจริงดูดี แต่รูปดูแย่",
                description: "ถ่ายเองด้วยมือถือ แสงไม่สวย มุมไม่ได้ ทำให้สินค้าดูราคาถูกลง"
            },
            {
                title: "คลิปวิดีโอไม่มีคนดู",
                description: "ตัดต่อน่าเบื่อ เล่าเรื่องไม่เป็น ไม่ดึงดูดความสนใจใน 3 วินาทีแรก"
            },
            {
                title: "ไม่มีอุปกรณ์ ไฟ กล้อง",
                description: "จะลงทุนซื้ออุปกรณ์ก็แพง แถมต้องมาเรียนรู้วิธีใช้อีก"
            },
            {
                title: "ภาพไม่ตรงปก",
                description: "พอลูกค้าสั่งไปแล้วผิดหวัง เพราะภาพโฆษณาเกินจริง หรือถ่ายออกมาแย่กว่าจริง"
            }
        ],
        solutions: [
            {
                title: "Product Photography",
                description: "ถ่ายภาพสินค้าให้ดูพรีเมียม น่าใช้ เพิ่มมูลค่า",
                points: ["Packshot (ขาว/ใส)", "Lifestyle Product Shot", "Creative Styling"]
            },
            {
                title: "Short Video Production",
                description: "ผลิตคลิปสั้น (Reels/TikTok) ที่เน้นความสนุกและขายของ",
                points: ["Creative Scriptwriting", "Professional Shooting", "Dynamic Editing"]
            },
            {
                title: "Corporate Video",
                description: "วิดีโอแนะนำองค์กร สร้างความน่าเชื่อถือ",
                points: ["Interview & Storytelling", "B-Roll Cinematic", "Drone Footage"]
            }
        ],
        process: [
            {
                step: "01",
                title: "Concept & Moodboard",
                description: "พูดคุยไอเดียและกำหนดสไตล์ของภาพ/วิดีโอที่ต้องการ"
            },
            {
                step: "02",
                title: "Script & Storyboard",
                description: "วางโครงเรื่องและมุมกล้อง (สำหรับงานวิดีโอ)"
            },
            {
                step: "03",
                title: "Shooting Day",
                description: "วันถ่ายทำจริง พร้อมทีมงาน ช่างภาพ และสไตลิสต์"
            },
            {
                step: "04",
                title: "Editing & Delivery",
                description: "ตกแต่งภาพ/ตัดต่อวิดีโอ และส่งมอบงานคุณภาพสูง"
            }
        ],
        faq: [
            {
                question: "คิดราคาเป็นยังไง?",
                answer: "งานภาพนิ่งคิดเหมาเป็นเซ็ต หรือตามจำนวน SKU ครับ ส่วนวิดีโอประเมินตามความยาวและความยากง่าย"
            },
            {
                question: "มีสตูดิโอไหม?",
                answer: "เรามี Home Studio พร้อมไฟและอุปกรณ์เบื้องต้นครับ หรือสามารถออกกองไปถ่ายที่สถานที่จริงของลูกค้าได้ครับ"
            }
        ]
    }
};
