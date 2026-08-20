"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Loader2, Mail, MapPin, Code2, Globe, Sparkles, Phone } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ContactNode3D } from "../canvas/ContactNode3D";

const projectTypes = [
  "Mobile App",
  "Flutter",
  "Kotlin / Android",
  "Backend / API",
  "Full Stack",
  "Other",
];

export const ContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Mobile App",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <footer id="contact" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="text-meta text-ghost mb-4 tracking-[0.3em]">
          INITIATE CONTACT // COMMISSION
        </div>

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-display tracking-tight uppercase leading-[0.9] max-w-4xl">
            Let&apos;s Build
            <br />
            <span className="text-white/80">Something.</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-white/10 items-start">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-sm sm:text-base text-dim leading-relaxed">
              Available for full-time software engineering roles, mobile contract commissions, and backend API architecture consulting.
            </p>

            {/* Interactive 3D Technical Node Element */}
            <div className="hidden sm:block">
              <ContactNode3D />
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-white/10 text-meta">
              <div>
                <span className="text-ghost block mb-1">EMAIL ADDRESS</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base text-white hover:text-cyan-400 transition font-mono"
                >
                  {personal.email}
                </a>
              </div>

              {personal.phone && (
                <div>
                  <span className="text-ghost block mb-1">PHONE // WHATSAPP</span>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="text-base text-white hover:text-cyan-400 transition font-mono"
                  >
                    {personal.phone}
                  </a>
                </div>
              )}

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition"
                  aria-label="GitHub Profile"
                >
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition"
                  aria-label="LinkedIn Profile"
                >
                  <Globe className="w-5 h-5 text-indigo-400" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition"
                  aria-label="Email directly"
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                </a>
                {personal.phone && (
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition"
                    aria-label="Call directly"
                  >
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            {formState === "success" ? (
              <div className="p-10 rounded-3xl bg-[#08080a] border border-emerald-400/30 space-y-5 animate-in">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-400/10 border border-emerald-400/25">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-meta text-emerald-400">TRANSMISSION CONFIRMED</span>
                    <h3 className="text-2xl font-bold text-white font-display">
                      Thank You. I&apos;ll Get Back To You.
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-dim leading-relaxed">
                  Your project brief has been received. I review incoming messages and respond with technical availability within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", email: "", projectType: "Mobile App", message: "" });
                  }}
                  className="text-meta text-cyan-400 hover:text-cyan-300 transition pt-2 cursor-pointer block"
                >
                  SEND ANOTHER MESSAGE →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-7 p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10"
                noValidate
              >
                {/* Project Type Selectors */}
                <div>
                  <label className="text-meta text-ghost block mb-3 font-bold">
                    PROJECT TYPE // SCOPE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleChange("projectType", type)}
                          className={`px-4 py-2 rounded-full text-xs font-mono transition cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                            isSelected
                              ? "bg-white text-black font-bold"
                              : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-meta text-ghost block">
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your Full Name"
                      className={`w-full pb-3 bg-transparent border-b text-white placeholder-white/20 text-sm outline-none focus:outline-none focus:ring-0 transition rounded-none font-light ${
                        errors.name ? "border-red-400" : "border-white/15 focus:border-white/50"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-meta text-ghost block">
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@company.com"
                      className={`w-full pb-3 bg-transparent border-b text-white placeholder-white/20 text-sm outline-none focus:outline-none focus:ring-0 transition rounded-none font-light ${
                        errors.email ? "border-red-400" : "border-white/15 focus:border-white/50"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-meta text-ghost block">
                    PROJECT DETAILS // MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about the application scope, timeline, and tech requirements..."
                    className={`w-full pb-3 bg-transparent border-b text-white placeholder-white/20 text-sm outline-none focus:outline-none focus:ring-0 transition rounded-none resize-none font-light ${
                      errors.message ? "border-red-400" : "border-white/15 focus:border-white/50"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {formState === "error" && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-400/30 text-xs text-red-300">
                    FAILED TO SEND — TRY AGAIN or reach out directly at{" "}
                    <a href={`mailto:${personal.email}`} className="underline font-mono">
                      {personal.email}
                    </a>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="px-8 py-4 rounded-full bg-white text-black text-meta font-bold tracking-widest uppercase hover:bg-white/90 transition-all cursor-pointer flex items-center gap-3 disabled:opacity-50"
                    data-cursor="SEND"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING…</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE →</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-meta text-ghost">
          <div>
            &copy; {new Date().getFullYear()} {personal.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div className="font-mono text-[10px]">
            ENGINEERED WITH FLUTTER, KOTLIN, NEXT.JS &amp; THREE.JS
          </div>
        </div>
      </div>
    </footer>
  );
};
