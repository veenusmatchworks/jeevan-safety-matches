'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  CheckCircle2,
  Factory,
  TrendingUp,
  Clock,
  Eye,
  ShoppingBag,
  ArrowUpRight,
  ChevronRight,
  PhoneCall,
  FileText
} from 'lucide-react';
import { CATEGORIES, PRODUCTS, MANUFACTURING_STEPS, GALLERY_ITEMS } from '@/lib/data';
import { ProductIllustration } from '@/components/ProductIllustration';
import { useCart } from '@/lib/cart-context';

export default function HomePage() {
  const { addItem } = useCart();
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* ============================================================== */}
      {/* 1. HERO SECTION                                                */}
      {/* ============================================================== */}
      <section className="relative min-h-[90vh] bg-[#171717] text-white flex items-center overflow-hidden border-b border-neutral-800">
        {/* Subtle geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C7A56B 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Ambient radial lighting */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C62828]/25 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C7A56B]/15 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800/90 border border-neutral-700/80 text-xs font-semibold tracking-wider uppercase text-[#C7A56B]">
                <Flame className="w-4 h-4 text-[#C62828]" />
                <span>Modern Industrial Matchbox Manufacturing</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-white">
                Crafted with Precision.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C7A56B] via-[#E8D5B5] to-[#C7A56B]">
                  Built on Trust.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                Quality matchbox manufacturing solutions for retailers, wholesalers, distributors, and growing businesses. From high-velocity regular safety matches to custom-branded luxury hotel collections.
              </p>

              {/* Key Highlights Metrics */}
              <div className="pt-2 grid grid-cols-3 gap-4 border-y border-neutral-800 py-4 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider">
                    Carbonized Splints
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#C7A56B]">IS 2653</div>
                  <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider">
                    Safety Certified
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#C62828]">PAN-INDIA</div>
                  <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider">
                    Direct Freight
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#A82020] text-white px-7 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-[#C62828]/25"
                >
                  <Package className="w-4 h-4" />
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide border border-neutral-700 transition-all duration-200"
                >
                  <Factory className="w-4 h-4" />
                  <span>Discover Our Company</span>
                </Link>
              </div>

              {/* Disclaimer */}
              <div className="text-[11px] text-neutral-500 pt-2">
                * Illustrative demonstration of proposed manufacturing portfolio and interactive catalogue.
              </div>
            </div>

            {/* Right Visual Graphic Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-md lg:max-w-none relative">
                {/* Visual Card Wrapper */}
                <div className="relative rounded-2xl bg-gradient-to-b from-neutral-800/80 to-neutral-900/90 p-4 sm:p-6 border border-neutral-700 shadow-2xl backdrop-blur-sm">
                  {/* Top Bar on the illustration */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-700/60 text-xs">
                    <span className="flex items-center gap-2 text-[#C7A56B] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      FLAGSHIP SAFETY MATCHBOX
                    </span>
                    <span className="font-mono text-neutral-400 text-[11px]">PMI-CRS-001</span>
                  </div>

                  {/* High Quality Matchbox Illustration */}
                  <div className="py-2">
                    <ProductIllustration
                      category="Regular"
                      name="Classic Red Safety Matchbox"
                      code="PMI-CRS-001"
                      accentColor="#C62828"
                    />
                  </div>

                  {/* Bottom Meta */}
                  <div className="pt-3 border-t border-neutral-700/60 flex items-center justify-between text-xs text-neutral-300">
                    <div>
                      <span className="text-neutral-400 text-[11px] block">Demo Unit Price</span>
                      <span className="text-base font-extrabold text-white">₹180</span>
                      <span className="text-[10px] text-neutral-400 ml-1">/ 100 boxes</span>
                    </div>

                    <button
                      onClick={() => addItem(PRODUCTS[0])}
                      className="inline-flex items-center gap-1.5 bg-[#C7A56B] hover:bg-[#D4B882] text-[#171717] px-3.5 py-2 rounded-md font-bold text-xs transition-colors shadow"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add Demo Sample</span>
                    </button>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-5 bg-[#C62828] text-white p-3 rounded-xl shadow-xl flex items-center gap-2.5 hidden sm:flex">
                  <ShieldCheck className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <div className="text-xs font-bold leading-tight">Zero Afterglow</div>
                    <div className="text-[10px] text-white/80">Chemically Carbonized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. COMPANY INTRODUCTION SECTION                               */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8F5EF] text-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image / Visual Area */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&auto=format&fit=crop"
                  alt="Industrial Matchbox Factory Floor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C7A56B]">
                    Proposed Manufacturing Facility
                  </div>
                  <div className="text-lg font-bold">Precision Splint Dipping & Packaging Lines</div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-[#171717] text-white p-5 rounded-xl shadow-2xl border border-neutral-700 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C62828] flex items-center justify-center font-bold text-white">
                    300
                  </div>
                  <div>
                    <div className="text-xs font-bold">Boxes Per Minute</div>
                    <div className="text-[11px] text-neutral-400">Automated Assembly Speed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
                <span className="w-6 h-0.5 bg-[#C62828]" />
                <span>Corporate Overview</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#171717] leading-tight">
                Manufacturing Quality.{' '}
                <span className="block text-[#C62828]">Delivering Reliability.</span>
              </h2>

              <p className="text-neutral-700 text-base leading-relaxed">
                PRIME MATCH INDUSTRIES is conceived as a premier industrial matchbox manufacturing enterprise dedicated to high-volume commercial reliability and bespoke packaging sophistication.
              </p>

              <p className="text-neutral-600 text-sm leading-relaxed">
                We combine automated chemical dipping lines, carbonized wood seasoning, and precision offset printing to supply safety matches that ignite with crisp consistency across varying climatic conditions.
              </p>

              {/* Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-neutral-800">
                    <strong>Rigorous Raw Material Selection:</strong> Imported European Aspen and seasoned Malabar pine for straight, splinter-free stems.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-neutral-800">
                    <strong>Sulfur-Free Safety Formulation:</strong> Smooth, clean-burning ignition tips that eliminate toxic smoke and pungent odors.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-neutral-800">
                    <strong>Complete B2B Packaging Customization:</strong> Full CMYK offset, hot-stamped gold foil, and branded striking bands for hospitality.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#171717] hover:bg-neutral-800 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/manufacturing"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C62828] hover:underline"
                >
                  <span>View Manufacturing Process</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PRODUCT CATEGORIES SECTION                                  */}
      {/* ============================================================== */}
      <section className="py-20 bg-[#171717] text-white border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
              <span>Product Verticals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Comprehensive Matchbox Portfolio
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Four specialized manufacturing lines catering to domestic households, luxury candle makers, promotional hospitality, and mega-scale wholesale distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#C7A56B]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-black"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: `${cat.color}20`, border: `1px solid ${cat.color}40` }}>
                    <Flame className="w-6 h-6" style={{ color: cat.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C7A56B] transition-colors">
                    {cat.name}
                  </h3>

                  <div className="text-xs font-semibold text-[#C7A56B] mb-3">
                    {cat.tagline}
                  </div>

                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="py-2 px-3 rounded bg-neutral-800/80 border border-neutral-700 text-[11px] font-mono text-neutral-300 mb-6">
                    {cat.highlight}
                  </div>
                </div>

                <Link
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-white bg-neutral-800 hover:bg-[#C62828] py-2.5 px-4 rounded-lg transition-colors group-hover:bg-[#C62828]"
                >
                  <span>Explore Category</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. FEATURED PRODUCTS GRID                                      */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8F5EF] text-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828] mb-2">
                <span className="w-6 h-0.5 bg-[#C62828]" />
                <span>Featured Catalogue</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#171717]">
                Featured Sample Products
              </h2>
              <p className="text-neutral-600 text-sm mt-1">
                Representative manufacturing models showcasing our dimensions, splint lengths, and packaging variations.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#171717] hover:bg-neutral-800 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow"
            >
              <span>View All 12 Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Visual Header / Illustration */}
                <div className="relative bg-neutral-900 h-64 flex items-center justify-center p-4 overflow-hidden border-b border-neutral-100">
                  <ProductIllustration
                    category={product.category}
                    name={product.name}
                    code={product.code}
                    accentColor={product.accentColor}
                  />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                    {product.category}
                  </div>

                  {/* Product Code */}
                  <div className="absolute top-4 right-4 bg-neutral-900/90 text-[#C7A56B] text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-[#C7A56B]/30">
                    {product.code}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-lg text-neutral-900 line-clamp-1 hover:text-[#C62828] transition-colors">
                      <Link href={`/products/${product.slug}`}>{product.name}</Link>
                    </h3>

                    <p className="text-neutral-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-3 text-[11px] text-neutral-600 bg-[#F8F5EF] p-2 rounded border border-neutral-200/80">
                      <span className="font-semibold text-neutral-800">Packaging: </span>
                      {product.packaging}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Sample Price (INR)</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-neutral-900">₹{product.price}</span>
                        <span className="text-xs text-neutral-400 line-through">₹{product.mrp}</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">{product.unit}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="p-2 rounded-lg border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 transition-colors"
                        title="View Product Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() => addItem(product)}
                        className="inline-flex items-center gap-1.5 bg-[#C62828] hover:bg-[#A82020] text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. WHY CHOOSE US                                              */}
      {/* ============================================================== */}
      <section className="py-20 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828]">
              <span>Industrial Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#171717]">
              Why Partner with Prime Match?
            </h2>
            <p className="text-neutral-600 text-sm">
              We engineer consistency into every chemical batch, wood veneer, and shipping carton.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-[#F8F5EF] border border-neutral-200/80 hover:border-[#C62828] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#C62828]/10 text-[#C62828] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Consistent Quality</h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                Automated continuous dipping carousels guarantee uniform head sizing, non-crumbling strike tips, and over 99% first-strike ignition rates.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8F5EF] border border-neutral-200/80 hover:border-[#C7A56B] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#C7A56B]/10 text-[#C7A56B] flex items-center justify-center mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Custom Packaging</h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                Full-spectrum Pantone color matching, UV gloss spot finishes, embossing, and bespoke matchbook formats for hospitality and corporate marketing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8F5EF] border border-neutral-200/80 hover:border-[#C62828] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#C62828]/10 text-[#C62828] flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Wholesale Supply</h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                High-capacity packaging machines capable of turning around full truckloads and export shipping containers with zero supply disruption.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8F5EF] border border-neutral-200/80 hover:border-[#C7A56B] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#C7A56B]/10 text-[#C7A56B] flex items-center justify-center mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Business Partnerships</h3>
              <p className="text-neutral-600 text-xs leading-relaxed">
                Dedicated B2B account coordinators providing transparent lead times, prototype sampling, freight logistics, and volume tier price adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. MANUFACTURING STAGES TIMELINE                               */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-28 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B] mb-2">
                <span>The Production Line</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                5-Stage Manufacturing Workflow
              </h2>
              <p className="text-neutral-400 text-sm mt-1 max-w-xl">
                Every single matchstick travels through tightly calibrated chemical baths, drying tunnels, and vision inspection bays.
              </p>
            </div>

            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-2 bg-[#C7A56B] hover:bg-[#D4B882] text-[#171717] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Discover Our Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {MANUFACTURING_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl bg-neutral-900/90 border border-neutral-800 p-6 flex flex-col justify-between hover:border-[#C7A56B]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#C62828] font-mono">{step.step}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#C7A56B]">
                      {step.stat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{step.title}</h3>

                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  {step.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. WHOLESALE ENQUIRY BANNER                                    */}
      {/* ============================================================== */}
      <section className="relative py-20 bg-gradient-to-r from-[#C62828] via-[#A82020] to-[#8B0000] text-white overflow-hidden shadow-2xl">
        {/* Background decorative pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-[#C7A56B]" />
            <span>Direct Commercial Manufacturing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            Your Business. Your Brand. Our Manufacturing.
          </h2>

          <p className="text-neutral-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore wholesale supply, distributor agreements, and custom packaging possibilities for your business. Fast turnaround prototypes and verified delivery schedules.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=wholesale"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#171717] hover:bg-neutral-900 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide shadow-2xl transition-all"
            >
              <FileText className="w-4 h-4 text-[#C7A56B]" />
              <span>Request a Bulk Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide border border-white/30 transition-all backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. GALLERY PREVIEW                                             */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8F5EF] text-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C62828] mb-2">
                <span className="w-6 h-0.5 bg-[#C62828]" />
                <span>Visual Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#171717]">
                Industrial Gallery Preview
              </h2>
              <p className="text-neutral-600 text-sm mt-1">
                A glimpse into our packaging finishes, automated factory machinery, and custom branding collections.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#171717] hover:bg-neutral-800 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow"
            >
              <span>View Full Gallery (12 Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPreview.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900 shadow-md block border border-neutral-200"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C7A56B] bg-black/60 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base mt-2 leading-snug group-hover:text-[#C7A56B] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
