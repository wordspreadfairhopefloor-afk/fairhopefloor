import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Load Helvetica Neue from public/fonts/helvetica-neue-5
// Paths are absolute from the `public/` folder.
const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueUltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueUltraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueHeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Fairhope Floor | Premium Hardwood, Tile & Flooring Installation in Fairhope, AL",
  description:
    "Fairhope Floor offers premium hardwood, laminate, and tile flooring options with professional installation in Fairhope, Alabama. Visit our showroom today.",
  keywords: [
    "flooring",
    "hardwood flooring",
    "tile flooring",
    "flooring installation",
    "Fairhope",
    "Alabama",
    "showroom",
    "flooring contractor",
  ],
  authors: [{name: "Fairhope Floor"}],
  creator: "Fairhope Floor",
  publisher: "Fairhope Floor",
  metadataBase: new URL("https://fairhopefloor.com"),
  alternates: {
    canonical: "https://fairhopefloor.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fairhopefloor.com",
    siteName: "Fairhope Floor",
    title:
      "Fairhope Floor | Premium Hardwood, Tile & Flooring Installation in Fairhope, AL",
    description:
      "Fairhope Floor offers premium hardwood, laminate, and tile flooring options with professional installation in Fairhope, Alabama.",
    images: [
      {
        url: "https://fairhopefloor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fairhope Floor Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairhope Floor | Premium Hardwood, Tile & Flooring Installation",
    description:
      "Fairhope Floor offers premium hardwood, laminate, and tile flooring options with professional installation in Fairhope, Alabama.",
  },
  robots: {
    "index": true,
    "follow": true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fairhope Floor",
    "description":
      "Premium hardwood, laminate, and tile flooring with professional installation",
    "image": "https://fairhopefloor.com/og-image.jpg",
    "url": "https://fairhopefloor.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Fairhope",
      "addressRegion": "AL",
      "postalCode": "36532",
      "addressCountry": "US",
    },
    "areaServed": ["Fairhope, AL", "Daphne, AL", "Spanish Fort, AL"],
    "priceRange": "$$",
  };

  return (
    <html lang="en" className={`${helvetica.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
      </head>
      <body
        className={`${helvetica.variable} ${helvetica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
