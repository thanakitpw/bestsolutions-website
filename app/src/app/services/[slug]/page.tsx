import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Best Solutions`,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className={`pt-32 pb-20 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/services" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to All Solutions
                    </Link>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <span className={`inline-block py-1 px-4 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-bold mb-6 shadow-lg shadow-blue-500/20`}>
                                SERVICE DETAIL
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 font-medium">
                                {service.subtitle}
                            </p>
                            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className={`bg-gradient-to-r ${service.color} text-white border-0 hover:opacity-90 shadow-xl shadow-blue-500/20 h-auto py-4 px-8 text-lg`}>
                                    ขอใบเสนอราคา <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className={`w-full aspect-square max-w-md rounded-[2.5rem] bg-gradient-to-br ${service.color} p-1 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500`}>
                                <div className="w-full h-full bg-white rounded-[2.3rem] flex items-center justify-center p-12">
                                    <service.icon className={`w-full h-full text-transparent bg-clip-text bg-gradient-to-br ${service.color} opacity-20`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">ปัญหาที่คุณอาจกำลังเจออยู่</h2>
                        <p className="text-lg text-slate-500">ถ้าคุณมีอาการเหล่านี้... ถึงเวลาที่ต้องเปลี่ยนแปลง</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.painPoints.map((pain, index) => (
                            <div key={index} className="bg-red-50 rounded-2xl p-8 border border-red-100 flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold text-xl">
                                    !
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{pain.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{pain.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions / Features Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">สิ่งที่คุณจะได้รับจากเรา</h2>
                        <p className="text-lg text-slate-500">โซลูชั่นที่ออกแบบมาเพื่อธุรกิจของคุณโดยเฉพาะ</p>
                    </div>

                    <div className="space-y-24">
                        {service.solutions.map((sol, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                                <div className="md:w-1/2">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{sol.title}</h3>
                                        <p className="text-slate-600 mb-6">{sol.description}</p>
                                        <ul className="space-y-3">
                                            {sol.points.map((point, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                                    <CheckCircle2 className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`} />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:w-1/2 pl-0 md:pl-12">
                                    <div className={`w-full h-1 bg-gradient-to-r ${service.color} mb-6 rounded-full opacity-50`} />
                                    <span className="text-9xl font-bold text-slate-100 block -mb-16 -ml-4 select-none">0{index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">ขั้นตอนการทำงาน</h2>
                        <p className="text-lg text-slate-500">เป็นระบบ ตรวจสอบได้ทุกขั้นตอน</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {service.process.map((step, index) => (
                            <div key={index} className="relative">
                                {index < service.process.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100 -z-10" />
                                )}
                                <div className="text-center bg-white">
                                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6`}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed px-4">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">คำถามที่พบบ่อย (FAQ)</h2>
                    </div>

                    <div className="space-y-6">
                        {service.faq.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                <h3 className="flex items-start gap-4 font-bold text-lg text-slate-900">
                                    <HelpCircle className="w-6 h-6 text-slate-400 flex-shrink-0" />
                                    {item.question}
                                </h3>
                                <p className="mt-4 pl-10 text-slate-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-24 bg-gradient-to-r ${service.color}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        พร้อมเริ่มโปรเจกต์ของคุณแล้วหรือยัง?
                    </h2>
                    <p className="text-xl text-white/80 mb-10">
                        อย่าปล่อยให้ปัญหาของคุณคาราคาซัง ปรึกษาเราวันนี้เพื่อทางออกที่ดีที่สุด
                    </p>
                    <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-[var(--color-primary-start)] hover:bg-slate-100 text-lg px-10 py-6 h-auto shadow-xl">
                            ขอคำปรึกษาฟรี <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
