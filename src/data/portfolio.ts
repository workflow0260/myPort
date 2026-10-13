export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: "Astrology" | "Fitness" | "Community";
  downloads?: string;
  overview: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  statusText?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    experienceYears: string;
    location: string;
    email: string;
    phone: string;
    phoneRaw?: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
    twitter: string;
    twitterHandle: string;
    instagram: string;
    instagramHandle: string;
    summary: string;
    primaryFocus: string[];
    accentColor: string;
    status: string;
    resumePdfUrl: string;
  };
  metrics: {
    label: string;
    value: string;
    sublabel: string;
    project: string;
  };
  keyCompetencies: string[];
  projects: Project[];
  experience: ExperienceItem[];
  stack: {
    primary: string[];
    architecture: string[];
    backend: string[];
    additional: string[];
    testing: string[];
    tools: string[];
  };
  additionalKnowledge: string[];
  toolsAndWorkflow: string[];
  engineeringNotebook: {
    topic: string;
    subtitle: string;
    points: string[];
  }[];
  coreStrengths: string[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Sahil Mansuri",
    title: "MOBILE APP DEVELOPER",
    headline: "FLUTTER · KOTLIN · JETPACK COMPOSE",
    experienceYears: "1 Year 10 Months",
    location: "Jaipur, Rajasthan",
    email: "sahilmansuri2010@gmail.com",
    phone: "8890029227",
    phoneRaw: "+918890029227",
    github: "https://github.com/sahil8822",
    githubHandle: "github.com/sahil8822",
    linkedin: "https://www.linkedin.com/in/sahil-mansuri-74a9a0255",
    linkedinHandle: "linkedin.com/in/sahil-mansuri-74a9a0255",
    twitter: "https://x.com/Sahilmansur2010",
    twitterHandle: "x.com/Sahilmansur2010",
    instagram: "https://www.instagram.com/light_dark_0123/?hl=en",
    instagramHandle: "instagram.com/light_dark_0123",
    summary:
      "Mobile App Developer with 1 year 10 months of hands-on experience designing, building, and maintaining production Flutter applications for iOS and Android. Experienced in taking features from UI implementation through API integration, state management, testing, debugging, release support, and post-release improvements. Delivered production mobile applications, including an astrology product with 1M+ Google Play downloads. Strong in Dart, Flutter, Kotlin, Jetpack Compose, Bloc/Cubit, Clean Architecture, Firebase, Supabase, REST APIs, JSON, WebSockets, and real-time data flows. Focused on responsive interfaces, maintainable code, performance, and reliable user experiences.",
    primaryFocus: [
      "Flutter & Dart",
      "Mobile Applications (iOS & Android)",
      "Responsive UI Development",
      "API Integration & WebSockets",
      "Real-Time Data Flows",
      "Clean Architecture & Bloc/Cubit",
    ],
    accentColor: "#173753",
    status: "AVAILABLE FOR OPPORTUNITIES",
    resumePdfUrl: "/sahil_resume.pdf",
  },

  metrics: {
    value: "1M+",
    label: "GOOGLE PLAY DOWNLOADS",
    sublabel: "CONFIRMED PRODUCTION MILESTONE",
    project: "BALAJI ASTRO GUIDE",
  },

  keyCompetencies: [
    "Flutter and Dart",
    "Kotlin and Jetpack Compose",
    "Responsive UI development",
    "Clean Architecture",
    "Bloc / Cubit state management",
    "Firebase and Supabase",
    "REST APIs and JSON",
    "WebSockets and real-time data",
    "Unit, widget and integration testing",
    "Performance optimization",
    "Debugging and release support",
    "Git / GitHub collaboration",
  ],

  projects: [
    {
      slug: "balaji-astro-guide",
      number: "01",
      title: "BALAJI ASTRO GUIDE",
      tagline: "Vedic astrology app featuring free Janam Kundli, Pooja services, and astrology chat.",
      category: "Astrology",
      downloads: "1M+ DOWNLOADS",
      playStoreUrl: "https://play.google.com/store/search?q=Balaji+Astro+Guide&c=apps",
      overview:
        "Vedic astrology app featuring free Janam Kundli, Pooja services, horoscope predictions, astrology chat, and user-focused spiritual guidance. Reached 1M+ downloads on Google Play.",
      features: [
        "Free Janam Kundli generation with precise astrological calculations",
        "Pooja services scheduling and spiritual guidance",
        "Personalized daily, weekly, and monthly horoscope predictions",
        "Real-time astrology consultation chat and live stream flows",
        "High-performance architecture scaled to 1,000,000+ Google Play downloads",
      ],
      technologies: ["Flutter", "Dart", "Bloc/Cubit", "Firebase", "REST APIs", "WebSockets"],
      statusText: "1M+ Google Play Downloads • Production",
    },
    {
      slug: "sicfit",
      number: "02",
      title: "SICFIT",
      tagline: "PERSONAL FITNESS COMPANION",
      category: "Fitness",
      playStoreUrl: "https://play.google.com/store/search?q=Sicfit&c=apps",
      overview:
        "Personal fitness companion for workouts, progress, and health. Supports custom workout routines, nutrition logging, live coaching sessions, progress tracking, and a more consistent fitness journey.",
      features: [
        "Custom workout routines and interactive exercise guides",
        "Nutrition logging with daily calorie and macronutrient targets",
        "Live coaching sessions and interactive training schedules",
        "Comprehensive workout progress tracking and health metrics",
      ],
      technologies: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "Supabase"],
      statusText: "Live Application • Personal Fitness",
    },
    {
      slug: "happiest-team",
      number: "03",
      title: "HAPPIEST TEAM",
      tagline: "COMMUNITY PLATFORM",
      category: "Community",
      playStoreUrl: "https://play.google.com/store/search?q=Happiest+Team&c=apps",
      overview:
        "Community platform for building, managing, and growing communities. Includes member engagement features and tools that help communities organize activity, strengthen participation, and expand their reach.",
      features: [
        "Building, managing, and scaling modern digital communities",
        "Member engagement features and group activity coordination",
        "Discussion boards, event streams, and real-time announcements",
        "Community analytics and tools to expand member reach",
      ],
      technologies: ["Flutter", "Dart", "Bloc", "Firebase", "Real-Time Sync", "REST APIs"],
      statusText: "Live Application • Community Management",
    },
  ],

  experience: [
    {
      period: "SEP 2025 — PRESENT",
      role: "FLUTTER DEVELOPER",
      company: "APPIC SOFTWARE LLP",
      location: "Jaipur, Rajasthan",
      responsibilities: [
        "Develop and maintain responsive production mobile applications using Flutter, with a focus on performance, scalability, and reliable iOS and Android releases. Apply Clean Architecture and MVC, MVP, and MVVM patterns to keep production code maintainable, testable, and easy to extend.",
        "Build predictable application flows with Bloc/Cubit and integrate Firebase and Supabase for authentication, storage, and real-time data.",
        "Integrate REST APIs and JSON-based services, including WebSockets. Apply unit, widget, and integration testing practices to improve reliability and maintainability.",
        "Use Git/GitHub, VS Code, Android Studio, and Xcode to support collaborative development, debugging, and release workflows.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Kotlin",
        "Jetpack Compose",
        "Bloc",
        "Cubit",
        "Clean Architecture",
        "Firebase",
        "Supabase",
        "REST APIs",
        "WebSockets",
        "Git",
      ],
    },
  ],

  stack: {
    primary: [
      "FLUTTER",
      "DART",
      "KOTLIN",
      "JETPACK COMPOSE",
      "BLOC",
      "CUBIT",
      "CLEAN ARCHITECTURE",
      "FIREBASE",
      "SUPABASE",
      "REST APIs",
      "JSON",
      "WEBSOCKETS",
    ],
    architecture: [
      "CLEAN ARCHITECTURE",
      "MVC",
      "MVP",
      "MVVM",
      "BLOC / CUBIT STATE FLOW",
    ],
    backend: [
      "FIREBASE AUTH & FIRESTORE",
      "SUPABASE",
      "RESTful SERVICES",
      "JSON PIPELINES",
      "CLOUD STORAGE",
      "WEBSOCKET REAL-TIME SYNC",
    ],
    additional: [
      "PYTHON",
      "NEXT.JS FUNDAMENTALS",
      "API INTEGRATION",
      "REAL-TIME DATA SYNCHRONIZATION",
    ],
    testing: [
      "UNIT TESTING",
      "WIDGET TESTING",
      "INTEGRATION TESTING",
    ],
    tools: [
      "GIT / GITHUB",
      "VS CODE",
      "ANDROID STUDIO",
      "XCODE",
      "CODEX",
      "GEMINI",
      "CLAUDE CODE",
    ],
  },

  additionalKnowledge: [
    "Python",
    "Next.js fundamentals",
    "API integration",
    "real-time data synchronization",
  ],

  toolsAndWorkflow: [
    "Git/GitHub",
    "VS Code",
    "Android Studio",
    "Xcode",
    "Codex",
    "Gemini",
    "Claude Code",
  ],

  engineeringNotebook: [
    {
      topic: "01 // ARCHITECTURAL SEPARATION",
      subtitle: "Clean Architecture & Unidirectional Flow",
      points: [
        "Clear boundary separation between Presentation (Flutter/Compose), Domain (UseCases/Entities), and Data (Repositories/DataSources).",
        "Strict dependency inversion ensuring presentation logic never couples directly with network clients or database drivers.",
        "Modular folder hierarchies applying MVC, MVP, and MVVM patterns to keep production code maintainable and testable.",
      ],
    },
    {
      topic: "02 // STATE MANAGEMENT DISCIPLINE",
      subtitle: "Predictable Reactive Flows (Bloc & Cubit)",
      points: [
        "Immutable state transitions triggered exclusively through explicit events.",
        "Isolated business logic components enabling high testability without UI rendering overhead.",
        "Zero memory leaks via strict lifecycle-aware subscription disposals.",
      ],
    },
    {
      topic: "03 // RESILIENT NETWORKING & DATA",
      subtitle: "REST APIs, WebSockets & Real-Time Sync",
      points: [
        "Structured interceptors with automatic token refresh, connection timeout handling, and graceful offline degradation.",
        "Real-time event streaming over WebSockets, Firebase, and Supabase for instant client synchronization.",
        "Robust JSON serialization/deserialization with defensive null-safety guarantees.",
      ],
    },
    {
      topic: "04 // VERIFICATION & QUALITY",
      subtitle: "Unit, Widget & Integration Testing",
      points: [
        "Unit tests covering repository parsing, business logic state changes, and calculation algorithms.",
        "Widget tests verifying layout reactivity, user gesture handling, and navigation triggers.",
        "Debugging and release support ensuring rock-solid production iOS and Android store deployments.",
      ],
    },
  ],

  coreStrengths: [
    "FEATURE OWNERSHIP",
    "COLLABORATIVE DELIVERY",
    "API INTEGRATION",
    "DEBUGGING",
    "PERFORMANCE OPTIMIZATION",
    "RESPONSIVE UI DEVELOPMENT",
  ],
};
