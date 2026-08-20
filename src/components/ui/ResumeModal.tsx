"use client";

import React from "react";
import { X, FileText, Download, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal } = PORTFOLIO_DATA;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-[#0a0a0e] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-meta text-ghost">CURRICULUM VITAE</span>
            <h3 className="text-xl font-bold text-white font-monumental tracking-tight">
              Software Engineer Resume
            </h3>
          </div>
        </div>

        <p className="text-xs text-dim leading-relaxed mb-6">
          Resume details for <strong className="text-white">{personal.name}</strong> — {personal.title}. Includes comprehensive mobile architecture, Node.js backend systems, and project achievements.
        </p>

        {personal.hasResumeFile ? (
          <a
            href={personal.resumePath}
            download
            className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white/90 transition shadow-xl"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>
        ) : (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-dim space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Updated for 2026 Opportunities</span>
              </div>
              <p className="text-[11px] text-ghost leading-relaxed">
                Direct PDF resume is available on request. You can also configure your custom file path in <code className="text-cyan-300 font-mono">src/data/portfolio.ts</code>.
              </p>
            </div>

            <a
              href={`mailto:${personal.email}?subject=Resume%20Request%20-%20${personal.name}`}
              className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white/90 transition cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Request Resume via Email</span>
            </a>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-meta text-ghost">
          <span>{personal.location}</span>
          <span>{personal.status}</span>
        </div>
      </div>
    </div>
  );
};
