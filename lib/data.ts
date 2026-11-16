export const PERSON = {
  name: "Aadhaar Goel",
  role: "Software Engineer",
  tagline:
    "Backend and AI engineer. Built and sold an AI test-automation platform that now runs in production, and shipped backend services in three industry roles, including Physics Wallah.",
  location: "Bengaluru, India",
  email: "goel.aadhaar@outlook.com",
  phone: "+91-9667896164",
  github: "https://github.com/goel-aadhaar",
  linkedin: "https://www.linkedin.com/in/aadhaar-goel/",
  twitter: "https://twitter.com/aadhaar_goel",
  website: "https://goelaadhaar.live",
  resume: "/resume.pdf",
  available: true,
  availablePeriod: "open to internships",
};

export const STATS = [
  { value: "1500+", label: "DSA problems solved" },
  { value: "8.34", label: "CGPA at IIT Guwahati" },
  { value: "3", label: "Industry internships" },
  { value: "4,400+", label: "Automated tests maintained" },
];

export const PROJECTS = [
  {
    id: "01",
    image: "",
    title: "AI Test Automation Platform",
    category: "AI · Acquired",
    description:
      "An AI exploration engine that crawls web and mobile apps to map pages, forms, API calls and workflows, then plans scenarios and writes runnable Playwright tests that self-repair when the app changes. Acquired by a crowd-testing company and now running in production.",
    tech: ["TypeScript", "Fastify", "React", "Playwright", "Appium", "OWASP ZAP", "AWS"],
    impact: "Acquired · in production",
    impactDetail: "Integrated SSO and RBAC with the acquirer's platform",
    users: "4,400+",
    usersLabel: "Automated tests",
    metric: "5 real OSes",
    metricLabel: "Signed runners in CI",
    features: [
      "App-understanding model fusing 5 evidence sources; every extracted rule cites its source for human review",
      "Fast, browser and device test tiers with mutation testing; scored on a planted-bug benchmark",
      "OWASP ZAP security module behind an egress guard",
      "CI/CD to AWS (EC2, S3) with a database backup before every deploy",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
  {
    id: "02",
    image: "",
    title: "Multi-Tenant Computer-Based Test (CBT) Platform",
    category: "EdTech",
    description:
      "An NTA-style exam platform with role-based access, plus 3 AI modules that score candidates and flag suspicious activity. Runs as exam microservices on Kubernetes on AWS.",
    tech: ["Docker", "Kubernetes", "AWS", "Microservices", "RBAC"],
    impact: "5+ exam microservices",
    impactDetail: "Multi-tenant, deployed on AWS Kubernetes",
    users: "3",
    usersLabel: "AI modules",
    metric: "5+",
    metricLabel: "Microservices",
    features: [
      "AI modules that score candidates and flag suspicious activity",
      "Server timers, auto-save, session recovery, and audit logs",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
  {
    id: "03",
    image: "/projects/payments-platform.jpg",
    title: "Payment Wallet — Event-Driven Microservices",
    category: "FinTech",
    description:
      "A wallet backend split into 4 Spring Boot services — User, Transaction, Reward, and Notification — that talk to each other over Apache Kafka.",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
    impact: "4 independent services",
    impactDetail: "Event-driven communication over Kafka",
    users: "4",
    usersLabel: "Services",
    metric: "Event-driven",
    metricLabel: "Kafka",
    features: [
      "User, Transaction, Reward, and Notification services",
      "Services communicate through Kafka events instead of direct calls",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
  {
    id: "04",
    image: "/projects/urbansole.jpg",
    title: "UrbanSole — AI-Powered E-Commerce Platform",
    category: "E-Commerce",
    description:
      "An e-commerce platform with an AI shopping copilot that pairs retrieval-augmented generation (RAG) with conversational memory, plus hybrid product recommendations and semantic search.",
    tech: ["TypeScript", "Next.js", "Python", "PostgreSQL", "Qdrant", "RAG"],
    impact: "Validated on 933 users",
    impactDetail: "Hybrid recommendations + Qdrant semantic search",
    users: "933",
    usersLabel: "Users validated",
    metric: "6",
    metricLabel: "Tool-calling capabilities",
    features: [
      "AI shopping copilot with RAG, conversational memory, and 6 tool-calling capabilities",
      "Hybrid recommendations from 4 ML algorithms plus Qdrant semantic search",
    ],
    link: "https://github.com/goel-aadhaar",
    featured: true,
  },
];

export const EXPERIENCE = [
  {
    company: "Tattva Education Technologies",
    logo: "",
    role: "Software Engineer Intern",
    period: "Sep 2026 — Present",
    location: "Bengaluru · Hybrid",
    current: true,
    description:
      "Owning features end to end on an AI-powered UPSC prep platform, from user pain points to the UX and backend that fix them.",
    metrics: [],
    highlights: [
      "Build backend infrastructure that scales these features, applying systems thinking from data model to deployment",
      "Deploy web and ML services on AWS EC2 and ECR with Docker; set up CI/CD with GitHub Actions",
    ],
    stack: ["Docker", "AWS EC2", "AWS ECR", "GitHub Actions", "CI/CD"],
  },
  {
    company: "Physics Wallah",
    logo: "/logos/Physics_wallah_logo.svg.png",
    role: "Backend Developer Intern",
    period: "Feb 2026 — Aug 2026",
    location: "Bengaluru",
    current: false,
    description:
      "Built Node.js backend services with role-based access control (RBAC) for 2 AI products: interview and assessment platforms.",
    metrics: [
      { value: "30%", label: "Faster API responses", detail: "Query and backend optimization" },
      { value: "40%", label: "Faster issue resolution", detail: "Debugged middleware and queries" },
      { value: "2", label: "AI products", detail: "Interview and assessment platforms" },
    ],
    highlights: [
      "Shipped interview and assessment REST APIs and supported AWS EC2 deployments",
    ],
    stack: ["Node.js", "Express.js", "Prisma", "REST APIs", "RBAC", "AWS EC2"],
  },
  {
    company: "Summentors PRO",
    logo: "/logos/summentor-pro.png",
    role: "Tech & Growth Solutions Intern",
    period: "Mar 2026 — Jul 2026",
    location: "Remote",
    current: false,
    description:
      "Built analytics and automation on an AWS EC2 and RDS stack.",
    metrics: [
      { value: "35%", label: "Job throughput", detail: "Redis-backed BullMQ queues and AWS Lambda" },
      { value: "12%", label: "Lead conversion", detail: "Analytics dashboards + Mixpanel funnel tracking" },
      { value: "20+ hrs", label: "Saved per month", detail: "Automated WhatsApp and AWS SES messaging" },
    ],
    highlights: [],
    stack: ["Node.js", "Redis", "BullMQ", "AWS Lambda", "AWS EC2", "AWS RDS", "AWS SES", "Mixpanel"],
  },
];

export const SKILLS = {
  languages: ["C++", "Java", "Python", "TypeScript", "JavaScript", "SQL"],
  backend: ["Node.js", "Express.js", "Fastify", "Spring Boot", "Prisma ORM", "REST APIs", "Microservices", "Kafka", "BullMQ"],
  databases: ["PostgreSQL", "Redis", "Qdrant"],
  cloud: ["AWS EC2", "RDS", "S3", "Lambda", "SES", "Docker", "Kubernetes", "CI/CD (GitHub Actions)"],
  ai: ["LLMs", "AI Agents", "Tool Calling", "RAG"],
  frontendTesting: ["React", "Next.js", "Playwright", "Appium", "OWASP ZAP", "Mutation Testing"],
  coreCs: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "System Design"],
};

export const MARQUEE_ITEMS = [
  "TypeScript", "Java", "Python", "C++", "Node.js", "Fastify", "Spring Boot",
  "PostgreSQL", "Redis", "Qdrant", "Kafka", "BullMQ",
  "Docker", "Kubernetes", "AWS", "Playwright", "LLMs", "RAG", "Microservices",
];

export const MARQUEE_ROW_1 = [
  "TypeScript", "JavaScript", "Java", "Python", "C++", "Node.js", "Express.js", "Fastify", "Spring Boot", "Prisma", "React", "Next.js",
];

export const MARQUEE_ROW_2 = [
  "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS", "Lambda", "PostgreSQL", "Redis", "Qdrant", "Apache Kafka", "BullMQ",
];

export const MARQUEE_ROW_3 = [
  "System Design", "Microservices", "LLMs", "RAG", "AI Agents", "Tool Calling", "Playwright", "Appium", "OWASP ZAP", "DSA",
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
    title: "How I Cut API Response Times by 30% at Physics Wallah",
    excerpt:
      "A deep dive into the Prisma ORM query fixes and backend optimizations that cut API response times by 30%, and the middleware debugging that cut issue-resolution time by 40%.",
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
      "How we used Mixpanel funnel tracking at Summentors PRO to find where users were dropping off, what we changed, and how it improved lead conversion by 12% over eight weeks.",
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
      "What I learned splitting a payment wallet backend into 4 Spring Boot services (User, Transaction, Reward, and Notification) that talk over Apache Kafka.",
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
    title: "Understand the user",
    description: "Start from real user pain points, not a feature list. At Tattva that means learning where UPSC aspirants get stuck before deciding what to build.",
  },
  {
    step: "02",
    title: "Shape the fix",
    description: "Pick the smallest change that solves the pain, sketch the UX flow, and agree on what success looks like before writing code.",
  },
  {
    step: "03",
    title: "Build end to end",
    description: "Own the UX and the backend together, from data model to deployment, so the feature works as one piece instead of two halves.",
  },
  {
    step: "04",
    title: "Ship, measure, iterate",
    description: "Ship through CI/CD, watch how people actually use it, and improve. Funnel tracking at Summentors PRO lifted lead conversion by 12%.",
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
    title: "Hackathon Winner — 1st of 53 Teams",
    description: "Won PW Institute of Innovation's 24-hour hackathon with an agritech IoT product.",
  },
  {
    title: "Competitive Programming",
    description: "1500+ problems solved. Codeforces Specialist (1409) and LeetCode max rating 1837.",
  },
];

export const EDUCATION = {
  degree: "B.Tech in Data Science & Artificial Intelligence",
  institution: "Indian Institute of Technology, Guwahati",
  expected: "2023 – 2027 (Expected)",
  cgpa: "8.34 / 10",
};
