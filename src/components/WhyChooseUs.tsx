'use client';

import React, { useState } from "react";
import { Users, Receipt, Shield, Headphones, TrendingUp, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const strengths = [
  {
    icon: Users,
    title: "ทีมเชี่ยวชาญ",
    description: "มีประสบการณ์กว่า 5 ปี ในดิจิทัลมาร์เก็ตติ้ง"
  },
  {
    icon: Receipt,
    title: "ราคาโปร่งใส",
    description: "ไม่มีค่าใช้จ่ายซ่อน รับประกันราคาที่เหมาะสม"
  },
  {
    icon: Shield,
    title: "รับประกันผล",
    description: "รับประกันผลลัพธ์ หรือปรับปรุงฟรี"
  },
  {
    icon: Headphones,
    title: "บริการหลังการขาย",
    description: "ดูแลตลอด 24/7 พร้อมคำปรึกษาฟรี"
  }
];

const stats = [
  { number: "50+", label: "โปรเจกต์สำเร็จ" },
  { number: "95%", label: "ความพึงพอใจ" },
  { number: "5+", label: "ปีประสบการณ์" },
  { number: "24/7", label: "บริการลูกค้า" }
];

const testimonials = [
  {
    content: "ทีมเยี่ยมมาก ผลลัพธ์เกินคาด ขอแนะนำเลย",
    author: "บริษัท A",
    rating: 5
  },
  {
    content: "ราคาคุ้มค่า บริการดีเยี่ยม ใส่ใจทุกรายละเอียด",
    author: "บริษัท B", 
    rating: 5
  },
  {
    content: "เห็นผลจริง ยอดขายเพิ่มขึ้นมากหลังใช้บริการ",
    author: "บริษัท C",
    rating: 5
  }
];

export const WhyChooseUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--color-primary-end)]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] uppercase tracking-[0.2em] mb-6">
            ทำไมต้องเรา
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            จุดแข็งและความ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
              น่าเชื่อถือของเรา
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            เรามีทีมงานมืออาชีพ พร้อมประสบการณ์และความมุ่งมั่นที่จะส่งมอบผลลัพธ์ที่ดีที่สุดให้ลูกค้า
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Strengths */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">จุดแข็งของเรา</h3>
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="group flex gap-4 p-6 rounded-2xl border border-slate-100 hover:border-[var(--color-primary-start)]/30 hover:bg-slate-50/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <strength.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{strength.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Social Proof */}
          <div className="space-y-8">
            {/* Stats */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">สถิติที่พูดได้</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary-start)]/5 to-[var(--color-primary-end)]/5 border border-slate-100">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Carousel */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">เสียงจากลูกค้า</h3>
              <div className="relative">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[var(--color-primary-start)]/20" />
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-primary-start)] text-[var(--color-primary-start)]" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-3 leading-relaxed">"{testimonials[currentTestimonial].content}"</p>
                  <p className="text-sm font-bold text-[var(--color-primary-start)]">- {testimonials[currentTestimonial].author}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial
                          ? 'bg-[var(--color-primary-start)]'
                          : 'bg-slate-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-[var(--color-primary-end)] to-[var(--color-primary-start)] rounded-full hover:shadow-lg hover:-translate-y-1 group">
            ปรึกษากับทีมการตลาดฟรี
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
