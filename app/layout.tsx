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
    "Software engineer and CS student at IIT Guwahati. Distributed systems, cloud infrastructure, and DevOps — NestJS, Spring Boot, Kafka, Docker, Kubernetes, AWS, Prometheus, Grafana. Open to software, DevOps, and infrastructure internships and full-time roles from 2027.",
  keywords: [
    "Software Engineer",
    "Software Engineer Intern",
    "DevOps Engineer",
    "Infrastructure Engineer",
    "Cloud Engineer",
    "Site Reliability Engineer",
    "AWS",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "Linux",
    "Node.js",
    "NestJS",
    "Spring Boot",
    "Kafka",
    "Python",
    "IIT Guwahati",
    "Aadhaar Goel",
  ],
  openGraph: {
    title: "Aadhaar Goel — Software Engineer | IIT Guwahati",
    description:
      "Distributed systems, cloud infrastructure, and DevOps: microservices, Kafka, Docker, AWS. Open to software, DevOps, and infrastructure roles.",
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
