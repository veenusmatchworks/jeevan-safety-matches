import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veenus Match Works & Transports | Veenus Group (Est. 1979)",
  description:
    "Veenus Match Works & Transports — Premier safety matchbox manufacturing and commercial fleet logistics based in Srivilliputhur, Tamil Nadu. Veneer matches, cardboard matches, heavy freight lorries, mini delivery vans, and passenger tourist coaches.",
  keywords:
    "veenus match works, veenus group, safety matches srivilliputhur, veneer matches, cardboard matches, freight lorries tamil nadu, omni van transport, tourist bus booking",
  icons: {
    icon: '/logo-mark.svg',
    shortcut: '/logo-mark.svg',
    apple: '/logo-mark.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={<div className="h-20 bg-slate-950/80" />}>
          <Navbar />
        </Suspense>
        
        <main className="flex-1">{children}</main>
        
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
