import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, ArrowLeft, Clock } from "lucide-react";

export const metadata = {
    title: "ขอบคุณ! | Best Solutions",
    description: "ขอบคุณที่สนใจบริการรับทำเว็บไซต์ของเรา เราจะติดต่อกลับโดยเร็ว",
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 md:pt-40 md:pb-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>

                    {/* Thank You Message */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        ขอบคุณมากครับ!
                    </h1>
                    
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        ขอบคุณที่สนใจบริการรับทำเว็บไซต์ของเรา
                        <br />
                        ทีมงานจะติดต่อกลับโดยเร็วที่สุดภายใน 5 นาที
                    </p>

                    {/* What's Next */}
                    <div className="bg-gray-50 rounded-3xl p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">ขั้นตอนต่อไป</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-blue-600 font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">ทีมงานติดต่อ</h3>
                                    <p className="text-gray-600 text-sm">เราจะโทรหรือทักมาหาคุณทาง LINE</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-blue-600 font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">ปรึกษาฟรี</h3>
                                    <p className="text-gray-600 text-sm">คุยเพื่อเข้าใจความต้องการของคุณ</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-blue-600 font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">เสนอราคา</h3>
                                    <p className="text-gray-600 text-sm">ส่งข้อเสนอราคาพร้อมรายละเอียด</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Options */}
                    <div className="bg-red-50 rounded-3xl p-8 mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">รอไม่ได้? ติดต่อเราได้เลย</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="https://lin.ee/IlvhwZV" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                            >
                                <MessageCircle className="w-5 h-5" />
                                LINE: @bestsolutions
                            </a>
                            <a 
                                href="tel:0999999999"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 font-bold rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                โทร: 099-999-9999
                            </a>
                        </div>
                    </div>

                    {/* Back to Landing */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/landing/web-design-cheap">
                            <Button variant="outline" className="flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                กลับไปหน้าแรก
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button className="flex items-center gap-2">
                                ดูบริการอื่นๆ
                                <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Button>
                        </Link>
                    </div>

                    {/* Urgency Message */}
                    <div className="mt-12 flex items-center justify-center gap-2 text-orange-600 font-semibold">
                        <Clock className="w-5 h-5" />
                        <span>พิเศษ! เหลือเพียง 5 แพ็คเกจราคาพิเศษประจำเดือนนี้</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
