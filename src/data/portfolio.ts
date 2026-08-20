export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: "Mobile App" | "Full-Stack" | "Backend System";
  platform: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    client: string;
    api: string;
    backend: string;
    database: string;
    flowSummary: string;
  };
  features: string[];
  technologies: {
    mobile: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  githubUrl?: string;
  demoUrl?: string;
  downloadApkUrl?: string;
  isFeatured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    tag?: string;
    projectAssociation?: string;
  }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    secondaryHeadline: string;
    supportingText: string;
    technicalLine: string;
    introduction: string;
    aboutHeadline: string;
    bio: string;
    location: string;
    email: string;
    phone?: string;
    github: string;
    linkedin: string;
    resumePath: string;
    hasResumeFile: boolean;
    status: string;
  };
  mobileStory: {
    heading: string;
    subheading: string;
    description: string;
    pillars: {
      number: string;
      title: string;
      description: string;
      tag: string;
    }[];
  };
  services: ServiceItem[];
  skills: SkillCategory[];
  projects: Project[];
  architecturePipeline: {
    step: string;
    name: string;
    tech: string;
    description: string;
    payloadExample: string;
  }[];
  experience: {
    period: string;
    role: string;
    company: string;
    location: string;
    description: string;
    technologies: string[];
  }[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Sahil Mansuri",
    title: "FLUTTER & KOTLIN DEVELOPER",
    secondaryHeadline: "Building high-performance iOS & Android apps with Flutter, Kotlin & scalable backend systems.",
    supportingText: "iOS & Android Apps • Backend • Full Stack",
    technicalLine: "FLUTTER • KOTLIN • iOS • ANDROID • NODE.JS • MONGODB",
    introduction:
      "I build production-focused iOS and Android mobile applications with Flutter and Kotlin, backed by reliable APIs, databases and cloud services.",
    aboutHeadline: "BUILDING PRODUCTS, NOT JUST APPS.",
    bio: "I am a mobile and full-stack developer specialized in building production-ready applications for both iOS and Android platforms using Flutter and native Android with Kotlin. With strong foundations across cross-platform mobile engineering, native platform channels, and server-side Node.js/Express architectures, I build resilient, end-to-end applications from database design to fluid 60–120 FPS mobile user interfaces on both App Store and Google Play.",
    location: "India • Open for Remote & Global Opportunities",
    email: "sahilmansuri2010@gmail.com",
    phone: "+91 8890029228",
    github: "https://github.com/workflow0260",
    linkedin: "https://www.linkedin.com/in/sahil-mansuri-74a9a0255/",
    resumePath: "/resume.pdf",
    hasResumeFile: false, // Set to true when /public/resume.pdf is added
    status: "Available for Full-Time & Contract Roles",
  },

  mobileStory: {
    heading: "BUILDING iOS & ANDROID EXPERIENCES",
    subheading: "CROSS-PLATFORM FLUIDITY • NATIVE PERFORMANCE • FULL-STACK SCALE",
    description:
      "I build native and cross-platform mobile applications for both iOS and Android using Flutter and Kotlin. From fluid Cupertino & Material design to native platform channels, 60–120 FPS animations, and offline caching, every screen is engineered for real-world resilience.",
    pillars: [
      {
        number: "01",
        title: "Dual-Platform iOS & Android UI",
        description:
          "Pixel-perfect responsive layouts designed with Flutter (Cupertino & Material) and Jetpack Compose, delivering native look and feel on iPhones, iPads, and Android devices.",
        tag: "iOS & Android",
      },
      {
        number: "02",
        title: "Predictable State Management",
        description:
          "Robust unidirectional data flow using Riverpod, BLoC, and Kotlin StateFlow ensuring clear separation of presentation logic from domain layers.",
        tag: "Riverpod / BLoC",
      },
      {
        number: "03",
        title: "Resilient Networking & APIs",
        description:
          "Structured HTTP clients using Dio and Retrofit with automatic token refresh interceptors, exponential backoff retries, and comprehensive error handling.",
        tag: "Dio / Retrofit",
      },
      {
        number: "04",
        title: "Offline-First Persistence",
        description:
          "Instant local database caching with Room, Hive, and SQLite for seamless offline experiences that automatically synchronize when network connectivity resumes.",
        tag: "Room / Hive",
      },
    ],
  },

  services: [
    {
      number: "01",
      title: "iOS & ANDROID MOBILE APPS",
      subtitle: "Flutter & Kotlin for Cross-Platform & Native Development",
      description:
        "Building production-ready, performant mobile apps for both iOS (App Store) and Android (Google Play) with Flutter (Dart) and Native Android (Kotlin & Jetpack Compose), featuring predictable state management, offline persistence, and fluid UI.",
      capabilities: [
        "Cross-platform iOS & Android mobile development with Flutter",
        "Native Android apps with Kotlin & Jetpack Compose",
        "App Store & Google Play Store release & deployment",
        "State management with Riverpod, BLoC, and StateFlow",
        "Offline-first caching with SQLite, Room, and Hive",
      ],
    },
    {
      number: "02",
      title: "BACKEND SYSTEMS",
      subtitle: "REST APIs, Authentication & Database Pipelines",
      description:
        "Developing structured, secure server-side services with Node.js and Express.js, featuring RESTful endpoint design, JWT-based authentication, validation pipelines, and MongoDB database modeling.",
      capabilities: [
        "RESTful API design and route controllers",
        "JWT authentication and role-based access control",
        "MongoDB schema modeling with Mongoose",
        "Request validation, sanitization, and error handling",
      ],
    },
    {
      number: "03",
      title: "FULL-STACK APPLICATIONS",
      subtitle: "End-to-End Client & Cloud Systems",
      description:
        "Architecting complete digital products where mobile frontends communicate seamlessly with cloud databases, background job runners, and server APIs.",
      capabilities: [
        "Full client-to-server data contract synchronization",
        "Firebase Firestore & Cloud Storage integration",
        "Push notifications with Firebase Cloud Messaging (FCM)",
        "Automated deployment & environment configuration",
      ],
    },
    {
      number: "04",
      title: "API INTEGRATION",
      subtitle: "Third-Party Services, Gateways & Cloud Sync",
      description:
        "Connecting applications to third-party ecosystems including payment gateways (Stripe, Razorpay), authentication providers (OAuth2, Firebase Auth), map services, and external REST APIs.",
      capabilities: [
        "Payment gateway & checkout lifecycle integration",
        "OAuth2, Google Sign-In & Firebase Authentication",
        "Location services & mapping SDK integrations",
        "Resilient network error handling and retry interceptors",
      ],
    },
  ],

  skills: [
    {
      title: "MOBILE (iOS & ANDROID)",
      description: "Cross-platform iOS & Android development with Flutter and native Android with Kotlin.",
      items: [
        { name: "Flutter (iOS & Android)", description: "Cross-platform mobile UI framework for App Store & Google Play", tag: "Primary", projectAssociation: "PulseMart, DevTrack" },
        { name: "Dart", description: "Object-oriented asynchronous language for reactive Flutter apps", tag: "Language", projectAssociation: "PulseMart, DevTrack" },
        { name: "Kotlin (Android)", description: "Modern language for native Android engineering & services", tag: "Primary", projectAssociation: "OmniChat, HealthSync" },
        { name: "Android SDK & Compose", description: "Native Android lifecycle, Jetpack Compose UI, Room & WorkManager", tag: "Native", projectAssociation: "OmniChat, HealthSync" },
        { name: "App Store & Play Store", description: "Certificates, provisioning profiles, build pipelines & store releases", tag: "Deployment", projectAssociation: "Production Apps" },
      ],
    },
    {
      title: "BACKEND",
      description: "Server-side services, API architecture, and authentication mechanisms.",
      items: [
        { name: "Node.js", description: "JavaScript runtime for scalable event-driven backend services", tag: "Runtime", projectAssociation: "PulseMart, HealthSync" },
        { name: "Express.js", description: "Web framework for RESTful routing and middleware", tag: "Framework", projectAssociation: "PulseMart, HealthSync" },
        { name: "REST APIs", description: "Stateless HTTP endpoint design, status codes, and JSON payloads", tag: "Protocol", projectAssociation: "All Projects" },
        { name: "JWT & Auth", description: "JSON Web Tokens, password hashing with bcrypt, and session management", tag: "Security", projectAssociation: "PulseMart, HealthSync" },
        { name: "Middleware", description: "Request logging, rate limiting, and centralized error handling", tag: "Architecture", projectAssociation: "PulseMart Backend" },
      ],
    },
    {
      title: "DATABASE",
      description: "Document databases, real-time sync platforms, and cloud storage.",
      items: [
        { name: "MongoDB", description: "NoSQL document database for flexible data modeling", tag: "Database", projectAssociation: "PulseMart, HealthSync" },
        { name: "Mongoose", description: "ODM library for MongoDB schema validation and querying", tag: "ODM", projectAssociation: "PulseMart Backend" },
        { name: "Firebase", description: "BaaS ecosystem for mobile and full-stack applications", tag: "Cloud", projectAssociation: "OmniChat, PulseMart" },
        { name: "Cloud Firestore", description: "Real-time document database with offline sync", tag: "Real-Time", projectAssociation: "OmniChat Realtime" },
        { name: "Firebase Storage", description: "Cloud media and file attachment storage", tag: "Storage", projectAssociation: "OmniChat Media" },
      ],
    },
    {
      title: "TOOLS",
      description: "Version control, API debugging, and development environments.",
      items: [
        { name: "Git & GitHub", description: "Version control, branching workflows, PRs, and repository management", tag: "VCS", projectAssociation: "All Repositories" },
        { name: "Postman", description: "API endpoint testing, environment variables, and payload debugging", tag: "Testing", projectAssociation: "API Testing" },
        { name: "Android Studio", description: "Native Android IDE, Profiler, Logcat, and Virtual Devices", tag: "IDE", projectAssociation: "Android Dev" },
        { name: "VS Code", description: "Lightweight development environment for Flutter and Node.js", tag: "IDE", projectAssociation: "Flutter & Backend" },
      ],
    },
  ],

  projects: [
    {
      slug: "pulsemart-ecommerce",
      number: "01",
      title: "PulseMart — Mobile E-Commerce & Delivery",
      tagline: "Cross-platform mobile store with real-time cart, Node.js API, and MongoDB order management.",
      category: "Full-Stack",
      platform: "Flutter • Node.js • Express • MongoDB",
      role: "Full-Stack Developer (Mobile App + Backend API)",
      overview:
        "PulseMart is an end-to-end mobile commerce application featuring product discovery, multi-category browsing, shopping cart management, Stripe checkout integration, and an administrative order dispatch API.",
      problem:
        "Many mobile shopping clients suffer from fragile cart state when network connections drop, alongside slow API response times during checkout validation.",
      solution:
        "Engineered a resilient Flutter client using Riverpod state management and local Hive caching for instant offline cart recovery, paired with an Express.js backend that processes order transactions atomically in MongoDB.",
      architecture: {
        client: "Flutter 3.x (Dart) + Riverpod 2.0 State Management + Dio HTTP Client",
        api: "RESTful JSON API with JWT Bearer Authentication & Joi payload validation",
        backend: "Node.js (LTS) + Express.js modular router and middleware pipeline",
        database: "MongoDB Atlas cluster with indexed product catalog and order collections",
        flowSummary:
          "Mobile App (Flutter) → Dio HTTP Client → Express API Gateway → Order Controller → MongoDB Transaction",
      },
      features: [
        "JWT-based user registration and authentication with secure local token storage",
        "Real-time cart state synchronization with offline optimistic updates",
        "Product search, filtering by category, and price range sorting",
        "Stripe payment intent creation and secure client-side payment sheet confirmation",
        "Push notification alerts on order status changes via Firebase Cloud Messaging",
        "Order history tracking and downloadable PDF invoices",
      ],
      technologies: {
        mobile: ["Flutter", "Dart", "Riverpod", "Dio", "Hive"],
        backend: ["Node.js", "Express.js", "JWT", "Bcrypt", "Stripe SDK"],
        database: ["MongoDB", "Mongoose ODM"],
        tools: ["Postman", "Git", "VS Code", "Android Studio"],
      },
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      downloadApkUrl: "https://github.com",
      isFeatured: true,
    },
    {
      slug: "omnichat-realtime",
      number: "02",
      title: "OmniChat — Real-Time Messaging & Collaboration",
      tagline: "Native Android communication app with WebSocket sync, Kotlin Coroutines, and Firebase backend.",
      category: "Mobile App",
      platform: "Kotlin • Android SDK • Jetpack Compose • Firebase",
      role: "Android Engineer (Native UI + Real-Time Data Flow)",
      overview:
        "OmniChat is a high-performance native Android messaging platform featuring 1-on-1 direct messaging, group channels, voice message recording, real-time typing indicators, and message status receipts.",
      problem:
        "Real-time chat applications frequently stutter during rapid list scrolling or drop messages when transitioning across poor cellular connections.",
      solution:
        "Built with Jetpack Compose for declarative, recomposition-optimized UI, Room database for instant local message persistence, and Kotlin Flow to stream real-time updates seamlessly from Firebase Firestore.",
      architecture: {
        client: "Native Android (Kotlin) + Jetpack Compose UI + MVVM Architecture",
        api: "Firebase Firestore Real-Time Streams + Cloud Functions for Push Triggers",
        backend: "Node.js Cloud Functions for media processing and notification delivery",
        database: "Cloud Firestore for distributed real-time messages + Room SQLite on-device",
        flowSummary:
          "Jetpack Compose UI → ViewModel (StateFlow) → Repository → Room (Local Cache) ↔ Firestore (Cloud Stream)",
      },
      features: [
        "End-to-end messaging with Sent, Delivered, and Read receipt indicators",
        "Offline-first message queue that automatically synchronizes when network resumes",
        "Media attachment uploads (photos, audio notes) stored in Firebase Storage",
        "Typing status awareness and presence indicators (Online / Last Seen)",
        "Biometric authentication (Fingerprint / Face Unlock) to secure chat vaults",
      ],
      technologies: {
        mobile: ["Kotlin", "Jetpack Compose", "Coroutines", "StateFlow", "Room Database", "Hilt"],
        backend: ["Firebase Cloud Functions", "Node.js"],
        database: ["Cloud Firestore", "SQLite / Room"],
        tools: ["Android Studio", "Git", "Firebase Console"],
      },
      githubUrl: "https://github.com",
      demoUrl: "https://github.com",
      isFeatured: true,
    },
    {
      slug: "devtrack-finance",
      number: "03",
      title: "DevTrack — Expense & Crypto Portfolio Manager",
      tagline: "Flutter financial tracking application with interactive charts and REST currency converter.",
      category: "Mobile App",
      platform: "Flutter • Dart • REST APIs • SQLite",
      role: "Mobile Developer",
      overview:
        "DevTrack is a personal finance and cryptocurrency tracking application that lets developers and freelancers monitor income, categorize multi-currency expenses, and track live crypto market prices.",
      problem:
        "Financial tracking applications often fail to function without an active internet connection or overwhelm users with complex, slow-rendering balance charts.",
      solution:
        "Engineered an offline-first Flutter application with local SQLite database storage, synchronized with live CoinGecko & ExchangeRate REST APIs for background rate updates, and smooth custom canvas rendering.",
      architecture: {
        client: "Flutter (Dart) + BLoC Pattern + Custom Canvas Painter",
        api: "Public Financial REST APIs (CoinGecko & ExchangeRate-API) with caching",
        backend: "Client-side repository layer with exponential backoff retry policies",
        database: "SQLite (sqflite) on-device database with automated data backup export",
        flowSummary:
          "Flutter UI → BLoC Event → Repository → SQLite Local Storage & Remote Currency REST API",
      },
      features: [
        "Interactive income and expense breakdown charts rendered with CustomPainter",
        "Live cryptocurrency price tracker with 24-hour change percentages",
        "Multi-currency conversion with automatic daily cached exchange rates",
        "Customizable budget goals with visual progress rings and monthly recap summaries",
        "CSV export functionality for expense reports and tax record keeping",
      ],
      technologies: {
        mobile: ["Flutter", "Dart", "flutter_bloc", "sqflite", "CustomPainter", "http"],
        backend: ["RESTful Currency APIs"],
        database: ["SQLite"],
        tools: ["VS Code", "Git", "Postman"],
      },
      githubUrl: "https://github.com",
      isFeatured: true,
    },
    {
      slug: "healthsync-tracker",
      number: "04",
      title: "HealthSync — Biometrics & Daily Habit Companion",
      tagline: "Android wellness application tracking daily steps, hydration, and habits with Node.js backend.",
      category: "Full-Stack",
      platform: "Kotlin • Jetpack Compose • Node.js • Express • MongoDB",
      role: "Full-Stack Developer",
      overview:
        "HealthSync is a wellness companion that connects to Android SensorManager hardware for automatic step counting, hydration logging, and weekly health trend analytics synchronized with a custom backend.",
      problem:
        "Background sensor tracking can severely drain mobile battery life if background jobs and sensor listeners are not managed efficiently.",
      solution:
        "Implemented Android WorkManager with batch sensor sampling for minimal battery consumption, alongside a Node.js analytics backend that computes weekly health trends and streaks.",
      architecture: {
        client: "Kotlin + Jetpack Compose + WorkManager + SensorManager API",
        api: "Node.js / Express REST API with token authorization and batch ingestion",
        backend: "Express.js service aggregating time-series metric data",
        database: "MongoDB for historical health records and user goal streaks",
        flowSummary:
          "Android SensorManager → WorkManager Batch Service → Express API Ingestion → MongoDB Time-Series",
      },
      features: [
        "Background step counting and distance calculation using hardware sensors",
        "Daily water intake reminder notifications with quick-log action buttons",
        "Weekly and monthly progress visualizers with streak achievement badges",
        "User profile authentication and cloud backup synchronization across devices",
      ],
      technologies: {
        mobile: ["Kotlin", "Jetpack Compose", "WorkManager", "SensorManager", "Retrofit"],
        backend: ["Node.js", "Express.js", "JWT"],
        database: ["MongoDB", "Mongoose"],
        tools: ["Android Studio", "Postman", "Git"],
      },
      githubUrl: "https://github.com",
      isFeatured: true,
    },
  ],

  architecturePipeline: [
    {
      step: "01",
      name: "Flutter / Kotlin Mobile App",
      tech: "Flutter 3.x / Jetpack Compose / Riverpod / StateFlow",
      description:
        "The mobile frontend handles UI state, offline caching, and user gestures. It serializes validated requests into structured JSON payloads.",
      payloadExample: `{ "userId": "usr_9410", "action": "SYNC_CART", "items": [{ "sku": "dev_01", "qty": 2 }] }`,
    },
    {
      step: "02",
      name: "REST API Gateway",
      tech: "HTTPS / Dio / Retrofit / JSON Headers",
      description:
        "Requests are transmitted over TLS with Bearer JWT tokens, automatic retry interceptors, and network state awareness.",
      payloadExample: `POST /api/v1/checkout HTTP/1.1\nHost: api.domain.com\nAuthorization: Bearer eyJhbGciOi...\nContent-Type: application/json`,
    },
    {
      step: "03",
      name: "Node.js / Express Backend",
      tech: "Node.js (LTS) / Express.js / JWT / Joi Validation",
      description:
        "Express middleware validates JWT signatures, verifies permissions, applies rate-limiting, and executes controller business logic.",
      payloadExample: `// Order Controller Processing\nconst order = await OrderService.create({\n  userId: req.user.id,\n  items: req.body.items\n});`,
    },
    {
      step: "04",
      name: "MongoDB / Firebase Data Layer",
      tech: "MongoDB Atlas / Cloud Firestore / Transactions",
      description:
        "Data is persisted in MongoDB collections with indexing or streamed in real time to connected clients through Cloud Firestore.",
      payloadExample: `{ "status": "success", "orderId": "ord_8821", "total": 128.50, "syncedAt": "2026-08-20T17:00:00Z" }`,
    },
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Mobile & Backend Developer",
      company: "Software Engineering & Client Consulting",
      location: "San Francisco, CA (Remote)",
      description:
        "Building cross-platform Flutter applications and native Android services. Architecting Node.js/Express REST APIs and integrating cloud database backends for high-performance mobile products.",
      technologies: ["Flutter", "Dart", "Kotlin", "Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      period: "2022 — 2024",
      role: "Flutter & Mobile Application Developer",
      company: "Mobile Product Development",
      location: "Remote",
      description:
        "Developed production mobile applications, implemented state management architectures with Riverpod and BLoC, and integrated payment gateways, push notifications, and REST endpoints.",
      technologies: ["Flutter", "Dart", "REST APIs", "Firebase Firestore", "Git", "Postman"],
    },
    {
      period: "2021 — 2022",
      role: "Android & Backend Developer",
      company: "Software Solutions",
      location: "Remote",
      description:
        "Built native Android features with Kotlin and Jetpack components. Designed and maintained backend REST API endpoints using Node.js and MongoDB.",
      technologies: ["Kotlin", "Android SDK", "Node.js", "Express.js", "MongoDB"],
    },
  ],
};
