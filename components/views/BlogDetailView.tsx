"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { BLOGS } from "@/lib/data";
import { BLOG_CONTENTS, ContentBlock } from "@/lib/blog-content";

function renderBlock(block: ContentBlock, index: number) {
  switch (block.t) {
    case "h2":
      return (
        <h2
          key={index}
          style={{
            fontFamily: "var(--l-font-heading)",
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 700,
            letterSpacing: "-0.8px",
            color: "var(--l-text)",
            margin: "40px 0 14px",
            lineHeight: 1.2,
          }}
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={index}
          style={{
            fontFamily: "var(--l-font-heading)",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "-0.4px",
            color: "var(--l-text)",
            margin: "24px 0 10px",
          }}
        >
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p
          key={index}
          style={{
            fontSize: 15,
            lineHeight: 1.78,
            color: "var(--l-text-soft)",
            margin: "0 0 18px",
          }}
        >
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul
          key={index}
          style={{
            margin: "0 0 18px",
            paddingLeft: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                fontSize: 14,
                lineHeight: 1.65,
                color: "var(--l-text-soft)",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--l-primary)",
                  flexShrink: 0,
                  marginTop: 8,
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol
          key={index}
          style={{
            margin: "0 0 18px",
            paddingLeft: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            counterReset: "step-counter",
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                fontSize: 14,
                lineHeight: 1.65,
                color: "var(--l-text-soft)",
              }}
            >
              <span
                style={{
                  minWidth: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(255,69,0,0.1)",
                  border: "1px solid rgba(255,69,0,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--l-font-mono)",
                  fontSize: 10,
                  color: "var(--l-primary)",
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "callout":
      return (
        <div
          key={index}
          style={{
            margin: "24px 0",
            padding: "16px 20px",
            borderRadius: 10,
            background: "rgba(255,69,0,0.06)",
            border: "1px solid rgba(255,69,0,0.15)",
            borderLeft: "3px solid var(--l-primary)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--l-font-mono)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: "var(--l-primary)",
              marginBottom: 6,
            }}
          >
            {block.label}
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: "var(--l-text-soft)",
              margin: 0,
            }}
          >
            {block.text}
          </p>
        </div>
      );

    case "table":
      return (
        <div
          key={index}
          style={{ overflowX: "auto", margin: "24px 0" }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 13,
              fontFamily: "var(--l-font-mono)",
            }}
          >
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      padding: "10px 14px",
                      textAlign: "left",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      color: "var(--l-primary)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    background:
                      ri % 2 === 0
                        ? "rgba(255,255,255,0.02)"
                        : "transparent",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "10px 14px",
                        color:
                          ci === 0
                            ? "var(--l-text)"
                            : "var(--l-text-soft)",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        verticalAlign: "top",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export function BlogDetailView({
  slug,
  onBack,
}: {
  slug: string;
  onBack: () => void;
}) {
  const post = BLOGS.find((b) => b.slug === slug);
  const content = BLOG_CONTENTS.find((b) => b.slug === slug);

  if (!post) return null;

  return (
    <div>
      <section className="l-section" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div
          className="l-container"
        >
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              border: "none",
              color: "var(--l-text-muted)",
              fontFamily: "var(--l-font-mono)",
              fontSize: 12,
              letterSpacing: "0.5px",
              cursor: "pointer",
              padding: "0 0 32px",
              transition: "color 200ms",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color =
                "var(--l-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color =
                "var(--l-text-muted)")
            }
          >
            <ArrowLeft size={14} />
            Back to Writing
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 20,
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
                  month: "long",
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
            <h1
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                color: "var(--l-text)",
                marginBottom: 16,
              }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--l-text-muted)",
                marginBottom: 24,
              }}
            >
              {post.excerpt}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 40 }}>
              {post.tags.map((tag) => (
                <span key={tag} className="l-chip">
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.07)",
                marginBottom: 40,
              }}
            />
          </motion.div>

          {/* Hero image */}
          {post.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                marginBottom: 48,
                height: 380,
              }}
            >
              <img
                src={post.coverImage}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {content ? (
              content.blocks.map((block, i) => renderBlock(block, i))
            ) : (
              <p style={{ color: "var(--l-text-muted)", fontSize: 15 }}>
                Content coming soon.
              </p>
            )}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ marginTop: 56 }}
          >
            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.07)",
                marginBottom: 32,
              }}
            />
            <button
              onClick={onBack}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "10px 18px",
                color: "var(--l-text-muted)",
                fontFamily: "var(--l-font-mono)",
                fontSize: 12,
                letterSpacing: "0.5px",
                cursor: "pointer",
                transition: "all 200ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,69,0,0.3)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--l-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--l-text-muted)";
              }}
            >
              <ArrowLeft size={13} />
              Back to all posts
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
