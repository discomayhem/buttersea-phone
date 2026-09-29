import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buttersea™ Ultra 5G — The Ultimate Next-Gen Flagship Smartphone",
  description: "Experience the revolutionary Buttersea Ultra with 200MP Quad-Optics, 165Hz Fluid ProMotion AMOLED, Snapdragon Quantum-8, and 120W HyperCharge.",
  keywords: ["Smartphone", "Buttersea Ultra", "Flagship Phone", "200MP Camera", "165Hz AMOLED", "5G Mobile"],
};

export const viewport: Viewport = {
  themeColor: "#050814",
  width: "device-width",
  initialScale: 1,
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="cyber-ambient-bg" aria-hidden="true">
          <div className="glow-sphere sphere-1" />
          <div className="glow-sphere sphere-2" />
          <div className="glow-sphere sphere-3" />
        </div>
        <div className="grid-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
