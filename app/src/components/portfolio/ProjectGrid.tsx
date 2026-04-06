"use client";

import { useState } from "react";
import { Project } from "@/lib/data/projects";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectGridProps {
    projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
    const [filter, setFilter] = useState<string>("All");

    const categories = ["All", "Web Design", "Online Marketing", "SEO", "Content"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={filter === category ? "gradient" : "outline"}
                        onClick={() => setFilter(category)}
                        className={`rounded-full px-6 transition-all duration-300 ${filter === category
                            ? "shadow-lg shadow-red-500/20"
                            : "border-slate-200 text-slate-600 hover:border-red-200 hover:text-red-500 hover:bg-red-50"
                            }`}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={project.id}
                            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />

                                {/* Placeholder for actual image if not available, using color block based on id */}
                                <div className={`w-full h-full transform group-hover:scale-105 transition-transform duration-500 ${parseInt(project.id) % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
                                    }`}>
                                    {/* If we had real images, Next/Image would go here */}
                                    {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-slate-100">
                                        {project.title} Image
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Link href={`/portfolio/${project.slug}`}>
                                        <Button size="sm" variant="secondary" className="bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm pointer-events-auto">
                                            ดูรายละเอียด
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold px-3 py-1 bg-[var(--color-primary-start)]/10 text-[var(--color-primary-start)] rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary-start)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] text-slate-400 font-medium bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
