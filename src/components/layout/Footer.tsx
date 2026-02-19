import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";

const menuLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ผลงาน", href: "/portfolio" },
    { label: "บทความ", href: "/blog" },
    { label: "บริการ", href: "/services" },
    { label: "ติดต่อเรา", href: "https://lin.ee/IlvhwZV" },
];

const serviceLinks = [
    { label: "รับทำเว็บไซต์", href: "/services" },
    { label: "ยิงแอดโฆษณา", href: "/services" },
    { label: "ดูแลเพจโซเชียล", href: "/services" },
    { label: "รับทำ SEO", href: "/services" },
    { label: "ผลิตคอนเทนต์", href: "/services" },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
                            Best Solutions
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            บริษัท เบสท์ โซลูชันส์ ดีเวลลอปเมนท์ จำกัด — เพื่อนคู่คิดทางการตลาดออนไลน์ ที่ช่วยให้ธุรกิจคุณเติบโตอย่างยั่งยืน
                        </p>
                        {/* Social */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="https://www.facebook.com/bestsolutionsbkk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                            >
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="https://line.me/ti/p/~@bestsolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-green-500 flex items-center justify-center transition-colors"
                            >
                                <MessageCircle className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="text-white font-bold mb-4">เมนู</h3>
                        <ul className="space-y-3">
                            {menuLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-4">บริการ</h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4">ติดต่อเรา</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" />
                                <div className="text-sm">
                                    <p>095-385-7029</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" />
                                <p className="text-sm">info@bestsolutionscorp.com</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" />
                                <p className="text-sm">กรุงเทพมหานคร, ประเทศไทย</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Best Solutions Development Co., Ltd. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-600">
                        Digital Marketing Agency
                    </p>
                </div>
            </div>
        </footer>
    );
}
