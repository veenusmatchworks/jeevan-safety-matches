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
import { VeenusLogo } from '@/components/VeenusLogo';

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello Veenus Group, I would like to inquire about Veenus Match Works products and Transport services.'
  )}`;

  return (
    <div className="py-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              <span>ESTABLISHED 1979 &bull; SRIVILLIPUTHUR, TAMIL NADU</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              More Than Safety Matches &mdash; <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-red-700 via-red-800 to-amber-700 bg-clip-text text-transparent">
                A Unified Industrial & Transport Enterprise.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>Veenus Group</strong> brings together over 45 years of industrial heritage. Headquartered in <strong>Srivilliputhur</strong>, the business was established in <strong>1979</strong> starting with 1 manufacturing unit and has steadily grown into <strong>3 full-scale industrial manufacturing units</strong> producing <strong>JEEVAN and TEHLA</strong> safety matches, alongside operating <strong>Cavery Travels (fleet of 30+ luxury tourist buses)</strong> and commercial freight lorries under the leadership of Managing Director <strong>Mr. S. Hariharan</strong>.
            </p>
          </div>
          <div className="hidden lg:flex shrink-0 p-4 rounded-3xl bg-slate-50 border border-slate-200">
            <VeenusLogo size="lg" />
          </div>
        </div>

        {/* The 3 Core Pillars with Visual Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Integrated Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Safety Matches &bull; Freight Lorries &bull; Passenger Fleet
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct factory manufacturing backed by end-to-end commercial highway logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Matchbox Manufacturing */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3">
                  <Image
                    src="/products/jeevan-1rs-matches.jpg"
                    alt="JEEVAN Safety Matches by Veenus Match Works"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                  />
                  <div className="absolute top-3 left-3 bg-red-700 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Matchbox Works
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-700 transition-colors">
                    Veenus Match Works
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Producing premier JEEVAN and TEHLA brand safety matches. Engineered with carbonized wooden splints, moisture-resistant duplex boards, and consistent single-strike ignition.
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Natural veneer & duplex board boxes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>High humidity resistance & zero afterglow</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/products"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  <span>Explore Match Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Freight Lorries */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full bg-slate-100 border-b border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800"
                    alt="Veenus Commercial Freight Lorries"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Freight Logistics
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-700 transition-colors">
                    Commercial Lorries & Trucks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Operating 6-wheeler and 10-wheeler heavy trucks along with Tata Ace mini lorries for fast factory dispatches, raw material transport, and wholesale cargo shipments.
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>All-India national transport permits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Secure weather-tight tarpaulin covers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/transport"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  <span>View Truck Fleet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Travels & Vans */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full bg-slate-100 border-b border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
                    alt="Veenus Travels Passenger Buses"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Passenger Fleet
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-700 transition-colors">
                    Cavery Travels (30+ Buses)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Operating an expansive fleet of 30+ luxury tourist coaches (32 to 54 seater AC & Non-AC) and mini vans for South India pilgrimage tours, family weddings, and institutional excursions.
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>30+ Luxury push-back AC & Non-AC coaches</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Experienced highway captains & 24/7 service</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/transport"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  <span>Book Cavery Travels Buses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage & Founders Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Our Heritage & Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Four Decades of Industry Trust
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Founded in <strong>1979</strong> with a single manufacturing unit in Srivilliputhur, Veenus Match Works began with a dedicated commitment to quality safety matches. Over the decades, through strategic focus and customer trust, that single unit has expanded into <strong>3 modern industrial manufacturing units</strong> across the region.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Today, under the leadership of Managing Director <strong>Mr. S. Hariharan</strong>, Veenus Group has further diversified into passenger tourism with <strong>Cavery Travels</strong>, operating an impressive fleet of <strong>30+ luxury buses</strong> alongside heavy freight lorries.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-3xl font-black text-red-700">1979</div>
                <div className="text-xs font-bold text-slate-900">Year Established</div>
                <p className="text-[11px] text-slate-500">Established in Srivilliputhur with 1 initial unit.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-3xl font-black text-amber-700">3 Units</div>
                <div className="text-xs font-bold text-slate-900">Manufacturing Plants</div>
                <p className="text-[11px] text-slate-500">Grown from 1 unit into 3 modern production units.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-3xl font-black text-emerald-700">30+ Buses</div>
                <div className="text-xs font-bold text-slate-900">Cavery Travels</div>
                <p className="text-[11px] text-slate-500">Luxury coaches for tours, weddings & pilgrimages.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-3xl font-black text-slate-800">24/7</div>
                <div className="text-xs font-bold text-slate-900">Logistics & Fleet</div>
                <p className="text-[11px] text-slate-500">Managed under the direction of Mr. S. Hariharan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Action Banner */}
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-rose-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Connect with Veenus Group Management</h3>
            <p className="text-xs sm:text-sm text-rose-100 mt-1">
              For dealership inquiries, bulk orders, or long-term vehicle leasing contracts.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-sm hover:bg-rose-50 transition-colors"
            >
              Call: {COMPANY_CONTACT.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
