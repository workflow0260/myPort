"use client";

import React from "react";
import { X, Download, Printer, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, keyCompetencies, experience, projects, toolsAndWorkflow, additionalKnowledge, coreStrengths } =
    PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white text-[#0a0a0a] shadow-2xl rounded-2xl border border-[#e4e4e7] flex flex-col z-10 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e4e4e7] bg-[#fafafa]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#173753]" />
            <span className="text-meta font-bold text-[#173753] tracking-widest text-xs font-mono">
              RESUME // SAHIL MANSURI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumePdfUrl}
              download="Sahil_Mansuri_Resume.pdf"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#173753] text-white hover:bg-[#0f2538] transition flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-[#d4d4d8] hover:bg-[#e4e4e7] text-[#0a0a0a] transition flex items-center gap-1.5 cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#173753]" />
              <span className="hidden sm:inline">PRINT</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#71717a] hover:text-black hover:bg-[#e4e4e7] transition cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content matching the exact PDF resume layout */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-sm leading-relaxed space-y-6">
          {/* Resume Header */}
          <div className="text-center sm:text-left border-b border-[#e4e4e7] pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a0a0a] uppercase font-display mb-1">
                {personal.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#173753] uppercase mb-1 font-mono">
                {personal.title} · {personal.headline}
              </p>
              <p className="text-xs text-[#52525b] font-mono">
                {personal.location}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs font-mono text-[#52525b] space-y-1">
              <a href={`tel:${personal.phone}`} className="hover:text-[#173753]">
                {personal.phone}
              </a>
              <a href={`mailto:${personal.email}`} className="hover:text-[#173753] font-medium text-[#173753]">
                {personal.email}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#173753] underline underline-offset-2"
              >
                {personal.githubHandle}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#173753] underline underline-offset-2"
              >
                {personal.linkedinHandle}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#27272a] leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Key Competencies */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-2">
              KEY COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-1.5 gap-x-6 text-xs text-[#27272a]">
              <ul className="list-disc list-inside space-y-1">
                {keyCompetencies.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="font-medium text-[#111110]">{item}</li>
                ))}
              </ul>
              <ul className="list-disc list-inside space-y-1">
                {keyCompetencies.slice(4, 8).map((item, idx) => (
                  <li key={idx} className="font-medium text-[#111110]">{item}</li>
                ))}
              </ul>
              <ul className="list-disc list-inside space-y-1">
                {keyCompetencies.slice(8, 12).map((item, idx) => (
                  <li key={idx} className="font-medium text-[#111110]">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-2">
              PROFESSIONAL EXPERIENCE
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-[#0a0a0a] text-xs sm:text-sm">
                    {exp.company} — <span className="font-semibold text-[#173753]">{exp.role}</span>
                  </span>
                  <span className="text-xs font-mono text-[#173753] font-semibold bg-[#173753]/10 px-2 py-0.5 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#27272a] leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects & Additional Knowledge / Tools */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <div className="md:col-span-7 space-y-3">
              <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-2">
                SELECTED PROJECTS
              </h2>
              <div className="space-y-3 text-xs text-[#27272a]">
                {projects.map((proj) => (
                  <div key={proj.slug} className="space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#0a0a0a]">
                        {proj.title}
                        {proj.downloads && (
                          <span className="ml-2 inline-block px-1.5 py-0.5 text-[10px] bg-[#173753]/10 text-[#173753] font-mono rounded font-bold">
                            {proj.downloads}
                          </span>
                        )}
                      </span>
                      {proj.playStoreUrl && (
                        <a
                          href={proj.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-[#173753] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>View on Google Play</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-[#52525b] leading-relaxed">{proj.overview}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 space-y-4">
              <div>
                <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-1.5">
                  ADDITIONAL KNOWLEDGE
                </h2>
                <p className="text-xs text-[#27272a] leading-relaxed">
                  {additionalKnowledge.join(" · ")}
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-1.5">
                  TOOLS &amp; WORKFLOW
                </h2>
                <p className="text-xs text-[#27272a] leading-relaxed">
                  {toolsAndWorkflow.join(" · ")}
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-1.5">
                  STRENGTHS
                </h2>
                <p className="text-xs text-[#27272a] leading-relaxed font-mono">
                  {coreStrengths.join(" · ")}
                </p>
              </div>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="pt-4 border-t border-[#e4e4e7] flex items-center justify-between text-[11px] font-mono text-[#71717a]">
            <span>MOBILE APP DEVELOPER · FLUTTER · KOTLIN · JETPACK COMPOSE</span>
            <span>01</span>
          </div>
        </div>
      </div>
    </div>
  );
};
