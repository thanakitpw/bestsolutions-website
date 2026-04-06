import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { LatestBlogPosts } from "@/components/LatestBlogPosts";
import {
  Monitor,
  BarChart3,
  Bot,
  Target,
  ArrowRight,
  Search,
  Lightbulb,
  Rocket,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Shield,
  HeadphonesIcon,
  Check,
  Star,
  Quote,
} from "lucide-react";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ===== 1. Hero Section ===== */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F51036] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F51036]" />
                </span>
                Digital Marketing Agency &amp; AI Solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                เปลี่ยนธุรกิจของคุณ
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] to-[#303092]">
                  ให้เติบโตได้จริง
                </span>
                <br />
                ด้วยดิจิทัลและ AI
              </h1>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Best Solutions ช่วย SME และธุรกิจทุกขนาดเติบโตด้วยการตลาดดิจิทัล
                ออกแบบเว็บไซต์ และระบบ AI Automation ที่วัดผลได้จริง
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="https://lin.ee/IlvhwZV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-[#F51036] text-white font-semibold text-base hover:opacity-90 transition-opacity"
                >
                  นัดคุยกับทีมของเรา
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center h-13 px-8 rounded-full border-2 border-gray-300 text-gray-700 font-semibold text-base hover:border-gray-400 transition-colors"
                >
                  ดูบริการทั้งหมด
                </Link>
              </div>

              {/* Proof bar */}
              <div className="flex flex-wrap gap-6 sm:gap-10 text-sm text-gray-500">
                <div>
                  <span className="block text-2xl font-bold text-gray-900">50+</span>
                  โปรเจกต์สำเร็จ
                </div>
                <div className="hidden sm:block w-px bg-gray-200" />
                <div>
                  <span className="block text-2xl font-bold text-gray-900">95%</span>
                  ความพึงพอใจ
                </div>
                <div className="hidden sm:block w-px bg-gray-200" />
                <div>
                  <span className="block text-2xl font-bold text-gray-900">5+</span>
                  ปีประสบการณ์
                </div>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative hidden lg:flex items-center justify-center">
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
      </section>

      {/* ===== 2. Client Logos ===== */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 mb-6">
            ได้รับความไว้วางใจจากธุรกิจชั้นนำ
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-[100px] h-[32px] rounded bg-gray-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3-5. Services Section ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#F51036] tracking-wider uppercase mb-3">
              บริการของเรา
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              ครบทุกสิ่งที่ธุรกิจต้องการเพื่อเติบโต
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              ตั้งแต่สร้างเว็บไซต์ ยิงแอด ดูแลโซเชียล SEO ไปจนถึง AI Automation ครบในที่เดียว
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: รับทำเว็บไซต์ */}
            <Link
              href="/services/website-design"
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F51036] to-[#303092] flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">รับทำเว็บไซต์</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                ออกแบบเว็บสวย ทันสมัย รองรับมือถือ โหลดเร็ว และ SEO-ready ตั้งแต่วันแรก
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                เริ่มต้น 15,000 บาท
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#F51036] group-hover:gap-2 transition-all">
                ดูรายละเอียด <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Card 2: ยิงแอดโฆษณา */}
            <Link
              href="/services#ads"
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F51036] to-[#303092] flex items-center justify-center mb-5">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ยิงแอดโฆษณา</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                บริหาร Facebook &amp; Google Ads อย่างมืออาชีพ วัดผลได้จริง ROAS เฉลี่ย 3-8 เท่า
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                เริ่มต้น 8,000 บาท/เดือน
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#F51036] group-hover:gap-2 transition-all">
                ดูรายละเอียด <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Card 3: AI Automation (FEATURED) */}
            <Link
              href="/services/ai-automation"
              className="group relative rounded-2xl p-6 transition-all bg-gradient-to-br from-[#1a1a2e] to-[#303092] text-white hover:shadow-xl"
            >
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#F51036] text-white text-xs font-bold uppercase tracking-wider">
                NEW
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI Automation</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                ระบบ AI ทำงานแทนคนได้ 24 ชั่วโมง ตอบลูกค้า ส่ง Follow-up
                และเชื่อมต่อทุกแพลตฟอร์มอัตโนมัติ
              </p>
              <p className="text-sm font-semibold mb-3">
                เริ่มต้น 15,000 บาท
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all">
                ดูรายละเอียด <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Card 4: Lead Generation */}
            <Link
              href="/services#lead-gen"
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F51036] to-[#303092] flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lead Generation</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                สร้างระบบหาลูกค้าใหม่แบบอัตโนมัติ จาก Landing Page
                ถึงการ Nurture ลีดจนปิดการขาย
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                เริ่มต้น 20,000 บาท/เดือน
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#F51036] group-hover:gap-2 transition-all">
                ดูรายละเอียด <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
            >
              ดูบริการทั้งหมด (7 บริการ) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6. Case Studies (Dark) ===== */}
      <section className="py-20 md:py-28 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#F51036] tracking-wider uppercase mb-3">
              ผลงานจริง
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              ผลลัพธ์ที่พิสูจน์ได้ ไม่ใช่แค่คำพูด
            </h2>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* E-Commerce */}
            <div className="rounded-2xl bg-[#1E293B] border border-[#334155] p-8 text-center">
              <p className="text-sm text-gray-400 mb-2">E-Commerce</p>
              <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] to-[#303092] mb-3">
                +200%
              </p>
              <p className="text-gray-300 text-sm">ยอดขายเพิ่มขึ้น</p>
            </div>

            {/* Real Estate */}
            <div className="rounded-2xl bg-[#1E293B] border border-[#334155] p-8 text-center">
              <p className="text-sm text-gray-400 mb-2">Real Estate</p>
              <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] to-[#303092] mb-3">
                50 Units
              </p>
              <p className="text-gray-300 text-sm">ปิดการขายใน 3 เดือน</p>
            </div>

            {/* F&B */}
            <div className="rounded-2xl bg-[#1E293B] border border-[#334155] p-8 text-center">
              <p className="text-sm text-gray-400 mb-2">F&amp;B</p>
              <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] to-[#303092] mb-3">
                +150%
              </p>
              <p className="text-gray-300 text-sm">ยอดจองออนไลน์เพิ่ม</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-full border-2 border-gray-500 text-white font-semibold hover:border-gray-400 transition-colors"
            >
              ดูผลงานทั้งหมด <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://lin.ee/IlvhwZV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-gradient-to-r from-[#F51036] to-[#303092] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              ปรึกษาฟรี
            </a>
          </div>
        </div>
      </section>

      {/* ===== 7. Pricing ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#F51036] tracking-wider uppercase mb-3">
              แพ็คเกจยอดนิยม
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              เลือกแพ็คเกจที่เหมาะกับธุรกิจของคุณ
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              ทุกแพ็คเกจรวมทีมดูแลตลอด ไม่มีค่าใช้จ่ายแอบแฝง
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* STARTER */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col">
              <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">
                STARTER
              </p>
              <p className="text-4xl font-extrabold text-gray-900 mb-1">
                15,000
              </p>
              <p className="text-sm text-gray-500 mb-6">บาท</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  ออกแบบเว็บไซต์ 1 หน้า
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  Responsive ทุกอุปกรณ์
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  SEO พื้นฐาน
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  ส่งมอบภายใน 7 วัน
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
              >
                เริ่มต้นใช้งาน
              </Link>
            </div>

            {/* GROWTH (FEATURED) */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#303092] p-8 flex flex-col text-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F51036] text-white text-xs font-bold">
                แนะนำ
              </div>
              <p className="text-sm font-bold text-white/60 tracking-wider uppercase mb-4">
                GROWTH
              </p>
              <p className="text-4xl font-extrabold mb-1">35,000</p>
              <p className="text-sm text-white/60 mb-6">บาท/เดือน</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  เว็บไซต์ + Landing Page
                </li>
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  ยิงแอด Facebook &amp; Google
                </li>
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  รายงานผลรายเดือน
                </li>
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  ทีมดูแลเฉพาะ
                </li>
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  AI Chatbot ตอบลูกค้า
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center py-3 rounded-full bg-[#F51036] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                เลือกแพ็คเกจนี้
              </Link>
            </div>

            {/* ENTERPRISE */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col">
              <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">
                ENTERPRISE
              </p>
              <p className="text-4xl font-extrabold text-gray-900 mb-1">
                80,000
              </p>
              <p className="text-sm text-gray-500 mb-6">บาท/เดือน</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  ทุกอย่างใน Growth
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  AI Automation เต็มระบบ
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  ดูแลโซเชียลมีเดีย
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  SEO &amp; Content Marketing
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#F51036] mt-0.5 shrink-0" />
                  Priority Support
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
              >
                เริ่มต้นใช้งาน
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            * ราคายังไม่รวมค่าโฆษณา (Ad Spend) สามารถปรับแพ็คเกจได้ตามความต้องการ
          </p>
        </div>
      </section>

      {/* ===== 8. Mini CTA ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#F51036] to-[#303092] px-8 py-14 md:px-16 md:py-20 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              พร้อมยกระดับธุรกิจของคุณแล้วหรือยัง?
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
              อย่าปล่อยให้โอกาสเติบโตหลุดลอยไป ปรึกษาเราวันนี้เพื่อวางแผนกลยุทธ์ที่ใช่สำหรับคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lin.ee/IlvhwZV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-white text-[#303092] font-semibold hover:bg-gray-100 transition-colors"
              >
                นัดคุยฟรี
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center h-13 px-8 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                ดูแพ็คเกจบริการ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. How We Work ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#F51036] tracking-wider uppercase mb-3">
              ขั้นตอนการทำงาน
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              4 ขั้นตอนสู่ความสำเร็จ
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: Search,
                title: "Discovery",
                desc: "ทำความเข้าใจธุรกิจ เป้าหมาย และกลุ่มเป้าหมายของคุณอย่างลึกซึ้ง",
                duration: "1-2 วัน",
              },
              {
                step: 2,
                icon: Lightbulb,
                title: "Strategy",
                desc: "วางแผนกลยุทธ์และ Roadmap ที่ชัดเจน พร้อม KPI ที่วัดผลได้",
                duration: "3-5 วัน",
              },
              {
                step: 3,
                icon: Rocket,
                title: "Implementation",
                desc: "ลงมือทำจริง ออกแบบ พัฒนา และ Launch ตามแผนที่วางไว้",
                duration: "2-4 สัปดาห์",
              },
              {
                step: 4,
                icon: TrendingUp,
                title: "Results",
                desc: "ติดตามผล วิเคราะห์ข้อมูล และปรับปรุงอย่างต่อเนื่อง",
                duration: "ต่อเนื่อง",
              },
            ].map(({ step, icon: Icon, title, desc, duration }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#303092] text-white flex items-center justify-center mx-auto mb-5 text-xl font-bold">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="inline-flex items-center gap-1 text-sm text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  {duration}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://lin.ee/IlvhwZV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F51036] font-semibold hover:underline"
            >
              เริ่มโปรเจกต์กับเรา -- ปรึกษาฟรี <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== 10. Why Us + Testimonials ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Why Us */}
            <div>
              <span className="inline-block text-sm font-semibold text-[#F51036] tracking-wider uppercase mb-3">
                ทำไมต้องเรา
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
                จุดแข็งที่ทำให้เราแตกต่าง
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Users,
                    title: "ทีมผู้เชี่ยวชาญเฉพาะทาง",
                    desc: "ทีมงานมืออาชีพ ครอบคลุมทุกด้านตั้งแต่การตลาด ออกแบบ ไปจนถึง AI",
                  },
                  {
                    icon: Zap,
                    title: "วัดผลได้จริง",
                    desc: "ทุกแคมเปญมี KPI ชัดเจน พร้อมรายงานผลที่โปร่งใสทุกเดือน",
                  },
                  {
                    icon: Shield,
                    title: "ดูแลครบวงจร",
                    desc: "จบในที่เดียว ไม่ต้องจ้างหลายที่ ประหยัดเวลาและงบประมาณ",
                  },
                  {
                    icon: HeadphonesIcon,
                    title: "ซัพพอร์ตตลอด",
                    desc: "ทีมดูแลพร้อมช่วยเหลือทุกวัน ตอบไว แก้ปัญหาทัน",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F51036]/10 to-[#303092]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#F51036]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Testimonials */}
            <div>
              <span className="inline-block text-sm font-semibold text-[#F51036] tracking-wider uppercase mb-3">
                รีวิวจากลูกค้า
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
                เสียงจากลูกค้า
              </h2>

              <div className="space-y-6">
                {[
                  {
                    name: "คุณวิทย์",
                    role: "เจ้าของร้านอาหาร",
                    quote:
                      "ยอดจองโต 150% ภายใน 2 เดือน ทีมงานดูแลดีมาก รายงานผลชัดเจน",
                    stars: 5,
                  },
                  {
                    name: "คุณแพร",
                    role: "ผู้จัดการฝ่ายการตลาด",
                    quote:
                      "AI Chatbot ช่วยลดภาระทีมได้เยอะมาก ตอบลูกค้าได้ 24 ชั่วโมง",
                    stars: 5,
                  },
                  {
                    name: "คุณเจมส์",
                    role: "CEO สตาร์ทอัพ",
                    quote:
                      "เว็บไซต์สวยมาก โหลดเร็ว SEO ติดหน้าแรก Google ภายใน 3 เดือน",
                    stars: 5,
                  },
                ].map(({ name, role, quote, stars }) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="flex gap-3 mb-3">
                      <Quote className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 leading-relaxed italic">
                        {quote}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-bold text-gray-900">{name}</p>
                      <p className="text-sm text-gray-400">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <a
              href="https://lin.ee/IlvhwZV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F51036] font-semibold hover:underline"
            >
              ปรึกษากับทีมการตลาดฟรี <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== 11. Blog Section ===== */}
      <Suspense
        fallback={
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-[#F51036] tracking-wider uppercase mb-3">
                  บทความและข้อมูลเชิงลึก
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  อัปเดตความรู้ล่าสุด
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-gray-100 h-64 animate-pulse"
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <LatestBlogPosts />
      </Suspense>

      {/* ===== 12. Footer ===== */}
      <Footer />
    </main>
  );
}
