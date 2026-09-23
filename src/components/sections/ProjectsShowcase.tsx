"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Smartphone, CheckCircle2, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export const ProjectsShowcase: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [expandedSlug, setExpandedSlug] = useState<string | null>("balaji-astro-guide");

  return (
    <section id="work" className="w-full py-24 px-6 sm:px-12 border-b border-[rgba(17,17,16,0.08)] bg-[var(--bg-background)] relative">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(17,17,16,0.08)] pb-8">
            <div>
              <p className="eyebrow mb-3">// 01 • SELECTED WORK</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
                Production apps built for{" "}
                <span className="text-[#173753] font-medium">real users.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
              Every application is architected with clean layer boundaries, reactive state management, and reliable release pipelines.
            </p>
          </div>
        </Reveal>

        {/* Snowbros Labs Engineered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const isExpanded = expandedSlug === project.slug;

            return (
              <Reveal key={project.slug} delay={0.1 * (idx + 1)}>
                <div
                  onClick={() => setExpandedSlug(isExpanded ? null : project.slug)}
                  className={`card-engineered rounded-2xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 h-full group ${
                    isExpanded
                      ? "ring-2 ring-[#173753] shadow-[0_8px_30px_rgba(23,55,83,0.12)] bg-white"
                      : "hover:-translate-y-1 hover:shadow-lg"
                  }`}
                  data-cursor="VIEW"
                >
                  <div className="space-y-4">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="status-dot animate-pulse" />
                        <span className="text-[#8b8b94] font-mono">
                          {project.downloads ? "1M+ Milestone" : "Live App"}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-[#173753]/10 text-[#173753]">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111110] uppercase group-hover:text-[#173753] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#5a5a62] font-mono mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5a5a62] leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 pt-2 border-t border-[rgba(17,17,16,0.06)]">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#173753] font-bold">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-1 text-xs text-[#27272a]">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-[#173753] font-bold">›</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Tech Pills */}
                  <div className="pt-6 border-t border-[rgba(17,17,16,0.06)] mt-6 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f4f5f6] text-[#5a5a62] border border-[rgba(17,17,16,0.06)] group-hover:border-[#173753]/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#173753] pt-1">
                      <span className="font-semibold">
                        {project.downloads || "Production Ready"}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#173753] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
