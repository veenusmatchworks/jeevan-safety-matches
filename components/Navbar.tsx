'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ShieldCheck,
  Search,
  Package,
  Building2,
  Bus,
  ChevronRight
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';
import { useFactory } from '@/context/FactoryContext';

export const Navbar = () => {
  const { companyContact } = useFactory();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [logoClicks, setLogoClicks] = useState<number>(0);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    setLogoClicks((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        e.preventDefault();
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('open-secret-admin'));
        }
        return 0;
      }
      setTimeout(() => setLogoClicks(0), 1500);
      return next;
    });
  };

  // Listen for Ctrl+K shortcut to open website search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Match Products', href: '/products' },
    { name: 'Manufacturing Units', href: '/manufacturing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${companyContact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Veenus Group, I would like to inquire about Jeevan & Tehla Safety Matches.'
  )}`;

  const searchableItems = [
    { title: 'JEEVAN Safety Matches (₹1.00)', subtitle: 'Average 27 Sticks • Three Fruits Brand • Cardboard Matchbox', href: '/products/jeevan-1rs', type: 'Product' },
    { title: 'JEEVAN Safety Matches (₹2.00)', subtitle: 'Average 50 Sticks • Family Box Pack • High Splint Count', href: '/products/jeevan-2rs', type: 'Product' },
    { title: 'TEHLA Safety Matches (₹1.00)', subtitle: 'Average 30 Sticks • Moisture-Proof • Smooth Friction Strike', href: '/products/tehla-1rs', type: 'Product' },
    { title: 'Veenus Match Works (Unit 1)', subtitle: 'Mother Plant Industrial Facility in Srivilliputhur (Est. 1979)', href: '/manufacturing', type: 'Unit' },
    { title: 'United Match Industries (Unit 2)', subtitle: 'High-speed automated frame-filling & carton packing unit', href: '/manufacturing', type: 'Unit' },
    { title: 'The Cauveri Matches (Unit 3)', subtitle: 'Precision splint dipping & chemical ventilation facility', href: '/manufacturing', type: 'Unit' },
    { title: 'Sri Cauveri Travels', subtitle: 'Passenger transport fleet with 10+ modern omni buses', href: '/about', type: 'Fleet' },
    { title: 'Wholesale B2B Dealership & Supply', subtitle: 'Factory direct quotation and bulk master bale dispatches', href: '/contact', type: 'Wholesale' },
    { title: 'Factory Office Contact & Address', subtitle: '3/19/A Venkateswarpuram, Aladipatti, Srivilliputhur', href: '/contact', type: 'Contact' },
    { title: 'About Us — Leadership & Vision', subtitle: 'Founded 1979 by Mr. M. Subburam, managed by Mr. S. Hariharan', href: '/about', type: 'About' }
  ];

  const filteredSearchResults = searchQuery.trim() === ''
    ? searchableItems.slice(0, 5)
    : searchableItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        {/* Top Utility Bar - Prestigious Royal Burgundy */}
        <div className="bg-[#7f1d1d] text-white text-xs py-2 px-4 shadow-inner">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-rose-100 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span className="truncate">3/19/A, Venkateswarpuram, Aladipatti, Srivilliputhur - 626125</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs shrink-0">
              <a
                href={`tel:${companyContact.phoneCall}`}
                className="flex items-center gap-1.5 text-rose-100 hover:text-amber-200 font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>{companyContact.phoneDisplay}</span>
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
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
            {/* Official Emblem Logo with Secret 3-Click Admin Trigger */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center shrink-0 cursor-pointer"
              aria-label="Veenus Match Works Home"
            >
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

            {/* Search Trigger & Action Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Website Search Button with Logo Emblem */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/90 text-xs font-semibold transition-all hover:scale-102"
                aria-label="Search website and catalog"
              >
                <Search className="w-3.5 h-3.5 text-red-700 shrink-0" />
                <span className="hidden sm:inline">Search Site</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-300 rounded text-slate-500">
                  Ctrl K
                </kbd>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm hover:shadow-md transition-all hover:scale-102 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span className="hidden lg:inline">WhatsApp Inquiry</span>
                <span className="lg:hidden">Inquire</span>
              </a>

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
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
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
                href={`tel:${companyContact.phoneCall}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-red-700" />
                <span>Call: {companyContact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================ */}
      {/* WEBSITE SEARCH MODAL WITH OFFICIAL BRAND LOGO               */}
      {/* ============================================================ */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Search Modal Header with Official Brand Logo */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-red-900 via-red-950 to-slate-900 text-white flex items-center justify-between border-b border-red-900/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 p-1 flex items-center justify-center shrink-0 border border-white/15">
                  <Image
                    src="/logo-official.png"
                    alt="Jeevan Safety Matches Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white">Jeevan Safety Matches</h3>
                  <p className="text-[11px] text-red-200/80 font-medium">Official Website &amp; Catalog Search</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-100">
              <div className="relative">
                <Search className="w-4 h-4 text-red-700 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search matches, products, plants, or contact info..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-red-700 transition-colors"
                />
              </div>
            </div>

            {/* Search Results List */}
            <div className="max-h-80 overflow-y-auto p-3 divide-y divide-slate-100 text-xs">
              {filteredSearchResults.length === 0 ? (
                <div className="py-10 text-center text-slate-400 space-y-2">
                  <p className="font-bold text-slate-600">No matching results found</p>
                  <p className="text-[11px] text-slate-400">Try searching for &quot;Jeevan&quot;, &quot;Tehla&quot;, &quot;Factory&quot;, or &quot;Travels&quot;.</p>
                </div>
              ) : (
                filteredSearchResults.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                        <Image
                          src="/logo-official.png"
                          alt="Logo"
                          width={22}
                          height={22}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                ))
              )}
            </div>

            {/* Search Modal Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between px-5">
              <span>Established 1979 &bull; Regd. No. 3481060</span>
              <span className="font-medium">Press <kbd className="px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded">Esc</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
