"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export const ProjectsShowcase: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [expandedSlug, setExpandedSlug] = useState<string | null>("balaji-astro-guide");

  return (
    <section
      id="work"
      aria-label="Selected Production Projects"
      className="w-full py-24 px-6 sm:px-12 border-b border-[rgba(17,17,16,0.08)] bg-[var(--bg-background)] relative"
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(17,17,16,0.08)] pb-8">
            <div>
              <p className="eyebrow mb-3">{"// 01 • SELECTED WORK"}</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
                Production apps built for{" "}
                <span className="text-[#173753] font-medium">real users.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
              Every mobile application is architected with clean layer boundaries, reactive Bloc/Cubit state management, and production-ready release pipelines.
            </p>
          </div>
        </Reveal>

        {/* Snowbros Labs Engineered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const isExpanded = expandedSlug === project.slug;

            return (
              <Reveal key={project.slug} delay={0.1 * (idx + 1)}>
                <article
                  className={`card-engineered rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 h-full group ${
                    isExpanded
                      ? "ring-2 ring-[#173753] shadow-[0_8px_30px_rgba(23,55,83,0.12)] bg-white"
                      : "hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="status-dot animate-pulse" aria-hidden="true" />
                        <span className="text-[#8b8b94] font-mono">
                          {project.downloads ? "1M+ Milestone" : "Production App"}
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
                            <span className="text-[#173753] font-bold" aria-hidden="true">›</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Tech Pills & Case Study Link */}
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
                      <button
                        type="button"
                        onClick={() => setExpandedSlug(isExpanded ? null : project.slug)}
                        className="text-xs font-semibold hover:underline cursor-pointer flex items-center gap-1"
                        aria-expanded={isExpanded}
                        aria-label={`Toggle details for ${project.title}`}
                      >
                        <span>{project.downloads || "Production Ready"}</span>
                      </button>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 font-semibold hover:text-[#0f2538] transition-colors py-1"
                        aria-label={`Read case study for ${project.title}`}
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
