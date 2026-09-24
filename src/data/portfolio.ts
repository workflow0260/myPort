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
  };
  metrics: {
    label: string;
    value: string;
    sublabel: string;
    project: string;
  };
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
    location: "Jaipur, Rajasthan",
    email: "sahilmansuri2010@gmail.com",
    phone: "+91 88900 29227",
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
      "I am a Mobile App Developer with 1+ year of hands-on experience building and maintaining production Flutter applications for iOS and Android. Delivered production mobile applications, including an astrology product with 1M+ Google Play downloads. Strong in Dart, Flutter, Kotlin, Jetpack Compose, Bloc/Cubit, Clean Architecture, Firebase, Supabase, REST APIs, and real-time data flows. Comfortable taking features from UI implementation through integration, testing, and release support.",
    primaryFocus: [
      "Flutter & Dart",
      "Mobile Applications (iOS & Android)",
      "Production UI & Responsive Layouts",
      "API Integration & WebSockets",
      "Real-Time Data Flows",
      "Clean Architecture & State Management",
    ],
    accentColor: "#173753",
    status: "AVAILABLE FOR OPPORTUNITIES",
  },

  metrics: {
    value: "1M+",
    label: "GOOGLE PLAY DOWNLOADS",
    sublabel: "CONFIRMED PRODUCTION MILESTONE",
    project: "BALAJI ASTRO GUIDE",
  },

  projects: [
    {
      slug: "balaji-astro-guide",
      number: "01",
      title: "BALAJI ASTRO GUIDE",
      tagline: "Vedic astrology platform reaching 1M+ downloads on Google Play.",
      category: "Astrology",
      downloads: "1M+ DOWNLOADS",
      overview:
        "Comprehensive Vedic astrology mobile application engineered with Flutter, featuring real-time astrology consultations, automated chart calculations, and high-concurrency horoscope delivery to over 1,000,000+ active users on Google Play.",
      features: [
        "Free Janam Kundli generation with precise astrological calculations",
        "E-Pooja scheduling and live spiritual streaming",
        "Daily, weekly, and monthly personalized horoscope predictions",
        "Real-time astrology chat and consultation services",
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
      overview:
        "Modern personal fitness companion application designed for custom workout tracking, real-time telemetry, nutritional monitoring, and live coaching interactivity.",
      features: [
        "Interactive workouts & exercise guide routines",
        "Multi-metric progress tracking and body composition analytics",
        "Custom workout routine builder and timer engines",
        "Nutrition logging with caloric and macronutrient targets",
        "Live coaching sessions and interactive training schedules",
        "Real-time workout progress tracking and telemetry",
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
      overview:
        "Collaborative community platform crafted for member engagement, group orchestration, communication channels, and scalable community reach expansion.",
      features: [
        "Building digital communities with custom branding & rules",
        "Managing member directories and role-based permissions",
        "Growing community channels and discovery directories",
        "High-engagement feeds, discussions, and event broadcast",
        "Expanded community reach analytics and member insights",
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
        "Develop and maintain production mobile applications using Flutter, with a focus on responsive UI, performance, scalability, and reliable iOS and Android releases.",
        "Apply Clean Architecture and MVC, MVP, and MVVM patterns to keep production code maintainable, testable, and easy to extend.",
        "Build predictable application flows with Bloc/Cubit and integrate Firebase and Supabase for authentication, storage, and real-time data.",
        "Integrate REST APIs and JSON-based services; work with real-time communication concepts including WebSockets.",
        "Apply unit testing, widget testing, and integration testing practices to improve feature reliability and maintainability.",
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
      "REAL-TIME DATA SYNCHRONIZATION",
      "API INTEGRATION",
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

  engineeringNotebook: [
    {
      topic: "01 // ARCHITECTURAL SEPARATION",
      subtitle: "Clean Architecture & Unidirectional Flow",
      points: [
        "Clear boundary separation between Presentation (Flutter/Compose), Domain (UseCases/Entities), and Data (Repositories/DataSources).",
        "Strict dependency inversion ensuring presentation logic never couples directly with network clients or database drivers.",
        "Modular folder hierarchies that scale effortlessly across complex multi-feature enterprise codebases.",
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
        "Real-time event streaming over WebSockets and Firebase Firestore for instant client synchronization.",
        "Robust JSON serialization/deserialization with defensive null-safety guarantees.",
      ],
    },
    {
      topic: "04 // VERIFICATION & QUALITY",
      subtitle: "Unit, Widget & Integration Testing",
      points: [
        "Unit tests covering repository parsing, business logic state changes, and calculation algorithms.",
        "Widget tests verifying layout reactivity, user gesture handling, and navigation triggers.",
        "End-to-end integration flows simulating real-world production user scenarios.",
      ],
    },
  ],

  coreStrengths: [
    "FEATURE OWNERSHIP",
    "RESPONSIVE UI DEVELOPMENT",
    "API INTEGRATION",
    "PERFORMANCE OPTIMIZATION",
    "DEBUGGING",
    "COLLABORATIVE DELIVERY",
  ],
};
