export const PERSON = {
  name: "Aadhaar Goel",
  role: "Software Engineer",
  tagline: "CS student at IIT Guwahati building production systems and the cloud infrastructure they run on — fast, reliable, and built to scale.",
  location: "India",
  email: "goel.aadhaar@outlook.com",
  phone: "+91-9667896164",
  github: "https://github.com/goel-aadhaar",
  linkedin: "https://www.linkedin.com/in/aadhaar-goel/",
  twitter: "https://twitter.com/aadhaar_goel",
  resume: "/resume.pdf",
  available: true,
  availablePeriod: "open to internships & full-time roles",
};

export const STATS = [
  { value: "1500+", label: "DSA problems solved" },
  { value: "8.3", label: "CGPA at IIT Guwahati" },
  { value: "40%", label: "API latency reduced at PW" },
  { value: "6+", label: "Production systems shipped" },
];

export const PROJECTS = [
  {
    id: "01",
    image: "/projects/payments-platform.jpg",
    title: "PayPal-like Digital Payments Platform",
    category: "FinTech",
    description:
      "Production-grade microservices system with 7+ independent services — Wallet, Transaction, and Fraud — using event-driven architecture with Apache Kafka and gRPC for high-performance inter-service communication.",
    tech: ["Spring Boot", "Kafka", "gRPC", "Docker", "JWT", "RBAC", "Docker Compose"],
    impact: "7+ independent microservices",
    impactDetail: "Fault-tolerant, containerised with Docker Compose",
    users: "7+",
    usersLabel: "Microservices",
    metric: "Fault-tolerant",
    metricLabel: "Architecture",
    features: [
      "Atomic balance updates & multi-currency management",
      "Centralized API gateway with JWT & RBAC security",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
  {
    id: "02",
    image: "/projects/urbansole.jpg",
    title: "UrbanSole — Shoe E-Commerce Platform",
    category: "E-Commerce",
    description:
      "High-performance e-commerce backend with CQRS pattern and JWT-based RBAC for order management. Includes an AI-driven product recommendation engine and MongoDB schemas optimised for high-concurrency inventory.",
    tech: ["Node.js", "MongoDB", "React", "JWT", "CQRS", "AI/ML"],
    impact: "AI-driven recommendations",
    impactDetail: "High-concurrency inventory + RBAC order management",
    users: "High-concurrency",
    usersLabel: "Load",
    metric: "AI-powered",
    metricLabel: "Recommendations",
    features: [
      "CQRS pattern separating reads from writes at scale",
      "AI recommendation engine + chatbot for discovery",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
  {
    id: "03",
    image: "/projects/pwleapx.svg",
    title: "PWLeapx — Coding Platform",
    category: "EdTech",
    description:
      "A high-performance coding platform for hosting contests, practice sessions, and assignments at scale. Real-time leaderboard and gamification API powering competitive programming for Physics Wallah students.",
    tech: ["Node.js", "Redis", "PostgreSQL", "BullMQ", "WebSockets", "JWT"],
    impact: "50k+ concurrent users",
    impactDetail: "Real-time leaderboard & gamification",
    users: "2,000+",
    usersLabel: "Users",
    metric: "35% time saved",
    metricLabel: "Efficiency",
    features: [
      "Live contests & real-time leaderboard gamification",
      "Practice & assignment modules with progress tracking",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
  {
    id: "04",
    image: "/projects/pw-skills-portal.png",
    title: "PW Skills Portal — Student Profile ERP",
    category: "EdTech",
    description:
      "A centralized ERP and LMS platform for academic management enabling students, teachers, and admins to track performance, attendance, and course delivery with Redis-cached progress and OTP authentication.",
    tech: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "OTP Auth", "Swagger"],
    impact: "1,500+ active users",
    impactDetail: "40% faster academic workflows",
    users: "1,500+",
    usersLabel: "Users",
    metric: "40% faster",
    metricLabel: "Productivity",
    features: [
      "Student, teacher & admin role-based dashboards",
      "Performance & attendance tracking with Redis cache",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
  {
    id: "05",
    image: "/projects/sahi-loan.png",
    title: "SahiLoan — Loan Management Platform",
    category: "FinTech",
    description:
      "A full-stack loan management platform handling borrower onboarding, credit scoring, repayment scheduling, and EMI tracking. Built with a secure REST API backend and role-based access for borrowers, agents, and admins.",
    tech: ["Node.js", "PostgreSQL", "Redis", "JWT", "REST API", "TypeScript"],
    impact: "End-to-end loan lifecycle",
    impactDetail: "Automated EMI scheduling & repayment tracking",
    users: "500+",
    usersLabel: "Borrowers",
    metric: "Automated",
    metricLabel: "EMI Scheduling",
    features: [
      "Borrower onboarding with credit scoring & eligibility checks",
      "Automated EMI generation, repayment tracking, and overdue alerts",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: false,
  },
  {
    id: "06",
    image: "",
    title: "Computer-Based Examination Platform",
    category: "EdTech",
    description:
      "A high-availability online examination platform serving 400+ concurrent test-takers. Built with a NestJS backend and Next.js frontend on a full AWS stack, with an AI result engine, AI-generated progress reports, and real-time performance dashboards.",
    tech: ["NestJS", "Next.js", "AWS EC2", "RDS", "S3", "CloudFront", "Amplify", "SES"],
    impact: "400+ concurrent users",
    impactDetail: "AI result engine + performance dashboards",
    users: "400+",
    usersLabel: "Concurrent",
    metric: "AI-graded",
    metricLabel: "Result engine",
    features: [
      "Real-time exam delivery for 400+ concurrent users on AWS EC2, RDS, S3, and CloudFront",
      "AI result engine and AI-generated progress reports with live performance dashboards",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    company: "PW (PhysicsWallah)",
    logo: "/logos/Physics_wallah_logo.svg.png",
    role: "Backend Developer Intern",
    period: "Feb 2026 — Present",
    location: "Bengaluru · On-site",
    current: true,
    description:
      "Architecting a modular monolith backend using TypeScript and Express, reducing debugging latency and improving API reliability across the platform.",
    bullets: [
      "40% reduction in debugging latency by architecting a modular monolith with TypeScript and Express",
      "30% faster API response times via Prisma ORM and structured schema design",
      "50% reduction in developer onboarding time by upgrading and standardising Swagger API documentation",
      "Hardened system security with a centralised RBAC authentication middleware across all backend services",
    ],
  },
  {
    company: "Summentor Pro Business Consultant",
    logo: "/logos/summentor-pro.png",
    role: "Tech & Growth Intern",
    period: "Apr 2026 — Present",
    location: "Bengaluru · Remote",
    current: true,
    description:
      "Driving funnel automation and back-end operations to accelerate growth and streamline data collection pipelines.",
    bullets: [
      "12% increase in lead conversion through real-time analytics dashboards and Mixpanel funnel tracking",
      "20 hours/month saved by automating user outreach via WhatsApp and Email API integrations",
      "35% system throughput improvement by decoupling long-running tasks with a Redis-backed BullMQ queue",
    ],
  },
  {
    company: "Skill Turtle",
    logo: "/logos/skill-turtle.png",
    role: "PCD Mentor",
    period: "Jan 2026 — Present",
    location: "Bengaluru · Remote",
    current: true,
    description:
      "Mentoring students in competitive programming and problem-solving as part of the PCD (Placement & Competitive Development) programme.",
    bullets: [
      "Guided 30+ students through DSA problem sets, mock contests, and interview preparation",
      "Delivered public speaking sessions to improve technical communication for placement readiness",
      "Curated structured problem roadmaps tailored to individual student skill levels",
    ],
  },
];

export const SKILLS = {
  languages: ["TypeScript", "Java", "C++", "SQL", "Node.js"],
  frameworks: ["Spring Boot", "NestJS", "Express.js", "Prisma", "BullMQ", "gRPC", "REST"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
  cloud: ["AWS EC2", "RDS", "S3", "CloudFront", "Amplify", "SES", "Docker", "Docker Compose", "Linux", "CI/CD", "Vercel"],
  security: ["JWT / RBAC", "OAuth / OTP", "Swagger", "Git"],
  ai: ["LLMs", "RAG", "AI Voice Bots", "TTS", "STT"],
  tools: ["DSA & Algorithms", "OS & Networks", "CQRS", "Microservices", "Mixpanel"],
};

export const MARQUEE_ITEMS = [
  "TypeScript", "Java", "Node.js", "NestJS", "Spring Boot", "C++",
  "PostgreSQL", "MongoDB", "Redis", "Kafka",
  "Docker", "AWS", "gRPC", "Prisma", "BullMQ",
  "JWT", "RBAC", "CQRS", "Microservices", "LLMs", "RAG",
];

export const MARQUEE_ROW_1 = [
  "TypeScript", "Java", "Node.js", "NestJS", "Spring Boot", "Express.js", "Prisma", "BullMQ", "gRPC", "REST APIs",
];

export const MARQUEE_ROW_2 = [
  "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Docker", "AWS", "Linux", "Git", "Swagger",
];

export const MARQUEE_ROW_3 = [
  "CQRS", "Microservices", "LLMs", "RAG", "AI Voice Bots", "TTS / STT", "Event-Driven", "System Design", "DSA",
];

export const BLOGS = [
  {
    slug: "polling-sse-websockets",
    coverImage: "/blog/real-time-web.jpg",
    title: "Real-Time Web: Polling, SSE, and WebSockets",
    excerpt:
      "A complete guide to the three real-time communication patterns — how each works, where each breaks, and a practical cheat sheet for choosing the right one for your next system.",
    date: "2026-02-03",
    readTime: "5 min",
    tags: ["Backend", "System Design", "Real-Time"],
    featured: true,
  },
  {
    slug: "api-latency-40-percent",
    coverImage: "/blog/api-latency.jpg",
    title: "How I Cut API Latency by 40% at Physics Wallah",
    excerpt:
      "A deep dive into modular monolith architecture, Prisma ORM query optimisation, and the structured schema patterns that transformed response times across the platform.",
    date: "2026-03-15",
    readTime: "8 min",
    tags: ["Backend", "Node.js", "Performance"],
    featured: true,
  },
  {
    slug: "funnel-tracking-mixpanel",
    coverImage: "/blog/funnel-analytics.jpg",
    title: "Funnel Analytics That Actually Drive Conversion",
    excerpt:
      "How we used Mixpanel funnel tracking at Summentor Pro to find where users were dropping off, what we changed, and how it improved lead conversion by 12% over eight weeks.",
    date: "2026-03-10",
    readTime: "6 min",
    tags: ["Analytics", "Growth", "Backend"],
    featured: true,
  },
  {
    slug: "spring-security-architecture",
    coverImage: "/blog/spring-security.jpg",
    title: "Spring Security Architecture: The Complete End-to-End Flow",
    excerpt:
      "Stop guessing and start understanding the Filter Chain, AuthenticationManager, and SecurityContext — tracing a single HTTP request from entry to your controller.",
    date: "2026-01-28",
    readTime: "3 min",
    tags: ["Java", "Spring Boot", "Security"],
    featured: false,
  },
  {
    slug: "kafka-payments-platform",
    coverImage: "/blog/kafka-payments.jpg",
    title: "Event-Driven Payments: Lessons from a Kafka-Powered System",
    excerpt:
      "What I learned architecting a PayPal-like payments platform with 7+ microservices, Apache Kafka for async processing, and gRPC for inter-service communication.",
    date: "2025-12-22",
    readTime: "12 min",
    tags: ["Kafka", "Microservices", "System Design"],
    featured: false,
  },
  {
    slug: "docker-nodejs-deployment",
    coverImage: "/blog/docker-deployment.jpg",
    title: "Deploying Node.js to Production: A Practical Docker Guide",
    excerpt:
      "Multi-stage builds, graceful shutdown, health checks, and secrets management — everything you need to take a Node.js service from a working Dockerfile to a production-ready deployment.",
    date: "2025-11-10",
    readTime: "7 min",
    tags: ["Docker", "Deployment", "DevOps"],
    featured: false,
  },
  {
    slug: "cqrs-pattern-nodejs",
    coverImage: "/blog/cqrs-nodejs.jpg",
    title: "CQRS in Node.js: Separating Reads from Writes",
    excerpt:
      "A practical guide to implementing the Command Query Responsibility Segregation pattern for high-concurrency e-commerce backends.",
    date: "2025-09-14",
    readTime: "6 min",
    tags: ["CQRS", "Node.js", "Architecture"],
    featured: false,
  },
  {
    slug: "bullmq-redis-queues",
    coverImage: "/blog/bullmq-queues.jpg",
    title: "35% Throughput Gains with Redis-Backed BullMQ Queues",
    excerpt:
      "How decoupling long-running tasks into a BullMQ queue dramatically improved system throughput and eliminated timeouts caused by synchronous third-party API calls.",
    date: "2025-07-05",
    readTime: "5 min",
    tags: ["Redis", "BullMQ", "Node.js"],
    featured: false,
  },
];

export const HOW_I_WORK = [
  {
    step: "01",
    title: "Discover & Scope",
    description: "I start with the problem, not the solution. Requirements get mapped to data flows, edge cases surface early, and architecture decisions are made before a single line of code is written.",
  },
  {
    step: "02",
    title: "Architect & Design",
    description: "Clean data models, clear service boundaries, explicit API contracts. Every system is designed to be understood by the next engineer — not just to work today.",
  },
  {
    step: "03",
    title: "Build & Optimise",
    description: "Typed, modular code with consistent patterns. Every bottleneck gets profiled — slow queries, missing cache layers, blocking I/O — and fixed at the root cause.",
  },
  {
    step: "04",
    title: "Ship & Document",
    description: "Production readiness means more than passing tests. Swagger docs, structured onboarding notes, and monitoring are in place before the first deploy.",
  },
];

export const FAQS = [
  {
    question: "What kind of roles are you looking for?",
    answer: "Software engineering, DevOps, and infrastructure roles. I'm most useful where systems have to stay up under load — designing services, deploying them to cloud infrastructure, and keeping them reliable once real traffic arrives.",
  },
  {
    question: "Are you open to internships or full-time roles?",
    answer: "Yes — I'm actively looking for internships now, and full-time roles from my 2027 graduation. I'm happy to relocate, and I've already shipped production systems at Physics Wallah alongside my degree.",
  },
  {
    question: "What's your experience with infrastructure and DevOps?",
    answer: "I deployed and ran an examination platform on AWS end-to-end — EC2, RDS, S3, CloudFront, Amplify, and SES — serving 400+ concurrent users. I containerise services with Docker and Docker Compose using multi-stage builds, health checks, and runtime secrets, and I work day-to-day on Linux.",
  },
  {
    question: "How do you approach performance issues?",
    answer: "With data first — I profile before optimising. Find the actual bottleneck (slow query, N+1 issue, blocking I/O) and fix the root cause rather than applying generic caching on top of a broken system.",
  },
  {
    question: "What's your preferred stack for a new project?",
    answer: "Node.js or NestJS with TypeScript and PostgreSQL for most service work. Spring Boot + Kafka for event-driven or high-throughput systems. Redis for caching and queue-backed async workloads, Docker and AWS to ship it.",
  },
  {
    question: "How quickly can you onboard to a new codebase?",
    answer: "Fast. I reduced onboarding time by 50% at Physics Wallah by standardising Swagger documentation — and I apply that same discipline when I'm the one joining a new team.",
  },
  {
    question: "Do you work across the full stack?",
    answer: "My depth is in services and infrastructure, but I've shipped full-stack features in React and Next.js — including the frontend of my examination platform. I can own an API layer end-to-end and integrate cleanly with frontend teams.",
  },
];

export const CF_RATING_HISTORY = [
  { label: "Sep '22", rating: 805 },
  { label: "Oct '22", rating: 923 },
  { label: "Nov '22", rating: 874 },
  { label: "Dec '22", rating: 1018 },
  { label: "Jan '23", rating: 956 },
  { label: "Feb '23", rating: 1095 },
  { label: "Mar '23", rating: 1063 },
  { label: "Apr '23", rating: 1148 },
  { label: "May '23", rating: 1198 },
  { label: "Jun '23", rating: 1131 },
  { label: "Jul '23", rating: 1261 },
  { label: "Aug '23", rating: 1192 },
  { label: "Sep '23", rating: 1308 },
  { label: "Oct '23", rating: 1271 },
  { label: "Nov '23", rating: 1352 },
  { label: "Dec '23", rating: 1319 },
  { label: "Jan '24", rating: 1381 },
  { label: "Feb '24", rating: 1347 },
  { label: "Mar '24", rating: 1393 },
  { label: "Apr '24", rating: 1409 },
];

export const ACHIEVEMENTS = [
  {
    title: "PW Hackathon — 1st Prize",
    description: "Designed and built an end-to-end application with a virtual IoT device prototype.",
  },
  {
    title: "Competitive Programming",
    description: "1500+ DSA problems solved. LeetCode max rating 1837, Codeforces max rating 1409.",
  },
];

export const EDUCATION = {
  degree: "B.S. Data Science & Artificial Intelligence",
  institution: "IIT Guwahati",
  expected: "2027",
  cgpa: "8.3 / 10",
};
