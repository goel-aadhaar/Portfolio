import type { Metadata } from "next";
import {myFont} from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aadhaar Goel | Portfolio",
  description: "Portfolio of Aadhaar Goel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${myFont.className} antialiased bg-stone-50 text-stone-900`}>
        
        <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 md:py-20">
          {children}
        </main>
        
      </body>
    </html>
  );
}