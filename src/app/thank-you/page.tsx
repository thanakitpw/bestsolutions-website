import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ขอบคุณที่ติดต่อเรา | Best Solutions",
  description: "ได้รับข้อมูลของคุณเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง",
  robots: "noindex, nofollow",
};

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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ขอบคุณที่ติดต่อเรา!
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            ได้รับข้อมูลของคุณเรียบร้อยแล้ว<br />
            ทีมงานจะโทรติดต่อกลับภายใน <span className="font-bold text-[#F51036]">24 ชั่วโมง</span> ในวันทำการ
          </p>

          {/* Next Steps */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left">
            <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#F51036] text-white rounded-full flex items-center justify-center text-sm">!</span>
              ขั้นตอนถัดไป
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-xs flex items-center justify-center mt-0.5 shrink-0">1</div>
                <span>ทีมงานจะทำการวิเคราะห์ความต้องการของคุณ</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-xs flex items-center justify-center mt-0.5 shrink-0">2</div>
                <span>เตรียมข้อเสนอที่เหมาะสมกับธุรกิจของคุณ</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 text-xs flex items-center justify-center mt-0.5 shrink-0">3</div>
                <span>โทรติดต่อนัดหมายเพื่อปรึกษาฟรี</span>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-2" />
                กลับหน้าแรก
              </Button>
            </Link>
            <a href="https://lin.ee/your-line-id" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#F51036] to-orange-500">
                <MessageCircle className="w-4 h-4 mr-2" />
                ติดต่อผ่าน LINE
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm mb-4">หากต้องการติดต่อด่วน</p>
            <div className="flex justify-center gap-6">
              <a href="tel:080-123-4567" className="flex items-center gap-2 text-slate-700 hover:text-[#F51036] transition-colors">
                <Phone className="w-4 h-4" />
                080-123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
