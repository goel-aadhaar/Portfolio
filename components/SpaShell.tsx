"use client";

import { useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { HomeView } from "@/components/views/HomeView";
import { WorkView } from "@/components/views/WorkView";
import { CodeView } from "@/components/views/CodeView";
import { BlogsView } from "@/components/views/BlogsView";
import { FreelanceView } from "@/components/views/FreelanceView";

type View = "home" | "work" | "code" | "blogs" | "freelance";

const NAV_ITEMS: { id: View; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "freelance", label: "Freelance" },
  { id: "code", label: "Code" },
  { id: "blogs", label: "Blogs" },
];

const VIEW_MAP = {
  home: HomeView,
  work: WorkView,
  code: CodeView,
  blogs: BlogsView,
  freelance: FreelanceView,
};

export function SpaShell() {
  const [active, setActive] = useState<View>("home");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  const cursorGradient = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,69,0,0.06), transparent 80%)`;

  const ActiveView = VIEW_MAP[active];

  return (
    <div
      className="min-h-screen bg-canvas text-on-canvas font-inter overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* SVG noise texture */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0, opacity: 0.04 }}
        aria-hidden
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>

      {/* Animated orbs */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div className="orb orb-orange" />
        <div className="orb orb-red" />
        <div className="orb orb-purple" />
      </div>

      {/* Mouse cursor gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ background: cursorGradient, zIndex: 0 }}
      />

      {/* Floating nav */}
      <div
        className="fixed top-6 left-1/2 -translate-x-1/2"
        style={{ zIndex: 50 }}
      >
        <nav className="lumina-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`lumina-nav-item${active === item.id ? " active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* View content */}
      <main style={{ position: "relative", zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <ActiveView onNavigate={setActive} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
