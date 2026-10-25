'use client';

import React from 'react';
import Image from 'next/image';

interface VeenusLogoProps {
  variant?: 'full' | 'mark' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const VeenusLogo: React.FC<VeenusLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md'
}) => {
  // If variant is 'mark' (Icon only)
  if (variant === 'mark') {
    const dim = size === 'sm' ? 40 : size === 'lg' ? 68 : 52;
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 ${className}`}
        style={{ width: dim, height: dim }}
      >
        <Image
          src="/logo-mark.png"
          alt="Veenus Match Works Icon"
          fill
          priority
          className="object-contain"
        />
      </div>
    );
  }

  // If variant is 'badge' (Logo displayed inside a polished frosted pill container)
  if (variant === 'badge') {
    const h = size === 'sm' ? 44 : size === 'lg' ? 64 : 52;
    return (
      <div
        className={`inline-flex items-center bg-white/95 hover:bg-white px-3.5 py-1.5 rounded-2xl shadow-xl shadow-black/20 border border-white/40 transition-all duration-300 hover:scale-105 ${className}`}
      >
        <Image
          src="/logo-original.png"
          alt="Veenus Match Works Logo"
          width={h * 1.5}
          height={h}
          priority
          className="object-contain h-auto w-auto max-h-12"
        />
      </div>
    );
  }

  // Default 'full' variant: Dark-mode transparent logo (white text for dark backgrounds)
  const h = size === 'sm' ? 48 : size === 'lg' ? 72 : 58;
  const w = Math.round(h * 1.48);

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105" style={{ height: h, width: w }}>
        <Image
          src="/logo-dark-mode.png"
          alt="Veenus Match Works - Safety Matches & Transport Logistics"
          fill
          priority
          className="object-contain drop-shadow-md"
        />
      </div>
      <div className="hidden sm:flex flex-col justify-center border-l border-white/15 pl-3">
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 w-fit">
          EST. 1979
        </span>
        <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">
          Matches &bull; Lorries &bull; Travel
        </span>
      </div>
    </div>
  );
};
