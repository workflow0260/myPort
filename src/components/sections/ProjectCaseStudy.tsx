"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Download,
  Smartphone,
  Server,
  Database,
  Layers,
  Check,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

interface Props {
  project: Project;
}

export const ProjectCaseStudy: React.FC<Props> = ({ project }) => {
  const sectionNumber = (n: string) => (
    <span className="text-meta font-mono text-cyan-400 mr-3">{n}</span>
  );

  return (
    <div className="min-h-screen bg-[#030303] text-[#f5f5f7] selection:bg-white selection:text-black">
      {/* Fixed Back Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#030303]/90 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-meta text-dim hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO PORTFOLIO</span>
          </Link>
          <span className="text-meta text-ghost hidden sm:inline">
            PROJECT {project.number} / {project.title.split("—")[0].trim()}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-28 pb-16 px-6 sm:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <span className="text-meta text-ghost mb-4 block tracking-[0.3em]">
            CASE STUDY // PROJECT {project.number}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-monumental tracking-tight uppercase leading-[0.92] mb-6 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-dim leading-relaxed max-w-3xl mb-8">
            {project.tagline}
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap gap-6 text-meta text-ghost border-t border-white/10 pt-6">
            <div>
              <span className="text-ghost block mb-1">CATEGORY</span>
              <span className="text-white font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-ghost block mb-1">ROLE</span>
              <span className="text-white font-bold">{project.role}</span>
            </div>
            <div>
              <span className="text-ghost block mb-1">PLATFORM</span>
              <span className="text-white font-bold">{project.platform}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* 01 — OVERVIEW */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-monumental tracking-tight mb-6">
            {sectionNumber("01")}OVERVIEW
          </h2>
          <p className="text-sm sm:text-base text-dim leading-relaxed max-w-3xl">
            {project.overview}
          </p>
        </section>

        {/* 02 — PROBLEM */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-monumental tracking-tight mb-6">
            {sectionNumber("02")}PROBLEM
          </h2>
          <p className="text-sm sm:text-base text-dim leading-relaxed max-w-3xl">
            {project.problem}
          </p>
        </section>

        {/* 03 — SOLUTION */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-monumental tracking-tight mb-6">
            {sectionNumber("03")}SOLUTION
          </h2>
          <p className="text-sm sm:text-base text-dim leading-relaxed max-w-3xl">
            {project.solution}
          </p>
        </section>

        {/* 04 — ARCHITECTURE */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-monumental tracking-tight mb-8">
            {sectionNumber("04")}ARCHITECTURE
          </h2>

          <div className="space-y-4 max-w-3xl mb-8">
            <div className="p-5 rounded-2xl bg-[#08080a] border border-cyan-400/20 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-400/10 shrink-0">
                <Smartphone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-meta text-cyan-400 block mb-1">CLIENT LAYER</span>
                <p className="text-xs text-dim">{project.architecture.client}</p>
              </div>
            </div>

            <div className="flex justify-center text-white/20 text-xl">↓</div>

            <div className="p-5 rounded-2xl bg-[#08080a] border border-indigo-400/20 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-400/10 shrink-0">
                <Layers className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-meta text-indigo-400 block mb-1">API LAYER</span>
                <p className="text-xs text-dim">{project.architecture.api}</p>
              </div>
            </div>

            <div className="flex justify-center text-white/20 text-xl">↓</div>

            <div className="p-5 rounded-2xl bg-[#08080a] border border-emerald-400/20 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-400/10 shrink-0">
                <Server className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-meta text-emerald-400 block mb-1">BACKEND LAYER</span>
                <p className="text-xs text-dim">{project.architecture.backend}</p>
              </div>
            </div>

            <div className="flex justify-center text-white/20 text-xl">↓</div>

            <div className="p-5 rounded-2xl bg-[#08080a] border border-amber-400/20 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-400/10 shrink-0">
                <Database className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-meta text-amber-400 block mb-1">DATABASE LAYER</span>
                <p className="text-xs text-dim">{project.architecture.database}</p>
              </div>
            </div>
          </div>

          {/* Flow Summary */}
          <div className="p-5 rounded-2xl bg-[#08080a] border border-white/10 max-w-3xl">
            <span className="text-meta text-ghost block mb-2">COMPLETE DATA FLOW</span>
            <p className="text-xs text-dim font-mono leading-relaxed">
              {project.architecture.flowSummary}
            </p>
          </div>
        </section>

        {/* 05 — FEATURES */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-monumental tracking-tight mb-8">
            {sectionNumber("05")}KEY FEATURES
          </h2>
          <div className="space-y-3 max-w-3xl">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-dim">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — TECHNOLOGIES */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-monumental tracking-tight mb-8">
            {sectionNumber("06")}TECHNOLOGIES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
            {[
              { label: "MOBILE / CLIENT", items: project.technologies.mobile, color: "text-cyan-400" },
              { label: "BACKEND", items: project.technologies.backend, color: "text-emerald-400" },
              { label: "DATABASE", items: project.technologies.database, color: "text-amber-400" },
              { label: "TOOLS", items: project.technologies.tools, color: "text-fuchsia-400" },
            ].map((group) => (
              <div key={group.label}>
                <span className={`text-meta ${group.color} block mb-3`}>{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-pure font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 07 — LINKS */}
        <section className="py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-monumental tracking-tight mb-8">
            {sectionNumber("07")}LINKS
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white text-black text-meta font-bold tracking-widest uppercase hover:bg-white/90 transition flex items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                <span>VIEW ON GITHUB</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-white/20 text-white text-meta font-bold tracking-widest uppercase hover:bg-white hover:text-black transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE DEMO</span>
              </a>
            )}
            {project.downloadApkUrl && (
              <a
                href={project.downloadApkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-white/20 text-white text-meta font-bold tracking-widest uppercase hover:bg-white hover:text-black transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD APK</span>
              </a>
            )}
          </div>
        </section>
      </main>

      {/* Back to Portfolio Footer */}
      <footer className="border-t border-white/10 py-8 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-meta text-dim hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL PROJECTS</span>
          </Link>
          <span className="text-meta text-ghost">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
};
