"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { BLOGS } from "@/lib/data";
import { BlogDetailView } from "@/components/views/BlogDetailView";

type View = "home" | "work" | "code" | "blogs" | "freelance";

const ALL_TAGS = Array.from(new Set(BLOGS.flatMap((b) => b.tags)));

export function BlogsView({ onNavigate: _ }: { onNavigate: (v: View) => void }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  if (selectedSlug) {
    return (
      <BlogDetailView
        slug={selectedSlug}
        onBack={() => setSelectedSlug(null)}
      />
    );
  }

  const filtered = activeTag
    ? BLOGS.filter((b) => b.tags.includes(activeTag))
    : BLOGS;

  return (
    <div>
      <section className="l-section" style={{ paddingTop: 140 }}>
        <div className="l-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 48 }}
          >
            <span className="l-eyebrow">Writing</span>
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
              Thoughts on{" "}
              <span style={{ color: "var(--l-primary)" }}>systems & craft.</span>
            </h1>
          </motion.div>

          {/* Tag filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}
          >
            <button
              onClick={() => setActiveTag(null)}
              style={{
                height: 30,
                padding: "0 14px",
                borderRadius: 9999,
                border: `1px solid ${activeTag === null ? "rgba(255,69,0,0.4)" : "rgba(255,255,255,0.1)"}`,
                background: activeTag === null ? "rgba(255,69,0,0.1)" : "transparent",
                color: activeTag === null ? "var(--l-primary)" : "var(--l-text-muted)",
                fontFamily: "var(--l-font-mono)",
                fontSize: 12,
                cursor: "pointer",
                transition: "all 200ms",
                letterSpacing: "0.5px",
              }}
            >
              All
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                style={{
                  height: 30,
                  padding: "0 14px",
                  borderRadius: 9999,
                  border: `1px solid ${activeTag === tag ? "rgba(255,69,0,0.4)" : "rgba(255,255,255,0.1)"}`,
                  background:
                    activeTag === tag ? "rgba(255,69,0,0.1)" : "transparent",
                  color:
                    activeTag === tag ? "var(--l-primary)" : "var(--l-text-muted)",
                  fontFamily: "var(--l-font-mono)",
                  fontSize: 12,
                  cursor: "pointer",
                  transition: "all 200ms",
                  letterSpacing: "0.5px",
                }}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Blog list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="glass-card"
                  style={{ padding: "28px 32px", cursor: "pointer" }}
                  onClick={() => setSelectedSlug(post.slug)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 24,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      {/* Meta */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--l-font-mono)",
                            fontSize: 11,
                            color: "var(--l-text-muted)",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            fontFamily: "var(--l-font-mono)",
                            fontSize: 11,
                            color: "var(--l-text-muted)",
                          }}
                        >
                          <Clock size={10} />
                          {post.readTime} read
                        </span>
                        {post.featured && (
                          <span
                            style={{
                              height: 18,
                              padding: "0 8px",
                              borderRadius: 9999,
                              background: "rgba(255,69,0,0.1)",
                              border: "1px solid rgba(255,69,0,0.2)",
                              fontFamily: "var(--l-font-mono)",
                              fontSize: 9,
                              color: "var(--l-primary)",
                              display: "inline-flex",
                              alignItems: "center",
                              letterSpacing: "0.8px",
                              textTransform: "uppercase",
                            }}
                          >
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2
                        style={{
                          fontFamily: "var(--l-font-heading)",
                          fontSize: 20,
                          fontWeight: 700,
                          letterSpacing: "-0.5px",
                          color: "var(--l-text)",
                          marginBottom: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "var(--l-text-soft)",
                          marginBottom: 16,
                          maxWidth: 620,
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {post.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTag(activeTag === tag ? null : tag);
                            }}
                            className="l-chip"
                            style={{ cursor: "pointer", border: "none" }}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Thumbnail + arrow */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, flexShrink: 0 }}>
                      {post.coverImage && (
                        <div
                          style={{
                            width: 160,
                            height: 108,
                            borderRadius: 8,
                            overflow: "hidden",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
                          />
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "var(--l-text-muted)",
                          flexShrink: 0,
                          transition: "all 200ms",
                        }}
                      >
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
