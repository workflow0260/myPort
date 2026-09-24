"use client";

import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Copy, Check, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

interface ContactSectionProps {
  onOpenResumeModal?: () => void;
}

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const rawPhone = personal.phoneRaw || "+918890029227";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10 border-t border-[rgba(17,17,16,0.08)] bg-[#f4f5f6] text-[#111110] scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 pt-20 pb-14 space-y-16">
        {/* Big Snowbros Style Conversation Callout */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[rgba(17,17,16,0.08)] pb-16">
            <div className="space-y-4 max-w-2xl">
              <p className="eyebrow">{"// 06 • CONTACT"}</p>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-5xl md:text-6xl font-display font-normal text-[#111110] leading-[1.05]"
              >
                Building something worth{" "}
                <span className="text-[#173753] font-medium underline decoration-[rgba(23,55,83,0.25)] underline-offset-8">
                  engineering well?
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#5a5a62] leading-relaxed max-w-xl">
                Available for Flutter and mobile application development opportunities. Let’s discuss your next product or feature.
              </p>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-[#173753] hover:text-[#0f2538] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] focus-visible:ring-offset-2 rounded-lg transition-colors shrink-0 cursor-pointer"
              data-cursor="EMAIL"
              aria-label="Send an email to Sahil Mansuri to start a conversation"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Email */}
          <Reveal delay={0.06}>
            <div className="card-engineered rounded-2xl p-5 space-y-3 h-full">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#173753] font-semibold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  EMAIL
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email, "email")}
                  className="text-[#8b8b94] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded p-1 transition cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy Sahil Mansuri's email address to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="block text-xs font-mono font-medium text-[#111110] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded transition break-all"
                data-cursor="EMAIL"
              >
                {personal.email}
              </a>
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal delay={0.1}>
            <div className="card-engineered rounded-2xl p-5 space-y-3 h-full">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#173753] font-semibold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  PHONE
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(rawPhone, "phone")}
                  className="text-[#8b8b94] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded p-1 transition cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy Sahil Mansuri's phone number to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href={`tel:${rawPhone}`}
                className="block text-xs font-mono font-medium text-[#111110] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded transition"
                data-cursor="CALL"
              >
                {personal.phone}
              </a>
            </div>
          </Reveal>

          {/* GitHub */}
          <Reveal delay={0.14}>
            <div className="card-engineered rounded-2xl p-5 space-y-3 h-full group">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#173753] font-semibold flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5" />
                  GITHUB
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8b94] group-hover:text-[#173753] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-mono font-medium text-[#111110] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded transition truncate"
                data-cursor="GITHUB"
                aria-label="View Sahil Mansuri on GitHub"
              >
                {personal.githubHandle}
              </a>
            </div>
          </Reveal>

          {/* LinkedIn */}
          <Reveal delay={0.18}>
            <div className="card-engineered rounded-2xl p-5 space-y-3 h-full group">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#173753] font-semibold flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LINKEDIN
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8b94] group-hover:text-[#173753] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-mono font-medium text-[#111110] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded transition truncate"
                data-cursor="LINKEDIN"
                aria-label="View Sahil Mansuri on LinkedIn"
              >
                {personal.linkedinHandle}
              </a>
            </div>
          </Reveal>

          {/* Twitter / X */}
          <Reveal delay={0.22}>
            <div className="card-engineered rounded-2xl p-5 space-y-3 h-full group">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#173753] font-semibold flex items-center gap-1.5">
                  <TwitterIcon className="w-3.5 h-3.5" />
                  X / TWITTER
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8b94] group-hover:text-[#173753] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-mono font-medium text-[#111110] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded transition truncate"
                data-cursor="TWITTER"
                aria-label="View Sahil Mansuri on X"
              >
                {personal.twitterHandle}
              </a>
            </div>
          </Reveal>

          {/* Instagram */}
          <Reveal delay={0.26}>
            <div className="card-engineered rounded-2xl p-5 space-y-3 h-full group">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[#173753] font-semibold flex items-center gap-1.5">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  INSTAGRAM
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8b94] group-hover:text-[#173753] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-mono font-medium text-[#111110] hover:text-[#173753] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] rounded transition truncate"
                data-cursor="INSTAGRAM"
                aria-label="View Sahil Mansuri on Instagram"
              >
                {personal.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Large Download Verified Resume CTA Card */}
        <Reveal delay={0.3}>
          <div className="card-engineered rounded-2xl p-8 sm:p-10 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#173753] font-semibold">
                <span className="status-dot" aria-hidden="true" />
                <span>OFFICIAL VERIFIED RESUME</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111110]">
                Download Sahil Mansuri’s Resume
              </h3>
              <p className="text-xs sm:text-sm text-[#5a5a62] font-mono">
                1+ Year Hands-on Experience • Flutter &amp; Kotlin • 1M+ Downloads Balaji Astro Guide
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 bg-[#173753] text-white hover:bg-[#0f2538] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173753] focus-visible:ring-offset-2 h-11 px-6 text-xs font-mono tracking-wider uppercase cursor-pointer shadow-md shrink-0"
              data-cursor="RESUME"
              aria-label="View and print Sahil Mansuri's verified resume"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>View / Print Resume →</span>
            </button>
          </div>
        </Reveal>

        {/* Footer Meta & Copyright */}
        <footer role="contentinfo" className="pt-8 border-t border-[rgba(17,17,16,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#8b8b94]">
          <div>
            © {new Date().getFullYear()} SAHIL MANSURI — ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#173753]">
              <span className="status-dot" aria-hidden="true" />
              Available for Opportunities
            </span>
            <span aria-hidden="true">•</span>
            <span>Jaipur, Rajasthan, India</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
