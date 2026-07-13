"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github, Star, GitFork, Users, Code2, Terminal, Trophy, ArrowUpRight,
  GitCommit, GitPullRequest, Building2, Activity,
} from "lucide-react";
import { CF_RATING_HISTORY } from "@/lib/data";

type View = "home" | "work" | "code" | "blogs";

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface CFRatingEntry {
  contestId: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

interface CFData {
  user: {
    maxRating: number;
    maxRank: string;
    rating: number;
    rank: string;
  } | null;
  rating: CFRatingEntry[] | null;
  solvedCount: number | null;
}

interface LCData {
  totalSolved: number | null;
  easySolved: number | null;
  mediumSolved: number | null;
  hardSolved: number | null;
  ranking: number | null;
}

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const WEEKS = 53; // 53 columns = full 365-day year, ending on the current week

function generateHeatmap() {
  const weeks = WEEKS;
  const cells: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const row: number[] = [];
    for (let d = 0; d < 7; d++) {
      const seed = w * 7 + d;
      const isWeekend = d === 0 || d === 6;
      let val = 0;

      if (w >= 44) {
        if (!isWeekend) {
          const s = seededRand(seed + 300);
          val = s < 0.20 ? 1 : s < 0.50 ? 2 : s < 0.78 ? 3 : 4;
        } else {
          val = seededRand(seed + 400) > 0.62 ? 1 : 0;
        }
      } else if (w >= 34) {
        if (!isWeekend) {
          const s = seededRand(seed + 150);
          const recency = (w - 34) / 10;
          val = s < (0.25 - recency * 0.1) ? 0 : s < 0.55 ? 1 : s < 0.78 ? 2 : 3;
        } else {
          val = seededRand(seed + 250) > 0.72 ? 1 : 0;
        }
      } else {
        const recency = w / weeks;
        const rand = seededRand(seed);
        const prob = 0.12 + recency * 0.46;
        if (rand < prob) {
          const s = seededRand(seed + 50);
          val = Math.min(4, Math.floor(1 + s * 3.5 * (0.2 + recency * 0.8)));
          if (isWeekend) val = Math.min(1, val);
        }
      }

      row.push(val);
    }
    cells.push(row);
  }

  return cells;
}

// Sunday that starts the leftmost column: 52 weeks before the week containing today.
// Anchoring to today (not the first API row) keeps the most recent days — including
// the current week — visible, and matches the month-label layout.
function gridStartSunday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentSunday = new Date(today);
  currentSunday.setDate(today.getDate() - today.getDay());
  const start = new Date(currentSunday);
  start.setDate(currentSunday.getDate() - (WEEKS - 1) * 7);
  return start;
}

function buildCellsFromContributions(contributions: ContributionDay[]): number[][] {
  const grid: number[][] = Array.from({ length: WEEKS }, () => Array(7).fill(0));
  if (!contributions.length) return grid;

  const startSunday = gridStartSunday();

  contributions.forEach(({ date, level }) => {
    const d = new Date(date + "T00:00:00");
    const diffDays = Math.round((d.getTime() - startSunday.getTime()) / 86_400_000);
    const weekIndex = Math.floor(diffDays / 7);
    const dayIndex = d.getDay();
    if (weekIndex >= 0 && weekIndex < WEEKS) grid[weekIndex][dayIndex] = level;
  });

  return grid;
}

const HEATMAP_COLORS = [
  "rgba(255,255,255,0.06)",
  "rgba(34,197,94,0.2)",
  "rgba(34,197,94,0.45)",
  "rgba(34,197,94,0.7)",
  "#22C55E",
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

const CF_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function RatingChart({ data }: { data: { label: string; rating: number }[] }) {
  const W = 800;
  const H = 200;
  const PAD = { top: 20, right: 16, bottom: 36, left: 44 };

  const minR = 700;
  const maxR = 1500;
  const toX = (i: number) => PAD.left + (i / (data.length - 1)) * (W - PAD.left - PAD.right);
  const toY = (r: number) => PAD.top + ((maxR - r) / (maxR - minR)) * (H - PAD.top - PAD.bottom);

  const points = data.map((d, i) => ({ x: toX(i), y: toY(d.rating), ...d }));

  let linePath = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    linePath += ` L ${points[i].x} ${points[i].y}`;
  }
  const fillPath = linePath + ` L ${points[points.length - 1].x} ${H - PAD.bottom} L ${points[0].x} ${H - PAD.bottom} Z`;
  const yGuides = [800, 1000, 1200, 1400];

  const maxPoint = points.reduce((best, p) => p.rating > best.rating ? p : best, points[0]);

  // Show every N-th label to avoid crowding when many contests
  const labelStep = data.length > 30 ? 5 : data.length > 15 ? 3 : 2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id="cf-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
        </linearGradient>
        <clipPath id="cf-clip">
          <rect x={PAD.left} y={PAD.top} width={W - PAD.left - PAD.right} height={H - PAD.top - PAD.bottom} />
        </clipPath>
      </defs>

      <rect x={PAD.left} y={toY(1200)} width={W - PAD.left - PAD.right} height={toY(0) - toY(1200)} fill="rgba(34,197,94,0.05)" clipPath="url(#cf-clip)" />
      <rect x={PAD.left} y={toY(1400)} width={W - PAD.left - PAD.right} height={toY(1200) - toY(1400)} fill="rgba(0,160,160,0.08)" clipPath="url(#cf-clip)" />

      {yGuides.map((r) => (
        <g key={r}>
          <line x1={PAD.left} x2={W - PAD.right} y1={toY(r)} y2={toY(r)} stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 4" />
          <text x={PAD.left - 6} y={toY(r)} textAnchor="end" dominantBaseline="middle" fill="rgba(255,255,255,0.28)" fontSize="10" fontFamily="ui-monospace, monospace">{r}</text>
        </g>
      ))}

      <text x={W - PAD.right - 4} y={toY(1400) + 12} textAnchor="end" fill="rgba(0,160,160,0.7)" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1">SPECIALIST</text>
      <text x={W - PAD.right - 4} y={toY(1200) + 12} textAnchor="end" fill="rgba(34,197,94,0.6)" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1">PUPIL</text>

      <path d={fillPath} fill="url(#cf-fill)" clipPath="url(#cf-clip)" />
      <path d={linePath} fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" clipPath="url(#cf-clip)" />

      {points.map((p, i) => (
        <g key={i}>
          <rect
            x={p.x - 3.5} y={p.y - 3.5}
            width={7} height={7}
            transform={`rotate(45, ${p.x}, ${p.y})`}
            fill="#030303"
            stroke="#22C55E"
            strokeWidth="1.5"
          />
          <rect x={p.x - 14} y={p.y - 14} width={28} height={28} fill="transparent">
            <title>{p.label}: {p.rating}</title>
          </rect>
        </g>
      ))}

      <line
        x1={maxPoint.x} y1={maxPoint.y - 8}
        x2={maxPoint.x} y2={maxPoint.y - 28}
        stroke="rgba(34,197,94,0.5)" strokeWidth="1" strokeDasharray="2 2"
      />
      <rect x={maxPoint.x - 22} y={maxPoint.y - 44} width={44} height={18} rx="5" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.35)" strokeWidth="1" />
      <text x={maxPoint.x} y={maxPoint.y - 32} textAnchor="middle" fill="#22C55E" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">
        {Math.max(...data.map(d => d.rating))}
      </text>

      {points.map((p, i) => i % labelStep === 0 ? (
        <text key={i} x={p.x} y={H - PAD.bottom + 16} textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="ui-monospace, monospace">{p.label}</text>
      ) : null)}

      <line x1={PAD.left} x2={W - PAD.right} y1={H - PAD.bottom} y2={H - PAD.bottom} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}

const CP_BASE = [
  {
    platform: "LeetCode",
    logo: "/logos/leetcode.png",
    Icon: Code2,
    description: "Algorithmic problem solving — dynamic programming, graphs, trees, and data structures.",
    iconBg: "rgba(255,161,22,0.15)",
    iconColor: "#FFA116",
    cardBorder: "rgba(255,161,22,0.18)",
    cardGlow: "rgba(255,161,22,0.06)",
    profileUrl: "https://leetcode.com/goel-aadhaar",
    btnBorder: "rgba(255,161,22,0.3)",
    btnColor: "#FFA116",
  },
  {
    platform: "Codeforces",
    logo: "/logos/codeforces.png",
    Icon: Terminal,
    description: "Div. 2 & Div. 3 contest competitor — implementation, math, greedy, and graph problems.",
    iconBg: "rgba(91,192,235,0.15)",
    iconColor: "#5BC0EB",
    cardBorder: "rgba(91,192,235,0.18)",
    cardGlow: "rgba(91,192,235,0.05)",
    profileUrl: "https://codeforces.com/profile/goel-aadhaar",
    btnBorder: "rgba(91,192,235,0.3)",
    btnColor: "#5BC0EB",
  },
  {
    platform: "CodeChef",
    logo: "/logos/codechef.svg",
    Icon: Trophy,
    description: "Long challenge and Cook-Off participant solving ad-hoc, math, and combinatorics problems.",
    iconBg: "rgba(34,197,94,0.15)",
    iconColor: "#22C55E",
    cardBorder: "rgba(34,197,94,0.18)",
    cardGlow: "rgba(34,197,94,0.05)",
    profileUrl: "https://codechef.com/users/goel-aadhaar",
    btnBorder: "rgba(34,197,94,0.3)",
    btnColor: "#22C55E",
  },
];

const GH_STATIC_STATS_BASE = [
  { icon: GitCommit,      label: "Commits",       value: "1,200+", color: "#a78bfa", sub: "total" },
  { icon: GitPullRequest, label: "Pull Requests",  value: "62+",    color: "#FFA116", sub: "merged" },
  { icon: Building2,      label: "Organizations",  value: "8+",     color: "#5BC0EB", sub: "contributed" },
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function CodeView({ onNavigate: _ }: { onNavigate: (v: View) => void }) {
  const [github, setGithub] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [contributions, setContributions] = useState<ContributionDay[] | null>(null);
  const [realTotal, setRealTotal] = useState<number | null>(null);
  const [cfData, setCfData] = useState<CFData | null>(null);
  const [lcData, setLcData] = useState<LCData | null>(null);

  const cells = contributions ? buildCellsFromContributions(contributions) : generateHeatmap();

  useEffect(() => {
    fetch("https://api.github.com/users/goel-aadhaar")
      .then((r) => r.json())
      .then((data) => setGithub(data))
      .catch(() => {})
      .finally(() => setLoading(false));

    fetch("https://github-contributions-api.jogruber.de/v4/goel-aadhaar?y=last")
      .then((r) => r.json())
      .then((data: { contributions: ContributionDay[]; total: Record<string, number> }) => {
        setContributions(data.contributions);
        setRealTotal(data.total?.lastYear ?? null);
      })
      .catch(() => {});

    fetch("/api/cf")
      .then((r) => r.json())
      .then((data: CFData) => setCfData(data))
      .catch(() => {});

    fetch("/api/lc")
      .then((r) => r.json())
      .then((data: LCData) => setLcData(data))
      .catch(() => {});
  }, []);

  // Build Codeforces rating chart data from real API or fall back to static
  const ratingChartData: { label: string; rating: number }[] =
    cfData?.rating?.length
      ? cfData.rating.map((r) => {
          const d = new Date(r.ratingUpdateTimeSeconds * 1000);
          return {
            label: `${CF_MONTHS[d.getMonth()]} '${String(d.getFullYear()).slice(2)}`,
            rating: r.newRating,
          };
        })
      : CF_RATING_HISTORY;

  const cfMaxRating = cfData?.user?.maxRating ?? 1409;
  const cfStartRating = ratingChartData[0]?.rating ?? 805;
  const cfMaxRankDisplay = cfData?.user?.maxRank ? capitalize(cfData.user.maxRank) : "Specialist";
  const cfContests = cfData?.rating?.length ?? 45;
  const cfSolved = cfData?.solvedCount;

  // Build per-platform stats with real data
  const platformStats: Record<string, { label: string; value: string; color: string }[]> = {
    LeetCode: [
      { label: "Max Rating",      value: "1837",                                                                              color: "#FF4500" },
      { label: "Problems Solved", value: lcData?.totalSolved != null ? String(lcData.totalSolved) : "550+",                   color: "var(--l-text)" },
      { label: "Global Rank",     value: lcData?.ranking     != null ? `#${lcData.ranking.toLocaleString()}` : "Top 10%",     color: "#FFA116" },
      { label: "Hard Solved",     value: lcData?.hardSolved  != null ? String(lcData.hardSolved) : "50+",                     color: "#FF4500" },
    ],
    Codeforces: [
      { label: "Max Rating",      value: String(cfMaxRating),                                                                  color: "#22C55E" },
      { label: "Rank",            value: cfMaxRankDisplay,                                                                     color: "#5BC0EB" },
      { label: "Problems Solved", value: cfSolved != null ? String(cfSolved) : "800+",                                        color: "var(--l-text)" },
      { label: "Contests",        value: cfContests > 0 ? String(cfContests) : "45+",                                         color: "#a78bfa" },
    ],
    CodeChef: [
      { label: "Stars",           value: "3 ★",    color: "#FFA116" },
      { label: "Problems Solved", value: "200+",   color: "var(--l-text)" },
      { label: "Division",        value: "Div 2",  color: "#a78bfa" },
      { label: "Participation",   value: "Active", color: "#22C55E" },
    ],
  };

  // Walk the same 53 columns the grid uses; tag the first column of each month.
  const gridStart = gridStartSunday();
  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  for (let w = 0; w < WEEKS; w++) {
    const colDate = new Date(gridStart);
    colDate.setDate(gridStart.getDate() + w * 7);
    const mo = colDate.getMonth();
    if (mo !== lastMonth) {
      monthLabels.push({ label: MONTHS[mo], col: w });
      lastMonth = mo;
    }
  }

  return (
    <div>
      <section className="l-section" style={{ paddingTop: 140 }}>
        <div className="l-container">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
            <span className="l-eyebrow">Code</span>
            <h1
              style={{
                fontFamily: "var(--l-font-heading)",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 700,
                letterSpacing: "-2.5px",
                lineHeight: 1.05,
                marginTop: 4,
              }}
            >
              <span style={{ color: "var(--l-text)" }}>Open source &</span>{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #FF4500, #FF8C00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                problem solving.
              </span>
            </h1>
          </motion.div>

          {/* GitHub card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass-card"
            style={{ padding: 28, marginBottom: 16 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <Github size={18} style={{ color: "var(--l-primary)" }} />
              <span style={{ fontFamily: "var(--l-font-heading)", fontSize: 15, fontWeight: 600, color: "var(--l-text)" }}>
                GitHub Activity
              </span>
              <a
                href="https://github.com/goel-aadhaar"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "auto", fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-primary)", textDecoration: "none" }}
              >
                @goel-aadhaar ↗
              </a>
            </div>

            {/* Row 1: API stats */}
            <div
              className="code-stat-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}
            >
              {[
                { icon: Star,    label: "Public Repos", value: loading ? "—" : String(github?.public_repos ?? "—"), color: "#FFA116" },
                { icon: Users,   label: "Followers",    value: loading ? "—" : String(github?.followers   ?? "—"), color: "#22C55E" },
                { icon: GitFork, label: "Following",    value: loading ? "—" : String(github?.following   ?? "—"), color: "#a78bfa" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  style={{ padding: "16px 20px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Icon size={14} style={{ color, marginBottom: 8 }} />
                  <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 28, fontWeight: 700, color, letterSpacing: "-1px", lineHeight: 1, marginBottom: 4 }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: contributions (real) + static stats */}
            <div
              className="code-stat-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }}
            >
              <div style={{ padding: "14px 16px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <Activity size={13} style={{ color: "#22C55E", marginBottom: 8 }} />
                <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 22, fontWeight: 700, color: "#22C55E", letterSpacing: "-0.8px", lineHeight: 1, marginBottom: 3 }}>
                  {realTotal !== null ? realTotal.toLocaleString() : "—"}
                </div>
                <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 10, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", lineHeight: 1.3 }}>
                  Contributions
                  <span style={{ display: "block", color: "rgba(255,255,255,0.18)", marginTop: 1 }}>last year</span>
                </div>
              </div>
              {GH_STATIC_STATS_BASE.map(({ icon: Icon, label, value, color, sub }) => (
                <div
                  key={label}
                  style={{ padding: "14px 16px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <Icon size={13} style={{ color, marginBottom: 8 }} />
                  <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 22, fontWeight: 700, color, letterSpacing: "-0.8px", lineHeight: 1, marginBottom: 3 }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 10, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", lineHeight: 1.3 }}>
                    {label}
                    <span style={{ display: "block", color: "rgba(255,255,255,0.18)", marginTop: 1 }}>{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Heatmap */}
            <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
              Contribution Activity
            </div>
            <div style={{ overflowX: "auto" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", marginBottom: 4, marginLeft: 28 }}>
                  {Array.from({ length: WEEKS }, (_, w) => {
                    const ml = monthLabels.find((m) => m.col === w);
                    return (
                      <div key={w} style={{ width: 14, marginRight: 2, fontFamily: "var(--l-font-mono)", fontSize: 9, color: "var(--l-text-muted)", whiteSpace: "nowrap" }}>
                        {ml?.label ?? ""}
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2, marginRight: 4 }}>
                    {DAYS.map((d, i) => (
                      <div key={i} style={{ height: 14, fontFamily: "var(--l-font-mono)", fontSize: 9, color: "var(--l-text-muted)", lineHeight: "14px" }}>{d}</div>
                    ))}
                  </div>
                  {cells.map((week, w) => (
                    <div key={w} style={{ display: "flex", flexDirection: "column", gap: 2, marginRight: 2 }}>
                      {week.map((val, d) => (
                        <div key={d} className="heatmap-cell" title={`${val} contributions`} style={{ background: HEATMAP_COLORS[val] }} />
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 10 }}>
                  <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 9, color: "var(--l-text-muted)" }}>Less</span>
                  {HEATMAP_COLORS.map((c, i) => (
                    <div key={i} style={{ width: 12, height: 12, borderRadius: 3, background: c }} />
                  ))}
                  <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 9, color: "var(--l-text-muted)" }}>More</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Codeforces Rating Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="glass-card"
            style={{ padding: 28, marginBottom: 24 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 15, fontWeight: 600, color: "var(--l-text)", marginBottom: 4 }}>
                  Codeforces Rating Growth
                </div>
                <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, letterSpacing: "0.5px" }}>
                  <span style={{ color: "var(--l-text-muted)" }}>{cfStartRating} → </span>
                  <span style={{ color: "#22C55E" }}>{cfMaxRating}</span>
                  <span style={{ color: "var(--l-text-muted)" }}> · Newbie → </span>
                  <span style={{ color: "rgba(0,160,160,0.9)" }}>{cfMaxRankDisplay}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                {[
                  { label: "Specialist (1400+)", color: "rgba(0,160,160,0.75)" },
                  { label: "Pupil (1200+)",      color: "rgba(34,197,94,0.75)" },
                ].map((b) => (
                  <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: b.color }} />
                    <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 10, color: "var(--l-text-muted)" }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <RatingChart data={ratingChartData} />
          </motion.div>

          {/* Competitive Programming Platform Cards */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: "var(--l-font-mono)", fontSize: 11, color: "var(--l-text-muted)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 16 }}>
              Competitive Platforms
            </div>

            <div className="code-stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {CP_BASE.map((cp, i) => {
                const stats = platformStats[cp.platform] ?? [];
                return (
                  <motion.div
                    key={cp.platform}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                    style={{
                      borderRadius: 16,
                      border: `1px solid ${cp.cardBorder}`,
                      background: cp.cardGlow,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      transition: "box-shadow 250ms, transform 250ms",
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <div style={{ padding: "24px 24px 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                        <div
                          style={{
                            width: 44, height: 44, borderRadius: 12,
                            background: cp.iconBg,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: cp.iconColor, flexShrink: 0,
                            overflow: "hidden",
                          }}
                        >
                          {cp.logo ? (
                            <img
                              src={cp.logo}
                              alt={cp.platform}
                              style={{ width: 30, height: 30, objectFit: "contain" }}
                            />
                          ) : (
                            <cp.Icon size={22} />
                          )}
                        </div>
                        <div style={{ fontFamily: "var(--l-font-heading)", fontSize: 18, fontWeight: 700, color: "var(--l-text)", letterSpacing: "-0.3px" }}>
                          {cp.platform}
                        </div>
                      </div>
                      <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--l-text-soft)", marginBottom: 20 }}>
                        {cp.description}
                      </p>
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 16 }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                        {stats.map((stat) => (
                          <div key={stat.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 12, color: "var(--l-text-muted)", letterSpacing: "0.3px" }}>
                              {stat.label}
                            </span>
                            <span style={{ fontFamily: "var(--l-font-mono)", fontSize: 13, fontWeight: 700, color: stat.color, letterSpacing: "-0.3px" }}>
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginTop: "auto", padding: "0 24px 24px" }}>
                      <a
                        href={cp.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                          height: 38, borderRadius: 9999,
                          border: `1px solid ${cp.btnBorder}`,
                          background: "transparent", color: cp.btnColor,
                          fontFamily: "var(--l-font-mono)", fontSize: 11, fontWeight: 600,
                          textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase",
                          transition: "background 200ms",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = cp.iconBg; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        View Profile <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div style={{ marginTop: 12, padding: "13px 20px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--l-font-mono)", fontSize: 12, color: "var(--l-text-muted)", textAlign: "center" }}>
              <span style={{ color: "#FFA116", fontWeight: 700 }}>1500+</span> problems solved across all platforms
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
