'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  Flame,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  FileText,
  Truck,
  RotateCcw,
  Share2,
  Package,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/data';
import { ProductIllustration } from '@/components/ProductIllustration';
import { useCart } from '@/lib/cart-context';

function ProductDetailInner() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'packaging'>('desc');
  const [addedToast, setAddedToast] = useState(false);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2600);
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Toast popup */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171717] text-white px-5 py-3 rounded-xl shadow-2xl border border-neutral-700 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <div className="text-xs">
            <span className="font-bold text-white block">Added {quantity} unit(s) to Cart</span>
            <span className="text-neutral-300">{product.name}</span>
          </div>
          <Link
            href="/cart"
            className="ml-3 bg-[#C62828] text-white text-[11px] font-bold px-2.5 py-1 rounded hover:bg-[#8B0000]"
          >
            Checkout
          </Link>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="bg-[#171717] text-neutral-400 text-xs py-3.5 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-white transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-neutral-200 font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Product Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200/90">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative bg-neutral-900 rounded-2xl h-[360px] sm:h-[440px] flex items-center justify-center p-6 overflow-hidden border border-neutral-800 shadow-inner">
              <ProductIllustration
                category={product.category}
                name={product.name}
                code={product.code}
                accentColor={product.accentColor}
                variant="detail"
              />

              {/* Badges on detail */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-neutral-700">
                  {product.category}
                </span>
                {product.available ? (
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    In Production
                  </span>
                ) : (
                  <span className="bg-neutral-800 text-neutral-400 text-xs px-2.5 py-1 rounded">
                    Bespoke Order
                  </span>
                )}
              </div>

              <div className="absolute top-4 right-4 bg-neutral-900/90 text-[#C7A56B] text-xs font-mono font-bold px-3 py-1 rounded border border-[#C7A56B]/30">
                {product.code}
              </div>
            </div>

            {/* Thumbnail Preview strip */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border-2 border-[#C62828] bg-neutral-900 h-20 p-2 flex items-center justify-center">
                <ProductIllustration
                  category={product.category}
                  name={product.name}
                  code={product.code}
                  variant="thumb"
                />
              </div>
              <div className="rounded-xl border border-neutral-300 bg-[#F8F5EF] h-20 p-3 flex flex-col justify-center text-center">
                <span className="text-[10px] text-neutral-500 uppercase font-mono">Splint Stem</span>
                <span className="text-xs font-bold text-neutral-800">{product.matchsticksPerBox} count</span>
              </div>
              <div className="rounded-xl border border-neutral-300 bg-[#F8F5EF] h-20 p-3 flex flex-col justify-center text-center">
                <span className="text-[10px] text-neutral-500 uppercase font-mono">Friction Band</span>
                <span className="text-xs font-bold text-[#C62828]">Red Phosphorus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information, Specs, Buying */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C62828]">
                  Industrial Match Manufacturing Model
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                  {product.name}
                </h1>
                <div className="text-xs text-neutral-500 font-mono">
                  Catalog Code: <strong className="text-neutral-700">{product.code}</strong> • Standard: IS 2653:1998
                </div>
              </div>

              {/* Price Banner */}
              <div className="p-4 rounded-xl bg-[#F8F5EF] border border-neutral-200/90 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                    Demo Sample Pricing (INR)
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl font-black text-neutral-900">₹{product.price}</span>
                    <span className="text-sm text-neutral-400 line-through">₹{product.mrp}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Sample Discount
                    </span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">{product.unit}</div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-neutral-500 block">Min. Production Batch</span>
                  <span className="text-xs font-bold text-[#C62828]">{product.minOrder}</span>
                </div>
              </div>

              {/* Short summary description */}
              <p className="text-neutral-700 text-sm leading-relaxed">
                {product.longDescription}
              </p>

              {/* Tab Selector */}
              <div className="border-b border-neutral-200 flex items-center gap-6 text-sm font-bold">
                <button
                  onClick={() => setActiveTab('desc')}
                  className={`pb-2 border-b-2 transition-colors ${
                    activeTab === 'desc'
                      ? 'border-[#C62828] text-[#C62828]'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Overview & Safety
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 border-b-2 transition-colors ${
                    activeTab === 'specs'
                      ? 'border-[#C62828] text-[#C62828]'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Technical Specs
                </button>
                <button
                  onClick={() => setActiveTab('packaging')}
                  className={`pb-2 border-b-2 transition-colors ${
                    activeTab === 'packaging'
                      ? 'border-[#C62828] text-[#C62828]'
                      : 'border-transparent text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Packaging & Logistics
                </button>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[140px] text-xs leading-relaxed text-neutral-600">
                {activeTab === 'desc' && (
                  <div className="space-y-2 py-1">
                    <p>
                      <strong>Splint Treatment:</strong> Impregnated with ammonium phosphate fire-retardant salt solution to ensure complete carbonization with 0.0s afterglow once the primary flame is blown out.
                    </p>
                    <p>
                      <strong>Friction Striker:</strong> Screen-printed with high-density red phosphorus compound bonded with waterproof synthetic polymer, ensuring consistent ignition across monsoon humidity.
                    </p>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="space-y-1.5 py-1">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-neutral-100">
                        <span className="text-neutral-500 font-medium">{s.label}:</span>
                        <span className="text-neutral-900 font-bold">{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'packaging' && (
                  <div className="space-y-2 py-1">
                    <p>
                      <strong>Primary Unit Packaging:</strong> {product.packaging}
                    </p>
                    <p>
                      <strong>Master Shipping Carton:</strong> 5-Ply / 7-Ply heavy corrugated board lined with moisture-barrier polythene film and heavy industrial strapping bands for inter-state transport.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity Selector + Actions */}
            <div className="pt-4 border-t border-neutral-200 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Quantity Controls */}
                <div className="flex items-center justify-between border border-neutral-300 rounded-xl px-3 py-2 w-full sm:w-36 bg-[#F8F5EF]">
                  <span className="text-xs text-neutral-500 font-semibold">Qty:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded bg-white text-neutral-800 font-bold border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded bg-white text-neutral-800 font-bold border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#A82020] text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide shadow-lg active:scale-95 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Demo to Cart</span>
                </button>

                {/* Bulk Quote CTA */}
                <Link
                  href={`/contact?type=quote&product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#171717] hover:bg-neutral-900 text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide border border-neutral-700 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#C7A56B]" />
                  <span>Request Bulk Quote</span>
                </Link>
              </div>

              {/* Reassurance points */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-neutral-500 text-center">
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C62828]" />
                  <span>IS 2653 Certified</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#C7A56B]" />
                  <span>Pan-India Dispatch</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-[#C62828]" />
                  <span>Client Demo Model</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-black text-neutral-900">
                  Related Matchbox Formats
                </h3>
                <p className="text-xs text-neutral-500">
                  Other commercial configurations in the <strong>{product.category}</strong> range.
                </p>
              </div>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-bold text-[#C62828] hover:underline"
              >
                View category →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl p-5 border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative bg-neutral-900 h-44 rounded-xl overflow-hidden flex items-center justify-center p-3 mb-4">
                    <ProductIllustration
                      category={rel.category}
                      name={rel.name}
                      code={rel.code}
                      accentColor={rel.accentColor}
                    />
                    <span className="absolute top-2 right-2 text-[9px] font-mono text-[#C7A56B] bg-black/80 px-2 py-0.5 rounded">
                      {rel.code}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-neutral-900 line-clamp-1">
                      <Link href={`/products/${rel.slug}`}>{rel.name}</Link>
                    </h4>
                    <p className="text-[11px] text-neutral-500 mt-1 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between mt-3">
                    <span className="text-sm font-black text-neutral-900">₹{rel.price}</span>
                    <Link
                      href={`/products/${rel.slug}`}
                      className="text-xs font-bold text-[#C62828] hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center text-sm font-bold text-neutral-600">Loading Product Specifications...</div>}>
      <ProductDetailInner />
    </Suspense>
  );
}

