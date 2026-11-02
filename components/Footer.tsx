import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export const Footer = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello Veenus Group, I would like to inquire about Veenus Safety Matches / Vehicle & Transport Booking.'
  )}`;

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-white/10 mt-16">
      {/* Quick Action Band */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 border-b border-red-900/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                Direct Inquiries
              </span>
              <span className="text-xs text-slate-400">Response within minutes</span>
            </div>
            <h4 className="text-lg font-bold text-white">Need Wholesale Safety Matches or Fleet Transport Booking?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Contact Veenus Group directly for immediate stock supply, customized carton batches, or commercial freight trips.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all hover:scale-105 shadow-sm"
            >
              Call: {COMPANY_CONTACT.phoneDisplay}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <VeenusLogo size="md" showText={true} lightText={true} />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Prominent safety matchbox manufacturer and trusted transport logistics fleet operator. Serving wholesalers, commercial distributors, and travelers across South India with over four decades of proven quality.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1.5">Business Divisions:</span>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Veenus Match Works (Safety Matches)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>Veenus Freight Logistics (Lorries & Mini Trucks)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Veenus Travel Fleet (Mini Vans & Tourist Buses)</span>
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

          {/* Column 3: Transport & Fleet */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Fleet & Transports</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/transport" className="hover:text-white transition-colors">
                  Maruti Omni & Eeco Mini Vans
                </Link>
              </li>
              <li>
                <Link href="/transport" className="hover:text-white transition-colors">
                  Tata Ace & Dost Mini Lorries
                </Link>
              </li>
              <li>
                <Link href="/transport" className="hover:text-white transition-colors">
                  6-Wheeler & 10-Wheeler Freight Trucks
                </Link>
              </li>
              <li>
                <Link href="/transport" className="hover:text-white transition-colors">
                  Tourist Passenger Buses & Coaches
                </Link>
              </li>
              <li>
                <Link href="/transport" className="hover:text-white transition-colors">
                  All-India National Permit Freight
                </Link>
              </li>
              <li>
                <Link href="/transport" className="hover:text-white transition-colors">
                  Family Tour & Temple Pilgrimage Trips
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Factory & Fleet Office</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_CONTACT.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_CONTACT.phoneCall}`} className="hover:text-white font-semibold transition-colors">
                    {COMPANY_CONTACT.phoneDisplay} <span className="text-[10px] text-slate-400 font-normal">(Office)</span>
                  </a>
                  <a href={`tel:${COMPANY_CONTACT.mobileCall}`} className="hover:text-white text-slate-300 transition-colors">
                    {COMPANY_CONTACT.mobileDisplay} <span className="text-[10px] text-slate-400 font-normal">(Mobile)</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold transition-colors">
                  WhatsApp: {COMPANY_CONTACT.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-white/5">
                {COMPANY_CONTACT.hours}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5 text-xs text-slate-400 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            &copy; 2026 VEENUS GROUP (Veenus Match Works & Transports). All rights reserved.
          </div>
          <div className="text-slate-400 text-[11px] flex items-center gap-2">
            <Link href="/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link>
            <span>&bull;</span>
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
            <span>&bull;</span>
            <Link href="/admin" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">Admin Portal</Link>
            <span>&bull;</span>
            <span>Srivilliputhur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
