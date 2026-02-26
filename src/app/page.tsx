import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Monitor, BarChart3, TrendingUp, ArrowRight, Search, Share2, FileText, Bot } from "lucide-react";
import Image from "next/image";
import { TechStack } from "@/components/TechStack";
import { AboutUs } from "@/components/AboutUs";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { OurClients } from "@/components/OurClients";
import { LatestBlogPosts } from "@/components/LatestBlogPosts";
import { WebDesignPopup } from "@/components/WebDesignPopup";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <WebDesignPopup />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#fef0f0] via-[#fdf2f4] to-[#faf0f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="max-w-xl">
              <h1 className="text-[2.75rem] md:text-6xl lg:text-[4.25rem] xl:text-7xl font-extrabold text-[#1a1a2e] leading-[1.1] tracking-tight mb-8">
                Glow Your
                <br />
                <span className="text-[var(--color-primary-start)] italic font-extrabold">Business</span> with
                <br />
                Our Service
              </h1>
              <p className="text-[15px] md:text-base text-[#6b7280] mb-10 leading-[1.8] max-w-md">
                Digital Marketing Agency & Production House ที่ปรึกษา และวางแผนทางการตลาด บริการด้านโฆษณา ผ่านสื่อออนไลน์ ออกแบบสื่อสิ่งพิมพ์ และพัฒนาเว็บไซต์ สำหรับธุรกิจทุกขนาด
              </p>
              <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="gradient"
                  size="lg"
                  className="h-14 px-12 text-base md:text-lg rounded-xl shadow-lg shadow-red-500/15 hover:shadow-xl hover:shadow-red-500/25 transition-shadow"
                >
                  ปรึกษากับทีมการตลาดของเรา
                </Button>
              </a>
            </div>

            {/* Right - Hero Image */}
            <div className="relative hidden md:flex items-center justify-center lg:justify-end">
              <Image
                src="/images/hero-mockup.png"
                alt="Best Solutions - Digital Marketing Services"
                width={600}
                height={450}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-primary-start)] rounded-full blur-[200px] opacity-[0.04] -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Tech Stack - Dynamic Marquee */}
      <TechStack />

      {/* About Us */}
      <AboutUs />

      {/* Services Preview */}
      <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[#F51036]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#25137A]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F51036] text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F51036] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F51036]" />
              </span>
              บริการของเรา
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              ครบทุกสิ่งที่ธุรกิจ<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] via-orange-400 to-amber-400">ต้องการเพื่อเติบโต</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              ตั้งแต่สร้างเว็บไซต์ ยิงแอด ดูแลโซเชียล SEO ไปจนถึง AI Automation ครบในที่เดียว
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Web Design */}
            <Link href="/services#web-design" className="group relative rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/8 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-600/0 group-hover:from-blue-500/5 group-hover:to-indigo-600/10 transition-all duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">รับทำเว็บไซต์</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  ออกแบบเว็บสวย ทันสมัย รองรับมือถือ โหลดเร็ว และ SEO-ready ตั้งแต่วันแรก
                </p>
                <span className="inline-flex items-center gap-1 text-blue-400 text-xs font-semibold group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Online Marketing */}
            <Link href="/services#ads" className="group relative rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/8 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F51036]/0 to-orange-500/0 group-hover:from-[#F51036]/5 group-hover:to-orange-500/10 transition-all duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F51036]/10 border border-[#F51036]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-[#F51036]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">ยิงแอดโฆษณา</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  บริหาร Facebook & Google Ads อย่างมืออาชีพ วัดผลได้จริง ROAS เฉลี่ย 3-8 เท่า
                </p>
                <span className="inline-flex items-center gap-1 text-[#F51036] text-xs font-semibold group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Social Media */}
            <Link href="/services#social-media" className="group relative rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/8 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/10 transition-all duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">ดูแลเพจโซเชียล</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  ดูแล Facebook, Instagram, TikTok ครบวงจร วางแผนคอนเทนต์ โพสต์ และตอบลูกค้า
                </p>
                <span className="inline-flex items-center gap-1 text-purple-400 text-xs font-semibold group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* SEO */}
            <Link href="/services#seo" className="group relative rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/8 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-600/0 group-hover:from-emerald-500/5 group-hover:to-teal-600/10 transition-all duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">รับทำ SEO</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  ดันเว็บติดหน้า 1 Google ด้วย Keyword ที่ลูกค้าค้นหาจริง เพิ่ม Traffic แบบยั่งยืน
                </p>
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Content */}
            <Link href="/services#content" className="group relative rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/8 hover:border-amber-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/10 transition-all duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">ผลิตคอนเทนต์</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  บทความ กราฟิก ภาพถ่ายสินค้า และวิดีโอ Short-form ที่ดึงดูดและสร้าง Brand ได้จริง
                </p>
                <span className="inline-flex items-center gap-1 text-amber-400 text-xs font-semibold group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* AI Automation - Featured */}
            <Link href="/services/ai-automation" className="group relative rounded-2xl border p-7 transition-all duration-300 overflow-hidden bg-gradient-to-br from-violet-600/20 to-cyan-500/10 border-violet-500/30 hover:border-violet-400/50 hover:from-violet-600/25 hover:to-cyan-500/15">
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-[10px] font-bold uppercase tracking-wider">
                New
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">AI Automation</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  ระบบ AI ทำงานแทนคนได้ 24 ชั่วโมง ตอบลูกค้า ส่ง Follow-up และเชื่อมต่อทุกแพลตฟอร์มอัตโนมัติ
                </p>
                <span className="inline-flex items-center gap-1 text-violet-400 text-xs font-semibold group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* AI Email - Featured */}
            <Link href="/services/ai-email" className="group relative rounded-2xl border p-7 transition-all duration-300 overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/25 hover:to-indigo-600/15">
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                New
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">AI ตอบอีเมล B2B</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  AI อ่านอีเมลลูกค้า จับคู่สินค้าจาก Catalog และออก Draft ตอบกลับอัตโนมัติภายใน 1 นาที
                </p>
                <span className="inline-flex items-center gap-1 text-blue-400 text-xs font-semibold group-hover:gap-2 transition-all">
                  ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

          </div>

          {/* View all CTA */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 hover:border-white/25 transition-all"
            >
              ดูบริการทั้งหมด <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[var(--color-primary-start)] font-bold tracking-wider text-sm uppercase">Selected Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">ผลงานความสำเร็จ</h2>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center text-slate-600 hover:text-[var(--color-primary-start)] font-medium transition-colors">
              ดูผลงานทั้งหมด <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
              {/* Image Placeholder */}
              <div className="absolute inset-0">
                <Image
                  src="/images/beauty_brand_rebrand_1770577771336.png"
                  alt="Beauty Brand Rebrand"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium mb-3 inline-block">E-Commerce</span>
                <h3 className="text-2xl font-bold text-white mb-2">Beauty Brand Rebrand</h3>
                <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">ยอดขายเพิ่มขึ้น 200% หลังจากปรับปรุง UX/UI และยิงโฆษณา</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
              {/* Image Placeholder */}
              <div className="absolute inset-0">
                <Image
                  src="/images/luxury_condo_launch_1770577786685.png"
                  alt="Luxury Condo Launch"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium mb-3 inline-block">Real Estate</span>
                <h3 className="text-2xl font-bold text-white mb-2">Luxury Condo Launch</h3>
                <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">ปิดการขาย 50 ยูนิตภายใน 3 เดือนด้วย Lead Generation</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio" className="inline-flex items-center text-[var(--color-primary-start)] font-bold">
              ดูผลงานทั้งหมด <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <HowWeWork />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Clients */}
      <OurClients />

      {/* Latest Insights (Blog) */}
      <Suspense fallback={
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-48 bg-slate-100 rounded animate-pulse mb-4" />
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl bg-slate-100 h-64 animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      }>
        <LatestBlogPosts />
      </Suspense>

      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#25137A] to-[#F51036] px-8 py-16 md:px-16 md:py-24 text-center items-center justify-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">พร้อมยกระดับธุรกิจของคุณ<br />หรือยัง?</h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 font-light">
                อย่าปล่อยให้โอกาสเติบโตหลุดลอยไป ปรึกษาเราวันนี้เพื่อวางแผนกลยุทธ์ที่ใช่สำหรับคุณ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[var(--color-primary-end)] hover:bg-slate-50 border-0 h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                    ติดต่อเรา
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-transparent">
                    ดูแพ็คเกจบริการ
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
              <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-white/10 rotate-12 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main >
  );
}
