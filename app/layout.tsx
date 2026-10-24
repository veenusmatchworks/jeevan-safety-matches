import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRIME MATCH INDUSTRIES | Modern Matchbox Manufacturing & Wholesale",
  description:
    "Prime Match Industries — Precision manufacturer of commercial safety matches, luxury Aspen matchboxes, custom-branded hospitality matchbooks, and wholesale export cartons.",
  keywords:
    "matchbox manufacturing, safety matches, custom matchbox, wholesale matches, prime match industries, aspen wood matches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#F8F5EF] text-[#171717]`}
      >
        <CartProvider>
          {/* Top Demo Notification Pill */}
          <div className="bg-[#171717] text-[#C7A56B] text-[11px] font-medium py-1.5 px-4 text-center border-b border-neutral-800 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] animate-ping" />
            <span>
              <strong>CLIENT PRESENTATION DEMO:</strong> Sample data, products, and prices for demonstration purposes.
            </span>
          </div>

          <Suspense fallback={<div className="h-20 bg-[#171717]" />}>
            <Navbar />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
