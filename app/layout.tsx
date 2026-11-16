import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aadhaar Goel — Software Engineer | IIT Guwahati",
  description:
    "Backend and AI engineer, B.Tech Data Science & AI at IIT Guwahati (2027), Codeforces Specialist. Node.js, Spring Boot, Kafka, Docker, Kubernetes, AWS, LLM agents, RAG. Open to software engineering internships.",
  keywords: [
    "Software Engineer Intern",
    "Backend Engineer Intern",
    "AI Engineer Intern",
    "Node.js",
    "Spring Boot",
    "Kafka",
    "AWS",
    "Docker",
    "Kubernetes",
    "LLM Agents",
    "RAG",
    "Playwright",
    "IIT Guwahati",
    "Aadhaar Goel",
  ],
  openGraph: {
    title: "Aadhaar Goel — Software Engineer | IIT Guwahati",
    description:
      "Backend and AI engineer at IIT Guwahati. Event-driven backends, LLM agents, AWS. Open to software engineering internships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
