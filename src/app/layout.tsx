import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "West Yorkshire Mobile Mechanic | Mobile Car Repairs & Servicing in Huddersfield",
    template: "%s | West Yorkshire Mobile Mechanic",
  },
  description:
    "Fully mobile mechanic covering Huddersfield & West Yorkshire. Car servicing, diagnostics, brakes, clutches, batteries and pre-MOT repairs at your home or work. Fast, honest and fairly priced. Call +44 7467 478567.",
  keywords: [
    "mobile mechanic Huddersfield",
    "mobile mechanic West Yorkshire",
    "car servicing Huddersfield",
    "mobile car repairs",
    "car diagnostics Huddersfield",
    "brake repair Huddersfield",
    "clutch replacement West Yorkshire",
    "mobile car battery replacement",
    "pre-MOT repairs Huddersfield",
    "mechanic that comes to you",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title:
      "West Yorkshire Mobile Mechanic | We Come To You Across Huddersfield",
    description:
      "Mobile car servicing, diagnostics and repairs at your home or workplace across Huddersfield and West Yorkshire. Book today.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/logo.jpeg", width: 1536, height: 1024, alt: site.name }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Yorkshire Mobile Mechanic",
    description:
      "Mobile car repairs & servicing across Huddersfield and West Yorkshire — we come to you.",
    images: ["/logo.jpeg"],
  },
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  image: `${site.url}/logo.jpeg`,
  "@id": site.url,
  url: site.url,
  telephone: site.phoneDisplay,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 53.6242, longitude: -1.8195 },
  areaServed: [
    "Huddersfield",
    "Halifax",
    "Dewsbury",
    "Brighouse",
    "Holmfirth",
    "West Yorkshire",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${anton.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
