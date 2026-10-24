import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Award,
  ShieldCheck,
  CheckCircle2,
  Factory,
  Globe,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  PackageCheck,
  Lightbulb
} from 'lucide-react';
import { CATEGORIES } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#171717] text-white py-16 lg:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
              <Factory className="w-4 h-4 text-[#C62828]" />
              <span>Corporate Profile & Capabilities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Engineering Reliability in Every Single Flame.
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              PRIME MATCH INDUSTRIES represents an integrated vision of modern matchbox manufacturing: marrying precision chemical engineering, disciplined wood seasoning, and bespoke luxury packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Vision Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
              <span className="w-6 h-0.5 bg-[#C62828]" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-neutral-900 leading-tight">
              A Modern Approach to a Time-Honored Industrial Craft.
            </h2>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              While safety matches have existed for over a century, modern retail and hospitality standards require unprecedented consistency. Loose splints, sulfur smoke, crumbling strike surfaces, and damp ignition failures are unacceptable in commercial settings.
            </p>

            <p className="text-neutral-600 text-sm leading-relaxed">
              At Prime Match Industries, our proposed industrial architecture addresses these exact pain points. By replacing manual dipping with precision rotary automated carousels and adopting imported Aspen wood splints, we elevate a humble everyday commodity into a badge of reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <Target className="w-6 h-6 text-[#C62828] mb-2" />
                <h3 className="font-bold text-sm text-neutral-900">Our Mission</h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  To supply reliable, safe, and beautifully packaged matchboxes to retailers, wholesalers, and hospitality brands across India and global markets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <Lightbulb className="w-6 h-6 text-[#C7A56B] mb-2" />
                <h3 className="font-bold text-sm text-neutral-900">Our Vision</h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  To establish the benchmark for sustainable, carbonized splint safety matches and bespoke corporate brand packaging.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                alt="Matchbox Factory Machinery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs font-mono text-[#C7A56B] uppercase">Industrial Standard</div>
                <div className="text-base font-bold">Heidelberg Offset & Automated Chemical Dipping</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
            <span>Capabilities & Infrastructure</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-neutral-900">
            Engineered for High-Velocity Scale
          </h2>
          <p className="text-neutral-600 text-sm">
            Our facility architecture supports everything from flexible small-batch boutique production to multi-ton export consignments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 text-[#C62828] flex items-center justify-center">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Precision Splint Selection</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We process high-grade European Aspen and Malabar pine veneers, debarking and seasoning each log under strict thermal control. Splints are chemically impregnated with ammonium phosphate to guarantee zero post-extinguish afterglow.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C7A56B]/10 text-[#C7A56B] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">High-Definition Offset Printing</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Equipped with 4-color Heidelberg offset presses, spot UV finishing stations, and precision die-cutting equipment. We execute crisp typography, metallic foil stamping, and Pantone-calibrated brand graphics.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-neutral-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 text-[#C62828] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Optoelectronic Quality Gate</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every production batch is sampled using high-speed optical vision cameras that check stick count accuracy, striking surface uniformity, and moisture barrier integrity before shrink-bundling into export master cartons.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-14 text-white border border-neutral-800 shadow-2xl">
          <div className="max-w-3xl space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
              <Award className="w-4 h-4 text-[#C62828]" />
              <span>Strict Compliance Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Quality Assurance & Safety Protocols
            </h2>
            <p className="text-neutral-400 text-sm">
              Our safety formulation adheres strictly to national industrial matchbox guidelines (IS 2653:1998) and international transport safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-neutral-300">
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Afterglow</span>
              </div>
              <p className="text-neutral-400">
                Carbonized splints extinguish instantly without glowing embers or spark drift.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Damp Proofing</span>
              </div>
              <p className="text-neutral-400">
                Waterproof synthetic polymer binders prevent match heads from crumbling in monsoon air.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Non-Hazardous Transit</span>
              </div>
              <p className="text-neutral-400">
                Compliant with UN 1944 Safety Matches regulations for road and sea container freight.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Uniform Count</span>
              </div>
              <p className="text-neutral-400">
                Automated optical sensors guarantee exact stick quantities in every single box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="bg-gradient-to-r from-[#C62828] to-[#8B0000] rounded-3xl p-10 text-white shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">Ready to Discuss a Supply Partnership?</h2>
          <p className="text-sm text-neutral-100 max-w-xl mx-auto">
            Contact our commercial desk to request custom printed prototype samples or discuss distributor wholesale pricing.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#171717] hover:bg-neutral-900 text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-colors"
            >
              <span>Contact Our Commercial Desk</span>
              <ArrowRight className="w-4 h-4 text-[#C7A56B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
