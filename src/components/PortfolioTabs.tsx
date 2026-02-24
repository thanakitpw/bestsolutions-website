"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PortfolioProject, ServiceCategory } from "@/data/portfolio";

interface Category {
  id: ServiceCategory;
  label: string;
  emoji: string;
  description: string;
}

interface PortfolioTabsProps {
  projects: PortfolioProject[];
  categories: Category[];
}

export function PortfolioTabs({ projects, categories }: PortfolioTabsProps) {
  const [activeTab, setActiveTab] = useState<ServiceCategory | "all">("all");

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.serviceCategory === activeTab);

  const tabsWithCount = categories.map((cat) => ({
    ...cat,
    count: projects.filter((p) => p.serviceCategory === cat.id).length,
  }));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tab bar */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {/* All tab */}
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[#F51036] text-white shadow-lg shadow-red-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              ทั้งหมด
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeTab === "all" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"}`}>
                {projects.length}
              </span>
            </button>

            {tabsWithCount.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === cat.id
                    ? "bg-[#F51036] text-white shadow-lg shadow-red-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
                {cat.count > 0 && (
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeTab === cat.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"}`}>
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Category description */}
        {activeTab !== "all" && (
          <div className="mt-4 mb-8">
            <p className="text-slate-500 text-sm">
              {categories.find((c) => c.id === activeTab)?.description}
            </p>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-slate-400 text-lg">กำลังเพิ่มผลงานในหมวดนี้เร็วๆ นี้</p>
            <p className="text-slate-300 text-sm mt-2">โปรดติดตาม หรือติดต่อเราเพื่อสอบถามข้อมูลเพิ่มเติม</p>
          </div>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col">

      {/* Browser mockup preview */}
      <div className="relative bg-slate-900 flex-shrink-0">
        {/* Chrome bar */}
        <div className="bg-[#1e1e2e] px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 bg-white/10 rounded px-2 py-0.5 text-white/30 text-[10px] font-mono truncate">
            {project.demoUrl?.replace("https://", "") ?? project.slug}
          </div>
        </div>

        {/* Preview */}
        <div className="relative overflow-hidden bg-slate-800" style={{ height: "200px" }}>
          {project.demoUrl ? (
            <>
              <iframe
                src={project.demoUrl}
                style={{ width: "166.67%", height: "166.67%", transform: "scale(0.6)", transformOrigin: "top left", border: "none", pointerEvents: "none" }}
                loading="lazy"
                title={project.title}
                tabIndex={-1}
              />
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="flex items-center gap-1.5 bg-white text-slate-900 font-bold px-4 py-2 rounded-full text-xs shadow-xl">
                  <ExternalLink className="w-3.5 h-3.5" /> เปิดเว็บจริง
                </span>
              </a>
            </>
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category + industry */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F51036]/8 text-[#F51036] text-[11px] font-bold border border-[#F51036]/15">
            {project.serviceCategory}
          </span>
          <span className="text-slate-400 text-[11px]">{project.industryTag}</span>
        </div>

        <h3 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-[#F51036] transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-slate-600 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F51036] flex-shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 bg-slate-100 text-slate-500 text-[11px] rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link href={`/portfolio/${project.slug}`} className="flex-1">
            <Button variant="gradient" className="w-full rounded-xl text-sm h-9">
              ดูรายละเอียด <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-xl h-9 px-3 border-slate-200 text-slate-600 hover:border-slate-300">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
