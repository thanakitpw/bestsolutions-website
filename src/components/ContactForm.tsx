"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactFormSubmit } from "@/lib/analytics";
import { useRouter } from "next/navigation";

export const PACKAGE_OPTIONS = [
  { id: "basic",     name: "Starter Website",   price: "5,000 บาท" },
  { id: "business",  name: "Business Website",  price: "9,900 บาท" },
  { id: "ecommerce", name: "E-Commerce",        price: "15,000 บาท" },
  { id: "custom",    name: "Custom Solution",   price: "ตามความต้องการ" },
];

const inputCls = "w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:border-[#F51036] focus:ring-2 focus:ring-[#F51036]/20 transition-all text-sm";
const labelCls = "block text-sm font-semibold text-white/90 mb-1";

interface ContactFormProps {
  initialPackage?: string;
}

export function ContactForm({ initialPackage = "" }: ContactFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: initialPackage,
    details: "",
    contactMethod: "phone",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialPackage) setFormData(prev => ({ ...prev, package: initialPackage }));
  }, [initialPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://n8n.bestsolutionscorp.com/webhook/6bbbcd72-75b0-4553-87a3-e4ab20b3dfa0", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString(), source: "website_design_page" }),
      });
      
      // Track form submission in Google Analytics
      trackContactFormSubmit(formData.package || 'unknown');
      
      // Redirect to thank-you page
      router.push('/thank-you');
    } catch (err) {
      console.error(err);
      // Still redirect even on error (fail-open UX)
      router.push('/thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Phone */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>ชื่อ-นามสกุล <span className="text-red-400">*</span></label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="สมชาย ใจดี" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>เบอร์โทรศัพท์ <span className="text-red-400">*</span></label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="081-234-5678" className={inputCls} />
        </div>
      </div>

      {/* Package */}
      <div>
        <label className={labelCls}>แพ็คเกจที่สนใจ <span className="text-red-400">*</span></label>
        <select name="package" value={formData.package} onChange={handleChange} required className={inputCls}>
          <option value="">-- เลือกแพ็คเกจ --</option>
          {PACKAGE_OPTIONS.map(pkg => (
            <option key={pkg.id} value={pkg.id}>{pkg.name} — {pkg.price}</option>
          ))}
        </select>
      </div>

      {/* Details */}
      <div>
        <label className={labelCls}>รายละเอียดเพิ่มเติม</label>
        <textarea name="details" value={formData.details} onChange={handleChange} rows={3} placeholder="เช่น ต้องการระบบจองคิว, รับบัตรเครดิต..." className={inputCls + " resize-none"} />
      </div>

      {/* Contact method */}
      <div>
        <label className={labelCls}>ต้องการให้ติดต่อกลับผ่าน <span className="text-red-400">*</span></label>
        <div className="flex gap-4">
          {["phone", "email", "line"].map(m => (
            <label key={m} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contactMethod" value={m} checked={formData.contactMethod === m} onChange={handleChange} className="accent-[#F51036]" />
              <span className="text-white/80 text-sm capitalize">{m === "phone" ? "โทรศัพท์" : m === "email" ? "อีเมล" : "LINE"}</span>
            </label>
          ))}
        </div>
      </div>

      <p className="text-white/50 text-xs">ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมงในวันทำการ</p>

      <Button type="submit" variant="gradient" disabled={isSubmitting} className="w-full h-11 rounded-xl font-bold text-base">
        {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />กำลังส่ง...</> : <><Send className="w-4 h-4 mr-2" />ส่งข้อมูล</>}
      </Button>
    </form>
  );
}
