import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Monitor, BarChart3, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
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
              <Button
                variant="gradient"
                size="lg"
                className="h-14 px-12 text-base md:text-lg rounded-xl shadow-lg shadow-red-500/15 hover:shadow-xl hover:shadow-red-500/25 transition-shadow"
              >
                ปรึกษากับทีมการตลาดของเรา
              </Button>
            </div>

            {/* Right - iMac Mockups */}
            <div className="relative hidden md:flex items-end justify-center lg:justify-end min-h-[340px] lg:min-h-[420px]">
              {/* Back iMac (left, slightly behind) */}
              <div className="absolute left-0 lg:-left-4 bottom-0 w-[58%] z-0 opacity-95">
                <div className="imac-shell">
                  <div className="bg-[#1e1e1e] rounded-t-[14px] p-[6px] pb-[10px] border border-[#3a3a3a]/50">
                    <div className="bg-[#faf5f0] rounded-[6px] aspect-[16/10] overflow-hidden relative">
                      {/* Screen content - back monitor */}
                      <div className="absolute inset-0 p-3 flex flex-col">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="h-[5px] w-[5px] rounded-full bg-[#ff5f57]" />
                          <div className="h-[5px] w-[5px] rounded-full bg-[#febc2e]" />
                          <div className="h-[5px] w-[5px] rounded-full bg-[#28c840]" />
                          <div className="flex-1 flex justify-center">
                            <div className="h-[6px] w-20 bg-[#e8e0d8] rounded-full" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-[6px] w-10 bg-[#d4c9be] rounded" />
                          <div className="h-[6px] w-8 bg-[#e8e0d8] rounded" />
                          <div className="h-[6px] w-6 bg-[#e8e0d8] rounded" />
                          <div className="h-[6px] w-8 bg-[#e8e0d8] rounded" />
                        </div>
                        <div className="flex-1 flex gap-2">
                          <div className="flex-1 bg-[#efe8e0] rounded p-2 flex flex-col justify-center items-center gap-1">
                            <div className="w-10 h-10 bg-[#d4b896] rounded-lg" />
                            <div className="h-[4px] w-8 bg-[#c9b9a4] rounded" />
                          </div>
                          <div className="flex-1 bg-[#f2ece6] rounded p-2 flex flex-col justify-center items-center gap-1">
                            <div className="w-10 h-10 bg-[#c9a87c] rounded-lg" />
                            <div className="h-[4px] w-8 bg-[#c9b9a4] rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chin */}
                  <div className="bg-gradient-to-b from-[#c8c8c8] to-[#b0b0b0] h-[14px] rounded-b-[10px] flex items-center justify-center border-t border-[#d8d8d8]">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#9a9a9a]" />
                  </div>
                  {/* Stand neck */}
                  <div className="mx-auto w-[22%] h-[28px] bg-gradient-to-b from-[#b8b8b8] to-[#a0a0a0] rounded-b-sm" />
                  {/* Stand base */}
                  <div className="mx-auto w-[40%] h-[4px] bg-gradient-to-b from-[#b8b8b8] to-[#9a9a9a] rounded-b-full" />
                </div>
              </div>

              {/* Front iMac (right, in front) */}
              <div className="relative z-10 w-[65%] ml-auto">
                <div className="imac-shell">
                  <div className="bg-[#1e1e1e] rounded-t-[14px] p-[6px] pb-[10px] border border-[#3a3a3a]/50 shadow-2xl shadow-slate-900/20">
                    <div className="bg-[#faf5f0] rounded-[6px] aspect-[16/10] overflow-hidden relative">
                      {/* Screen content - front monitor */}
                      <div className="absolute inset-0 p-3 flex flex-col">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]" />
                          <div className="h-[6px] w-[6px] rounded-full bg-[#febc2e]" />
                          <div className="h-[6px] w-[6px] rounded-full bg-[#28c840]" />
                          <div className="flex-1 flex justify-center">
                            <div className="h-[7px] w-24 bg-[#e8e0d8] rounded-full" />
                          </div>
                        </div>
                        {/* Nav */}
                        <div className="flex items-center justify-between mb-2 px-1">
                          <div className="h-[7px] w-14 bg-[#8b7355] rounded" />
                          <div className="flex gap-2">
                            <div className="h-[5px] w-8 bg-[#d4c9be] rounded" />
                            <div className="h-[5px] w-6 bg-[#d4c9be] rounded" />
                            <div className="h-[5px] w-8 bg-[#d4c9be] rounded" />
                          </div>
                        </div>
                        {/* Hero area */}
                        <div className="flex-1 bg-[#f0e8de] rounded-lg p-3 flex gap-3">
                          <div className="flex-1 flex flex-col justify-center">
                            <div className="text-[7px] font-bold text-[#5a4a38] leading-tight mb-1">
                              Furniture & Home
                              <br />
                              Decor WordPress
                              <br />
                              Theme
                            </div>
                            <div className="h-[4px] w-full bg-[#d4c2ae] rounded mb-[3px]" />
                            <div className="h-[4px] w-3/4 bg-[#d4c2ae] rounded" />
                          </div>
                          <div className="w-[45%] flex flex-col gap-1">
                            <div className="flex-1 bg-[#c9a87c] rounded" />
                            <div className="flex gap-1">
                              <div className="flex-1 h-5 bg-[#d4b896] rounded" />
                              <div className="flex-1 h-5 bg-[#b89466] rounded" />
                            </div>
                          </div>
                        </div>
                        {/* Bottom features */}
                        <div className="flex gap-2 mt-2 px-1">
                          <div className="flex-1 bg-[#efe8e0] rounded p-1">
                            <div className="h-[3px] w-full bg-[#d4c9be] rounded mb-[2px]" />
                            <div className="h-[3px] w-2/3 bg-[#e0d6cc] rounded" />
                          </div>
                          <div className="flex-1 bg-[#efe8e0] rounded p-1">
                            <div className="h-[3px] w-full bg-[#d4c9be] rounded mb-[2px]" />
                            <div className="h-[3px] w-2/3 bg-[#e0d6cc] rounded" />
                          </div>
                          <div className="flex-1 bg-[#efe8e0] rounded p-1">
                            <div className="h-[3px] w-full bg-[#d4c9be] rounded mb-[2px]" />
                            <div className="h-[3px] w-2/3 bg-[#e0d6cc] rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chin */}
                  <div className="bg-gradient-to-b from-[#c8c8c8] to-[#b0b0b0] h-[18px] rounded-b-[12px] flex items-center justify-center border-t border-[#d8d8d8]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#9a9a9a]" />
                  </div>
                  {/* Stand neck */}
                  <div className="mx-auto w-[20%] h-[34px] bg-gradient-to-b from-[#b8b8b8] to-[#a0a0a0] rounded-b-sm" />
                  {/* Stand base */}
                  <div className="mx-auto w-[36%] h-[5px] bg-gradient-to-b from-[#b8b8b8] to-[#9a9a9a] rounded-b-full" />
                </div>
              </div>

              {/* Keyboard */}
              <div className="absolute -bottom-2 right-[10%] z-20 w-[38%]">
                <div className="bg-gradient-to-b from-[#e8e8e8] to-[#d4d4d4] rounded-lg h-[22px] shadow-md flex items-center justify-center gap-[2px] px-3 border border-[#ccc]/60">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="h-[10px] flex-1 bg-white/80 rounded-[2px]" />
                  ))}
                </div>
              </div>

              {/* Mouse */}
              <div className="absolute -bottom-1 right-[52%] z-20">
                <div className="w-[18px] h-[28px] bg-gradient-to-b from-[#e8e8e8] to-[#d4d4d4] rounded-full shadow-md border border-[#ccc]/60">
                  <div className="mx-auto w-[1px] h-[10px] bg-[#ccc] mt-[4px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-primary-start)] rounded-full blur-[200px] opacity-[0.04] -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Tech Stack - Static Logos */}
      <section className="py-12 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-400 mb-10 uppercase tracking-wider">Powered by Modern Technology</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

            {/* Next.js */}
            <div className="h-8 w-auto hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 180 180" className="h-full w-auto fill-black">
                <path d="M180 90c0 49.7-40.3 90-90 90S0 139.7 0 90 40.3 0 90 0s90 40.3 90 90zM35 143c-.6 1.4.3 2.6 1.7 2 .8-.4 1.7-.6 2.4-1.2L130.6 50.4c-2.3-2.6-4.9-4.8-7.7-6.8L35 143zm110 0l-50.6-90H80.8l55.8 100c5.3-2.7 10.3-6 14.8-10zm-50.6-21L64.8 69.3c-1 .8-1.7 1.7-1.7 3.3v70.8h16V76.7l23.5 41.7 6.4 11.4L94.4 122z" />
              </svg>
            </div>

            {/* React */}
            <div className="h-9 w-auto hover:opacity-100 transition-opacity">
              <svg viewBox="-10.5 -9.45 21 18.9" className="h-full w-auto text-[#61DAFB] fill-current">
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
            </div>

            {/* Tailwind */}
            <div className="h-6 w-auto hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="h-full w-auto text-[#38BDF8] fill-current">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
            </div>

            {/* Supabase */}
            <div className="h-8 w-auto hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" className="h-full w-auto text-[#3ECF8E] fill-current">
                <path d="M21.362 9.354H12.066V3.53c0-.685-.884-.96-1.278-.396L3.36 14.07a.5.5 0 0 0 .409.785h8.342v6.621c0 .64.86.931 1.258.423l8.411-12.062a.5.5 0 0 0-.418-.483z" />
              </svg>
            </div>

            {/* TypeScript */}
            <div className="h-8 w-auto hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 128 128" className="h-full w-auto">
                <rect width="128" height="128" rx="15" className="fill-[#3178C6]" />
                <path fill="#FFF" d="M72.2,95.9l0-29H57v7.5h10.9v21.5H72.2z" />
                <path fill="#FFF" d="M107.1,74.7c-2.3-1.6-5.2-2.3-8.8-2.3c-2,0-3.9,0.3-5.5,1c-1.6,0.7-2.9,1.7-3.8,3.2 c-0.9,1.5-1.4,3.1-1.4,5c0,2.1,0.6,3.8,1.7,5.2c1.2,1.3,2.5,2.4,4.2,3.1c1.6,0.7,3.6,1.4,6,2.1c2.4,0.7,4.2,1.3,5.3,1.9 c1.1,0.6,1.9,1.4,2.5,2.3c0.6,0.9,0.9,2.1,0.9,3.6c0,1.4-0.4,2.6-1.1,3.6c-0.8,1-1.8,1.8-3.1,2.3c-1.3,0.5-2.9,0.7-4.7,0.7 c-2,0-3.8-0.3-5.3-0.8c-1.5-0.6-2.8-1.5-3.8-2.8c-1.1-1.3-1.7-2.9-2-4.8l-8.5,1.1c0.5,3.3,1.7,6.1,3.8,8.4 c2.1,2.3,4.7,4,7.9,5.2c3.2,1.1,6.8,1.7,10.8,1.7c4.1,0,7.7-0.7,10.5-2.1c2.9-1.4,5.1-3.3,6.6-5.8c1.5-2.5,2.3-5.4,2.3-8.8 c0-2.3-0.5-4.3-1.4-5.9c-0.9-1.7-2.2-2.9-3.9-3.9c-1.7-1-4-1.9-6.9-2.7c-2.9-0.8-4.9-1.5-5.9-2.1c-1-0.6-1.8-1.3-2.3-2.1 c-0.5-0.8-0.8-1.8-0.8-3c0-1.2,0.3-2.2,1-3.1c0.6-0.8,1.5-1.5,2.6-1.9c1.1-0.4,2.4-0.6,3.9-0.6c3.2,0,5.8,1,7.8,3.1 c2,2.1,3.1,5,3.3,8.9l8.4-1.1C113.8,80.1,111.4,76.6,107.1,74.7z M38.6,71.5v3.4l0.1,8.3l12.8,0v-8.3h0v-3.4H26.3v3.4 L38.6,71.5z M38.7,83.2l0,21.5l8.5,0V83.2H38.7z" />
              </svg>
            </div>

            {/* Vercel */}
            <div className="h-6 w-auto hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 75 65" className="h-full w-auto fill-black">
                <path d="M37.59.25l36.95 64H.64l36.95-64z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-start)]/10 text-[var(--color-primary-start)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-start)] transition-colors">การันตีผลลัพธ์</h3>
              <p className="text-slate-500 text-sm">วัดผลได้จริง ทุกยอดวิวและยอดขายเพิ่มขึ้นอย่างเป็นรูปธรรม</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">เชี่ยวชาญครบวงจร</h3>
              <p className="text-slate-500 text-sm">ดูแลตั้งแต่เว็บไซต์ โฆษณา จนถึงคอนเทนต์ ครบจบในที่เดียว</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-400 to-red-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">วิเคราะห์เชิงลึก</h3>
              <p className="text-slate-500 text-sm">ใช้ Data-Driven Strategy ในการวางแผนเพื่อความแม่นยำสูงสุด</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-green-400 to-emerald-600 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="font-bold text-xl">24/7</div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">ซัพพอร์ตตลอดเวลา</h3>
              <p className="text-slate-500 text-sm">ทีมงานพร้อมดูแลและแก้ไขปัญหาให้ธุรกิจคุณไม่สะดุด</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">บริการของเรา</h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 text-[var(--color-primary-start)] shadow-sm group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary-start)] transition-colors">Web Design</h3>
              <p className="text-slate-500 leading-relaxed">ออกแบบและทำเว็บไซต์ให้ทันสมัย รองรับทุกอุปกรณ์ และทำ SEO ได้ดีเยี่ยม</p>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 text-[#8B1158] shadow-sm group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#8B1158] transition-colors">Online Marketing</h3>
              <p className="text-slate-500 leading-relaxed">ยิงแอด Facebook, Google และ Tiktok ให้ตรงกลุ่มเป้าหมาย คุ้มค่าทุกบาท</p>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 text-[var(--color-primary-end)] shadow-sm group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary-end)] transition-colors">SEO Services</h3>
              <p className="text-slate-500 leading-relaxed">ดันอันดับเว็บให้ติดหน้าแรก Google เพิ่มยอดคนเข้าชมและยอดขายแบบธรรมชาติ</p>
            </div>
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

      {/* Latest Insights (Blog) - NEW SECTION FROM BRAINSTORMING */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fetching first 3 posts dynamically (simulated here) */}
            {/* In a real component we would import blogPosts from data */}
            {/* Post 1 */}
            <Link href="/blog/future-of-ai-marketing" className="group">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                  <Image
                    src="/images/future_of_ai_marketing_1770577806680.png"
                    alt="Future of AI Marketing"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium text-[var(--color-primary-start)] bg-[var(--color-primary-start)]/10 px-2 py-1 rounded-full">Marketing</span>
                    <span className="text-xs text-slate-400 py-1">Feb 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-start)] transition-colors line-clamp-2">
                    อนาคตของการตลาดในยุค AI: ปรับตัวอย่างไรให้รอด?
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                    AI กำลังเข้ามาเปลี่ยนแปลงวงการการตลาดอย่างสิ้นเชิง นักการตลาดต้องปรับตัวอย่างไรเพื่อใช้ประโยชน์จาก AI...
                  </p>
                  <div className="flex items-center text-[var(--color-primary-start)] font-medium text-sm group-hover:translate-x-2 transition-transform">
                    อ่านต่อ <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Post 2 */}
            <Link href="/blog/web-design-trends-2025" className="group">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                  <Image
                    src="/images/web_design_trends_2025_1770577822333.png"
                    alt="Web Design Trends 2025"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Design</span>
                    <span className="text-xs text-slate-400 py-1">Feb 10, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-start)] transition-colors line-clamp-2">
                    เจาะลึกเทรนด์ Web Design ปี 2025: น้อยแต่มาก เรียบแต่โก้
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                    รวมเทรนด์การออกแบบเว็บไซต์ที่กำลังมาแรงในปี 2025 เน้นความเร็ว, Accessibility และ Micro-interactions...
                  </p>
                  <div className="flex items-center text-[var(--color-primary-start)] font-medium text-sm group-hover:translate-x-2 transition-transform">
                    อ่านต่อ <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Post 3 */}
            <Link href="/blog/seo-checklist-for-business" className="group">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                  <Image
                    src="/images/seo_checklist_retry_1770577845030.png"
                    alt="SEO Checklist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Technology</span>
                    <span className="text-xs text-slate-400 py-1">Jan 28, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-start)] transition-colors line-clamp-2">
                    Checklist ทำ SEO สำหรับธุรกิจ SME: เริ่มต้นยังไงให้ติดหน้าแรก?
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                    คู่มือทำ SEO ฉบับจับมือทำ สำหรับเจ้าของธุรกิจที่อยากเพิ่มยอดขายแบบ Organic โดยไม่ต้องพึ่งโฆษณาตลอดไป...
                  </p>
                  <div className="flex items-center text-[var(--color-primary-start)] font-medium text-sm group-hover:translate-x-2 transition-transform">
                    อ่านต่อ <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center text-[var(--color-primary-start)] font-bold">
              อ่านบทความทั้งหมด <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">เสียงตอบรับจากลูกค้า</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-shadow relative">
                <div className="text-4xl text-[var(--color-primary-start)] opacity-30 font-serif absolute top-6 right-8">"</div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-bold text-slate-900">คุณ {i === 1 ? 'สมชาย' : i === 2 ? 'วิภา' : 'เอก'}</div>
                    <div className="text-xs text-slate-500">CEO, Company {i}</div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  "ทีมงาน Best Solutions เป็นมืออาชีพมาก ช่วยให้ยอดขายของเราเพิ่มขึ้นอย่างชัดเจน แนะนำเลยครับสำหรับใครที่มองหาที่ปรึกษาการตลาด"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    ขอใบเสนอราคาฟรี
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
