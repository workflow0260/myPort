"use client";

import React, { useState } from "react";
import {
  Download,
  Printer,
  ExternalLink,
  Maximize2,
  FileText,
  Eye,
  Check,
  Sparkles,
  Layers,
  Briefcase,
  Terminal,
  Award,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

interface ResumeSectionProps {
  onOpenResumeModal?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResumeModal,
}) => {
  const { personal, keyCompetencies, experience, projects, toolsAndWorkflow, additionalKnowledge, coreStrengths } =
    PORTFOLIO_DATA;
  const [activeView, setActiveView] = useState<"interactive" | "pdf">("interactive");
  const [copiedLink, setCopiedLink] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}${personal.resumePdfUrl}`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section
      id="resume"
      aria-label="Official Resume and Qualifications"
      className="w-full py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-[rgba(17,17,16,0.08)] bg-transparent relative"
    >
      <div className="max-w-[1200px] mx-auto space-y-5 sm:space-y-8 md:space-y-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[rgba(17,17,16,0.08)] pb-5 sm:pb-8">
            <div>
              <p className="eyebrow mb-2">Official Curriculum Vitae</p>
              <h2 className="text-3xl sm:text-5xl font-display font-normal text-[#111110] leading-tight">
                Curriculum Vitae &amp;{" "}
                <span className="text-[#173753] font-medium">credentials.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#5a5a62] leading-relaxed">
              Verified resume of Sahil Mansuri — Mobile App Developer with 1 year 10 months of hands-on production Flutter experience across iOS and Android.
            </p>
          </div>
        </Reveal>

        {/* Toolbar Controls */}
        <Reveal delay={0.1}>
          <div className="card-engineered rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-wrap items-center justify-between gap-3 sm:gap-4 bg-white shadow-sm">
            {/* View Mode Switcher */}
            <div className="inline-flex items-center rounded-full bg-[#f4f5f6] p-1 border border-[rgba(17,17,16,0.06)]">
              <button
                type="button"
                onClick={() => setActiveView("interactive")}
                className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono font-medium transition cursor-pointer ${
                  activeView === "interactive"
                    ? "bg-[#173753] text-white shadow-sm font-semibold"
                    : "text-[#5a5a62] hover:text-[#111110]"
                }`}
                aria-pressed={activeView === "interactive"}
              >
                <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Interactive View</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveView("pdf")}
                className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono font-medium transition cursor-pointer ${
                  activeView === "pdf"
                    ? "bg-[#173753] text-white shadow-sm font-semibold"
                    : "text-[#5a5a62] hover:text-[#111110]"
                }`}
                aria-pressed={activeView === "pdf"}
              >
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Original PDF File</span>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={personal.resumePdfUrl}
                download="Sahil_Mansuri_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#173753] text-white hover:bg-[#0f2538] transition px-4 py-2 text-xs font-mono font-medium shadow-sm cursor-pointer"
                aria-label="Download Sahil Mansuri resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href={personal.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(17,17,16,0.12)] bg-white hover:bg-[#f8f9fa] text-[#111110] transition px-3.5 py-2 text-xs font-mono font-medium cursor-pointer"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#173753]" />
                <span className="hidden sm:inline">New Tab</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(17,17,16,0.12)] bg-white hover:bg-[#f8f9fa] text-[#111110] transition px-3.5 py-2 text-xs font-mono font-medium cursor-pointer"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5 text-[#173753]" />
                <span className="hidden sm:inline">Print</span>
              </button>

              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(17,17,16,0.12)] bg-white hover:bg-[#f8f9fa] text-[#111110] transition px-3.5 py-2 text-xs font-mono font-medium cursor-pointer"
                  title="Expand to full screen modal"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#173753]" />
                  <span className="hidden sm:inline">Full Screen</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(17,17,16,0.12)] bg-white hover:bg-[#f8f9fa] text-[#5a5a62] hover:text-[#111110] transition px-3 py-2 text-xs font-mono cursor-pointer"
                title="Copy PDF link"
              >
                {copiedLink ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <span className="text-[11px]">Copy Link</span>
                )}
              </button>
            </div>
          </div>
        </Reveal>

        {/* View 1: Interactive Document Sheet View */}
        {activeView === "interactive" && (
          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-[960px] bg-white text-[#0a0a0a] rounded-xl sm:rounded-2xl shadow-[0_12px_40px_rgba(23,55,83,0.08)] border border-[#e4e4e7] p-4.5 sm:p-8 md:p-14 font-sans space-y-5 sm:space-y-8 print:p-0 print:border-none print:shadow-none">
              {/* Document Header */}
              <div className="border-b border-[#111110]/15 pb-4 sm:pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0a0a0a] uppercase font-display">
                    {personal.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#173753] uppercase font-mono">
                    {personal.title} · {personal.headline}
                  </div>
                  <div className="text-xs text-[#52525b] font-mono pt-1">
                    {personal.location}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-[#52525b] space-y-1">
                  <a
                    href={`tel:${personal.phone}`}
                    className="hover:text-[#173753] transition"
                  >
                    📞 {personal.phone}
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="hover:text-[#173753] transition font-medium text-[#173753]"
                  >
                    ✉️ {personal.email}
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

              {/* Section: Professional Summary */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 border-b border-[#111110]/15 pb-1 text-xs font-bold font-mono tracking-widest text-[#173753] uppercase">
                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  <h4>PROFESSIONAL SUMMARY</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#27272a] leading-relaxed">
                  {personal.summary}
                </p>
              </div>

              {/* Section: Key Competencies (3 Columns matching resume layout) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-[#111110]/15 pb-1 text-xs font-bold font-mono tracking-widest text-[#173753] uppercase">
                  <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                  <h4>KEY COMPETENCIES</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-6 text-xs text-[#27272a]">
                  <ul className="space-y-1.5 list-disc list-inside text-[#3f3f46]">
                    {keyCompetencies.slice(0, 4).map((c, i) => (
                      <li key={i} className="leading-snug">
                        <span className="text-[#0a0a0a] font-medium">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1.5 list-disc list-inside text-[#3f3f46]">
                    {keyCompetencies.slice(4, 8).map((c, i) => (
                      <li key={i} className="leading-snug">
                        <span className="text-[#0a0a0a] font-medium">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1.5 list-disc list-inside text-[#3f3f46]">
                    {keyCompetencies.slice(8, 12).map((c, i) => (
                      <li key={i} className="leading-snug">
                        <span className="text-[#0a0a0a] font-medium">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section: Professional Experience */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-[#111110]/15 pb-1 text-xs font-bold font-mono tracking-widest text-[#173753] uppercase">
                  <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                  <h4>PROFESSIONAL EXPERIENCE</h4>
                </div>
                {experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <span className="font-bold text-[#0a0a0a] text-sm sm:text-base">
                          {exp.company}
                        </span>
                        <span className="text-xs text-[#52525b] font-mono ml-2">
                          • {exp.role}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#173753] bg-[#173753]/10 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13px] text-[#27272a] leading-relaxed">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Section: Two-Column Split (Selected Projects & Additional Knowledge / Tools) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
                {/* Left Column: Selected Projects */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#111110]/15 pb-1 text-xs font-bold font-mono tracking-widest text-[#173753] uppercase">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <h4>SELECTED PROJECTS</h4>
                  </div>

                  <div className="space-y-4">
                    {projects.map((proj) => (
                      <div key={proj.slug} className="space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#0a0a0a] text-sm">
                            {proj.title}
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
                        {proj.downloads && (
                          <div className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#173753]/10 text-[#173753]">
                            {proj.downloads}
                          </div>
                        )}
                        <p className="text-[#3f3f46] leading-relaxed pt-0.5">
                          {proj.overview}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Additional Knowledge, Tools & Workflow, Strengths */}
                <div className="md:col-span-5 space-y-6">
                  {/* Additional Knowledge */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 border-b border-[#111110]/15 pb-1 text-xs font-bold font-mono tracking-widest text-[#173753] uppercase">
                      <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                      <h4>ADDITIONAL KNOWLEDGE</h4>
                    </div>
                    <p className="text-xs text-[#27272a] leading-relaxed">
                      {additionalKnowledge.join(" · ")}
                    </p>
                  </div>

                  {/* Tools & Workflow */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 border-b border-[#111110]/15 pb-1 text-xs font-bold font-mono tracking-widest text-[#173753] uppercase">
                      <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                      <h4>TOOLS &amp; WORKFLOW</h4>
                    </div>
                    <p className="text-xs text-[#27272a] leading-relaxed">
                      {toolsAndWorkflow.join(" · ")}
                    </p>
                  </div>

                  {/* Strengths */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 border-b border-[#111110]/15 pb-1 text-xs font-bold font-mono tracking-widest text-[#173753] uppercase">
                      <Award className="w-3.5 h-3.5" aria-hidden="true" />
                      <h4>STRENGTHS</h4>
                    </div>
                    <p className="text-xs text-[#27272a] leading-relaxed">
                      {coreStrengths.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Document Sub-footer */}
              <div className="pt-6 border-t border-[#111110]/15 flex items-center justify-between text-[11px] font-mono text-[#71717a]">
                <span>
                  MOBILE APP DEVELOPER · FLUTTER · KOTLIN · JETPACK COMPOSE
                </span>
                <span>01</span>
              </div>
            </div>
          </Reveal>
        )}

        {/* View 2: Native PDF Viewer */}
        {activeView === "pdf" && (
          <Reveal delay={0.15}>
            <div className="mx-auto max-w-[960px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(23,55,83,0.08)] border border-[#e4e4e7] overflow-hidden p-3 sm:p-5">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#e4e4e7] mb-3 text-xs font-mono text-[#52525b]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-bold text-[#0a0a0a]">
                    sahil_resume.pdf
                  </span>
                </div>
                <a
                  href={personal.resumePdfUrl}
                  download="Sahil_Mansuri_Resume.pdf"
                  className="text-[#173753] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save Copy</span>
                </a>
              </div>

              <div className="w-full h-[700px] sm:h-[860px] bg-[#525659] rounded-lg overflow-hidden flex flex-col items-center justify-center relative">
                <object
                  data={`${personal.resumePdfUrl}#toolbar=1&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="p-8 text-center text-white space-y-4">
                    <p className="text-sm">
                      PDF preview is not supported directly by your browser.
                    </p>
                    <a
                      href={personal.resumePdfUrl}
                      download="Sahil_Mansuri_Resume.pdf"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#173753] font-bold text-xs font-mono shadow"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Sahil Mansuri Resume (PDF)</span>
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};
