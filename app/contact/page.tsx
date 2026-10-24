'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Package,
  ShieldCheck,
  FileText
} from 'lucide-react';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get('type') === 'wholesale' ? 'Wholesale Order' : 'General Enquiry';
  const defaultProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    enquiryType: defaultType,
    productCategory: defaultProduct ? 'Selected: ' + defaultProduct : 'Regular Matchboxes',
    orderQuantity: '500 - 1,000 Boxes (Sample / Mid-Tier)',
    message: defaultProduct ? `Inquiring about bulk supply, sample units, and pricing for: ${defaultProduct}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate enquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200/90">
      {submitted ? (
        /* Success View */
        <div className="text-center py-12 space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-black text-neutral-900">Enquiry Received Successfully!</h3>

          <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.enquiryType}</strong> has been logged in our demo system.
          </p>

          <div className="p-4 rounded-xl bg-[#F8F5EF] border border-neutral-200 text-xs text-neutral-600 max-w-md mx-auto text-left space-y-1 font-mono">
            <div>Reference ID: PMI-ENQ-{Math.floor(1000 + Math.random() * 9000)}</div>
            <div>Category: {formData.productCategory}</div>
            <div>Quantity Range: {formData.orderQuantity}</div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                companyName: '',
                email: '',
                phone: '',
                enquiryType: 'General Enquiry',
                productCategory: 'Regular Matchboxes',
                orderQuantity: '500 - 1,000 Boxes (Sample / Mid-Tier)',
                message: '',
              });
            }}
            className="inline-flex items-center gap-2 bg-[#C62828] hover:bg-[#8B0000] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      ) : (
        /* Form View */
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h2 className="text-xl font-black text-neutral-900">Request Commercial Quotation</h2>
            <p className="text-xs text-neutral-500 mt-1">
              Fill out the form below and our sales engineering team will respond within 24 hours.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Rahul Verma"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="e.g. Verma Retail Enterprises"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
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
                placeholder="e.g. rahul@verma-example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +91 98000 12345"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Enquiry Type
              </label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value="Wholesale Order">Wholesale Order</option>
                <option value="Custom Manufacturing">Custom Manufacturing</option>
                <option value="Product Information">Product Information</option>
                <option value="Business Partnership">Business Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Product Category
              </label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
              >
                <option value="Regular Matchboxes">Regular Matchboxes</option>
                <option value="Premium Matchboxes">Premium Matchboxes (Aspen)</option>
                <option value="Custom Printed">Custom Printed Hospitality</option>
                <option value="Wholesale Packs">Wholesale Master Packs</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Estimated Order Quantity
            </label>
            <select
              name="orderQuantity"
              value={formData.orderQuantity}
              onChange={handleChange}
              className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
            >
              <option value="100 - 500 Boxes (Sample Order)">100 - 500 Boxes (Sample Order)</option>
              <option value="500 - 1,000 Boxes (Mid-Tier)">500 - 1,000 Boxes (Mid-Tier)</option>
              <option value="1,000 - 5,000 Boxes (Wholesale)">1,000 - 5,000 Boxes (Wholesale)</option>
              <option value="5,000 - 25,000 Boxes (Distributor)">5,000 - 25,000 Boxes (Distributor)</option>
              <option value="25,000+ Boxes (Full Container Export)">25,000+ Boxes (Full Container Export)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Enquiry Message & Specifications *
            </label>
            <textarea
              rows={4}
              name="message"
              required
              placeholder="Please specify box dimensions, stem color, printing requirements, or destination PIN code..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#F8F5EF] border border-neutral-300 rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#C62828]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#A82020] disabled:bg-neutral-400 text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide shadow-lg active:scale-95 transition-all"
          >
            {isSubmitting ? (
              <span>Sending Demo Enquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Bulk Quotation Request</span>
              </>
            )}
          </button>

          <div className="text-[11px] text-neutral-500 text-center">
            * Simulated frontend form submission for client presentation review.
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Header Banner */}
      <section className="bg-[#171717] text-white py-16 lg:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
              <Mail className="w-4 h-4 text-[#C62828]" />
              <span>Commercial & Wholesale Desk</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Contact & Bulk Enquiry
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Connect directly with our manufacturing sales desk for custom branding prototypes, distributor rate cards, or export consignment quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Form & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form with Suspense */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-xs text-neutral-500">Loading enquiry form...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>

          {/* Right Column: Contact Details & Mockup Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200/90 space-y-6">
              <h3 className="font-extrabold text-lg text-neutral-900 border-b border-neutral-100 pb-3">
                Corporate Headquarters & Works
              </h3>

              <div className="space-y-4 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C62828]/10 text-[#C62828] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block">Manufacturing Facility</span>
                    <span className="text-neutral-500 leading-relaxed">
                      [PLACEHOLDER: Plot 12-B, Industrial Growth Center, Matchbox Manufacturing Belt, Virudhunagar / Sivakasi District, Tamil Nadu - 626123]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C7A56B]/10 text-[#C7A56B] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block">Telephone & Commercial Sales</span>
                    <span className="text-neutral-500 font-mono">
                      [PLACEHOLDER: +91 4562 200000 / +91 98000 00000]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C62828]/10 text-[#C62828] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block">Electronic Enquiries</span>
                    <span className="text-neutral-500 font-mono">
                      [PLACEHOLDER: sales@primematch-demo.in / export@primematch-demo.in]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-900 block">Business Working Hours</span>
                    <span className="text-neutral-500">
                      Monday to Saturday: 09:00 AM – 06:30 PM IST (Dispatch closed Sundays)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Mockup Area */}
            <div className="bg-[#171717] rounded-3xl p-6 text-white border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#C7A56B] font-bold">PLANT GEOGRAPHICAL LOCATION</span>
                <span className="text-neutral-500 font-mono">GPS MOCKUP</span>
              </div>

              {/* Graphic styled map representation */}
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 h-48 border border-neutral-700 flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-full bg-[#C62828] flex items-center justify-center text-white mb-2 shadow-lg animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white">Prime Match Manufacturing Hub</div>
                <div className="text-[10px] text-neutral-400 max-w-xs mt-1">
                  Google Maps / OpenStreetMap interactive widget will be embedded here for the production client deployment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

