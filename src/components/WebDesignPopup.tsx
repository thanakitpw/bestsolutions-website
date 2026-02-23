"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap, CheckCircle2, Clock, Shield } from "lucide-react";
import Link from "next/link";

export function WebDesignPopup() {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const dismissed = sessionStorage.getItem("popup-dismissed");
        if (dismissed) return;
        const timer = setTimeout(() => setOpen(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const dismiss = () => {
        setOpen(false);
        sessionStorage.setItem("popup-dismissed", "1");
    };

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
                        onClick={dismiss}
                    />

                    <motion.div
                        key="popup"
                        initial={{ opacity: 0, scale: 0.88, y: 48 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 24 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[999] flex items-center justify-center px-4"
                    >
                        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

                            {/* Close */}
                            <button
                                onClick={dismiss}
                                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow transition-colors"
                            >
                                <X className="w-4 h-4 text-slate-600" />
                            </button>

                            {/* Top visual section */}
                            <div className="relative bg-gradient-to-br from-[#0B0F19] via-[#1a1040] to-[#25137A] px-8 pt-8 pb-6 overflow-hidden">
                                {/* Grid bg */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]" />
                                {/* Glow */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#F51036]/30 rounded-full blur-[60px]" />

                                {/* Badge */}
                                <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F51036]/20 border border-[#F51036]/40 text-[#F51036] text-xs font-bold mb-4">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F51036] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F51036]" />
                                    </span>
                                    รับเพียง 5 เว็บไซต์ต่อเดือน!
                                </div>

                                <h2 className="relative text-2xl md:text-3xl font-extrabold text-white leading-tight mb-1">
                                    เว็บไซต์สวยงาม พร้อมใช้
                                </h2>
                                <p className="relative text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F51036] via-orange-400 to-amber-400 mb-5">
                                    เริ่มต้น 5,000 บาท!
                                </p>

                                {/* Browser mockup */}
                                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    {/* Browser bar */}
                                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0d1117] border-b border-white/10">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        <div className="flex-1 mx-3 bg-white/10 rounded px-2 py-0.5 text-[10px] text-slate-500 font-mono">www.yourwebsite.com</div>
                                    </div>
                                    {/* Fake page */}
                                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4">
                                        {/* Navbar */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="w-12 h-2 bg-[#F51036] rounded-full" />
                                            <div className="flex gap-2">{[1,2,3].map(i=><div key={i} className="w-6 h-1.5 bg-white/20 rounded"/>)}</div>
                                        </div>
                                        {/* Hero */}
                                        <div className="flex gap-3 items-center mb-3">
                                            <div className="flex-1">
                                                <div className="w-4/5 h-3 bg-white/50 rounded mb-1.5" />
                                                <div className="w-3/5 h-2 bg-white/25 rounded mb-3" />
                                                <div className="w-16 h-5 bg-gradient-to-r from-[#F51036] to-orange-500 rounded-full" />
                                            </div>
                                            <div className="w-20 h-16 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🏪</div>
                                        </div>
                                        {/* Cards */}
                                        <div className="flex gap-2">
                                            {["🛒","📞","⭐"].map((e,i)=>(
                                                <div key={i} className="flex-1 bg-white/8 rounded-lg p-2 border border-white/10">
                                                    <div className="text-sm mb-1">{e}</div>
                                                    <div className="w-full h-1.5 bg-white/20 rounded mb-1" />
                                                    <div className="w-2/3 h-1 bg-white/10 rounded" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -bottom-3 right-6 bg-white rounded-xl px-3 py-1.5 shadow-xl text-xs font-bold text-slate-900 flex items-center gap-1.5">
                                    <Clock className="w-3 h-3 text-[#F51036]" />
                                    เสร็จใน 7 วัน
                                </div>
                            </div>

                            {/* Bottom content */}
                            <div className="px-8 pt-7 pb-7">
                                <div className="grid grid-cols-2 gap-2.5 mb-6">
                                    {[
                                        { icon: CheckCircle2, text: "รองรับมือถือ 100%" },
                                        { icon: CheckCircle2, text: "ฟรี Domain + Hosting" },
                                        { icon: Shield, text: "ดูแลหลังส่งมอบ 30 วัน" },
                                        { icon: Zap, text: "ไม่มีค่าใช้จ่ายแอบแฝง" },
                                    ].map(({ icon: Icon, text }) => (
                                        <div key={text} className="flex items-center gap-2 text-xs text-slate-700 font-medium bg-slate-50 rounded-xl px-3 py-2.5">
                                            <Icon className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                            {text}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/services/website-design"
                                    onClick={dismiss}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#F51036] to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-red-500/30 hover:shadow-xl hover:scale-[1.02] transition-all text-base"
                                >
                                    ดูแพ็คเกจและราคาทั้งหมด <ArrowRight className="w-4 h-4" />
                                </Link>

                                <button
                                    onClick={dismiss}
                                    className="w-full text-center text-slate-400 text-xs mt-3 hover:text-slate-600 transition-colors py-1"
                                >
                                    ไม่สนใจตอนนี้
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
