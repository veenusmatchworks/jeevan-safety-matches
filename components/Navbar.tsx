'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Flame,
  Truck,
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Match Products', href: '/products' },
    { name: 'Manufacturing Units', href: '/manufacturing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello Veenus Group, I would like to inquire about Jeevan & Tehla Safety Matches.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top Utility Bar - Prestigious Royal Burgundy */}
      <div className="bg-[#7f1d1d] text-white text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-rose-100 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">3/19/A, Venkateswarpuram, Aladipatti, Srivilliputhur - 626125</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="flex items-center gap-1.5 text-rose-100 hover:text-amber-200 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <span className="text-rose-300/40 hidden sm:inline">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Official Emblem Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Veenus Match Works Home">
            <VeenusLogo size="md" showText={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-red-800 bg-red-50 border border-red-200/90 shadow-xs'
                      : 'text-slate-700 hover:text-red-700 hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm hover:shadow-md transition-all hover:scale-102"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-red-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-800 border border-red-200'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-red-700'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-red-700" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
