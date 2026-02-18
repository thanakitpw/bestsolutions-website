"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับเรา" },
    { href: "/portfolio", label: "ผลงาน" },
    { href: "/blog", label: "บทความ" },
    { href: "/services", label: "บริการ" },
];

export function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
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
                        <Link href="/contact">
                            <Button variant="gradient" className="shadow-lg shadow-red-500/20">
                                ติดต่อเรา
                            </Button>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
