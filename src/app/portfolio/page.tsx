
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { projects } from "@/lib/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ผลงานของเรา | Best Solutions Corp",
    description: "ตัวอย่างผลงานเว็บไซต์ การตลาดออนไลน์ และ SEO ที่เราภูมิใจนำเสนอ",
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="text-[var(--color-primary-start)] font-bold tracking-wider text-sm uppercase mb-4 block">
                        Our Portfolio
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                        ผลงานและความสำเร็จ<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
                            ของเรา
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                        เราภูมิใจที่ได้เป็นส่วนหนึ่งในช่วงเวลาสำคัญของธุรกิจลูกค้า
                        นี่คือตัวอย่างผลงานบางส่วนที่เราได้สร้างสรรค์ขึ้น
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ProjectGrid projects={projects} />
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">ชอบสไตล์งานของเราหรือเปล่า?</h2>
                    <p className="text-slate-500 mb-8">
                        มาร่วมสร้างโปรเจกต์ถัดไปของคุณให้ปังกว่าใคร ปรึกษาเราได้เลย
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
