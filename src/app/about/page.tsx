import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Lightbulb, CheckCircle2, ArrowRight, Brain, Palette, Zap } from "lucide-react";

export const metadata = {
    title: "เกี่ยวกับเรา | Best Solutions - Digital Marketing Agency",
    description: "รู้จักกับ Best Solutions เพื่อนคู่คิดทางการตลาดออนไลน์ ดูแลธุรกิจกว่า 100+ ราย ด้วยทีมงานมากประสบการณ์กว่า 10 ปี",
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

            {/* Core Values (Specifics) */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">สิ่งที่เรายึดมั่น (Our Core Values)</h2>
                        <p className="text-slate-500 mt-4 max-w-xl mx-auto">มาตรฐานที่เราใช้ตัดสินใจในทุกๆ งาน</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">No Guesstimates</h3>
                            <p className="text-slate-600">
                                เราไม่ใช้การคาดเดา ทุกการตัดสินใจต้องอ้างอิงจาก Data และสถิติที่ตรวจสอบได้จริง เพื่อลดความเสี่ยงให้ธุรกิจคุณ
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">100% Ownership</h3>
                            <p className="text-slate-600">
                                คุณคือเจ้าของทุกทรัพย์สินทางดิจิทัล ทั้ง Code, Account โฆษณา และ Design Files ไม่มีสัญญาผูกมัดแอบแฝง
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Solution First</h3>
                            <p className="text-slate-600">
                                เราไม่ขาย "เครื่องมือ" แต่ขาย "ทางออก" เราจะแนะนำเฉพาะสิ่งที่จำเป็นและแก้ปัญหาให้คุณได้จริงเท่านั้น
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency Standards */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 rounded-3xl bg-slate-900 p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary-start)] rounded-full blur-[200px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="lg:w-1/2 relative z-10">
                            <h2 className="text-3xl font-bold mb-6">ความโปร่งใสคือหัวใจสำคัญ</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                สบายใจได้ทุกขั้นตอนการทำงาน ด้วยมาตรฐานการสื่อสารที่ชัดเจนและสม่ำเสมอ คุณจะไม่ต้องคอยตามงานอีกต่อไป
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                    <span className="font-medium">Daily Updates</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                    <span className="font-medium">Weekly Sprint Reviews</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
                                    <span className="font-medium">Real-time Dashboard</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                                    <span className="font-medium">Direct Line to Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative z-10 w-full">
                            {/* Mockup of a Dashboard or Report could go here, for now a stylized list of 'Deliverables' */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                                    <span className="text-slate-300">Project Status</span>
                                    <span className="text-green-400 font-mono text-xs px-2 py-1 bg-green-400/10 rounded">ON TRACK</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Design Phase</span>
                                            <span className="text-white">100%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-full"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-400">Development</span>
                                            <span className="text-white">80%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[80%]"></div>
                                        </div>
                                    </div>
                                    <div className="pt-4 text-xs text-slate-500 text-center">
                                        *ตัวอย่างรายงานความคืบหน้าที่คุณจะได้รับ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Scale (Replaced Team Placeholder) */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary-start)] font-bold tracking-wider text-sm uppercase mb-2 block">OUR STRUCTURE</span>
                        <h2 className="text-3xl font-bold text-slate-900">ทีมงานคุณภาพที่ปรับเปลี่ยนได้ตามโจทย์</h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            เราใช้โมเดล <strong>"Core + Expert Network"</strong> ที่มีประสิทธิภาพสูง
                            โดยมีทีม Strategist หลักช่วยวางแผน และดึงตัวผู้เชี่ยวชาญเฉพาะด้าน (Dev, Designer, Content)
                            ที่ดีที่สุดในเครือข่ายมาร่วมโปรเจกต์ของคุณ
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600">
                                <Brain className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Lead Strategists</h3>
                            <p className="text-sm text-slate-500">ดูแลทิศทาง กลยุทธ์ และควบคุมคุณภาพทุกขั้นตอน</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-purple-50 rounded-full mx-auto mb-4 flex items-center justify-center text-purple-600">
                                <Palette className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Specialist Network</h3>
                            <p className="text-sm text-slate-500">กราฟิก, โปรแกรมเมอร์, และนักเขียน ที่คัดสรรมาเฉพาะงาน</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-yellow-50 rounded-full mx-auto mb-4 flex items-center justify-center text-yellow-600">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Agile Management</h3>
                            <p className="text-sm text-slate-500">บริหารจัดการด้วยระบบ Agile รวดเร็ว ยืดหยุ่น ไม่เทอะทะ</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
