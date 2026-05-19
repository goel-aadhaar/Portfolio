import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#030303",
        surface: "#0c0c0c",
        "on-canvas": "#FAFAF9",
        "on-canvas-soft": "#A8A29E",
        "on-canvas-muted": "#57534E",
        primary: "#FF4500",
        "primary-dark": "#CC3700",
        card: "rgba(255,255,255,0.03)",
        "card-border": "rgba(255,255,255,0.07)",
        green: "#22C55E",
      },
      fontFamily: {
        space: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "Fira Code", "monospace"],
      },
      animation: {
        "marquee-fwd": "marquee-fwd 32s linear infinite",
        "marquee-rev": "marquee-rev 24s linear infinite",
        "marquee-slow": "marquee-fwd 44s linear infinite",
        "float-orb": "float-orb 20s ease-in-out infinite",
        blink: "blink 1s steps(2) infinite",
      },
      keyframes: {
        "marquee-fwd": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "float-orb": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(30px, -40px)" },
          "66%": { transform: "translate(-20px, 20px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
