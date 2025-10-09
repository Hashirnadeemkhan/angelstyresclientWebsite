import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angles Tyres | Emergency Tyre Repair & Replacement Services",
  description:
    "Angles Tyres offers professional and fast tyre repair, puncture repair, wheel balancing, TPMS sensor fitting, and emergency tyre replacement services. Get 24/7 roadside tyre assistance from experts you can trust.",
  generator: "Next.js",
  keywords: [
    "Tyre Repair",
    "Emergency Tyre Replacement",
    "Puncture Repair",
    "Car Tyre Replacement",
    "Wheel Balancing",
    "TPMS Sensor Fitting",
    "Tyre Services",
    "24/7 Tyre Assistance",
    "Angles Tyres",
  ],
  authors: [{ name: "Angles Tyres" }],
  creator: "Angles Tyres",
  publisher: "Angles Tyres",
  applicationName: "Angles Tyres",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Angles Tyres | Emergency Tyre Repair & Replacement",
    description:
      "Need fast tyre help? Angles Tyres provides emergency tyre repair, puncture repair, car tyre replacement, wheel balancing, and TPMS sensor fitting — available 24/7 for all vehicles.",
    url: "https://www.angelstyres.co.uk/",
    siteName: "Angles Tyres",
    images: [
      {
        url: "/logo.png", // 👈 replace with your logo
        width: 800,
        height: 800,
        alt: "Angles Tyres Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angles Tyres | Fast & Reliable Tyre Repair Services",
    description:
      "Angles Tyres offers 24/7 emergency tyre repair, puncture repair, wheel balancing, and TPMS sensor fitting. Stay safe on the road with expert tyre services.",
    images: ["/logo.png"], // 👈 replace with your logo
    creator: "@anglestyres", // optional: your Twitter handle
  },
  icons: {
    icon: "/favicon.ico", // 👈 favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
