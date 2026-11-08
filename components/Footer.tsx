'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';
import { useFactory } from '@/context/FactoryContext';

export const Footer = () => {
  const pathname = usePathname();
  const { companyContact } = useFactory();
  const [footerClicks, setFooterClicks] = useState<number>(0);

  // Do not render public website footer on admin portal
  if (pathname?.startsWith('/control-center') || pathname?.startsWith('/admin')) {
    return null;
  }

  const handleFooterSecretClick = () => {
    setFooterClicks((prev: number) => {
      const next = prev + 1;
      if (next >= 3) {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('open-secret-admin'));
        }
        return 0;
      }
      setTimeout(() => setFooterClicks(0), 1500);
      return next;
    });
  };

  const whatsappUrl = `https://wa.me/${companyContact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Veenus Group, I would like to inquire about Jeevan & Tehla Safety Matches wholesale supply.'
  )}`;

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-white/10 mt-16">
      {/* Quick Action Band */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 border-b border-red-900/30 py-6">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                Direct Inquiries
              </span>
              <span className="text-xs text-slate-400">Response within minutes</span>
            </div>
            <h4 className="text-lg font-bold text-white">Need Wholesale Safety Matches or Distributor Supply?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Contact Veenus Group directly for immediate stock supply, wholesale dealer pricing, and customized carton batches.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${companyContact.phoneCall}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 shadow-sm"
            >
              Call: {companyContact.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:scale-105 shadow-md flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <VeenusLogo size="md" showText={true} lightText={true} />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Prominent safety matchbox manufacturer serving wholesalers, commercial distributors, and regional dealers across India with over four decades of proven single-strike reliability and damp-proof quality.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1.5">Group & Sister Concerns:</span>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Veenus Match Works (Largest Manufacturing Unit)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span>United Match Industries (Sister Concern)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  <span>The Cauveri Matches (Sister Concern)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Sri Cauveri Travels (Fleet of 10+ Omni Buses)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Monthly Production: {companyContact.monthlyProduction || '50,000+ Bundles'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Match Products */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Matchbox Brands</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  JEEVAN Safety Matches (₹1.00 - 27s)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  JEEVAN Safety Matches (₹2.00 - 50s)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  TEHLA Safety Matches (₹1.00 - 30s)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  100-Box Retail Bundles
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Master Export Bales (1000s)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Factory Wholesale Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Manufacturing & Infrastructure */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span>Manufacturing Units</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors">
                  Veenus Match Works (Unit 1)
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors">
                  United Match Industries (Unit 2)
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors">
                  The Cauveri Matches (Unit 3)
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors">
                  Modern Machinery Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors">
                  Factory Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Jeevan Safety Matches
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Factory & Office</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyContact.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${companyContact.phoneCall}`} className="hover:text-white font-semibold transition-colors">
                    {companyContact.phoneDisplay} <span className="text-[10px] text-slate-400 font-normal">(Office)</span>
                  </a>
                  <a href={`tel:${companyContact.mobileCall}`} className="hover:text-white text-slate-300 transition-colors">
                    {companyContact.mobileDisplay} <span className="text-[10px] text-slate-400 font-normal">(Mobile)</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold transition-colors">
                  WhatsApp: {companyContact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${companyContact.email}`} className="hover:text-white transition-colors">
                  {companyContact.email}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-white/5">
                {companyContact.hours}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5 text-xs text-slate-400 bg-slate-950/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            &copy; 2026 VEENUS GROUP (Veenus Match Works). All rights reserved.
          </div>
          <div className="text-slate-400 text-[11px] flex items-center gap-2">
            <Link href="/manufacturing" className="hover:text-amber-400 transition-colors font-medium">Manufacturing Units</Link>
            <span>&bull;</span>
            <Link href="/products" className="hover:text-amber-400 transition-colors font-medium">Match Products</Link>
            <span>&bull;</span>
            <span>Srivilliputhur, Tamil Nadu</span>
            <span>&bull;</span>
            <span
              onClick={handleFooterSecretClick}
              className="cursor-default select-none transition-colors hover:text-slate-300"
              title=""
            >
              Est. 1979
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
