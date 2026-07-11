"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Briefcase,
  Search,
  PenTool,
  Rocket,
  FileText,
  Globe,
  Bot,
  BarChart3,
  LayoutDashboard,
  BrainCircuit,
  Layers,
} from "lucide-react";
import { PERSON, FREELANCE, HOW_I_WORK } from "@/lib/data";

type View = "home" | "work" | "code" | "blogs" | "freelance";

const HOW_ICONS = [Search, PenTool, Rocket, FileText];

const SERVICES = [
  {
    icon: Globe,
    title: "Company Websites & Landing Pages",
    description: "Fast, conversion-focused websites and landing pages — from design to deployment. Built on Next.js with clean code and great performance scores.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    icon: Wrench,
    title: "Backend API Development",
    description: "REST and gRPC APIs in NestJS, Node.js, or Spring Boot. Typed, documented, and production-ready from day one.",
    tags: ["NestJS", "Node.js", "Spring Boot", "Swagger"],
  },
  {
    icon: Bot,
    title: "AI Voice Bots & Chatbots",
    description: "Custom AI voice bots and chatbots powered by LLMs — real-time speech-to-text and text-to-speech, RAG pipelines, knowledge bases, and WhatsApp/web/voice interfaces.",
    tags: ["LLMs", "RAG", "TTS", "STT", "Voice AI"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & AI Features",
    description: "Recommendation engines, intelligent search, classification models, and predictive features embedded directly into your backend.",
    tags: ["Python", "scikit-learn", "TensorFlow", "FastAPI"],
  },
  {
    icon: LayoutDashboard,
    title: "CRMs & Admin Panels",
    description: "Custom CRM dashboards and admin panels with role-based access, data tables, reporting views, and workflow automation.",
    tags: ["React", "Node.js", "RBAC", "PostgreSQL"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Funnel Tracking",
    description: "Event tracking, conversion funnels, cohort analysis, and real-time dashboards. Integrations with Mixpanel, GA4, and custom analytics pipelines.",
    tags: ["Mixpanel", "GA4", "Custom Events", "Dashboards"],
  },
  {
    icon: Layers,
    title: "API & Third-party Integrations",
    description: "Payment gateways (Razorpay, Stripe), WhatsApp Business API, email platforms, webhooks, and any third-party SaaS your product depends on.",
    tags: ["Razorpay", "Stripe", "WhatsApp API", "Webhooks"],
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security Systems",
    description: "JWT + RBAC middleware, OAuth flows, multi-tenant architecture, OTP auth, and secure session management.",
    tags: ["JWT", "RBAC", "OAuth", "OTP"],
  },
];

const ENGAGEMENTS = [
  {
    client: "PWLeapx",
    category: "EdTech",
    result: "Real-time leaderboard and gamification API serving 50k+ concurrent students",
    metric: "50k+ concurrent users",
    color: "#22C55E",
  },
  {
    client: "PW Skills Portal",
    category: "EdTech",
    result: "Course delivery platform with Redis-cached progress tracking and OTP auth flow",
    metric: "1,500+ active users",
    color: "#22C55E",
  },
  {
    client: "Sahi Loan",
    category: "FinTech",
    result: "Loan origination backend with automated eligibility engine and Razorpay disbursement",
    metric: "Automated pipeline",
    color: "#FFA116",
  },
  {
    client: "Loopskills",
    category: "EdTech",
    result: "Skill assessment engine with adaptive scoring and automated certificate generation",
    metric: "Fully automated",
    color: "#22C55E",
  },
  {
    client: "Summentors PRO",
    category: "EdTech",
    result: "Analytics dashboards, Mixpanel funnel tracking, WhatsApp/Email API integrations",
    metric: "12% lead uplift",
    color: "#a78bfa",
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  EdTech:      { bg: "rgba(34,197,94,0.1)",   text: "#22C55E", border: "rgba(34,197,94,0.2)" },
  FinTech:     { bg: "rgba(255,161,22,0.1)",  text: "#FFA116", border: "rgba(255,161,22,0.2)" },
};

export function FreelanceView({ onNavigate: _ }: { onNavigate: (v: View) => void }) {
  return (
    <div>
      <section className="l-section" style={{ paddingTop: 140 }}>
        <div className="l-container">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 64 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  height: 28,
                  padding: "0 12px",
                  borderRadius: 9999,
                  background: "rgba(255,69,0,0.1)",
                  border: "1px solid rgba(255,69,0,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  fontFamily: "var(--l-font-mono)",
                  fontSize: 11,
                  color: "var(--l-primary)",
                  letterSpacing: "0.5px",
                }}
              >
                <Briefcase size={11} />
                Available for projects
              </div>
            </div>
            <span className="l-eyebrow">Freelance</span>
            <h1
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-2.5px",
                lineHeight: 1.05,
                marginTop: 8,
                maxWidth: 720,
              }}
            >
              Backend consulting for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FF4500, #FF8C00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ambitious teams.
              </span>
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--l-text-soft)",
                maxWidth: 620,
                marginTop: 20,
              }}
            >
              {FREELANCE.tagline} Whether it&apos;s a landing page or a full AI-powered platform — I take it end-to-end and ship it right.
            </p>
          </motion.div>

          {/* ── Stats row ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginBottom: 80,
            }}
            className="code-stat-grid"
          >
            {[
              { value: FREELANCE.count, label: "Client projects delivered", color: "var(--l-primary)" },
              { value: "6+", label: "Industries served", color: "#22C55E" },
              { value: "50k+", label: "End users impacted", color: "#a78bfa" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="glass-card"
                style={{ padding: "28px 24px", textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily: "var(--l-font-heading)",
                    fontSize: 48,
                    fontWeight: 700,
                    letterSpacing: "-2.5px",
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--l-font-mono)",
                    fontSize: 11,
                    color: "var(--l-text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Services ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 24 }}
          >
            <span className="l-eyebrow">Services</span>
            <h2
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                marginTop: 8,
                marginBottom: 32,
              }}
            >
              Everything from websites to AI systems.
            </h2>
          </motion.div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 80 }}
            className="how-grid"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card"
                style={{ padding: 28 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(255,69,0,0.1)",
                    border: "1px solid rgba(255,69,0,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--l-primary)",
                    marginBottom: 18,
                  }}
                >
                  <service.icon size={20} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--l-font-heading)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--l-text)",
                    letterSpacing: "-0.3px",
                    marginBottom: 10,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--l-text-soft)", marginBottom: 16 }}>
                  {service.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {service.tags.map((t) => (
                    <span key={t} className="l-chip">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── How I Work ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 32 }}
          >
            <span className="l-eyebrow">Process</span>
            <h2
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                marginTop: 8,
                marginBottom: 32,
              }}
            >
              How I work with clients.
            </h2>
          </motion.div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 80 }}
            className="how-grid"
          >
            {HOW_I_WORK.map((step, i) => {
              const Icon = HOW_ICONS[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  className="glass-card"
                  style={{ padding: 24, position: "relative", overflow: "hidden" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--l-font-mono)",
                      fontSize: 48,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.04)",
                      position: "absolute",
                      top: 8,
                      right: 12,
                      lineHeight: 1,
                      letterSpacing: "-3px",
                      pointerEvents: "none",
                    }}
                  >
                    {step.step}
                  </div>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      background: "rgba(255,69,0,0.1)",
                      border: "1px solid rgba(255,69,0,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--l-primary)",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={17} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--l-font-heading)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--l-text)",
                      letterSpacing: "-0.3px",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "var(--l-text-soft)" }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ── Past Engagements ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 32 }}
          >
            <span className="l-eyebrow">Past Engagements</span>
            <h2
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                marginTop: 8,
                marginBottom: 32,
              }}
            >
              Work I&apos;ve shipped for clients.
            </h2>
          </motion.div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 80 }}
            className="work-grid-3"
          >
            {ENGAGEMENTS.map((eng, i) => {
              const cat = CATEGORY_COLORS[eng.category] ?? { bg: "rgba(255,69,0,0.1)", text: "#FF4500", border: "rgba(255,69,0,0.2)" };
              return (
                <motion.div
                  key={eng.client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass-card"
                  style={{ padding: 24 }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--l-font-heading)",
                          fontSize: 15,
                          fontWeight: 700,
                          color: "var(--l-text)",
                          letterSpacing: "-0.3px",
                          marginBottom: 5,
                        }}
                      >
                        {eng.client}
                      </div>
                      <span
                        style={{
                          display: "inline-flex",
                          height: 20,
                          padding: "0 8px",
                          borderRadius: 9999,
                          background: cat.bg,
                          border: `1px solid ${cat.border}`,
                          fontFamily: "var(--l-font-mono)",
                          fontSize: 9,
                          color: cat.text,
                          alignItems: "center",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {eng.category}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--l-font-heading)",
                        fontSize: 13,
                        fontWeight: 700,
                        color: eng.color,
                        textAlign: "right",
                        letterSpacing: "-0.2px",
                      }}
                    >
                      {eng.metric}
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle2 size={13} style={{ color: "var(--l-primary)", flexShrink: 0, marginTop: 2 }} />
                      <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--l-text-soft)" }}>
                        {eng.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
              padding: "48px 48px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(255,69,0,0.06) 0%, rgba(75,0,130,0.06) 100%)",
            }}
          >
            <span className="l-eyebrow" style={{ justifyContent: "center" }}>Start a project</span>
            <h2
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-2.5px",
                lineHeight: 1.0,
                marginBottom: 16,
                marginTop: 8,
              }}
            >
              Have a{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FF4500, #FF8C00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                project in mind?
              </span>
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--l-text-soft)",
                maxWidth: 480,
                margin: "0 auto 32px",
              }}
            >
              I take on a limited number of freelance engagements each quarter. Reach out early — I&apos;ll respond within 24 hours.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href={`mailto:${PERSON.email}`} className="l-btn-primary">
                <Mail size={16} /> Get in touch
              </a>
              <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="l-btn-ghost">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                marginTop: 24,
                fontFamily: "var(--l-font-mono)",
                fontSize: 11,
                color: "var(--l-text-muted)",
                letterSpacing: "0.5px",
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)" }} />
              Usually responds within 24 hours
            </div>
            <p style={{ marginTop: 48, fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", letterSpacing: "1px" }}>
              © 2025 Aadhaar Goel · Built with Next.js & Framer Motion
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
