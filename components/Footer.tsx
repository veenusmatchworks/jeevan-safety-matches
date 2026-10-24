import React from 'react';
import Link from 'next/link';
import { Flame, Mail, Phone, MapPin, Shield, ArrowUpRight, Award, Truck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#171717] text-neutral-300 border-t border-neutral-800">
      {/* Top Banner: Industrial Commitments */}
      <div className="border-b border-neutral-800/80 bg-neutral-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C62828]/10 flex items-center justify-center shrink-0 border border-[#C62828]/30">
                <Flame className="w-5 h-5 text-[#C62828]" />
              </div>
              <div>
                <div className="text-white text-xs sm:text-sm font-bold">100% Carbonized Splints</div>
                <div className="text-[11px] text-neutral-400">Zero afterglow ignition safety</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C7A56B]/10 flex items-center justify-center shrink-0 border border-[#C7A56B]/30">
                <Award className="w-5 h-5 text-[#C7A56B]" />
              </div>
              <div>
                <div className="text-white text-xs sm:text-sm font-bold">IS 2653 Compliant</div>
                <div className="text-[11px] text-neutral-400">National standard manufacturing</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C62828]/10 flex items-center justify-center shrink-0 border border-[#C62828]/30">
                <Truck className="w-5 h-5 text-[#C62828]" />
              </div>
              <div>
                <div className="text-white text-xs sm:text-sm font-bold">Pan-India Freight</div>
                <div className="text-[11px] text-neutral-400">Palletized bulk container dispatch</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C7A56B]/10 flex items-center justify-center shrink-0 border border-[#C7A56B]/30">
                <Shield className="w-5 h-5 text-[#C7A56B]" />
              </div>
              <div>
                <div className="text-white text-xs sm:text-sm font-bold">B2B Wholesale Portal</div>
                <div className="text-[11px] text-neutral-400">Direct factory pricing & supply</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C62828] to-[#8B0000] p-0.5 flex items-center justify-center shadow-lg">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-extrabold tracking-wider text-white text-xl">
                  PRIME MATCH
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.28em] text-[#C7A56B] uppercase">
                  INDUSTRIES
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Crafted with precision. Built on trust. Leading manufacturer of commercial, household, premium Aspen, and custom-branded safety matchboxes for global distributors and hospitality brands.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-xs text-[#C7A56B]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Demo Client Presentation Model</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C62828] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#C7A56B] transition-colors flex items-center justify-between">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C7A56B] transition-colors flex items-center justify-between">
                  <span>About Our Factory</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C7A56B] transition-colors flex items-center justify-between">
                  <span>Product Catalogue</span>
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-[#C7A56B] transition-colors flex items-center justify-between">
                  <span>Manufacturing Flow</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C7A56B] transition-colors flex items-center justify-between">
                  <span>Industrial Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C7A56B] transition-colors flex items-center justify-between">
                  <span>Contact & Enquiries</span>
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-[#C7A56B] hover:underline flex items-center gap-1">
                  <span>Admin Dashboard</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Lines */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C7A56B] pl-2">
              Product Lines
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products?category=Regular" className="hover:text-white transition-colors">
                  Regular Safety Matchboxes
                </Link>
              </li>
              <li>
                <Link href="/products?category=Premium" className="hover:text-white transition-colors">
                  Premium Aspen Series
                </Link>
              </li>
              <li>
                <Link href="/products?category=Custom+Printed" className="hover:text-white transition-colors">
                  Custom Printed Hospitality
                </Link>
              </li>
              <li>
                <Link href="/products?category=Wholesale+Packs" className="hover:text-white transition-colors">
                  Wholesale Master Cartons
                </Link>
              </li>
              <li>
                <Link href="/products?q=Jumbo" className="hover:text-white transition-colors">
                  Jumbo Hearth Matches
                </Link>
              </li>
              <li>
                <Link href="/products?q=Cigar" className="hover:text-white transition-colors">
                  Cigar Lounge Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Placeholders */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C62828] pl-2">
              Factory & Office
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                <span className="text-xs">
                  [PLACEHOLDER: Industrial Zone, Sector 4, Match Manufacturing Belt, Tamil Nadu / Gujarat, India]
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7A56B] shrink-0" />
                <span className="text-xs font-mono">
                  [PLACEHOLDER: +91 98000 00000]
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C62828] shrink-0" />
                <span className="text-xs font-mono">
                  [PLACEHOLDER: sales@primematch-demo.in]
                </span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-neutral-800">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold py-2 px-3 rounded transition-colors"
              >
                <span>Request Distributor Kit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer Banner */}
      <div className="border-t border-neutral-800 bg-black/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 PRIME MATCH INDUSTRIES (Demonstration Brand). All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="text-neutral-400">Client Presentation Prototype</span>
            <span className="text-neutral-600">•</span>
            <span>Sample Data Only</span>
            <span className="text-neutral-600">•</span>
            <span>No Real Transactions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
