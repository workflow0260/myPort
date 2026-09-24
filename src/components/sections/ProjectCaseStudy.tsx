"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

interface Props {
  project: Project;
}

export const ProjectCaseStudy: React.FC<Props> = ({ project }) => {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] selection:bg-[#173753] selection:text-white">
      {/* Fixed Back Navigation */}
      <nav aria-label="Project Breadcrumb" className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e4e4e7] py-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-meta text-[#52525b] hover:text-[#173753] transition font-bold"
            aria-label="Return to portfolio work section"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO LAB</span>
          </Link>
          <span className="text-meta text-[#71717a] font-mono hidden sm:inline">
            PROJECT {project.number} / {project.title}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-16 px-6 sm:px-12 border-b border-[#e4e4e7] bg-[#fafafa]">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-meta text-[#173753] font-bold block tracking-widest">
              CASE STUDY // {project.number}
            </span>
            {project.downloads && (
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#173753] bg-[#e8eef3] px-2 py-0.5 rounded">
                <Sparkles className="w-3 h-3" />
                <span>{project.downloads}</span>
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0a0a0a] font-display tracking-tight uppercase leading-[0.92] max-w-4xl">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap gap-8 text-meta border-t border-[#e4e4e7] pt-6 text-xs">
            <div>
              <span className="text-[#71717a] block mb-1">CATEGORY</span>
              <span className="text-[#0a0a0a] font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-[#71717a] block mb-1">STATUS</span>
              <span className="text-[#173753] font-bold">{project.statusText || "Production"}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-16">
        {/* Overview */}
        <section aria-labelledby="overview-heading" className="space-y-4">
          <h2 id="overview-heading" className="text-meta text-[#173753] font-bold text-xs">
            01 // SYSTEM OVERVIEW
          </h2>
          <p className="text-base sm:text-lg text-[#27272a] leading-relaxed max-w-4xl">
            {project.overview}
          </p>
        </section>

        {/* Features */}
        <section aria-labelledby="features-heading" className="space-y-6 border-t border-[#e4e4e7] pt-12">
          <h2 id="features-heading" className="text-meta text-[#173753] font-bold text-xs">
            02 // PRODUCTION FEATURES &amp; CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 border border-[#e4e4e7] rounded-sm bg-[#fafbfc] flex items-start gap-3"
              >
                <span className="text-[#173753] font-mono font-bold mt-0.5" aria-hidden="true">›</span>
                <span className="text-sm text-[#27272a]">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section aria-labelledby="tech-heading" className="space-y-6 border-t border-[#e4e4e7] pt-12">
          <h2 id="tech-heading" className="text-meta text-[#173753] font-bold text-xs">
            03 // APPLIED TECHNOLOGIES
          </h2>
          <div className="flex flex-wrap gap-2 max-w-4xl">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded bg-[#f4f4f5] border border-[#e4e4e7] text-xs font-mono text-[#173753] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e4e4e7] py-10 px-6 sm:px-12 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-meta text-xs">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-[#52525b] hover:text-[#173753] transition font-bold"
            aria-label="Back to all selected work"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL SELECTED WORK</span>
          </Link>
          <span className="text-[#71717a]">
            &copy; {new Date().getFullYear()} SAHIL MANSURI
          </span>
        </div>
      </footer>
    </div>
  );
};
