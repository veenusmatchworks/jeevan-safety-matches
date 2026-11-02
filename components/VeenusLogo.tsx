'use client';

import React from 'react';
import Image from 'next/image';

interface VeenusLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  lightText?: boolean;
}

export const VeenusLogo: React.FC<VeenusLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  lightText = false
}) => {
  // Height sizing
  const h = size === 'sm' ? 42 : size === 'lg' ? 68 : 52;
  // Aspect ratio is 1142 / 1122 = ~1.018
  const w = Math.round(h * 1.018);

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Precision Cutout Emblem Badge */}
      <div
        className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ height: h, width: w }}
      >
        <Image
          src="/logo-official.png"
          alt="Veenus Match Works - Official Emblem Since 1979"
          fill
          priority
          sizes="120px"
          className="object-contain filter drop-shadow-[0_2px_8px_rgba(153,27,27,0.18)]"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span
              className={`text-base sm:text-lg font-black tracking-tight transition-colors ${
                lightText
                  ? 'text-white group-hover:text-amber-300'
                  : 'text-slate-900 group-hover:text-red-700'
              }`}
            >
              VEENUS MATCH WORKS
            </span>
          </div>
          <span
            className={`text-[10.5px] font-bold tracking-wider uppercase ${
              lightText ? 'text-amber-400' : 'text-red-700'
            }`}
          >
            Estd. 1979 &bull; Srivilliputhur
          </span>
        </div>
      )}
    </div>
  );
};
