"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    Briefcase,
    Globe,
    ChevronRight,
    Settings,
    Upload,
    Mail,
} from "lucide-react";

const navItems = [
    {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
        exact: true,
    },
    {
        label: "Blog Posts",
        href: "/admin/blog",
        icon: FileText,
        exact: true,
    },
    {
        label: "Import .docx",
        href: "/admin/blog/import",
        icon: Upload,
    },
    {
        label: "Portfolio",
        href: "/admin/portfolio",
        icon: Briefcase,
    },
    {
        label: "Contacts",
        href: "/admin/contacts",
        icon: Mail,
        exact: true,
    },
];

export function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (href: string, exact?: boolean) => {
        if (exact) return pathname === href;
        return pathname.startsWith(href);
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0d14] border-r border-white/5 flex flex-col z-50">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-white/5">
                <Link href="/" target="_blank" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
                        <span className="text-white font-black text-xs">BS</span>
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm leading-none">Best Solutions</div>
                        <div className="text-slate-500 text-xs mt-0.5 flex items-center gap-1 group-hover:text-rose-400 transition-colors">
                            <Globe className="w-3 h-3" /> View Site
                        </div>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest px-3 mb-3">Menu</p>
                {navItems.map((item) => {
                    const active = isActive(item.href, item.exact);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group relative ${
                                active
                                    ? "bg-white/10 text-white"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {active && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-rose-500 rounded-r-full" />
                            )}
                            <item.icon className={`w-4 h-4 shrink-0 ${active ? "text-rose-400" : "text-slate-500 group-hover:text-slate-300"}`} />
                            <span className="flex-1">{item.label}</span>
                            {active && <ChevronRight className="w-3 h-3 text-slate-500" />}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="px-3 py-4 border-t border-white/5 space-y-1">
                <Link
                    href="/admin/settings"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                >
                    <Settings className="w-4 h-4 text-slate-500" />
                    Settings
                </Link>
                <div className="flex items-center gap-3 px-3 py-3 mt-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-semibold truncate">Thanakit C.</div>
                        <div className="text-slate-500 text-[10px] truncate">Admin</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
