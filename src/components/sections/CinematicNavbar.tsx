"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export const CinematicNavbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { personal } = PORTFOLIO_DATA;
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 200;
      const sections = ["contact", "skills", "about", "work", "hero"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          const matched = navItems.find((item) => item.href === `#${id}`);
          if (matched) {
            setActiveNav(matched.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#030303]/90 backdrop-blur-xl border-b border-white/10 py-3.5"
            : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo / Developer Branding */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="text-white font-bold text-sm sm:text-base font-display tracking-tight hover:text-white/90 transition cursor-pointer flex items-center gap-1.5"
          >
            <span>{personal.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-meta transition tracking-widest cursor-pointer relative py-1 ${
                    isActive ? "text-white font-bold" : "text-dim hover:text-white"
                  }`}
                  data-cursor="NAV"
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action: Status & Resume Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white text-meta tracking-widest uppercase hover:border-white/30 transition flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3 h-3 text-cyan-400" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer rounded-lg bg-white/5 border border-white/10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#030303]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 animate-in">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-6 text-white p-2 cursor-pointer rounded-full bg-white/5"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-2xl font-bold font-display text-white tracking-tight hover:text-cyan-400 transition cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          {onOpenResumeModal && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="mt-4 px-6 py-3 rounded-full bg-white text-black text-meta font-bold tracking-widest uppercase"
            >
              VIEW RESUME
            </button>
          )}
        </div>
      )}
    </>
  );
};
