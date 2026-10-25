import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Building2,
  History,
  Calendar
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello Veenus Group, I would like to inquire about Veenus Match Works products and Transport services.'
  )}`;

  return (
    <div className="py-12 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold">
              <History className="w-3.5 h-3.5" />
              <span>ESTABLISHED 1979 &bull; SRIVILLIPUTHUR, TAMIL NADU</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              More Than Safety Matches &mdash; <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
                A Unified Industrial & Transport Enterprise.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong>Veenus Group</strong> brings together over 45 years of industrial heritage. Headquartered in <strong>Srivilliputhur</strong>, we manufacture high-grade veneer and cardboard safety matches at <strong>Veenus Match Works</strong>, while operating an active commercial fleet of <strong>heavy freight lorries, mini vans, and luxury passenger tourist coaches</strong> through <strong>Veenus Transports & Logistics</strong>.
            </p>
          </div>
        </div>

        {/* The 3 Core Pillars with Visual Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Integrated Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Safety Matches &bull; Freight Lorries &bull; Passenger Fleet
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Direct factory manufacturing backed by end-to-end commercial highway logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Matchbox Manufacturing */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="relative h-56 w-full bg-slate-900 border-b border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                    alt="Veenus Matchbox Manufacturing Plant"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[11px] font-bold px-3 py-1 rounded-full">
                    Matchbox Works
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                    Veenus Match Works
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Producing damp-proof veneer safety matches, high-carbon splint cardboard matches, and wax matches. Known for smooth friction heads and consistent single-strike ignition.
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Natural veneer & duplex board boxes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>High humidity resistance & zero afterglow</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/products"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-amber-300 border border-white/10 text-xs font-semibold transition-colors"
                >
                  <span>Explore Match Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Freight Lorries */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="relative h-56 w-full bg-slate-900 border-b border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800"
                    alt="Veenus Commercial Freight Lorries"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-blue-500 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    Freight Logistics
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">
                    Commercial Lorries & Trucks
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Operating 6-wheeler and 10-wheeler heavy trucks along with Tata Ace mini lorries for fast factory dispatches, raw material transport, and wholesale cargo shipments.
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>All-India national transport permits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Secure weather-tight tarpaulin covers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/transport"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-blue-300 border border-white/10 text-xs font-semibold transition-colors"
                >
                  <span>View Truck Fleet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Travels & Vans */}
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="relative h-56 w-full bg-slate-900 border-b border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
                    alt="Veenus Travels Passenger Buses"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    Passenger Fleet
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-white text-lg group-hover:text-emerald-300 transition-colors">
                    Passenger Buses & Omni Vans
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Equipped with Maruti Omni & Eeco mini passenger vans, plus 14 to 32 seater luxury tourist buses for family pilgrimage tours, temple trips, and institutional travel.
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>AC and Non-AC push-back luxury coaches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Experienced highway drivers & 24/7 service</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/transport"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-300 border border-white/10 text-xs font-semibold transition-colors"
                >
                  <span>Book Passenger Vehicles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage & Founders Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Our Heritage & Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Four Decades of Industry Trust
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Founded in <strong>1979</strong> by <strong>Mr. M. Subburam</strong>, Veenus Match Works was established in Srivilliputhur to deliver dependable matchboxes to regional and interstate markets. Under the forward-looking management of <strong>Mr. S. Hariharan</strong> (Managing Director) and <strong>Mr. S. Murali</strong>, the organization built an integrated enterprise combining matchbox manufacturing with road transport logistics.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operating both manufacturing units and a dedicated logistics fleet gives Veenus Group a unique advantage: guaranteed on-time dispatches, zero reliance on external freight middle-men, and direct factory-to-store cost benefits passed directly to our wholesale partners.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl space-y-2">
                <div className="text-3xl font-black text-amber-400">1979</div>
                <div className="text-xs font-bold text-white">Year Established</div>
                <p className="text-[11px] text-slate-400">Founded by Mr. M. Subburam in Srivilliputhur.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl space-y-2">
                <div className="text-3xl font-black text-blue-400">45+</div>
                <div className="text-xs font-bold text-white">Years of Service</div>
                <p className="text-[11px] text-slate-400">Serving wholesalers & business distributors across India.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl space-y-2">
                <div className="text-3xl font-black text-emerald-400">100%</div>
                <div className="text-xs font-bold text-white">Direct Fleet</div>
                <p className="text-[11px] text-slate-400">Own lorries, mini vans & tourist travel buses.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl space-y-2">
                <div className="text-3xl font-black text-purple-400">24/7</div>
                <div className="text-xs font-bold text-white">Logistics Support</div>
                <p className="text-[11px] text-slate-400">Uninterrupted cargo movement and travel booking.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Action Banner */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-500/30">
          <div>
            <h3 className="text-xl font-bold text-white">Connect with Veenus Group Management</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              For dealership inquiries, bulk orders, or long-term vehicle leasing contracts.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/15 transition-colors"
            >
              Call: {COMPANY_CONTACT.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
