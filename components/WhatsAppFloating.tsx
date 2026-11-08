'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { useFactory } from '@/context/FactoryContext';

export const WhatsAppFloating = () => {
  const pathname = usePathname();
  const { companyContact } = useFactory();

  // Hide floating WhatsApp button on admin control center
  if (pathname?.startsWith('/control-center') || pathname?.startsWith('/admin')) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${companyContact.whatsappNumber || '919842156789'}?text=${encodeURIComponent(
    'Hello Veenus Group, I would like to inquire about Jeevan & Tehla Safety Matches wholesale supply.'
  )}`;

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Veenus Group on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 select-none"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-bold text-xs uppercase tracking-wider">WhatsApp Us</span>
      </a>
    </aside>
  );
};
