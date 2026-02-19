"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับเรา" },
    { href: "/portfolio", label: "ผลงาน" },
    { href: "/blog", label: "บทความ" },
    { href: "/services", label: "บริการ" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" onClick={closeMenu}>
                            <Image
                                src="/logo.png"
                                alt="Best Solutions"
                                width={200}
                                height={50}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium transition-colors ${isActive(link.href)
                                    ? "text-[var(--color-primary-start)]"
                                    : "text-slate-500 hover:text-[var(--color-primary-start)]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer">
                            <Button variant="gradient" className="shadow-lg shadow-red-500/20">
                                ติดต่อเรา
                            </Button>
                        </a>
                    </div>

                    {/* Hamburger button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isActive(link.href)
                                    ? "text-[var(--color-primary-start)] bg-red-50"
                                    : "text-slate-600 hover:text-[var(--color-primary-start)] hover:bg-slate-50"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 pb-1">
                            <a href="https://lin.ee/IlvhwZV" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                <Button variant="gradient" className="w-full shadow-lg shadow-red-500/20">
                                    ติดต่อเรา
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
