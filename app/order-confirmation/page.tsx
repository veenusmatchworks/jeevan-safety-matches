'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  Package,
  ArrowRight,
  Printer,
  Calendar,
  Truck,
  Building,
  User,
  Phone,
  Mail,
  ShieldCheck,
  FileText
} from 'lucide-react';

function OrderConfirmationInner() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'PMI-DEMO-882941';

  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('pmi_last_demo_order');
      if (saved) {
        setOrderData(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not read order from session storage', e);
    }
  }, []);

  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Header Banner */}
      <section className="bg-[#171717] text-white py-14 border-b border-neutral-800 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
            <span>Demo Transaction Complete</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Demo Order Confirmed!
          </h1>

          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Thank you for exploring the Prime Match Industries demonstration storefront. Your sample order request has been generated.
          </p>
        </div>
      </section>

      {/* Main Order Receipt Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200/90 space-y-8">
          {/* Order Header Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 block">
                Generated Sample Order Number
              </span>
              <span className="text-2xl font-black font-mono text-[#C62828]">{orderId}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 text-xs font-bold text-neutral-700 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Demo Invoice</span>
              </button>

              <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300">
                Status: In Simulation
              </span>
            </div>
          </div>

          {/* Customer & Shipping Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8F5EF] p-5 rounded-2xl border border-neutral-200">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C62828]" />
                <span>Billing Customer</span>
              </h3>
              <div className="text-xs text-neutral-800 space-y-0.5">
                <div className="font-bold text-sm">
                  {orderData?.customer?.fullName || 'Arun K. Sharma'}
                </div>
                <div>{orderData?.customer?.companyName || 'Sharma Retail Distribution Pvt. Ltd.'}</div>
                <div className="text-neutral-500 font-mono">
                  {orderData?.customer?.email || 'arun.sharma@example.com'}
                </div>
                <div className="text-neutral-500 font-mono">
                  {orderData?.customer?.phone || '+91 98450 11234'}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C62828]" />
                <span>Destination Dispatch</span>
              </h3>
              <div className="text-xs text-neutral-800 space-y-0.5">
                <div>{orderData?.customer?.address || 'Plot 42, Industrial Estate, Phase 2, Peenya'}</div>
                <div>
                  {orderData?.customer?.city || 'Bengaluru'}, {orderData?.customer?.state || 'Karnataka'} -{' '}
                  {orderData?.customer?.pincode || '560058'}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1 italic">
                  &ldquo;{orderData?.customer?.deliveryNote || 'Standard Road Freight Dispatch'}&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div>
            <h3 className="text-sm font-bold text-neutral-900 mb-3">Order Items</h3>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#171717] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Matchbox Model</th>
                    <th className="p-3 font-semibold text-center">Unit Price</th>
                    <th className="p-3 font-semibold text-center">Quantity</th>
                    <th className="p-3 font-semibold text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {orderData?.items?.length ? (
                    orderData.items.map((item: any, idx: number) => (
                      <tr key={idx} className="hover:bg-neutral-50">
                        <td className="p-3 font-bold text-neutral-900">
                          {item.product.name}
                          <span className="block text-[10px] text-neutral-500 font-mono font-normal">
                            {item.product.code} • {item.product.packaging}
                          </span>
                        </td>
                        <td className="p-3 text-center">₹{item.product.price}</td>
                        <td className="p-3 text-center font-bold">{item.quantity}</td>
                        <td className="p-3 text-right font-black">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">
                        Classic Red Safety Matchbox
                        <span className="block text-[10px] text-neutral-500 font-mono font-normal">
                          PMI-CRS-001 • Bundle of 100 boxes
                        </span>
                      </td>
                      <td className="p-3 text-center">₹180</td>
                      <td className="p-3 text-center font-bold">2</td>
                      <td className="p-3 text-right font-black">₹360</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totals Breakdown */}
          <div className="flex justify-end pt-2">
            <div className="w-full max-w-xs space-y-2 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal:</span>
                <span className="font-bold text-neutral-900">
                  ₹{orderData?.subtotal?.toLocaleString() || '360'}
                </span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Shipping:</span>
                <span className="font-bold text-neutral-900">
                  {orderData?.shipping === 0 ? 'FREE' : `₹${orderData?.shipping || '150'}`}
                </span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>GST (12% Demo):</span>
                <span className="font-bold text-neutral-900">
                  ₹{orderData?.tax?.toLocaleString() || '43'}
                </span>
              </div>
              <div className="pt-2 border-t border-neutral-300 flex justify-between items-baseline text-sm">
                <span className="font-black text-neutral-900">Total Demo Value:</span>
                <span className="font-black text-xl text-[#C62828]">
                  ₹{orderData?.total?.toLocaleString() || '553'}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-neutral-900"
            >
              <Package className="w-4 h-4" />
              <span>Back to Catalogue</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                <span>View in Admin Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#C62828] hover:bg-[#A82020] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center text-sm font-bold text-neutral-600">Loading Order Receipt...</div>}>
      <OrderConfirmationInner />
    </Suspense>
  );
}

