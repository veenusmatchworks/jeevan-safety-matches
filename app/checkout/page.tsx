'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import {
  ShieldAlert,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Truck,
  CreditCard,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  FileCheck
} from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, shipping, tax, total, totalItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: 'Arun K. Sharma',
    companyName: 'Sharma Retail Distribution Pvt. Ltd.',
    email: 'arun.sharma@example.com',
    phone: '+91 98450 11234',
    address: 'Plot 42, Industrial Estate, Phase 2, Peenya',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560058',
    deliveryNote: 'Please dispatch sample carton via express parcel road freight.',
    paymentMethod: 'invoice', // invoice | bank-transfer | cod
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      setErrorMsg('Please fill in all required customer details.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate instant demo checkout processing
    setTimeout(() => {
      const demoOrderNumber = `PMI-${Math.floor(100000 + Math.random() * 900000)}`;
      
      // Save order metadata to sessionStorage for the confirmation page
      try {
        sessionStorage.setItem(
          'pmi_last_demo_order',
          JSON.stringify({
            orderNumber: demoOrderNumber,
            date: new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }),
            items: items,
            subtotal,
            shipping,
            tax,
            total,
            customer: formData,
          })
        );
      } catch (err) {
        console.warn('Could not save demo order to sessionStorage', err);
      }

      clearCart();
      router.push(`/order-confirmation?orderId=${demoOrderNumber}`);
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="bg-[#F8F5EF] min-h-screen py-20 text-center">
        <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-xl border border-neutral-200">
          <ShoppingBag className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-neutral-900 mb-2">No Items in Cart</h2>
          <p className="text-xs text-neutral-500 mb-6">
            Please add some sample matchboxes from the catalogue before proceeding to checkout.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#C62828] text-white px-6 py-3 rounded-xl text-xs font-bold"
          >
            Go to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Client Demo Banner Alert */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-3 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>CLIENT PRESENTATION DEMONSTRATION:</strong> This checkout flow is simulated for demonstration purposes. No real bank charges, card entries, or production shipments will be made.
            </span>
          </div>
          <span className="font-mono text-[10px] bg-amber-200/80 px-2 py-0.5 rounded font-bold">
            STAGE: DEMO PROTOTYPE
          </span>
        </div>
      </div>

      {/* Page Title */}
      <section className="bg-[#171717] text-white py-10 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Commercial Demo Checkout
          </h1>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1">
            Simulated B2B ordering and billing dispatch information.
          </p>
        </div>
      </section>

      {/* Main Checkout Form Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: Delivery & Billing */}
          <div className="lg:col-span-7 space-y-6">
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            {/* 1. Customer Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/90 space-y-4">
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
                <User className="w-4 h-4 text-[#C62828]" />
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900">
                  1. Contact & Business Details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Company / Entity Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/90 space-y-4">
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
                <MapPin className="w-4 h-4 text-[#C62828]" />
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900">
                  2. Delivery & Warehouse Destination
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Street Address / Warehouse Bay *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">State *</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">PIN Code *</label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Freight / Special Instructions
                  </label>
                  <textarea
                    rows={2}
                    name="deliveryNote"
                    value={formData.deliveryNote}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
                  />
                </div>
              </div>
            </div>

            {/* 3. Demo Payment Option */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/90 space-y-4">
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
                <CreditCard className="w-4 h-4 text-[#C62828]" />
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900">
                  3. Commercial Settlement Method (Demo)
                </h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-300 bg-[#F8F5EF] cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="invoice"
                    checked={formData.paymentMethod === 'invoice'}
                    onChange={handleChange}
                    className="text-[#C62828] focus:ring-[#C62828]"
                  />
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      Corporate Tax Invoice (30-Day Commercial Credit)
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Standard wholesale payment terms with GST invoice generation.
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-300 bg-[#F8F5EF] cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank-transfer"
                    checked={formData.paymentMethod === 'bank-transfer'}
                    onChange={handleChange}
                    className="text-[#C62828] focus:ring-[#C62828]"
                  />
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      Direct RTGS / NEFT Bank Transfer
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Pre-dispatch settlement with bank reconciliation proof.
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-300 bg-[#F8F5EF] cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="text-[#C62828] focus:ring-[#C62828]"
                  />
                  <div>
                    <div className="text-xs font-bold text-neutral-900">
                      Cash on Delivery (Retail Sample Order Only)
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Handover payment on parcel arrival.
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-neutral-200/90 space-y-5">
              <h3 className="font-extrabold text-base text-neutral-900 border-b border-neutral-100 pb-3">
                Order Review ({totalItems} items)
              </h3>

              {/* Items summary list */}
              <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center text-xs">
                    <div>
                      <span className="font-bold text-neutral-900 block">{item.product.name}</span>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        {item.quantity} x ₹{item.product.price} ({item.product.code})
                      </span>
                    </div>
                    <span className="font-bold text-neutral-900">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="pt-3 border-t border-neutral-200 space-y-2 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-neutral-900">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Freight / Shipping:</span>
                  <span className="font-bold text-neutral-900">
                    {shipping === 0 ? <span className="text-emerald-600">FREE</span> : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>GST (12% Demonstration):</span>
                  <span className="font-bold text-neutral-900">₹{tax.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline">
                  <span className="font-black text-sm text-neutral-900">Grand Total:</span>
                  <span className="font-black text-2xl text-[#C62828]">₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#A82020] disabled:bg-neutral-400 text-white py-4 px-6 rounded-xl font-bold text-sm tracking-wide shadow-xl active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <span>Processing Demo Order...</span>
                  ) : (
                    <>
                      <FileCheck className="w-4 h-4" />
                      <span>Place Demo Order</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-neutral-500 text-center space-y-1">
                <div>⚡ By placing this order, you are testing the interactive UI flow.</div>
                <div className="text-neutral-400">No payment will be collected.</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
