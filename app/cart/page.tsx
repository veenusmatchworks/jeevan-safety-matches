'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Package,
  RotateCcw,
  Plus,
  Minus,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { ProductIllustration } from '@/components/ProductIllustration';

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    shipping,
    tax,
    total,
    totalItems
  } = useCart();

  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Banner */}
      <section className="bg-[#171717] text-white py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B] mb-1">
                <ShoppingBag className="w-4 h-4 text-[#C62828]" />
                <span>Client Presentation Shopping Experience</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white">
                Demo Shopping Cart
              </h1>
            </div>

            <div className="text-xs text-neutral-400 bg-neutral-900 px-3.5 py-2 rounded-lg border border-neutral-800">
              <span className="text-[#C7A56B] font-bold">Demo Notice:</span> All products, quantities, and pricing are simulated.
            </div>
          </div>
        </div>
      </section>

      {/* Cart Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl p-12 text-center max-w-2xl mx-auto border border-neutral-200/90 shadow-xl space-y-5 my-12">
            <div className="w-20 h-20 bg-[#F8F5EF] rounded-full flex items-center justify-center mx-auto text-neutral-400 border border-neutral-300">
              <ShoppingBag className="w-10 h-10" />
            </div>

            <h2 className="text-2xl font-black text-neutral-900">Your Demo Cart is Empty</h2>

            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Explore our catalogue to add sample matchbox models, custom-printed hospitality packs, or master wholesale cartons to preview the ordering experience.
            </p>

            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#C62828] hover:bg-[#A82020] text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-colors"
              >
                <Package className="w-4 h-4" />
                <span>Explore Products Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Active Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Items Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/90 flex items-center justify-between">
                <span className="font-bold text-sm text-neutral-900">
                  Cart Items ({totalItems} total {totalItems === 1 ? 'unit' : 'units'})
                </span>

                <button
                  onClick={clearCart}
                  className="text-xs font-semibold text-neutral-500 hover:text-[#C62828] flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Entire Cart</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/90 flex flex-col sm:flex-row items-center gap-5 justify-between"
                  >
                    {/* Thumbnail */}
                    <div className="w-24 h-24 bg-neutral-900 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 border border-neutral-200">
                      <ProductIllustration
                        category={item.product.category}
                        name={item.product.name}
                        code={item.product.code}
                        variant="thumb"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 text-center sm:text-left space-y-1">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-bold">
                          {item.product.code}
                        </span>
                        <span className="text-[10px] font-bold uppercase text-[#C62828]">
                          {item.product.category}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-base text-neutral-900 hover:text-[#C62828] transition-colors">
                        <Link href={`/products/${item.product.slug}`}>{item.product.name}</Link>
                      </h3>

                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {item.product.packaging}
                      </p>

                      <div className="text-xs font-bold text-neutral-900">
                        ₹{item.product.price}{' '}
                        <span className="text-[10px] text-neutral-500 font-normal">
                          / {item.product.unit}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-neutral-300 rounded-lg bg-[#F8F5EF] p-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 bg-white rounded flex items-center justify-center text-neutral-700 hover:bg-neutral-200 text-xs font-bold"
                          title="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 bg-white rounded flex items-center justify-center text-neutral-700 hover:bg-neutral-200 text-xs font-bold"
                          title="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Subtotal */}
                      <div className="w-20 text-right">
                        <span className="text-sm font-black text-neutral-900 block">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-neutral-400 hover:text-[#C62828] transition-colors rounded-lg hover:bg-red-50"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continue Exploring Catalogue</span>
                </Link>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 space-y-5">
                <h3 className="font-extrabold text-base text-neutral-900 border-b border-neutral-100 pb-3">
                  Demo Order Summary
                </h3>

                <div className="space-y-3 text-xs text-neutral-600">
                  <div className="flex justify-between">
                    <span>Subtotal ({totalItems} items):</span>
                    <span className="font-bold text-neutral-900">₹{subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Estimated Shipping:</span>
                    <span className="font-bold text-neutral-900">
                      {shipping === 0 ? (
                        <span className="text-emerald-600">FREE (Demo)</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>GST (12% Demonstration):</span>
                    <span className="font-bold text-neutral-900">₹{tax.toLocaleString()}</span>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline">
                    <span className="font-black text-sm text-neutral-900">Total Amount:</span>
                    <span className="font-black text-2xl text-[#C62828]">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/checkout"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#A82020] text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide shadow-lg active:scale-95 transition-all"
                  >
                    <span>Proceed to Demo Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="p-3 rounded-lg bg-[#F8F5EF] border border-neutral-200/80 text-[11px] text-neutral-500 space-y-1">
                  <div className="font-semibold text-neutral-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C62828]" />
                    <span>Safe Demo Environment</span>
                  </div>
                  <div>No real payments or credit cards required. Demonstrates standard B2B transaction flow.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
