"use client";

import React from "react";
import { X, Download, Printer, ExternalLink, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, experience, projects, stack, coreStrengths } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white text-[#0a0a0a] shadow-2xl rounded-sm border border-[#e4e4e7] flex flex-col z-10 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e4e4e7] bg-[#fafafa]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#173753]" />
            <span className="text-meta font-bold text-[#173753] tracking-widest">
              RESUME // SAHIL MANSURI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded text-xs font-mono font-medium border border-[#d4d4d8] hover:bg-[#e4e4e7] text-[#0a0a0a] transition flex items-center gap-1.5 cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#173753]" />
              <span className="hidden sm:inline">PRINT / PDF</span>
            </button>
            <a
              href={`mailto:${personal.email}?subject=Job%20Opportunity%20for%20Sahil%20Mansuri`}
              className="px-3.5 py-1.5 rounded text-xs font-mono font-medium bg-[#173753] text-white hover:bg-[#12283d] transition flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CONTACT / HIRE</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#71717a] hover:text-black hover:bg-[#e4e4e7] transition cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content (Formatted like the exact resume) */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-sm leading-relaxed space-y-6">
          {/* Resume Header */}
          <div className="text-center border-b border-[#e4e4e7] pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0a0a0a] uppercase font-display mb-1">
              {personal.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#173753] uppercase mb-2">
              MOBILE APP DEVELOPER | FLUTTER | KOTLIN | JETPACK COMPOSE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#52525b] font-mono">
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`tel:${personal.phone}`} className="hover:text-[#173753] underline underline-offset-2">
                {personal.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${personal.email}`} className="hover:text-[#173753] underline underline-offset-2">
                {personal.email}
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#173753] underline underline-offset-2">
                {personal.githubHandle}
              </a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#173753] underline underline-offset-2">
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

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs text-[#27272a]">
              <div>
                <span className="font-semibold text-[#0a0a0a]">Mobile Development:</span>{" "}
                {stack.primary.slice(0, 4).join(", ")}, Android, iOS, cross-platform development
              </div>
              <div>
                <span className="font-semibold text-[#0a0a0a]">Architecture and State:</span>{" "}
                Clean Architecture, MVC, MVP, MVVM, Bloc, Cubit
              </div>
              <div>
                <span className="font-semibold text-[#0a0a0a]">Backend and Integration:</span>{" "}
                Firebase, Supabase, REST APIs, JSON, WebSockets, authentication, cloud storage
              </div>
              <div>
                <span className="font-semibold text-[#0a0a0a]">Additional Knowledge:</span>{" "}
                Python, Next.js fundamentals, real-time data synchronization, API integration
              </div>
              <div>
                <span className="font-semibold text-[#0a0a0a]">Testing:</span>{" "}
                Unit testing, widget testing, integration testing
              </div>
              <div>
                <span className="font-semibold text-[#0a0a0a]">Tools and Workflow:</span>{" "}
                {stack.tools.join(", ")}
              </div>
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
                    {exp.role} | {exp.company}
                  </span>
                  <span className="text-xs font-mono text-[#71717a] font-medium">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#27272a]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-2">
              SELECTED PROJECTS
            </h2>
            <div className="space-y-3 text-xs text-[#27272a]">
              <div>
                <div className="font-semibold text-[#0a0a0a]">
                  Astrology: <span className="font-bold">Balaji Astro Guide</span>{" "}
                  <span className="inline-block px-1.5 py-0.5 text-[10px] bg-[#e8eef3] text-[#173753] font-mono rounded font-bold ml-1">
                    Live app • 1M+ Downloads
                  </span>
                </div>
                <p className="text-[#52525b] mt-0.5">
                  Vedic astrology app featuring free Janam Kundli, Pooja, horoscope predictions, and astrology chat services. Reached 1M+ downloads on Google Play.
                </p>
              </div>

              <div>
                <div className="font-semibold text-[#0a0a0a]">
                  <span className="font-bold">Sicfit</span>{" "}
                  <span className="inline-block px-1.5 py-0.5 text-[10px] bg-[#e8eef3] text-[#173753] font-mono rounded font-bold ml-1">
                    Live app
                  </span>
                </div>
                <p className="text-[#52525b] mt-0.5">
                  Personal fitness companion for workouts, progress, and health, with custom workout routines, nutrition logging, live coaching sessions, and real-time progress tracking.
                </p>
              </div>

              <div>
                <div className="font-semibold text-[#0a0a0a]">
                  <span className="font-bold">Happiest Team</span>{" "}
                  <span className="inline-block px-1.5 py-0.5 text-[10px] bg-[#e8eef3] text-[#173753] font-mono rounded font-bold ml-1">
                    Live app
                  </span>
                </div>
                <p className="text-[#52525b] mt-0.5">
                  Community platform for building, managing, and growing communities, with member engagement features and tools to help communities expand their reach.
                </p>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest text-[#173753] uppercase border-b border-[#173753]/20 pb-1 mb-2">
              CORE STRENGTHS
            </h2>
            <p className="text-xs text-[#27272a] font-mono">
              {coreStrengths.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
