import React from "react";
import { Search, Lightbulb, Rocket, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "เราเริ่มจากการฟังและเข้าใจธุรกิจของคุณอย่างลึกซึ้ง",
    duration: "1-2 วัน",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Strategy", 
    description: "วางแผนกลยุทธ์ที่เหมาะสมกับเป้าหมายและงบประมาณ",
    duration: "3-5 วัน",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "ดำเนินการด้วยทีมเชี่ยวชาญและเทคโนโลยีล่าสุด",
    duration: "7-14 วัน", 
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Results",
    description: "วัดผลและปรับปรุงอย่างต่อเนื่องเพื่อผลลัพธ์ที่ดีที่สุด",
    duration: "ตลอดการทำงาน",
    color: "from-green-500 to-emerald-500"
  }
];

export const HowWeWork = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[var(--color-primary-start)]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[var(--color-primary-end)]/5 to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] uppercase tracking-[0.2em] mb-6">
            หลักการทำงานของเรา
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            กระบวนการทำงาน <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
              ที่โปร่งใสและเข้าใจง่าย
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            เรามีกระบวนการทำงานที่ชัดเจน เพื่อให้มั่นใจว่าโปรเจกต์ของคุณสำเร็จตามเป้าหมาย
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
              
              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 bg-[var(--color-primary-start)] rounded-full" />
                <span>{step.duration}</span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-start)]/5 to-[var(--color-primary-end)]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-[var(--color-primary-end)] to-[var(--color-primary-start)] rounded-full hover:shadow-lg hover:-translate-y-1 group">
            เริ่มโปรเจกต์กับเรา
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
