// app/layout.tsx   (or app/page.tsx if you prefer to keep it in the page file)
import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script'

export const metadata: Metadata = {
  // ──────────────────────────────────────────────────────────────
  // 1. BASIC SEO (used by Google, Bing, etc.)
  // ──────────────────────────────────────────────────────────────
  title: "24/7 Mobile Tyre Fitting & Repair in Cleckheaton | Angels Tyres",
  description:
    "Need fast mobile tyre fitting or repair in Cleckheaton? Angels Tyres offers 24/7 emergency tyre services, puncture repairs, and replacements at your location. Quick, reliable, and affordable — keeping you safely on the road day and night.",

  // ──────────────────────────────────────────────────────────────
  // 2. KEYWORDS – combine all three pages you supplied
  // ──────────────────────────────────────────────────────────────
  keywords: [
    // Home page
    "mobile tyre fitting",
    "24/7 tyre repair",
    "emergency tyre fitting Cleckheaton",
    "puncture repair near me",
    "mobile tyre replacement",
    "Cleckheaton tyre services",

    // Services page
    "puncture repair",
    "tyre replacement",
    "wheel balancing",
    "TPMS sensor fitting",
    "emergency tyre repair",
    "mobile tyre services Cleckheaton",

    // About page
    "about Angels Tyres",
    "24/7 tyre call out",
    "emergency tyre specialist",
    "local tyre repair company",
    "Angels Tyres Cleckheaton",

    // General brand
    "Angels Tyres",
  ],

  // ──────────────────────────────────────────────────────────────
  // 3. AUTHOR / PUBLISHER
  // ──────────────────────────────────────────────────────────────
  authors: [{ name: "Angels Tyres" }],
  creator: "Angels Tyres",
  publisher: "Angels Tyres",

  // ──────────────────────────────────────────────────────────────
  // 4. ROBOTS
  // ──────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ──────────────────────────────────────────────────────────────
  // 5. OPEN GRAPH (Facebook, LinkedIn, etc.)
  // ──────────────────────────────────────────────────────────────
  openGraph: {
    title: "24/7 Mobile Tyre Fitting & Repair in Cleckheaton | Angels Tyres",
    description:
      "Explore our range of tyre services — from emergency tyre repair and wheel balancing to TPMS sensor fitting. Angels Tyres delivers expert, on-site tyre care across Cleckheaton and nearby areas with fast response and professional service.",
    url: "https://www.angelstyres.co.uk/",
    siteName: "Angels Tyres",
    images: [
      {
        url: "/logo.png",        // ← replace with your real logo
        width: 800,
        height: 800,
        alt: "Angels Tyres Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // ──────────────────────────────────────────────────────────────
  // 6. TWITTER CARD
  // ──────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "24/7 Mobile Tyre Fitting & Repair in Cleckheaton | Angels Tyres",
    description:
      "Learn about Angels Tyres, your trusted local mobile tyre fitting and repair specialists in Cleckheaton. Available 24/7 for emergency call-outs, puncture repairs, full replacements and more.",
    images: ["/logo.png"],
    creator: "@angelstyres", // optional
  },

  // ──────────────────────────────────────────────────────────────
  // 7. ICONS
  // ──────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-08H8W1VJZD"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-08H8W1VJZD');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}