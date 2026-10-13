"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "motion/react";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CinematicLoader } from "@/components/ui/CinematicLoader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageAtmosphere } from "@/components/ui/PageAtmosphere";
import { CinematicNavbar } from "@/components/sections/CinematicNavbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ArchitectureFlowSection } from "@/components/sections/ArchitectureFlowSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

// Dynamically import heavy interactive modal (bundle-dynamic-imports)
const ResumeModal = dynamic(
  () => import("@/components/ui/ResumeModal").then((mod) => mod.ResumeModal),
  { ssr: false }
);

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      {/* Paper Grain Background Texture */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Dynamic Ambient Lighting & Mouse Spotlight */}
      <PageAtmosphere />

      {/* Minimal Top Scroll Progress */}
      <ScrollProgress />

      {/* Fast Minimalist Boot Loader with AnimatePresence exit */}
      <AnimatePresence>
        {!loadingComplete && (
          <CinematicLoader onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* Interactive Resume Modal - loaded dynamically only when opened */}
      {resumeModalOpen && (
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      )}

      <div className="relative min-h-screen flex flex-col z-10">
        {/* Floating Pill Navigation */}
        <CinematicNavbar onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Content Hierarchy */}
        <main className="flex-grow">
          <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />
          <ProjectsShowcase />
          <ExperienceSection />
          <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />
          <SkillsSection />
          <ArchitectureFlowSection />
          <AboutSection />
        </main>

        {/* Contact & Footer */}
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </div>
    </SmoothScrollProvider>
  );
}
