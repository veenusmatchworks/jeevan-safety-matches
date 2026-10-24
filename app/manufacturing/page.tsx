import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Factory,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Sparkles,
  Flame,
  Truck,
  RotateCcw,
  Gauge
} from 'lucide-react';
import { MANUFACTURING_STEPS } from '@/lib/data';

export default function ManufacturingPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Header Banner */}
      <section className="bg-[#171717] text-white py-16 lg:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
              <Factory className="w-4 h-4 text-[#C62828]" />
              <span>Proposed Industrial Facility</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              The Science of Precision Combustion.
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Explore the 5-stage automated production pipeline engineered to produce millions of safe, moisture-resistant matchboxes every month.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-r border-neutral-200 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-[#C62828]">12,000</div>
            <div className="text-xs font-bold text-neutral-800 mt-1">Sticks Dipped / Min</div>
            <div className="text-[11px] text-neutral-500">Continuous Rotary Carousel</div>
          </div>

          <div className="border-r border-neutral-200 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-[#C7A56B]">300 ppm</div>
            <div className="text-xs font-bold text-neutral-800 mt-1">Box Folding Speed</div>
            <div className="text-[11px] text-neutral-500">Rotary Cardboard Scoring</div>
          </div>

          <div className="border-r border-neutral-200 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-black text-[#171717]">&lt; 8%</div>
            <div className="text-xs font-bold text-neutral-800 mt-1">Veneer Moisture Content</div>
            <div className="text-[11px] text-neutral-500">Thermal Desiccation Chambers</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">0.0s</div>
            <div className="text-xs font-bold text-neutral-800 mt-1">Afterglow Extinction</div>
            <div className="text-[11px] text-neutral-500">Ammonium Phosphate Carbonized</div>
          </div>
        </div>
      </div>

      {/* Detailed 5-Step Production Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
            <span>End-to-End Workflow</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-neutral-900">
            5 Core Manufacturing Phases
          </h2>
          <p className="text-neutral-600 text-sm">
            From raw timber conditioning to optoelectronic spark testing and master palletization.
          </p>
        </div>

        <div className="space-y-12">
          {MANUFACTURING_STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-sm ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black font-mono text-[#C62828]">{step.step}</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C7A56B] block">
                      Phase {step.step} • {step.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900">{step.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {step.description}
                </p>

                {/* Details list */}
                <div className="space-y-2 pt-2">
                  {step.details.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stat Box */}
                <div className="pt-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F5EF] border border-neutral-200 text-xs text-neutral-800 font-medium">
                    <span className="font-bold text-[#C62828]">{step.stat}:</span>
                    <span>{step.statLabel}</span>
                  </span>
                </div>
              </div>

              {/* Step Visual Simulation Box */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-3 max-w-xs">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center mx-auto text-[#C7A56B] border border-neutral-700">
                      <Cpu className="w-7 h-7" />
                    </div>
                    <div className="font-bold text-sm text-white">
                      Automated Station {step.step}
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Continuous PLC sensors monitoring temperature, viscosity, and feed velocity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-12 text-white border border-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
                <ShieldCheck className="w-4 h-4 text-[#C62828]" />
                <span>Zero Tolerance QA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                Comprehensive Laboratory Inspection Protocols
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Before any batch is sealed into master cartons, samples are submitted to simulated monsoon humidity testing (95% relative humidity at 38°C) to ensure striking performance under extreme weather conditions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs">
                <span className="px-3 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-300">
                  ✔ Strike Force Calibration
                </span>
                <span className="px-3 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-300">
                  ✔ Flame Height Stability
                </span>
                <span className="px-3 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-300">
                  ✔ Box Edge Crush Test (ECT)
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-900 p-6 rounded-2xl border border-neutral-800 text-center space-y-3">
              <div className="text-xs font-mono text-[#C7A56B] uppercase font-bold">Standard Certification</div>
              <div className="text-xl font-black text-white">IS 2653:1998</div>
              <div className="text-xs text-neutral-400">
                Specification for Safety Matches in Boxes. Verified non-toxic formulation and carbonized splint treatment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#C62828] hover:bg-[#A82020] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl transition-all"
        >
          <span>Schedule a Factory Visit or Prototype Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
