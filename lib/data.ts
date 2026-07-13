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
  { value: "8.4", label: "CGPA at IIT Guwahati" },
  { value: "40%", label: "Issue resolution time cut at PW" },
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
    title: "AI-Powered Multi-Tenant CBT Examination Platform",
    category: "EdTech",
    description:
      "A multi-tenant, NTA-style computer-based testing platform serving 400+ concurrent candidates, with institute-level isolation, RBAC, automated evaluation, and real-time result generation. Containerised with Docker, deployed on Kubernetes, and monitored with Prometheus and Grafana.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Kubernetes", "Docker", "AWS", "Prometheus", "Grafana"],
    impact: "400+ concurrent candidates",
    impactDetail: "Multi-tenant, Kubernetes-deployed, fully observable",
    users: "400+",
    usersLabel: "Concurrent",
    metric: "Multi-tenant",
    metricLabel: "Institute isolation",
    features: [
      "AI-assisted proctoring, candidate evaluation, and automated performance reports",
      "Server-controlled timers, auto-save, session recovery, and audit logging",
      "Kubernetes deployment with Prometheus + Grafana observability and health monitoring",
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
    metrics: [
      { value: "40%", label: "Debugging latency", detail: "Modular monolith in TypeScript + Express" },
      { value: "30%", label: "Faster API response", detail: "Prisma ORM and structured schema design" },
      { value: "50%", label: "Onboarding time", detail: "Standardised Swagger API documentation" },
    ],
    highlights: [
      "Hardened system security with a centralised RBAC authentication middleware across all backend services",
      "Worked extensively in Linux environments for development, deployment, monitoring, and production troubleshooting",
      "Collaborated with QA and product teams through release validation and deployment cycles",
    ],
    stack: ["TypeScript", "Express.js", "Prisma", "Linux", "Swagger", "RBAC"],
  },
  {
    company: "Summentors PRO",
    logo: "/logos/summentor-pro.png",
    role: "Tech & Growth Solutions Engineer",
    period: "Mar 2026 — Present",
    location: "Remote",
    current: true,
    description:
      "Building analytics and automation infrastructure, and running the production AWS deployments behind it.",
    metrics: [
      { value: "35%", label: "System throughput", detail: "Redis-backed BullMQ queues and AWS Lambda functions" },
      { value: "12%", label: "Lead conversion", detail: "Analytics dashboards + Mixpanel funnel tracking" },
      { value: "20+ hrs", label: "Saved per month", detail: "Automated workflows via WhatsApp APIs and AWS SES" },
    ],
    highlights: [
      "Managed production deployments on AWS EC2 and RDS, and monitored the cloud infrastructure running them",
    ],
    stack: ["Node.js", "Redis", "BullMQ", "AWS Lambda", "AWS EC2", "AWS RDS", "AWS SES", "Mixpanel"],
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
    metrics: [
      { value: "30+", label: "Students mentored", detail: "DSA problem sets, mock contests, interview prep" },
    ],
    highlights: [
      "Delivered public speaking sessions to improve technical communication for placement readiness",
      "Curated structured problem roadmaps tailored to individual student skill levels",
    ],
    stack: ["DSA", "Competitive Programming", "System Design"],
  },
];

export const SKILLS = {
  languages: ["TypeScript", "JavaScript", "Java", "Python", "C++", "SQL"],
  frameworks: ["Node.js", "NestJS", "Express.js", "Spring Boot", "React", "Prisma", "BullMQ", "gRPC"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
  cloud: ["Docker", "Kubernetes", "AWS EC2", "Lambda", "RDS", "S3", "SES", "Amplify", "Prometheus", "Grafana", "Linux", "Git"],
  security: ["JWT / RBAC", "OAuth / OTP", "Swagger", "Git"],
  ai: ["LLMs", "RAG", "AI Agents", "AI Proctoring", "AI Evaluation", "AI Voice Bots", "TTS", "STT"],
  coreCs: ["System Design", "Distributed Systems", "Operating Systems", "DBMS", "Computer Networks", "DSA"],
  tools: ["CQRS", "Microservices", "Mixpanel"],
};

export const MARQUEE_ITEMS = [
  "TypeScript", "Java", "Node.js", "NestJS", "Spring Boot", "C++",
  "PostgreSQL", "MongoDB", "Redis", "Kafka",
  "Docker", "AWS", "gRPC", "Prisma", "BullMQ",
  "JWT", "RBAC", "CQRS", "Microservices", "LLMs", "RAG",
];

export const MARQUEE_ROW_1 = [
  "TypeScript", "JavaScript", "Java", "Python", "Node.js", "NestJS", "Spring Boot", "Express.js", "React", "Prisma", "BullMQ", "gRPC",
];

export const MARQUEE_ROW_2 = [
  "Docker", "Kubernetes", "AWS", "Lambda", "Prometheus", "Grafana", "Linux", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "Git",
];

export const MARQUEE_ROW_3 = [
  "System Design", "Distributed Systems", "Microservices", "LLMs", "RAG", "AI Agents", "AI Proctoring", "Event-Driven", "CQRS", "DSA",
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
  degree: "B.Sc. (Honours) Data Science & Artificial Intelligence",
  institution: "IIT Guwahati",
  expected: "May 2027",
  cgpa: "8.4 / 10",
};
