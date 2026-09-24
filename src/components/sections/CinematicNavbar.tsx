"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const CinematicNavbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { personal } = PORTFOLIO_DATA;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const sections = ["hero", "work", "experience", "stack", "engineering", "about", "contact"];
      const scrollPos = scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work", id: "work" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Stack", href: "#stack", id: "stack" },
    { label: "Engineering", href: "#engineering", id: "engineering" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 md:pt-4 transition-all duration-300 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-[rgba(17,17,16,0.08)] bg-[rgba(251,251,251,0.92)] backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_8px_24px_-18px_rgba(23,55,83,0.25)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "w-full max-w-[940px] px-4 sm:px-6 py-1.5 sm:py-2 shadow-lg border-[rgba(23,55,83,0.18)]"
            : "w-full max-w-[1120px] px-4 sm:px-7 py-2.5 sm:py-3"
        }`}
      >
        {/* Brand / Logo - Rock Solid Alignment & No Wrap */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-[#111110] transition-colors shrink-0 whitespace-nowrap select-none"
          data-cursor="HOME"
          aria-label="Sahil Mansuri — Mobile App Developer Homepage"
        >
          <span className="relative grid h-5 w-5 place-items-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" role="presentation" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[#173753]">
                <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
              </g>
              <circle cx="12" cy="12" r="2.5" className="fill-[#173753]" />
            </svg>
          </span>
          <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.12em] uppercase font-mono text-[#111110]">
            {personal.name.toUpperCase()}
          </span>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[#173753] text-white shadow-sm font-semibold"
                    : "text-[#5a5a62] hover:text-[#111110] hover:bg-[#173753]/10"
                }`}
                data-cursor="→"
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Status & Resume Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-[#5a5a62] px-2 py-1">
            <span className="status-dot animate-pulse" aria-hidden="true" />
            <span className="text-[10px] uppercase font-bold text-[#173753] tracking-wider">Available</span>
          </div>

          <button
            type="button"
            onClick={onOpenResumeModal}
            className="group relative inline-flex items-center justify-center gap-1.5 rounded-full bg-[#173753] text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_4px_12px_-4px_rgba(23,55,83,0.4)] hover:bg-[#0f2538] hover:scale-[1.03] transition-all duration-200 h-7 sm:h-8 px-3.5 sm:px-4 text-[11px] sm:text-xs font-medium cursor-pointer shrink-0 whitespace-nowrap"
            data-cursor="RESUME"
            aria-label="Open Sahil Mansuri's verified resume modal"
          >
            <FileText className="w-3 h-3" aria-hidden="true" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile navigation menu"
            className="grid h-8 w-8 place-items-center rounded-full text-[#111110] hover:bg-[#173753]/10 transition-colors md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation Menu"
          className="pointer-events-auto md:hidden fixed inset-x-4 top-16 bg-white/95 backdrop-blur-2xl border border-[rgba(17,17,16,0.1)] rounded-2xl p-4 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center gap-2 pb-2 border-b border-[rgba(17,17,16,0.06)] text-xs text-[#5a5a62] font-mono">
            <span className="status-dot animate-pulse" aria-hidden="true" />
            <span className="text-[#173753] font-bold">{personal.status}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg bg-[#f8f9fa] text-[#111110] hover:bg-[#173753] hover:text-white transition flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
