"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CinematicLoader } from "@/components/ui/CinematicLoader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { CinematicNavbar } from "@/components/sections/CinematicNavbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MobileStorySection } from "@/components/sections/MobileStorySection";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { ArchitectureFlowSection } from "@/components/sections/ArchitectureFlowSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CodeSection } from "@/components/sections/CodeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      {/* Film Grain Ambient Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Scroll Section Progress Indicator */}
      <ScrollProgress />

      {/* Cinematic Booting Sequence */}
      {!loadingComplete && (
        <CinematicLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Resume Download / Request Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <div
        id="hero"
        className="relative min-h-screen bg-[#030303] text-[#f5f5f7] flex flex-col selection:bg-white selection:text-black"
      >
        {/* Navigation */}
        <CinematicNavbar onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Storytelling Content Hierarchy */}
        <main className="flex-grow">
          <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />
          <MobileStorySection />
          <ProjectsShowcase />
          <ArchitectureFlowSection />
          <SkillsSection />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <CodeSection />
        </main>

        {/* Contact & Footer */}
        <ContactSection />
      </div>
    </SmoothScrollProvider>
  );
}
