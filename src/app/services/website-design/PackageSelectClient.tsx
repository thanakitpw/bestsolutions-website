"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { trackPackageSelect } from "@/lib/analytics";

/* ── Button that scrolls to #contact-form and pre-selects a package ── */
interface ScrollButtonProps {
    pkgId: string;
    btnClass: string;
}

export function ScrollToFormButton({ pkgId, btnClass }: ScrollButtonProps) {
    const handleClick = () => {
        // Track package selection in Google Analytics
        trackPackageSelect(pkgId);
        
        // store the selected package in sessionStorage so FaqAndForm can pick it up
        sessionStorage.setItem("selectedPackage", pkgId);
        // dispatch a custom event so FaqAndForm reacts immediately (same page)
        window.dispatchEvent(new CustomEvent("packageSelected", { detail: pkgId }));
        setTimeout(() => {
            document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] ${btnClass}`}
        >
            เลือกแพ็คเกจนี้ <ArrowRight className="w-4 h-4" />
        </button>
    );
}

/* ── Combined FAQ accordion + ContactForm section ── */
interface FaqAndFormProps {
    faqs: { q: string; a: string }[];
}

export function FaqAndForm({ faqs }: FaqAndFormProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [selectedPackage, setSelectedPackage] = useState("");

    useEffect(() => {
        const handler = (e: Event) => {
            setSelectedPackage((e as CustomEvent<string>).detail);
        };
        window.addEventListener("packageSelected", handler);
        return () => window.removeEventListener("packageSelected", handler);
    }, []);

    return (
        <div id="contact-form" className="rounded-3xl overflow-hidden relative" style={{ scrollMarginTop: "6rem" }}>
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#12082a] to-[#1a0a2e]" />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F51036]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#25137A]/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2">
                {/* Left — FAQ */}
                <div className="p-8 md:p-12 lg:border-r border-white/10">
                    <span className="text-[#F51036] font-bold text-xs uppercase tracking-widest">FAQ</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-8">คำถามที่พบบ่อย</h2>
                    <div className="space-y-2">
                        {faqs.map((faq, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="w-5 h-5 rounded-full bg-[#F51036]/20 text-[#F51036] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">Q</span>
                                    <span className="text-white/90 font-semibold text-sm leading-snug flex-1">{faq.q}</span>
                                    <span className="text-white/40 text-lg leading-none shrink-0 ml-2">{openFaq === i ? "−" : "+"}</span>
                                </button>
                                {openFaq === i && (
                                    <p className="text-white/55 text-sm leading-relaxed px-5 pb-4 pl-[3.25rem]">{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Contact Form */}
                <div className="p-8 md:p-12 border-t lg:border-t-0 border-white/10">
                    <span className="text-[#F51036] font-bold text-xs uppercase tracking-widest">ติดต่อเรา</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-1">ขอใบเสนอราคาฟรี</h2>
                    <p className="text-white/50 text-sm mb-6">กรอกข้อมูล ทีมงานจะโทรกลับภายใน 24 ชั่วโมง</p>
                    <ContactForm initialPackage={selectedPackage} />
                </div>
            </div>
        </div>
    );
}
