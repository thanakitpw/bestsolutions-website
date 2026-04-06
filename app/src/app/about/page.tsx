import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Users, Target, Lightbulb, CheckCircle2, ArrowRight, Brain, Palette, Zap } from "lucide-react";

export const metadata = {
    title: "เกี่ยวกับเรา | Best Solutions - Digital Marketing Agency",
    description: "รู้จักกับ Best Solutions เพื่อนคู่คิดทางการตลาดออนไลน์ ดูแลธุรกิจกว่า 100+ ราย ด้วยทีมงานมากประสบการณ์กว่า 10 ปี",
    alternates: { canonical: "https://www.bestsolutionscorp.com/about" },
    openGraph: {
        title: "เกี่ยวกับเรา | Best Solutions",
        description: "รู้จักกับ Best Solutions เพื่อนคู่คิดทางการตลาดออนไลน์ ดูแลธุรกิจกว่า 100+ ราย ด้วยทีมงานมากประสบการณ์กว่า 10 ปี",
        url: "https://www.bestsolutionscorp.com/about",
        images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Best Solutions - เกี่ยวกับเรา" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "เกี่ยวกับเรา | Best Solutions",
        description: "รู้จักกับ Best Solutions เพื่อนคู่คิดทางการตลาดออนไลน์ ดูแลธุรกิจกว่า 100+ ราย",
        images: ["/og-default.jpg"],
    },
};

const workflowSteps = [
    { step: "01", title: "รับฟัง", desc: "เข้าใจธุรกิจและเป้าหมายของคุณ" },
    { step: "02", title: "วิเคราะห์", desc: "ศึกษาคู่แข่งและตลาดเป้าหมาย" },
    { step: "03", title: "วางแผน", desc: "ออกแบบกลยุทธ์ที่เหมาะสม" },
    { step: "04", title: "ลงมือทำ", desc: "ดำเนินการตามแผนอย่างเต็มที่" },
    { step: "05", title: "ติดตาม", desc: "วัดผลและปรับปรุงอย่างต่อเนื่อง" },
    { step: "06", title: "รายงาน", desc: "สรุปผลและแผนขั้นต่อไป" },
];

const stats = [
    { value: "10+", label: "ปีประสบการณ์" },
    { value: "100+", label: "ธุรกิจที่ดูแล" },
    { value: "500+", label: "แคมเปญสำเร็จ" },
    { value: "24/7", label: "ซัพพอร์ตลูกค้า" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#0B0F19] rounded-b-[3rem] shadow-xl">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Radial Gradient for depth */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-pink-500/20 blur-[100px] animate-blob"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-300 text-sm font-medium mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                        </span>
                        ABOUT US
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-tight">
                        มากกว่าเอเจนซี่ คือ <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">เพื่อนคู่คิด</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
                        เราไม่ได้แค่ "รับจ้างทำ" แต่เรา "ร่วมสร้าง" ความสำเร็จ<br />
                        ด้วยความโปร่งใส เทคโนโลยีที่ทันสมัย และผลลัพธ์ที่วัดค่าได้จริง
                    </p>
                </div>
            </section>

            {/* Founder's Story */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 relative">
                            {/* Placeholder for Founder Image - Using a gradient block for now or a generic placeholder if preferred, but a simple styled div works well for 'modern' feel until real photo */}
                            <div className="aspect-[4/5] rounded-3xl bg-slate-100 relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 flex items-center justify-center text-slate-300">
                                    <span className="text-sm">Founder Photo</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-primary-start)] rounded-full blur-3xl opacity-20"></div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-sm font-bold text-[var(--color-primary-start)] uppercase tracking-wider mb-3">FROM THE FOUNDER</h2>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">ทำไมต้อง Best Solutions?</h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    "ตลอด 10 ปีในวงการ Digital Marketing ผมเห็นปัญหาซ้ำเดิมที่ลูกค้าต้องเจอ คือความ 'ไม่ชัดเจน' ไม่ว่าจะเป็นการวัดผลไม่ได้ งบประมาณที่บานปลาย หรือการถูกผูกมัดด้วยเทคโนโลยีที่ล้าหลัง"
                                </p>
                                <p>
                                    ผมก่อตั้ง <strong>Best Solutions</strong> ขึ้นมาด้วยความตั้งใจเดียว คือการลบล้าง pain points เหล่านั้น
                                </p>
                                <p>
                                    เราเชื่อในพลังของ <strong>Data</strong> มากกว่าความรู้สึก และเชื่อใน <strong>Technology</strong> ที่คุณควรเป็นเจ้าของ 100% ไม่มีการหมกเม็ด ไม่มีการผูกมัด นี่คือคำสัญญาของผมต่อลูกค้าทุกคน"
                                </p>
                            </div>
                            <div className="mt-8">
                                <div className="font-bold text-slate-900 text-lg">Thanakit Chaithong</div>
                                <div className="text-slate-500">Founder & Lead Strategist</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <HowWeWork />

            {/* Why Choose Us */}
            <WhyChooseUs />

            <Footer />
        </main>
    );
}
