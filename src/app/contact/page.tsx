import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    MessageCircle,
    Send
} from "lucide-react";

export const metadata = {
    title: "ติดต่อเรา | Best Solutions - Digital Marketing Agency",
    description: "ติดต่อ Best Solutions เพื่อปรึกษาการตลาดออนไลน์ฟรี โทร หรือส่งข้อความหาเราได้ทันที",
};

const contactInfo = [
    {
        icon: Phone,
        title: "โทรศัพท์",
        details: ["02-XXX-XXXX", "08X-XXX-XXXX"],
        color: "bg-green-100 text-green-600"
    },
    {
        icon: Mail,
        title: "อีเมล",
        details: ["info@bestsolutionscorp.com", "sales@bestsolutionscorp.com"],
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: MapPin,
        title: "ที่อยู่",
        details: ["กรุงเทพมหานคร", "ประเทศไทย"],
        color: "bg-red-100 text-red-600"
    },
    {
        icon: Clock,
        title: "เวลาทำการ",
        details: ["จันทร์ - ศุกร์: 9:00 - 18:00", "เสาร์: 9:00 - 15:00"],
        color: "bg-purple-100 text-purple-600"
    },
];

const services = [
    "ทำเว็บไซต์",
    "ยิงแอดโฆษณา",
    "ดูแลเพจโซเชียล",
    "SEO",
    "ผลิตคอนเทนต์",
    "อื่นๆ"
];

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-slate-100 text-[var(--color-primary-end)] text-sm font-bold mb-6 border border-slate-200">
                        CONTACT US
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                        ติดต่อเรา
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed">
                        พร้อมให้คำปรึกษาฟรี! ติดต่อเราได้หลายช่องทาง หรือกรอกฟอร์มด้านล่าง
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info) => (
                            <div key={info.title} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                                <div className={`absolute left-0 top-8 bottom-8 w-1 ${info.color.replace('bg-', 'bg-').replace('text-', 'from-').split(' ')[0].replace('100', '400')} to-${info.color.split(' ')[1].replace('text-', '').replace('600', '600')} bg-gradient-to-b rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <info.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-start)] transition-colors">{info.title}</h3>
                                {info.details.map((detail) => (
                                    <p key={detail} className="text-slate-600 text-sm">{detail}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form & Social */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">ส่งข้อความถึงเรา</h2>
                            <p className="text-slate-500 mb-8">กรอกข้อมูลด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">ชื่อ-นามสกุล *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[var(--color-primary-start)] focus:ring-2 focus:ring-[var(--color-primary-start)]/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                            placeholder="กรอกชื่อของคุณ"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">เบอร์โทรศัพท์ *</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[var(--color-primary-start)] focus:ring-2 focus:ring-[var(--color-primary-start)]/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                            placeholder="08X-XXX-XXXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">อีเมล</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[var(--color-primary-start)] focus:ring-2 focus:ring-[var(--color-primary-start)]/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                        placeholder="example@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">บริการที่สนใจ *</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[var(--color-primary-start)] focus:ring-2 focus:ring-[var(--color-primary-start)]/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                    >
                                        <option value="">เลือกบริการ</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">รายละเอียดเพิ่มเติม</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-[var(--color-primary-start)] focus:ring-2 focus:ring-[var(--color-primary-start)]/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 resize-none"
                                        placeholder="บอกรายละเอียดเพิ่มเติม หรือคำถามที่คุณอยากสอบถาม..."
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="gradient" size="lg" className="w-full text-lg py-6 h-auto">
                                    <Send className="w-5 h-5 mr-2" /> ส่งข้อความ
                                </Button>
                            </form>
                        </div>

                        {/* Social & Quick Contact */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">ติดต่อด่วนผ่านโซเชียล</h2>
                                <div className="space-y-4">
                                    <a
                                        href="https://www.facebook.com/bestsolutionsbkk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                                            <Facebook className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">Facebook</div>
                                            <div className="text-sm text-slate-500">@bestsolutionsbkk</div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://line.me/ti/p/~@bestsolutions"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 border border-green-100 transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                                            <MessageCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">LINE Official</div>
                                            <div className="text-sm text-slate-500">@bestsolutions</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-white rounded-3xl h-80 flex items-center justify-center border border-slate-100 shadow-lg shadow-slate-200/50">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                                    <p className="text-slate-500">Google Map</p>
                                    <p className="text-sm text-slate-400">(เพิ่ม embedded map ได้ภายหลัง)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
