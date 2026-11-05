'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Building2,
  History,
  Calendar,
  Factory,
  Cog,
  Bus,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello Jeevan Safety Matches, I would like to inquire about your safety matches and transport services.'
  )}`;

  const machineryList = [
    { title: 'Splint-Making Machines', desc: 'Precision wood veneer peeling and uniform carbonized splint processing.' },
    { title: 'Splint-Sorting Machines', desc: 'High-speed automated grading to separate uniform, unblemished sticks.' },
    { title: 'Match-Frame Machines', desc: 'Continuous mechanical framing for systematic multi-splint alignment.' },
    { title: 'Match-Head Dipping Machines', desc: 'Controlled chemical head formulation and spark-free composition dipping.' },
    { title: 'Industrial Drying Systems', desc: 'Moisture-evaporating ventilation tunnels for consistent humidity resistance.' },
    { title: 'Matchbox-Making Machines', desc: 'Automated duplex paperboard folding, creasing, and tray forming.' },
    { title: 'Automated Matchbox-Filling Machines', desc: 'High-speed optical stick counting and smooth tray insertion.' },
    { title: 'Printing & Labelling Machines', desc: 'Precision multi-color offset presses for registered trademark artworks.' },
    { title: 'Quality-Inspection Systems', desc: 'Rigorous batch testing for single-strike reliability and zero afterglow.' },
    { title: 'Carton-Packing Machinery', desc: 'Airtight 10-box cellophane banding and 1,000-box master bale compression.' },
  ];

  return (
    <div className="py-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ============================================================== */}
        {/* 1. HERO BANNER — OFFICIAL ABOUT JEEVAN SAFETY MATCHES          */}
        {/* ============================================================== */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              <span>ESTABLISHED 1979 &bull; REGD. NO.: 3481060 &bull; SRIVILLIPUTHUR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              About Us &mdash; <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-700 via-red-800 to-amber-700 bg-clip-text text-transparent">
                Jeevan Safety Matches
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Established in 1979 by <strong>Mr. M. Subburam</strong>, <strong>Jeevan Safety Matches (Regd. No.: 3481060)</strong> carries a legacy of quality, trust and dedication.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Today, under the leadership of his son, <strong>Mr. S. Hariharan</strong>, the company continues its journey with the same commitment to excellence. At Jeevan Safety Matches, quality is our identity. We believe that the quality of even a single matchstick reflects the reputation of our brand. With decades of experience and a strong commitment to consistency, we strive to maintain the trust of our customers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs font-bold">
                Sales: Approx. 45,000 Bundles
              </div>
              <div className="px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                3 Manufacturing Units (Veenus Largest)
              </div>
              <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
                Cauveri Travels &bull; 10+ Omni Buses
              </div>
            </div>
          </div>

          <div className="hidden lg:flex shrink-0 p-4 rounded-3xl bg-slate-50 border border-slate-200">
            <VeenusLogo size="lg" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. FIVE KEY METRICS CARDS                                      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="text-3xl font-black text-red-700">1979</div>
            <div className="text-xs font-bold text-slate-900">Year Established</div>
            <p className="text-[11px] text-slate-500">By Mr. M. Subburam in Srivilliputhur.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="text-3xl font-black text-amber-700">45,000</div>
            <div className="text-xs font-bold text-slate-900">Bundles Sold</div>
            <p className="text-[11px] text-slate-500">Strong wholesale market presence.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="text-3xl font-black text-slate-900">3 Units</div>
            <div className="text-xs font-bold text-slate-900">Manufacturing Strength</div>
            <p className="text-[11px] text-slate-500">Veenus Match Works largest unit.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="text-3xl font-black text-blue-700">15+ Lorries</div>
            <div className="text-xs font-bold text-slate-900">Freight Transport</div>
            <p className="text-[11px] text-slate-500">Entered in 2015 with single lorry.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1 col-span-2 lg:col-span-1">
            <div className="text-3xl font-black text-emerald-700">10+ Buses</div>
            <div className="text-xs font-bold text-slate-900">Cauveri Travels</div>
            <p className="text-[11px] text-slate-500">Omni bus fleet launched in 2026.</p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. WHOLESALE & THREE SISTER CONCERNS                           */}
        {/* ============================================================== */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Manufacturing Strength & Distribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Supported by Three Sister Concerns
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jeevan Safety Matches has established a strong presence in the wholesale market, serving dealers and distributors with reliability and achieving sales of approximately <strong>45,000 bundles</strong>. Our manufacturing strength is supported by three sister concerns: <strong>Veenus Match Works</strong>, <strong>United Match Industries</strong>, and <strong>The Cauveri Matches</strong>. Among these, <strong>Veenus Match Works is our largest manufacturing unit</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unit 1: Veenus Match Works */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-red-200 shadow-xs space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-700 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Largest Unit
              </div>
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center font-black text-sm">
                01
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Veenus Match Works</h3>
                <p className="text-xs text-red-700 font-bold">Largest Manufacturing Unit &bull; Srivilliputhur</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our primary and largest manufacturing facility, housing advanced high-speed automated machinery, chemical formulation decks, and automated packing carousels for flagship Jeevan Safety Matches.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Primary production & master export packaging</span>
              </div>
            </div>

            {/* Unit 2: United Match Industries */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-sm">
                02
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">United Match Industries</h3>
                <p className="text-xs text-amber-700 font-bold">Manufacturing Sister Concern &bull; Koomapatti</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated manufacturing unit specialized in precision matchstick production, including the renowned TEHLA safety matches (Regd. No. 1395866) and wholesale cartons.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Safety match manufacturing & wholesale supply</span>
              </div>
            </div>

            {/* Unit 3: The Cauveri Matches */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center font-black text-sm">
                03
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">The Cauveri Matches</h3>
                <p className="text-xs text-slate-700 font-bold">Allied Manufacturing Sister Concern</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Allied manufacturing unit supporting large-scale output with high-speed automated splint handling, moisture-resistant packaging, and extensive dealer distribution.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Industrial match production & regional supply</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4. ADVANCED INDUSTRIAL MACHINERY & INFRASTRUCTURE              */}
        {/* ============================================================== */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/90 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-100/70 px-3 py-1 rounded-full border border-red-200">
              Modern Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              High-Speed Machinery & Facilities
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All three manufacturing units are equipped with advanced high-speed machinery and modern industrial infrastructure. These facilities support large-scale manufacturing, efficient production processes and consistent product quality:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {machineryList.map((mach, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-red-700">
                  <Cog className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Step 0{idx + 1}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{mach.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{mach.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. TRANSPORTATION SECTOR EXPANSION (2015 & 2026)               */}
        {/* ============================================================== */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Diversification & Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Expanding Beyond the Matches Industry
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Through continuous innovation and customer trust, our group has diversified into commercial road haulage and luxury passenger travel across South India:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2015: Commercial Freight */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    Commercial Haulage
                  </span>
                  <span className="text-2xl font-black text-slate-900">2015</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Freight Lorries Fleet (15+ Lorries)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Expanding beyond the matches industry, we entered the transportation sector in <strong>2015 under the leadership of Mr. S. Hariharan</strong>, beginning with a single lorry. Through continuous growth, we have expanded our fleet to <strong>more than 15 lorries</strong>.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Started in 2015 with a single lorry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Now grown to an active fleet of more than 15 lorries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>All-India national permits with weather-proof covers</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/transport"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
                >
                  <span>Explore Freight Logistics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2026: Cauveri Travels */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Passenger Tourism
                  </span>
                  <span className="text-2xl font-black text-slate-900">2026</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cauveri Travels (10+ Omni Buses)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In <strong>2026</strong>, we further entered the omni bus transportation sector under the name <strong>Cauveri Travels</strong>, which currently operates a fleet of <strong>more than 10 omni buses</strong>.
                </p>
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Entered omni bus sector in 2026 under Cauveri Travels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Fleet of more than 10 luxury omni buses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pilgrimage tours, weddings, and South India travel</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/transport"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Explore Cauveri Travels</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 6. CONCLUSION & DIRECT ACTION BANNER                           */}
        {/* ============================================================== */}
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-rose-950 p-8 sm:p-12 rounded-3xl text-white shadow-xl space-y-6">
          <div className="max-w-3xl space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black">
              Building a Strong Legacy for the Future
            </h3>
            <p className="text-sm text-rose-100 leading-relaxed">
              Through our commitment to quality, advanced manufacturing infrastructure and continuous expansion into new industries, we remain dedicated to building a strong legacy for the future.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-sm hover:bg-rose-50 transition-colors"
            >
              Call: {COMPANY_CONTACT.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              View Matchbox Catalogue
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
