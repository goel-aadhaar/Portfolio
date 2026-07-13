"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Server,
  Cloud,
  Zap,
  Shield,
  Code2,
  Layers,
  MapPin,
  GraduationCap,
  Search,
  PenTool,
  Rocket,
  FileText,
  Plus,
  Minus,
} from "lucide-react";
import {
  PERSON,
  STATS,
  EXPERIENCE,
  MARQUEE_ROW_1,
  MARQUEE_ROW_2,
  MARQUEE_ROW_3,
  HOW_I_WORK,
  FAQS,
} from "@/lib/data";

type View = "home" | "work" | "code" | "blogs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

function MarqueeRow({ items, direction = "fwd" }: { items: string[]; direction?: "fwd" | "rev" | "slow" }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-outer py-3">
      <div className={`marquee-track ${direction}`}>
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

function FloatingCard({
  label,
  value,
  sub,
  accentColor,
  dotColor,
  delay,
  floatDelay = 0,
  style,
}: {
  label: string;
  value: string;
  sub?: string;
  accentColor: string;
  dotColor: string;
  delay: number;
  floatDelay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 4.5,
          delay: delay + floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        position: "absolute",
        padding: "12px 16px",
        background: "rgba(5,5,5,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: 14,
        border: `1px solid ${accentColor}`,
        boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)`,
        minWidth: 150,
        zIndex: 20,
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: dotColor, boxShadow: `0 0 6px ${dotColor}` }} />
        <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 9, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "1.2px" }}>
          {label}
        </span>
      </div>
      <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 15, fontWeight: 700, color: dotColor, letterSpacing: "-0.3px", lineHeight: 1.2 }}>
        {value}
      </div>
      {sub && (
        <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 10, color: "var(--l-text-muted)", marginTop: 3, letterSpacing: "0.3px" }}>
          {sub}
        </div>
      )}
    </motion.div>
  );
}

const bentoItems = [
  { icon: Server, title: "Systems Architecture", body: "Modular monoliths and microservices in Node.js, NestJS, Spring Boot, and TypeScript — built for maintainability and production scale.", wide: true, accent: "rgba(255,69,0,0.07)" },
  { icon: Cloud, title: "Cloud & Infrastructure", body: "Production deployments on AWS — EC2, RDS, S3, CloudFront, Amplify, and SES. Dockerised services with multi-stage builds, Docker Compose, and health-checked releases.", wide: false, accent: "rgba(34,197,94,0.07)" },
  { icon: Code2, title: "DSA & Problem Solving", body: "1500+ problems solved. LeetCode max 1837 · Codeforces max 1409 (Specialist).", wide: false, accent: "rgba(75,0,130,0.1)" },
  { icon: Zap, title: "Performance", body: "Redis-backed BullMQ queues, Kafka event streams, ORM-level query optimisation. 40% latency reduction at Physics Wallah.", wide: false, accent: "rgba(255,69,0,0.05)" },
  { icon: Shield, title: "Auth & Security", body: "Centralised JWT + RBAC middleware, API gateway patterns, secure multi-tenant system design.", wide: false, accent: "rgba(34,197,94,0.05)" },
  { icon: Layers, title: "Distributed Systems", body: "Event-driven architecture with Apache Kafka, gRPC inter-service communication, fault-tolerant microservices containerised with Docker Compose.", wide: false, accent: "rgba(255,69,0,0.05)" },
];

const HOW_ICONS = [Search, PenTool, Rocket, FileText];

const SKILL_GROUPS = [
  { label: "Languages",        color: "#FF4500", items: ["TypeScript", "Java", "C++", "SQL", "Node.js"] },
  { label: "Frameworks",       color: "#a78bfa", items: ["Spring Boot", "NestJS", "Express.js", "Prisma", "BullMQ", "gRPC", "REST"] },
  { label: "Databases",        color: "#FFA116", items: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka"] },
  { label: "Cloud & DevOps",   color: "#22C55E", items: ["AWS EC2", "RDS", "S3", "CloudFront", "Amplify", "SES", "Docker", "Docker Compose", "Linux", "CI/CD", "Vercel"] },
  { label: "Security & Tooling", color: "#FF8C00", items: ["JWT / RBAC", "OAuth / OTP", "Swagger", "Git"] },
  { label: "AI & Voice",       color: "#5BC0EB", items: ["LLMs", "RAG", "AI Voice Bots", "TTS", "STT"] },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ borderBottom: "1px solid var(--l-divider)" }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: "var(--l-font-heading)", fontSize: 16, fontWeight: 600, color: open ? "var(--l-text)" : "var(--l-text-soft)", letterSpacing: "-0.2px", transition: "color 200ms" }}>
          {question}
        </span>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: open ? "rgba(255,69,0,0.12)" : "rgba(255,255,255,0.05)", border: `1px solid ${open ? "rgba(255,69,0,0.3)" : "rgba(255,255,255,0.08)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: open ? "var(--l-primary)" : "var(--l-text-muted)", flexShrink: 0, transition: "all 200ms" }}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: "hidden" }}>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--l-text-soft)", paddingBottom: 22, maxWidth: 680 }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function HomeView({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="l-section" style={{ paddingTop: 140, minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Ambient glow */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 60% at 5% 50%, rgba(255,69,0,0.05) 0%, transparent 65%), radial-gradient(ellipse 50% 70% at 95% 20%, rgba(75,0,130,0.05) 0%, transparent 65%)" }} />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)" }} />

        <div className="l-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center" }}>

            {/* Left: text */}
            <div>
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" style={{ marginBottom: 28 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 28, padding: "0 14px", borderRadius: 9999, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", fontSize: 12, fontFamily: "var(--l-font-mono)", color: "#22C55E", letterSpacing: "0.5px" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 0 3px rgba(34,197,94,0.25)" }} />
                  Available · Open to internships &amp; full-time roles
                </span>
              </motion.div>

              <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show">
                <h1 style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1.0, letterSpacing: "-3px", fontWeight: 700, marginBottom: 4 }}>
                  <span style={{ color: "var(--l-text)" }}>Aadhaar</span>{" "}
                  <span style={{ background: "linear-gradient(90deg, #FF4500 20%, #FF8C00 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Goel</span>
                </h1>
              </motion.div>

              <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" style={{ marginBottom: 8 }}>
                <p style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-1.5px", fontWeight: 600, color: "var(--l-text)" }}>
                  Software{" "}
                  <span style={{ background: "linear-gradient(90deg, #FF4500, #FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Engineer</span>
                </p>
              </motion.div>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--l-font-mono)", fontSize: 12, color: "var(--l-text-muted)", letterSpacing: "0.3px" }}>
                    <GraduationCap size={13} style={{ color: "#22C55E" }} />
                    <span style={{ color: "#22C55E" }}>IIT Guwahati</span>
                    <span>· CGPA 8.3 · Class of 2027</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--l-font-mono)", fontSize: 12, color: "var(--l-text-muted)" }}>
                    <MapPin size={12} style={{ color: "var(--l-primary)" }} />
                    India
                  </span>
                </div>
              </motion.div>

              <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}>
                <span style={{ color: "var(--l-text-soft)" }}>CS student at </span>
                <span style={{ color: "#22C55E", fontWeight: 500 }}>IIT Guwahati</span>
                <span style={{ color: "var(--l-text-soft)" }}> building production systems and the cloud infrastructure they run on — </span>
                <span style={{ color: "var(--l-primary)", fontWeight: 500 }}>fast</span>
                <span style={{ color: "var(--l-text-soft)" }}>, </span>
                <span style={{ color: "#FFA116", fontWeight: 500 }}>reliable</span>
                <span style={{ color: "var(--l-text-soft)" }}>, and built to scale.</span>
              </motion.p>

              <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                <button onClick={() => onNavigate("work")} className="l-btn-primary">
                  View Work <ArrowUpRight size={16} />
                </button>
                <a href={PERSON.resume} target="_blank" rel="noopener noreferrer" className="l-btn-ghost">
                  <FileText size={16} /> Resume
                </a>
                <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="l-btn-ghost">
                  <Github size={16} /> GitHub
                </a>
              </motion.div>

              <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show" style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: Github, href: PERSON.github, label: "GitHub" },
                  { icon: Linkedin, href: PERSON.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${PERSON.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" title={label}
                    style={{ display: "flex", alignItems: "center", gap: 7, height: 36, padding: "0 14px", borderRadius: 9999, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--l-text-muted)", fontSize: 12, fontFamily: "var(--l-font-mono)", transition: "color 200ms, border-color 200ms", textDecoration: "none" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--l-primary)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,69,0,0.3)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--l-text-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    <Icon size={14} />{label}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right: phone + floating cards */}
            <div className="hero-phone" style={{ position: "relative", width: 360, height: 540, flexShrink: 0 }}>
              <FloatingCard label="Currently at" value="Physics Wallah" sub="Backend Dev · Bengaluru" accentColor="rgba(255,69,0,0.25)" dotColor="#FF4500" delay={0.7} floatDelay={0} style={{ top: 10, left: 0 }} />
              <FloatingCard label="LeetCode Max Rating" value="1837" sub="Top algorithmic problem solver" accentColor="rgba(255,161,22,0.25)" dotColor="#FFA116" delay={0.9} floatDelay={1.5} style={{ right: 0, top: "38%" }} />
              <FloatingCard label="IIT Guwahati" value="8.3 CGPA" sub="B.S. DS & AI · Class of 2027" accentColor="rgba(34,197,94,0.2)" dotColor="#22C55E" delay={1.1} floatDelay={0.8} style={{ bottom: 20, left: 10 }} />

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} style={{ position: "absolute", left: 80, top: 55, zIndex: 10 }}>
                <div className="phone-mockup">
                  <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingTop: 8 }}>
                    <div style={{ width: 80, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.1)" }} />
                  </div>
                  <div style={{ padding: "16px 14px", fontFamily: "var(--l-font-mono)", fontSize: 10, lineHeight: 1.75 }}>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>{">"} GET /api/transactions</span><br />
                    <span style={{ color: "#22C55E" }}>HTTP/1.1 200 OK</span><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>X-Response-Time:</span>{" "}<span style={{ color: "#FF4500" }}>28ms</span>
                    <br /><br />
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>{"{"}</span><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>{"  "}&#34;status&#34;:</span>{" "}<span style={{ color: "#22C55E" }}>&#34;success&#34;</span><span style={{ color: "rgba(255,255,255,0.5)" }}>,</span><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>{"  "}&#34;data&#34;:</span>{" "}<span style={{ color: "rgba(255,255,255,0.5)" }}>{"{"}</span><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>{"    "}&#34;userId&#34;:</span>{" "}<span style={{ color: "#a78bfa" }}>&#34;usr_8f3j2k&#34;</span><span style={{ color: "rgba(255,255,255,0.5)" }}>,</span><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>{"    "}&#34;balance&#34;:</span>{" "}<span style={{ color: "#FFA116" }}>2847.50</span><span style={{ color: "rgba(255,255,255,0.5)" }}>,</span><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>{"    "}&#34;currency&#34;:</span>{" "}<span style={{ color: "#a78bfa" }}>&#34;INR&#34;</span><br />
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>{"  }"}</span><br />
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>{"}"}</span>
                    <br /><br />
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>{">"} POST /api/transfer</span><br />
                    <span style={{ color: "#22C55E" }}>HTTP/1.1 202 Accepted</span><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>X-Trace-ID:</span>{" "}<span style={{ color: "#a78bfa" }}>txn_9k2p...</span>
                    <br /><br />
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>▋</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", width: 80, height: 4, borderRadius: 9999, background: "rgba(255,255,255,0.15)" }} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div style={{ borderTop: "1px solid var(--l-divider)", borderBottom: "1px solid var(--l-divider)" }}>
        <div className="l-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", padding: "32px 0" }}>
            {STATS.map((stat, i) => {
              const colors = ["#FFA116", "#22C55E", "#FF4500", "#a78bfa"];
              const color = colors[i];
              return (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ textAlign: "center", padding: "0 16px", borderRight: i < STATS.length - 1 ? "1px solid var(--l-divider)" : "none" }}
                >
                  <div style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-1.5px", color, lineHeight: 1, marginBottom: 8 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 12 }}>
                    {stat.label}
                  </div>
                  <div style={{ height: 2, borderRadius: 9999, background: `${color}20`, overflow: "hidden" }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.1 + 0.3, ease: "easeOut" }} style={{ height: "100%", background: color, borderRadius: 9999 }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Manifesto ── */}
      <section className="l-section">
        <div className="l-container">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} style={{ maxWidth: 820 }}>
            <span className="l-eyebrow">Philosophy</span>
            <p style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15, fontWeight: 600, letterSpacing: "-1.5px", color: "var(--l-text)" }}>
              Good engineering is{" "}<span style={{ color: "#FFA116" }}>invisible.</span>{" "}
              <span style={{ color: "var(--l-text-soft)" }}>You only notice it when it breaks — so I build systems that{" "}</span>
              <span style={{ color: "#22C55E" }}>don&apos;t.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="l-section" style={{ paddingTop: 0 }}>
        <div className="l-container">
          <span className="l-eyebrow">Expertise</span>
          <div style={{ borderTop: "1px solid var(--l-divider)", marginTop: 8 }}>
            {bentoItems.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ display: "grid", gridTemplateColumns: "64px 1fr 40px", gap: "0 36px", padding: "32px 0", borderBottom: "1px solid var(--l-divider)", alignItems: "flex-start" }}
              >
                <div>
                  <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", letterSpacing: "1.5px", marginBottom: 18 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: item.accent, border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--l-primary)" }}>
                    <item.icon size={17} />
                  </div>
                </div>
                <div style={{ paddingTop: 2 }}>
                  <h3 style={{ fontFamily: "var(--l-font-heading)", fontSize: 20, fontWeight: 700, color: "var(--l-text)", letterSpacing: "-0.5px", marginBottom: 10, lineHeight: 1.2 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--l-text-soft)", maxWidth: 600 }}>{item.body}</p>
                </div>
                <div style={{ paddingTop: 4, display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.2)" }}>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div style={{ borderTop: "1px solid var(--l-divider)", borderBottom: "1px solid var(--l-divider)", padding: "8px 0" }}>
        <MarqueeRow items={MARQUEE_ROW_1} direction="fwd" />
        <MarqueeRow items={MARQUEE_ROW_2} direction="rev" />
        <MarqueeRow items={MARQUEE_ROW_3} direction="slow" />
      </div>

      {/* ── Tech Stack ── */}
      <section className="l-section">
        <div className="l-container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} style={{ marginBottom: 40 }}>
            <span className="l-eyebrow">Stack</span>
            <h2 style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginTop: 8, maxWidth: 520 }}>
              Tools I{" "}
              <span style={{ background: "linear-gradient(90deg, #FF4500, #FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ship with.</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div key={group.label} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: gi * 0.08 }}
                style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, alignItems: "center", padding: "22px 0", borderBottom: gi < SKILL_GROUPS.length - 1 ? "1px solid var(--l-divider)" : "none" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: group.color, boxShadow: `0 0 8px ${group.color}70`, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "1.5px" }}>{group.label}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {group.items.map((item, ii) => (
                    <motion.span key={item} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: gi * 0.06 + ii * 0.04 }}
                      style={{ display: "inline-flex", alignItems: "center", height: 28, padding: "0 12px", borderRadius: 6, background: `${group.color}12`, border: `1px solid ${group.color}28`, fontFamily: "var(--l-font-mono)", fontSize: 12, color: group.color, letterSpacing: "0.2px", fontWeight: 500 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Work ── */}
      <section className="l-section" style={{ paddingTop: 0, borderTop: "1px solid var(--l-divider)" }}>
        <div className="l-container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} style={{ marginBottom: 56 }}>
            <span className="l-eyebrow">Process</span>
            <h2 style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginTop: 8, maxWidth: 600 }}>
              How I{" "}
              <span style={{ background: "linear-gradient(90deg, #FF4500, #FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>work.</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="how-grid">
            {HOW_I_WORK.map((step, i) => {
              const Icon = HOW_ICONS[i];
              const isFirst = i === 0;
              return (
                <motion.div key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  style={{
                    borderTop: `2px solid ${isFirst ? "var(--l-primary)" : "rgba(255,255,255,0.07)"}`,
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    padding: "28px 32px 28px 0",
                    paddingLeft: isFirst ? 0 : 32,
                  }}
                >
                  <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: isFirst ? "var(--l-primary)" : "var(--l-text-muted)", letterSpacing: "1.5px", marginBottom: 24 }}>
                    {step.step}
                  </div>
                  <div style={{ marginBottom: 20, color: isFirst ? "var(--l-primary)" : "var(--l-text-muted)" }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontFamily: "var(--l-font-heading)", fontSize: 16, fontWeight: 700, color: "var(--l-text)", letterSpacing: "-0.3px", marginBottom: 10 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--l-text-soft)" }}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="l-section" style={{ paddingTop: 0 }}>
        <div className="l-container">
          <div style={{ marginBottom: 40 }}>
            <span className="l-eyebrow">Experience</span>
            <h2 style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginTop: 8 }}>
              Where I&apos;ve shipped{" "}
              <span style={{ color: "var(--l-primary)" }}>real work.</span>
            </h2>
          </div>

          <div style={{ borderTop: "1px solid var(--l-divider)" }}>
            {EXPERIENCE.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 56, padding: "44px 0", borderBottom: "1px solid var(--l-divider)", alignItems: "flex-start" }}
                className="exp-row"
              >
                {/* Left: company identity */}
                <div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    {exp.logo
                      ? <img src={exp.logo} alt={exp.company} style={{ width: 36, height: 36, objectFit: "contain" }} />
                      : <span style={{ fontFamily: "var(--l-font-heading)", fontSize: 18, fontWeight: 700, color: "var(--l-text-muted)" }}>{exp.company[0]}</span>
                    }
                  </div>
                  <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 15, fontWeight: 700, color: "var(--l-text)", letterSpacing: "-0.3px", marginBottom: 8 }}>
                    {exp.company}
                  </div>
                  {exp.current && (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, height: 20, padding: "0 8px", borderRadius: 9999, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", fontSize: 9, fontFamily: "var(--l-font-mono)", color: "#22C55E", letterSpacing: "0.5px" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
                      Current
                    </span>
                  )}
                  <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", marginTop: 16, lineHeight: 1.9, letterSpacing: "0.3px" }}>
                    {exp.period}<br />{exp.location}
                  </div>
                </div>

                {/* Right: role + details */}
                <div>
                  <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 13, color: "var(--l-primary)", fontWeight: 600, marginBottom: 16, letterSpacing: "0.3px" }}>
                    {exp.role}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--l-text-soft)", marginBottom: 22 }}>{exp.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 13, lineHeight: 1.6, color: "var(--l-text-soft)" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,69,0,0.5)", flexShrink: 0, marginTop: 7 }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="l-section" style={{ borderTop: "1px solid var(--l-divider)", paddingTop: 80 }}>
        <div className="l-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "flex-start" }} className="faq-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
              <span className="l-eyebrow">FAQ</span>
              <h2 style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginTop: 8, marginBottom: 16 }}>
                Common{" "}
                <span style={{ background: "linear-gradient(90deg, #FF4500, #FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>questions.</span>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--l-text-muted)" }}>
                Answers to what recruiters and hiring managers usually ask before reaching out.
              </p>
            </motion.div>
            <div style={{ borderTop: "1px solid var(--l-divider)" }}>
              {FAQS.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="l-section" style={{ borderTop: "1px solid var(--l-divider)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(255,69,0,0.09) 0%, transparent 70%)" }} />
        <div className="l-container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
            <span className="l-eyebrow" style={{ justifyContent: "center" }}>Get in Touch</span>
            <h2 style={{ fontFamily: "var(--l-font-heading)", fontSize: "clamp(40px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-4px", lineHeight: 0.95, marginBottom: 24 }}>
              <span style={{ color: "var(--l-text)" }}>Let&apos;s</span>{" "}
              <span style={{ background: "linear-gradient(90deg, #FF4500, #FF8C00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Build.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--l-text-soft)", maxWidth: 480, margin: "0 auto 40px" }}>
              I&apos;m looking for software, DevOps, and infrastructure internships now,
              and full-time roles from 2027. If your team is building something ambitious, let&apos;s talk.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href={`mailto:${PERSON.email}`} className="l-btn-primary"><Mail size={16} /> Send a message</a>
              <a href={PERSON.resume} target="_blank" rel="noopener noreferrer" className="l-btn-ghost"><FileText size={16} /> Resume</a>
              <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="l-btn-ghost"><Linkedin size={16} /> LinkedIn</a>
            </div>
            <p style={{ marginTop: 64, fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", letterSpacing: "1px" }}>
              © 2025 Aadhaar Goel · Built with Next.js & Framer Motion
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
