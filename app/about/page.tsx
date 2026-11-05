'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
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
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello Jeevan Safety Matches, I would like to inquire about your safety matches wholesale supply.'
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
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
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
                10 Advanced Machinery Lines
              </div>
              <div className="px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                3 Manufacturing Sister Concerns
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
                Veenus Match Works (Largest Manufacturing Unit)
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
            <div className="text-3xl font-black text-amber-700">All-India</div>
            <div className="text-xs font-bold text-slate-900">Dealer Network</div>
            <p className="text-[11px] text-slate-500">Reliable wholesale supply.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="text-3xl font-black text-slate-900">3 Units</div>
            <div className="text-xs font-bold text-slate-900">Manufacturing Strength</div>
            <p className="text-[11px] text-slate-500">Veenus Match Works largest unit.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
            <div className="text-3xl font-black text-red-700">10 Lines</div>
            <div className="text-xs font-bold text-slate-900">Modern Machinery</div>
            <p className="text-[11px] text-slate-500">High-speed automated systems.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1 col-span-2 lg:col-span-1">
            <div className="text-3xl font-black text-emerald-700">100%</div>
            <div className="text-xs font-bold text-slate-900">Reliable Quality</div>
            <p className="text-[11px] text-slate-500">Carbonized single-strike matches.</p>
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
              Jeevan Safety Matches has established a strong presence in the wholesale market, serving dealers and distributors across the country with uncompromised reliability and dedication. Our manufacturing strength is supported by three sister concerns: <strong>Veenus Match Works</strong>, <strong>United Match Industries</strong>, and <strong>The Cauveri Matches</strong>. Among these, <strong>Veenus Match Works is our largest manufacturing unit</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unit 1: Veenus Match Works */}
            <div className="p-6 rounded-2xl bg-red-50/50 border-2 border-red-200 space-y-3 relative">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-700 text-white">
                  Largest Unit
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-black text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">Veenus Match Works</h3>
              <p className="text-xs text-red-700 font-bold">Our Largest Manufacturing Unit &bull; Srivilliputhur</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Central flagship production facility handling high-speed splint-framing, automated match-head chemical dipping, continuous drying systems, and master wholesale bundling.
              </p>
            </div>

            {/* Unit 2: United Match Industries */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-black text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">United Match Industries</h3>
              <p className="text-xs text-amber-700 font-bold">Sister Concern &bull; Srivilliputhur</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated unit operating high-precision duplex matchbox-making machinery, vibration splint-sorting sieves, and high-velocity automated box filling lines.
              </p>
            </div>

            {/* Unit 3: The Cauveri Matches */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-black text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">The Cauveri Matches</h3>
              <p className="text-xs text-slate-600 font-bold">Sister Concern &bull; Srivilliputhur</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized finishing plant with advanced quality-inspection systems, multi-color trademark printing, cellophane unit wrapping, and master carton-packing machinery.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4. ADVANCED HIGH-SPEED INDUSTRIAL MACHINERY (10 Lines)         */}
        {/* ============================================================== */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Modern Industrial Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Equipped with Advanced High-Speed Machinery
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All three manufacturing units are equipped with advanced high-speed machinery and modern industrial infrastructure, including splint-making machines, splint-sorting machines, match-frame machines, match-head dipping machines, industrial drying systems, matchbox-making machines, automated matchbox-filling machines, printing and labelling machines, quality-inspection systems, and carton-packing machinery. These facilities support large-scale manufacturing, efficient production processes and consistent product quality:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {machineryList.map((m, idx) => (
              <div
                key={m.title}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-red-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <Cog className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">{m.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. QUALITY ASSURANCE & WHOLESALE COMMITMENT                    */}
        {/* ============================================================== */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Our Core Identity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Quality is Our Identity & Promise
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Jeevan Safety Matches, we believe that the quality of even a single matchstick reflects the reputation of our brand. With decades of experience and a strong commitment to consistency, we strive to maintain the trust of our customers across every wholesale market and retail counter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Matchbox Products Catalogue</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Explore our flagship registered safety matches including JEEVAN (₹1.00 & ₹2.00) and TEHLA Handcart brand, packed in retail bundles and wholesale cartons.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-800"
                >
                  <span>Explore Matchbox Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">15 Factory Manufacturing Photos</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  View authentic photographs of our 3 manufacturing plants, production decks, drying tunnels, chemical dipping lines, and packaging bays in Srivilliputhur.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/manufacturing"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800"
                >
                  <span>View 15 Factory Photos</span>
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
              Through our commitment to quality, advanced manufacturing infrastructure and continuous dedication to excellence, we remain dedicated to building a strong legacy for the future.
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