
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const AboutUs = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[var(--color-primary-end)]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500" />
                            <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-slate-100/50 overflow-hidden transform group-hover:scale-[1.01] transition duration-500">
                                <div className="bg-slate-100 rounded-xl overflow-hidden aspect-[4/3] relative">
                                    <Image
                                        src="/images/about-us.png"
                                        alt="Best Solutions - Digital Marketing Team"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Decorative Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-[var(--color-primary-end)]/10 text-[var(--color-primary-end)] rounded-lg">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">ตั้งแต่ปี 2024</p>
                                                <p className="font-bold text-slate-900">ขับเคลื่อนนวัตกรรม</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="inline-block text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] uppercase tracking-[0.2em] mb-6">
                            เกี่ยวกับ Best Solution
                        </p>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight font-heading">
                            สร้างสรรค์นวัตกรรม <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
                                เพื่อความสำเร็จของคุณ
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            เราคือทีมงานที่มีความมุ่งมั่น ทั้งนักพัฒนา ดีไซน์เนอร์ และนักวางกลยุทธ์ ที่พร้อมจะพลิกโฉมธุรกิจของคุณด้วยเทคโนโลยี
                            พันธกิจของเราคือการส่งมอบโซลูชันดิจิทัลที่ล้ำสมัย เพื่อขับเคลื่อนการเติบโตและประสิทธิภาพสูงสุด
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-[var(--color-primary-end)] to-[var(--color-primary-start)] rounded-full hover:shadow-lg hover:-translate-y-1 group">
                                เกี่ยวกับเรา
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
