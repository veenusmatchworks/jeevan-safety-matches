import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { SecretAdminModal } from "@/components/SecretAdminModal";
import { FactoryProvider } from "@/context/FactoryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeevansafetymatches.com"),
  title: "Jeevan Safety Matches | Veenus Match Works (Est. 1979)",
  description:
    "Premier safety matchbox manufacturing based in Srivilliputhur, Tamil Nadu. Manufacturer of JEEVAN and TEHLA safety matches across 3 industrial facilities. Monthly production 50,000+ wholesale bundles.",
  keywords:
    "jeevan safety matches, veenus match works, tehla matches, safety matches srivilliputhur, matchbox manufacturer tamil nadu, sri cauveri travels, wooden splints matches",
  icons: {
    icon: [
      { url: "/logo-official.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-official.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-official.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/logo-official.png",
    apple: [
      { url: "/logo-official.png", sizes: "180x180", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Jeevan Safety Matches | Veenus Match Works (Est. 1979)",
    description:
      "Premier safety matchbox manufacturing based in Srivilliputhur, Tamil Nadu. Serving dealers across India with 50,000+ wholesale bundles monthly.",
    url: "https://jeevansafetymatches.com",
    siteName: "Jeevan Safety Matches",
    images: [
      {
        url: "/logo-official.png",
        width: 800,
        height: 800,
        alt: "Jeevan Safety Matches & Veenus Match Works Official Emblem Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevan Safety Matches | Veenus Match Works (Est. 1979)",
    description: "Premier safety matchbox manufacturing based in Srivilliputhur, Tamil Nadu.",
    images: ["/logo-official.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jeevan Safety Matches",
    "alternateName": [
      "Veenus Match Works",
      "United Match Industries",
      "The Cauveri Matches",
      "Sri Cauveri Travels"
    ],
    "url": "https://jeevansafetymatches.com",
    "logo": "https://jeevansafetymatches.com/logo-official.png",
    "image": "https://jeevansafetymatches.com/logo-official.png",
    "description":
      "Established in 1979 by Mr. M. Subburam. Premier manufacturer of JEEVAN and TEHLA safety matches in Srivilliputhur, Tamil Nadu.",
    "founder": {
      "@type": "Person",
      "name": "Mr. M. Subburam"
    },
    "foundingDate": "1979",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3/19/A, Venkateswarpuram, Perumaipatti Road, Aladipatti",
      "addressLocality": "Srivilliputhur, Virudhunagar",
      "addressRegion": "Tamil Nadu",
      "postalCode": "626125",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99524-11077",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil", "Hindi"]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800`}
      >
        <FactoryProvider>
          <Suspense fallback={<div className="h-20 bg-white border-b border-slate-200" />}>
            <Navbar />
          </Suspense>
          
          <main className="flex-1">{children}</main>
          
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <Suspense fallback={null}>
            <WhatsAppFloating />
          </Suspense>
          <Suspense fallback={null}>
            <SecretAdminModal />
          </Suspense>
        </FactoryProvider>
      </body>
    </html>
  );
}
