import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ArrowLeft, MessageCircle, Clock, Search, Pencil } from "lucide-react";

export const metadata: Metadata = {
  title: "ขอบคุณที่ติดต่อเรา | Best Solutions",
  description: "ได้รับข้อมูลของคุณเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง",
  robots: "noindex, nofollow",
};

const LINE_URL = "https://lin.ee/IlvhwZV";

const steps = [
  { icon: Search, step: "01", title: "วิเคราะห์ความต้องการ", desc: "ทีมงานรับข้อมูลและศึกษาธุรกิจของคุณ" },
  { icon: MessageCircle, step: "02", title: "โทรติดต่อกลับ", desc: "ภายใน 24 ชั่วโมงในวันทำการ" },
  { icon: Pencil, step: "03", title: "เสนอราคาและเริ่มงาน", desc: "ยืนยันแพ็คเกจและเริ่มพัฒนาเว็บไซต์" },
];

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-YOUR_CONVERSION_ID/YOUR_CONVERSION_LABEL',
            'value': 1.0,
            'currency': 'THB'
          });
        `}
      </Script>

      <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden flex flex-col">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F51036]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#25137A]/30 rounded-full blur-[100px] pointer-events-none" />

        {/* Logo bar */}
        <div className="relative z-10 px-6 pt-8">
          <Link href="/" className="inline-block">
            <span className="text-white font-extrabold text-xl tracking-tight">
              Best<span className="text-[#F51036]">Solutions</span>
            </span>
          </Link>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl w-full text-center">

            {/* Success badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold mb-8">
              <CheckCircle2 className="w-4 h-4" />
              ส่งข้อมูลเรียบร้อยแล้ว
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              ขอบคุณที่<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] via-orange-400 to-amber-400">
                ไว้วางใจเรา!
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              ได้รับข้อมูลของคุณแล้ว ทีมงานจะโทรติดต่อกลับภายใน
              <span className="text-white font-bold"> 24 ชั่วโมง </span>
              ในวันทำการ
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {steps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-left hover:bg-white/8 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#F51036]/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#F51036]" />
                    </div>
                    <span className="text-white/30 text-xs font-bold">{step}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Timer reminder */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl b