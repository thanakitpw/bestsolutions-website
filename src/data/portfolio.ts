export type ServiceCategory =
  | "Web Design"
  | "E-Commerce"
  | "Online Marketing"
  | "SEO"
  | "Branding"
  | "Video & Content";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  serviceCategory: ServiceCategory;
  industryTag: string;
  tags: string[];
  description: string;
  highlights: string[];
  image: string;
  demoUrl?: string;
  featured?: boolean;
}

export const serviceCategories: { id: ServiceCategory; label: string; description: string }[] = [
  { id: "Web Design",       label: "Web Design",       description: "เว็บไซต์สวย ใช้งานง่าย รองรับทุกอุปกรณ์" },
  { id: "E-Commerce",       label: "E-Commerce",       description: "ร้านค้าออนไลน์ครบวงจร" },
  { id: "Online Marketing", label: "Online Marketing", description: "ยิงโฆษณา Facebook, Google, TikTok" },
  { id: "SEO",              label: "SEO",              description: "ดันอันดับติดหน้าแรก Google" },
  { id: "Branding",         label: "Branding",         description: "สร้างแบรนด์ให้โดดเด่น จดจำง่าย" },
  { id: "Video & Content",  label: "Video & Content",  description: "ผลิต Content และวิดีโอมืออาชีพ" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: "luxe-store-ecommerce",
    title: "LUXE STORE",
    subtitle: "ร้านค้าออนไลน์พรีเมียม",
    serviceCategory: "E-Commerce",
    industryTag: "Lifestyle & Fashion",
    tags: ["Next.js", "UI/UX Design", "Payment Gateway", "Mobile-First"],
    description: "ร้านค้าออนไลน์พรีเมียมที่ออกแบบมาเพื่อมอบประสบการณ์ช้อปปิ้งที่ลื่นไหล ด้วยดีไซน์ที่สะท้อนภาพลักษณ์ของแบรนด์ระดับบน",
    highlights: [
      "ระบบตะกร้าสินค้าและ Checkout ที่ใช้งานง่าย",
      "ออกแบบ Mobile-First รองรับทุกหน้าจอ",
      "UI/UX ที่เน้น Conversion Rate Optimization",
      "ระบบจัดการสินค้าและออเดอร์แบบ Real-time",
    ],
    image: "/images/beauty_brand_rebrand_1770577771336.png",
    demoUrl: "https://ecommerce.bestsolutionscorp.com/",
    featured: true,
  },
  {
    id: "2",
    slug: "luxury-automotive-showcase",
    title: "Luxury Automotive",
    subtitle: "เว็บไซต์โชว์รูมรถยนต์ระดับพรีเมียม",
    serviceCategory: "Web Design",
    industryTag: "Automotive",
    tags: ["Cinematic Design", "Animation", "Dark Theme", "Responsive"],
    description: "เว็บไซต์โชว์รูมรถยนต์หรูที่ถ่ายทอดความสง่างามผ่านดีไซน์ระดับ World Class พร้อม Animation ที่ประทับใจทุกครั้งที่เลื่อนหน้าจอ",
    highlights: [
      "Dark Luxury Theme ที่สะท้อนความพรีเมียม",
      "Scroll Animation และ Parallax Effect",
      "ระบบ Showcase รถยนต์แต่ละรุ่นแบบ Interactive",
      "SEO-Optimized สำหรับกลุ่มเป้าหมาย High-End",
    ],
    image: "/images/luxury_condo_launch_1770577786685.png",
    demoUrl: "https://showcase.bestsolutionscorp.com/",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ServiceCategory): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.serviceCategory === category);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.featured);
}
