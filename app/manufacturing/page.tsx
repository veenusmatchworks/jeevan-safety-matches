'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
  Factory,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  Check
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export default function ManufacturingPage() {
  const steps = [
    {
      step: '01',
      title: 'Wooden Splint Carbonization',
      subtitle: 'Zero Afterglow Safety Chemistry',
      description: 'Raw wooden match splints are vacuum-treated and impregnated with dilute ammonium phosphate solution. This prevents dangerous afterglow and glowing embers after the flame is extinguished.',
      highlight: 'Uniform Machine Cut & Treated Splints'
    },
    {
      step: '02',
      title: 'Head Chemical Dipping',
      subtitle: 'Single-Strike Instant Ignition',
      description: 'The tip of each splint is dipped in our proprietary potassium chlorate and sulfur composition, engineered with special binders for smooth, instant striking without sulfur odor or explosive sparks.',
      highlight: 'Precision Spherical Head Uniformity'
    },
    {
      step: '03',
      title: 'Moisture Barrier Duplex Shells',
      subtitle: 'Engineered for Coastal & Wet Weather',
      description: 'Outer matchbox shells and inner sliding trays are crafted from dense duplex board and natural veneers, sealed against humidity to guarantee instant lighting even in coastal or agricultural monsoons.',
      highlight: 'Moisture Proof Rigid Outer Box'
    },
    {
      step: '04',
      title: 'Automated Counting & Tray Insertion',
      subtitle: 'Strict Count Guarantee',
      description: 'High-speed automated packaging machines count and pack exact stick quantities: 27 sticks for JEEVAN ₹1, 50 sticks for JEEVAN ₹2, and 30 sticks for TEHLA ₹1, followed by side friction coating.',
      highlight: 'Zero Wastage Automated Packaging'
    },
    {
      step: '05',
      title: 'Master Baling & Warehouse Dispatch',
      subtitle: 'Heavy-Duty 1,000-Box Bales',
      description: 'Individual boxes are packed in 10-box bundles, wrapped in heavy-duty kraft paper, and compressed into 1,000-box master bales ready for immediate transit on our dedicated transport lorries.',
      highlight: 'Tarpaulin-Sealed All-Weather Bales'
    }
  ];

  return (
    <div className="py-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Banner */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5" />
              <span>Srivilliputhur &bull; 3 Manufacturing Units &bull; Est. 1979</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Precision Engineering & <br />
              <span className="bg-gradient-to-r from-red-700 via-red-800 to-amber-700 bg-clip-text text-transparent">
                3 Manufacturing Units.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded in <strong>1979 starting with a single unit</strong>, Veenus Match Works has expanded under the leadership of Managing Director <strong>Mr. S. Hariharan</strong> into <strong>3 full-scale industrial manufacturing units</strong> in Srivilliputhur, manufacturing <strong>JEEVAN and TEHLA</strong> safety matches with consistent single-strike reliability and moisture resistance.
            </p>
          </div>
          <div className="hidden lg:flex shrink-0 p-4 rounded-3xl bg-slate-50 border border-slate-200">
            <VeenusLogo size="lg" />
          </div>
        </div>

        {/* 5-Step Manufacturing Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Factory Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              5-Stage Quality Assurance Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Every single batch of JEEVAN and TEHLA matches undergoes rigorous chemical and mechanical verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-red-700 font-mono">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Standardized Stage
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-red-700 font-bold mt-0.5">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Plant Capacity Callout Card */}
            <div className="bg-gradient-to-br from-red-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="font-bold text-xl">Factory Output Capacity</h3>
                <p className="text-xs text-rose-100 leading-relaxed">
                  Our Srivilliputhur facility is equipped to produce up to <strong>1,00,000 safety matchboxes daily</strong>, with seamless same-day truck loading from our internal transport fleet depot.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Request Factory Quotation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-slate-900 text-xl">Technical Safety Match Specifications</h3>
              <p className="text-xs text-slate-500">Commercial parameters adhering to Indian industrial standards.</p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
              100% Guaranteed QC Testing
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4">JEEVAN ₹1.00 (27 Sticks)</th>
                  <th className="py-3 px-4">JEEVAN ₹2.00 (50 Sticks)</th>
                  <th className="py-3 px-4">TEHLA ₹1.00 (30 Sticks)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Trademark Regd No.</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-red-700">3481060</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-red-700">3481060</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-amber-700">1395866</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Splint Material</td>
                  <td className="py-3.5 px-4 text-slate-700">Carbonized Aspen Wood</td>
                  <td className="py-3.5 px-4 text-slate-700">Carbonized Aspen Wood</td>
                  <td className="py-3.5 px-4 text-slate-700">Carbonized Aspen Wood</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Afterglow Elimination</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">Zero Afterglow (&lt; 2s)</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">Zero Afterglow (&lt; 2s)</td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold">Zero Afterglow (&lt; 2s)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Outer Box Material</td>
                  <td className="py-3.5 px-4 text-slate-700">Moisture-Resistant Duplex</td>
                  <td className="py-3.5 px-4 text-slate-700">Moisture-Resistant Duplex</td>
                  <td className="py-3.5 px-4 text-slate-700">Moisture-Resistant Duplex</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Friction Coating</td>
                  <td className="py-3.5 px-4 text-slate-700">Smooth Dual-Sided Phosphorus</td>
                  <td className="py-3.5 px-4 text-slate-700">Smooth Dual-Sided Phosphorus</td>
                  <td className="py-3.5 px-4 text-slate-700">Smooth Dual-Sided Phosphorus</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Master Packing</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">1,000 Boxes / Bale</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">1,000 Boxes / Bale</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">1,000 Boxes / Bale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
