"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink, Smartphone, Server, Database, Layers } from "lucide-react";
import { PORTFOLIO_DATA, type Project } from "@/data/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  "Mobile App": <Smartphone className="w-3.5 h-3.5" />,
  "Full-Stack": <Server className="w-3.5 h-3.5" />,
  "Backend System": <Database className="w-3.5 h-3.5" />,
};

const categoryColors: Record<string, string> = {
  "Mobile App": "text-cyan-400 bg-cyan-400/10 border-cyan-400/25",
  "Full-Stack": "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  "Backend System": "text-indigo-400 bg-indigo-400/10 border-indigo-400/25",
};

export const ProjectsShowcase: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const featured = projects.filter((p) => p.isFeatured);

  return (
    <section id="work" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-meta text-ghost mb-3 block tracking-[0.3em]">
              PORTFOLIO // CASE STUDIES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-display tracking-tight uppercase">
              Selected Work
            </h2>
          </div>
          <p className="text-sm text-dim max-w-sm leading-relaxed">
            Production mobile applications &amp; backend systems with scalable architectures, clean state management, and real code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-10">
          {featured.map((project, idx) => (
            <ProjectEditorialCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectEditorialCard: React.FC<{ project: Project; index: number }> = ({ project }) => {
  const colorClass = categoryColors[project.category] || "text-white bg-white/10 border-white/20";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-[#08080a] border border-white/10 hover:border-white/25 transition-all duration-500 overflow-hidden interactive-card"
      data-cursor="VIEW"
    >
      {/* Dynamic Cursor Spotlight Gradient */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.08), transparent 40%)`,
          }}
        />
      )}

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between p-6 sm:p-10 pb-0 text-meta text-ghost">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold font-mono text-xl">{project.number}</span>
          <span className="text-white/20 hidden sm:inline">—</span>
          <span className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${colorClass}`}>
            {categoryIcons[project.category]}
            {project.category}
          </span>
        </div>
        <span className="hidden sm:inline text-white/60 font-mono">{project.role}</span>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-10 pt-6">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-4 group-hover:text-white/95 transition">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-dim leading-relaxed mb-6 max-w-3xl">
          {project.tagline}
        </p>

        {/* Highlight Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs">
          <div>
            <span className="text-meta text-cyan-400 block mb-1">PROBLEM SOLVED</span>
            <p className="text-dim leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-meta text-emerald-400 block mb-1">ENGINEERED SOLUTION</span>
            <p className="text-dim leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            ...project.technologies.mobile,
            ...project.technologies.backend,
            ...project.technologies.database,
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-pure font-mono hover:border-white/30 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
          <Link
            href={`/projects/${project.slug}`}
            className="px-7 py-3.5 rounded-full bg-white text-black text-meta font-bold tracking-widest uppercase hover:bg-white/90 transition flex items-center gap-2 shadow-xl cursor-pointer"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white text-meta tracking-widest uppercase hover:border-white/30 transition flex items-center gap-2 cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>GITHUB</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white text-meta tracking-widest uppercase hover:border-white/30 transition flex items-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-indigo-400" />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
