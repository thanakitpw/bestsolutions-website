"use client";

import { useState, useEffect, useRef } from "react";
import { List } from "lucide-react";

export interface TocHeading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
    const [activeId, setActiveId] = useState<string>("");
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (headings.length === 0) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                // Pick the topmost visible heading
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActiveId(visible[0].target.id);
            },
            { rootMargin: "-80px 0px -55% 0px", threshold: 0 }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
    }

    return (
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <div className="flex items-center gap-2 mb-4">
                <List className="w-4 h-4 text-slate-400 shrink-0" />
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">สารบัญ</h3>
            </div>
            <nav className="space-y-0.5">
                {headings.map(({ id, text, level }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className={`
                            w-full text-left text-sm py-1.5 px-2 rounded-lg transition-all leading-snug
                            ${level === 3 ? "pl-5 text-xs" : ""}
                            ${activeId === id
                                ? "bg-[#F51036]/8 text-[#F51036] font-semibold"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                            }
                        `}
                    >
                        {level === 3 && (
                            <span className="inline-block w-1 h-1 rounded-full bg-current mr-2 mb-0.5 opacity-50" />
                        )}
                        {text}
                    </button>
                ))}
            </nav>
        </div>
    );
}
