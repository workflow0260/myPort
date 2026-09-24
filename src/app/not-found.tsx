import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "The page you are looking for does not exist in Sahil Mansuri's portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-background)] text-[#111110] flex flex-col justify-between p-6 sm:p-12 relative selection:bg-[#173753] selection:text-white">
      {/* Paper Grain */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Top Bar */}
      <header className="flex items-center justify-between border-b border-[rgba(17,17,16,0.08)] pb-6">
        <div className="flex items-center gap-2">
          <span className="status-dot animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#173753] tracking-widest uppercase">
            SAHIL MANSURI // LAB
          </span>
        </div>
        <div className="text-xs font-mono text-[#8b8b94]">STATUS: 404_NOT_FOUND</div>
      </header>

      {/* Main 404 Content */}
      <main className="max-w-2xl mx-auto my-auto text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173753]/10 text-[#173753] border border-[#173753]/15 text-xs font-mono">
          <Compass className="w-3.5 h-3.5" />
          <span>ROUTING ERROR</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-display font-bold text-[#111110] tracking-tight">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-[#173753]">
            Page Not Found
          </h2>
          <p className="text-sm sm:text-base text-[#5a5a62] max-w-md mx-auto leading-relaxed">
            The requested resource or experiment could not be located in this directory.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 bg-[#173753] text-white hover:bg-[#0f2538] hover:-translate-y-0.5 h-10 px-6 text-xs font-mono tracking-wider uppercase shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 border border-[rgba(17,17,16,0.12)] bg-white text-[#111110] hover:border-[#173753] hover:text-[#173753] hover:-translate-y-0.5 h-10 px-6 text-xs font-mono tracking-wider uppercase shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View Selected Work</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(17,17,16,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8b8b94] gap-2">
        <span>© {new Date().getFullYear()} SAHIL MANSURI — ALL RIGHTS RESERVED</span>
        <span>JAIPUR, RAJASTHAN, INDIA</span>
      </footer>
    </div>
  );
}
