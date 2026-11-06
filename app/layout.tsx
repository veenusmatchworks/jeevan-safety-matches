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
  title: "Veenus Match Works | Jeevan Safety Matches (Est. 1979)",
  description:
    "Veenus Match Works — Premier safety matchbox manufacturing based in Srivilliputhur, Tamil Nadu. Manufacturer of JEEVAN and TEHLA safety matches across 3 industrial manufacturing facilities.",
  keywords:
    "veenus match works, jeevan safety matches, tehla matches, safety matches srivilliputhur, veneer matches, cardboard matches, matchbox manufacturer tamil nadu",
  icons: {
    icon: '/logo-official.png',
    shortcut: '/logo-official.png',
    apple: '/logo-official.png',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-800`}
      >
        <FactoryProvider>
          <Suspense fallback={<div className="h-20 bg-white border-b border-slate-200" />}>
            <Navbar />
          </Suspense>
          
          <main className="flex-1">{children}</main>
          
          <Footer />
          <WhatsAppFloating />
          <SecretAdminModal />
        </FactoryProvider>
      </body>
    </html>
  );
}
