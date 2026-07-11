"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Briefcase, CheckCircle2, Users, Zap } from "lucide-react";
import { PROJECTS, FREELANCE } from "@/lib/data";

type View = "home" | "work" | "code" | "blogs" | "freelance";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  FinTech:     { bg: "rgba(255,161,22,0.1)",  text: "#FFA116", border: "rgba(255,161,22,0.2)" },
  "E-Commerce":{ bg: "rgba(167,139,250,0.1)", text: "#a78bfa", border: "rgba(167,139,250,0.2)" },
  EdTech:      { bg: "rgba(34,197,94,0.1)",   text: "#22C55E", border: "rgba(34,197,94,0.2)" },
};

const CARD_PATTERNS = [
  "linear-gradient(135deg, rgba(255,69,0,0.12) 0%, rgba(75,0,130,0.08) 100%)",
  "linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(255,69,0,0.06) 100%)",
  "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(0,160,160,0.08) 100%)",
  "linear-gradient(135deg, rgba(0,160,160,0.1) 0%, rgba(34,197,94,0.06) 100%)",
  "linear-gradient(135deg, rgba(91,192,235,0.1) 0%, rgba(75,0,130,0.08) 100%)",
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const cat = CATEGORY_COLORS[project.category] ?? { bg: "rgba(255,69,0,0.1)", text: "#FF4500", border: "rgba(255,69,0,0.2)" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      style={{
        borderRadius: 20,
        border: "1px solid var(--l-card-border)",
        background: "var(--l-card)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 250ms, box-shadow 250ms",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--l-card-border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Visual header */}
      <div
        style={{
          height: 140,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Project image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.45,
            }}
          />
        )}
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: CARD_PATTERNS[index % CARD_PATTERNS.length],
          }}
        />
        {/* Grid lines decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Project ID watermark */}
        <span
          style={{
            fontFamily: "var(--l-font-mono)",
            fontSize: 64,
            fontWeight: 800,
            color: "rgba(255,255,255,0.06)",
            letterSpacing: "-4px",
            userSelect: "none",
            position: "absolute",
          }}
        >
          {project.id}
        </span>
        {/* Category badge */}
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 24,
              padding: "0 10px",
              borderRadius: 9999,
              background: cat.bg,
              border: `1px solid ${cat.border}`,
              fontFamily: "var(--l-font-mono)",
              fontSize: 10,
              fontWeight: 600,
              color: cat.text,
              letterSpacing: "0.5px",
            }}
          >
            {project.category}
          </span>
        </div>
        {/* Link button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "var(--l-text-muted)",
            transition: "color 200ms, background 200ms",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--l-primary)";
            el.style.background = "rgba(255,69,0,0.15)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--l-text-muted)";
            el.style.background = "rgba(255,255,255,0.08)";
          }}
        >
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Card body */}
      <div style={{ padding: "24px 24px 0" }}>
        <h2
          style={{
            fontFamily: "var(--l-font-heading)",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "-0.4px",
            color: "var(--l-text)",
            marginBottom: 10,
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h2>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: "var(--l-text-soft)",
            marginBottom: 20,
          }}
        >
          {project.description}
        </p>

        {/* Metrics row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
              <Users size={11} style={{ color: cat.text }} />
              <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 9, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                {project.usersLabel}
              </span>
            </div>
            <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 18, fontWeight: 700, color: cat.text, letterSpacing: "-0.5px", lineHeight: 1 }}>
              {project.users}
            </div>
          </div>
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
              <Zap size={11} style={{ color: "#22C55E" }} />
              <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 9, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                {project.metricLabel}
              </span>
            </div>
            <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 18, fontWeight: 700, color: "#22C55E", letterSpacing: "-0.5px", lineHeight: 1 }}>
              {project.metric}
            </div>
          </div>
        </div>

        {/* Feature bullets */}
        <div style={{ marginBottom: 0 }}>
          {project.features.map((f, fi) => (
            <div
              key={fi}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                marginBottom: fi < project.features.length - 1 ? 7 : 0,
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: cat.text,
                  flexShrink: 0,
                  marginTop: 6,
                }}
              />
              <span style={{ fontSize: 12.5, color: "var(--l-text-soft)", lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Read More footer */}
      <div style={{ marginTop: "auto", padding: "20px 24px 22px" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontFamily: "var(--l-font-heading)",
              fontSize: 13,
              fontWeight: 600,
              color: cat.text,
              textDecoration: "none",
              letterSpacing: "-0.2px",
              transition: "gap 200ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "9px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "5px";
            }}
          >
            Read More <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Tech chips */}
      <div style={{ padding: "0 24px 20px", display: "flex", flexWrap: "wrap", gap: 5 }}>
        {project.tech.map((t) => (
          <span key={t} className="l-chip">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export function WorkView({ onNavigate: _ }: { onNavigate: (v: View) => void }) {
  return (
    <div>
      <section className="l-section" style={{ paddingTop: 140 }}>
        <div className="l-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 56 }}
          >
            <span className="l-eyebrow">Selected Work</span>
            <h1
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 700,
                letterSpacing: "-2.5px",
                lineHeight: 1.05,
                color: "var(--l-text)",
                marginTop: 4,
                maxWidth: 640,
              }}
            >
              Projects built for{" "}
              <span style={{ color: "var(--l-primary)" }}>production.</span>
            </h1>
          </motion.div>

          {/* Project grid — 3 columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginBottom: 20,
            }}
            className="work-grid-3"
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* ── Freelance & Client Work ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            style={{ marginTop: 64 }}
          >
            <div
              className="glass-card"
              style={{
                padding: "40px 40px",
                background: "linear-gradient(135deg, rgba(255,69,0,0.05) 0%, rgba(75,0,130,0.05) 100%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 24,
                  marginBottom: 32,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 9,
                        background: "rgba(255,69,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--l-primary)",
                      }}
                    >
                      <Briefcase size={16} />
                    </div>
                    <span className="l-eyebrow" style={{ marginBottom: 0 }}>
                      Freelance & Client Work
                    </span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--l-text-soft)", maxWidth: 520 }}>
                    {FREELANCE.tagline}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--l-font-heading)",
                      fontSize: 56,
                      fontWeight: 700,
                      letterSpacing: "-3px",
                      lineHeight: 1,
                      color: "var(--l-primary)",
                    }}
                  >
                    {FREELANCE.count}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--l-font-mono)",
                      fontSize: 11,
                      color: "var(--l-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      marginTop: 4,
                    }}
                  >
                    Client projects
                  </div>
                </div>
              </div>

              {/* Client badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 32,
                  paddingBottom: 28,
                  borderBottom: "1px solid var(--l-divider)",
                }}
              >
                {FREELANCE.clients.map((client) => (
                  <span
                    key={client}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 32,
                      padding: "0 16px",
                      borderRadius: 9999,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      fontFamily: "var(--l-font-heading)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--l-text)",
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {client}
                  </span>
                ))}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: 32,
                    padding: "0 16px",
                    borderRadius: 9999,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px dashed rgba(255,255,255,0.08)",
                    fontFamily: "var(--l-font-mono)",
                    fontSize: 11,
                    color: "var(--l-text-muted)",
                    letterSpacing: "0.5px",
                  }}
                >
                  +10 more
                </span>
              </div>

              {/* Highlight bullets */}
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}
                className="work-grid"
              >
                {FREELANCE.highlights.map((highlight, i) => {
                  const [client, ...rest] = highlight.split(" — ");
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "14px 16px",
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: "var(--l-primary)", flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <span style={{ fontFamily: "var(--l-font-heading)", fontSize: 13, fontWeight: 600, color: "var(--l-text)" }}>
                          {client}
                        </span>
                        <span style={{ fontSize: 13, color: "var(--l-text-soft)", lineHeight: 1.5 }}>
                          {" "}— {rest.join(" — ")}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              marginTop: 40,
              textAlign: "center",
              fontFamily: "var(--l-font-mono)",
              fontSize: 12,
              color: "var(--l-text-muted)",
              letterSpacing: "0.5px",
            }}
          >
            More on{" "}
            <a
              href="https://github.com/goel-aadhaar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--l-primary)", textDecoration: "none" }}
            >
              github.com/goel-aadhaar
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
