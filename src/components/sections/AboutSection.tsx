"use client";

import React from "react";
import { Smartphone, Server, Database, GitBranch, Shield, Zap, Layers, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const AboutSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const coreFocus = [
    {
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      title: "Cross-Platform & Native Mobile",
      description:
        "Building production-grade applications with Flutter (Dart) and Native Android (Kotlin & Jetpack Compose), focusing on predictable state management and fluid 60–120 FPS UI.",
    },
    {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      title: "Backend Systems & REST APIs",
      description:
        "Developing structured, reliable Node.js and Express.js REST APIs with JWT authentication, request validation, rate limiting, and clean controller-service architecture.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Databases & Cloud Architecture",
      description:
        "Designing NoSQL document schemas in MongoDB (Mongoose) and integrating real-time Cloud Firestore, Firebase Authentication, and Cloud Storage.",
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-400" />,
      title: "Clean Architecture & Testing",
      description:
        "Separating concerns across Presentation, Domain, and Data layers with Riverpod, BLoC, and StateFlow for testable, long-term maintainability.",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 sm:px-12 relative bg-[#030303] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="text-meta text-ghost mb-4 tracking-[0.3em]">
          ENGINEERING ETHOS // PHILOSOPHY
        </div>

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-display tracking-tight uppercase leading-[0.95] max-w-4xl">
            {personal.aboutHeadline}
          </h2>
        </div>

        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-4">
            <span className="text-meta text-cyan-400 block mb-3 font-bold">
              ENGINEERING PERSPECTIVE
            </span>
            <p className="text-xs text-ghost uppercase tracking-widest leading-relaxed">
              FLUTTER • KOTLIN • NODE.JS • EXPRESS.JS • MONGODB • FIREBASE • REST APIS
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-pure/95 font-light leading-relaxed">
            <p>
              I am a Flutter and Kotlin developer focused on building production-ready mobile applications and scalable backend systems.
            </p>
            <p className="text-dim text-sm sm:text-base">
              My engineering approach bridges mobile client engineering and server-side service architecture. On the client, I prioritize clean architecture, predictable reactive state management (Riverpod, BLoC, StateFlow), and smooth 60–120 FPS interfaces. On the server, I build modular Node.js/Express REST APIs with robust authentication, schema-validated MongoDB collections, and Firebase cloud integrations.
            </p>
            <p className="text-dim text-sm sm:text-base">
              Whether building an e-commerce platform, a real-time messaging application, or a biometrics tracker, I focus on write-once resilience, offline-first reliability, and clean separation of concerns.
            </p>
          </div>
        </div>

        {/* 4 Core Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFocus.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl bg-[#08080a] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white font-display tracking-tight mb-2 group-hover:text-white/90">
                  {item.title}
                </h3>
                <p className="text-xs text-dim leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
