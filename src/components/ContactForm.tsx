"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: "basic",
    name: "Basic Website",
    price: "5,000 บาท",
    features: ["เว็บไซต์ 1-5 หน้า", "รองรับมือถือ", "ฟรี Domain + Hosting ปีแรก", "แก้ไขได้ทีมละ 3 ครั้ง/เดือน"]
  },
  {
    id: "business",
    name: "Business Website",
    price: "15,000 บาท",
    features: ["เว็บไซต์ 5-15 หน้า", "ระบบจองนัด/สั่งซื้อ", "SEO พื้นฐาน", "แก้ไขได้ทีมละ 10 ครั้ง/เดือน", "รายงาน Google Analytics"]
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    price: "30,000 บาท",
    features: ["ร้านค้าออนไลน์ครบวงจร", "ระบบตะกร้า/ชำระเงิน", "จัดการสินค้า 100 ชิ้น", "แก้ไขได้ไม่จำกัด", "ระบบแจ้งเตือนออเดอร์"]
  },
  {
    id: "custom",
    name: "Custom Solution",
    price: "ตานความต้องการ",
    features: ["ระบบพิเศษ", "API Integration", "Custom Design", "ทีมงานดูแลเฉพาะ", "ระยะเวลา 1-3 เดือน"]
  }
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: "",
    websiteType: "",
    details: "",
    contactMethod: "phone"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.bestsolutionscorp.com/webhook/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "landing_page"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">ส่งข้อมูลเรียบร้อย!</h3>
        <p className="text-green-700 mb-4">ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง</p>
        <p className="text-green-600 text-sm">เราจะโทรหรืออีเมลตามที่คุณเลือก</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">ขอใบเสนอราคาฟรี</h3>
      <p className="text-slate-600 mb-8">เลือกแพ็คเกจที่เหมาะกับธุรกิจคุณ และรับคำปรึกษาจากผู้เชี่ยวชาญ</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              ชื่อ-นามสกุล <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F51036] focus:ring-2 focus:ring-[#F51036]/20 transition-all"
              placeholder="สมชาย ใจดี"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              เบอร์โทรศัพท์ <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F51036] focus:ring-2 focus:ring-[#F51036]/20 transition-all"
              placeholder="0812345678"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            อีเมล (ถ้ามี)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F51036] focus:ring-2 focus:ring-[#F51036]/20 transition-all"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            เลือกแพ็คเกจ <span className="text-red-500">*</span>
          </label>
          <select
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F51036] focus:ring-2 focus:ring-[#F51036]/20 transition-all"
          >
            <option value="">-- เลือกแพ็คเกจ --</option>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} - {pkg.price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            ประเภทเว็บไซต์ที่ต้องการ
          </label>
          <select
            name="websiteType"
            value={formData.websiteType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F51036] focus:ring-2 focus:ring-[#F51036]/20 transition-all"
          >
            <option value="">-- เลือกประเภท --</option>
            <option value="restaurant">ร้านอาหาร</option>
            <option value="shop">ร้านค้า/ขายของ</option>
            <option value="clinic">คลินิก/สปา</option>
            <option value="service">บริการ</option>
            <option value="portfolio">ผลงาน/พอร์ตโฟลิโอ</option>
            <option value="blog">บล็อก/สื่อ</option>
            <option value="ecommerce">ร้านค้าออนไลน์</option>
            <option value="corporate">องค์กร/บริษัท</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            รายละเอียดเพิ่มเติม
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F51036] focus:ring-2 focus:ring-[#F51036]/20 transition-all resize-none"
            placeholder="เช่น: ต้องการระบบจองคิว, รับบัตรเครดิต, ต้องการภาษาอังกฤษด้วย..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            ต้องการให้ติดต่อกลับผ่านช่องทางไหน? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === "phone"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-slate-700">โทรศัพท์</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === "email"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-slate-700">อีเมล</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="line"
                checked={formData.contactMethod === "line"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-slate-700">LINE</span>
            </label>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-sm text-slate-600">
            <strong>การติดต่อกลับ:</strong> ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมงในวันทำการ
          </p>
        </div>

        <Button
          type="submit"
          variant="gradient"
          disabled={isSubmitting}
          className="w-full py-4 text-lg rounded-xl font-bold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              กำลังส่งข้อมูล...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              ส่งข้อมูล
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
