import React from 'react';

interface ProductIllustrationProps {
  category: 'Regular' | 'Premium' | 'Custom Printed' | 'Wholesale Packs' | string;
  name?: string;
  code?: string;
  accentColor?: string;
  className?: string;
  variant?: 'card' | 'hero' | 'detail' | 'thumb';
}

export const ProductIllustration: React.FC<ProductIllustrationProps> = ({
  category,
  name = 'Matchbox',
  code = 'PMI-001',
  accentColor,
  className = '',
  variant = 'card'
}) => {
  // Derive visual theme based on category
  const isPremium = category === 'Premium';
  const isCustom = category === 'Custom Printed';
  const isWholesale = category === 'Wholesale Packs';

  const boxBg = isPremium
    ? '#1D1D1D'
    : isCustom
    ? '#1F2937'
    : isWholesale
    ? '#37201D'
    : '#C62828';

  const primaryAccent = accentColor || (isPremium ? '#C7A56B' : isCustom ? '#C62828' : isWholesale ? '#F59E0B' : '#FFFFFF');
  const headColor = isPremium ? '#1A1A1A' : isCustom ? '#C62828' : isWholesale ? '#C62828' : '#C62828';
  const woodColor = isPremium ? '#F5ECD7' : '#E8D5B5';

  if (variant === 'thumb') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center rounded overflow-hidden bg-neutral-900 ${className}`}>
        <svg viewBox="0 0 100 70" className="w-full h-full p-2">
          {/* Striker side */}
          <rect x="10" y="15" width="80" height="40" rx="3" fill={boxBg} stroke={primaryAccent} strokeWidth="1" />
          <rect x="12" y="18" width="8" height="34" rx="1" fill="#4A1E1E" />
          <text x="50" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">PRIME MATCH</text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center p-4 select-none ${className}`}>
      <svg
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[340px] drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
      >
        <defs>
          <linearGradient id={`boxGrad-${code}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={boxBg} />
            <stop offset="100%" stopColor="#111111" />
          </linearGradient>

          <linearGradient id={`goldGrad-${code}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFC38A" />
            <stop offset="50%" stopColor="#C7A56B" />
            <stop offset="100%" stopColor="#9C783E" />
          </linearGradient>

          <linearGradient id={`strikerGrad-${code}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5C2525" />
            <stop offset="50%" stopColor="#3E1515" />
            <stop offset="100%" stopColor="#4A1B1B" />
          </linearGradient>

          <linearGradient id={`splintGrad-${code}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={woodColor} />
            <stop offset="80%" stopColor="#D9C39E" />
            <stop offset="100%" stopColor="#C4AA80" />
          </linearGradient>

          <linearGradient id={`flameGrad-${code}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C62828" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>

          {/* Dotted texture for striker band */}
          <pattern id={`strikerPattern-${code}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.2" fill="#240A0A" />
          </pattern>

          {/* Drop shadow filter */}
          <filter id={`shadow-${code}`} x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <circle cx="200" cy="140" r="110" fill={primaryAccent} fillOpacity="0.06" filter="blur(30px)" />

        {/* Shadow base under the box */}
        <ellipse cx="200" cy="245" rx="140" ry="18" fill="#000000" fillOpacity="0.35" filter="blur(8px)" />

        {/* ================= SLIDING INNER TRAY (Extended) ================= */}
        <g id="inner-tray" transform="translate(18, -12)">
          {/* Inner tray card */}
          <rect x="75" y="65" width="230" height="150" rx="4" fill="#D2B48C" stroke="#8C6D46" strokeWidth="1.5" />
          
          {/* Inner tray interior hollow */}
          <rect x="80" y="70" width="220" height="140" rx="3" fill="#BFA077" />

          {/* Matches inside the drawer */}
          {/* Matchstick 1 */}
          <rect x="95" y="80" width="170" height="7" rx="2" fill={`url(#splintGrad-${code})`} />
          <ellipse cx="270" cy="83.5" rx="7" ry="5.5" fill={headColor} />
          {/* Matchstick 2 */}
          <rect x="92" y="94" width="168" height="7" rx="2" fill={`url(#splintGrad-${code})`} />
          <ellipse cx="265" cy="97.5" rx="7" ry="5.5" fill={headColor} />
          {/* Matchstick 3 */}
          <rect x="97" y="108" width="165" height="7" rx="2" fill={`url(#splintGrad-${code})`} />
          <ellipse cx="267" cy="111.5" rx="7" ry="5.5" fill={headColor} />
          {/* Matchstick 4 */}
          <rect x="90" y="122" width="172" height="7" rx="2" fill={`url(#splintGrad-${code})`} />
          <ellipse cx="267" cy="125.5" rx="7" ry="5.5" fill={headColor} />
          {/* Matchstick 5 */}
          <rect x="94" y="136" width="166" height="7" rx="2" fill={`url(#splintGrad-${code})`} />
          <ellipse cx="265" cy="139.5" rx="7" ry="5.5" fill={headColor} />
        </g>

        {/* ================= MAIN MATCHBOX OUTER SLEEVE ================= */}
        <g id="outer-sleeve" filter={`url(#shadow-${code})`}>
          {/* Box Main Body (Front View with Perspective Offset) */}
          <rect
            x="65"
            y="65"
            width="220"
            height="150"
            rx="5"
            fill={`url(#boxGrad-${code})`}
            stroke={isPremium ? `url(#goldGrad-${code})` : '#374151'}
            strokeWidth={isPremium ? '2' : '1.5'}
          />

          {/* Inner Border Decorative Line */}
          <rect
            x="73"
            y="73"
            width="204"
            height="134"
            rx="3"
            fill="none"
            stroke={isPremium ? `url(#goldGrad-${code})` : 'rgba(255,255,255,0.2)'}
            strokeWidth="1"
            strokeDasharray={isPremium ? '4 2' : 'none'}
          />

          {/* Corner flourish ornaments (for Premium & Custom) */}
          {(isPremium || isCustom) && (
            <>
              <path d="M 77 85 L 77 77 L 85 77" stroke={primaryAccent} strokeWidth="1.5" fill="none" />
              <path d="M 269 85 L 269 77 L 261 77" stroke={primaryAccent} strokeWidth="1.5" fill="none" />
              <path d="M 77 195 L 77 203 L 85 203" stroke={primaryAccent} strokeWidth="1.5" fill="none" />
              <path d="M 269 195 L 269 203 L 261 203" stroke={primaryAccent} strokeWidth="1.5" fill="none" />
            </>
          )}

          {/* Brand Icon Flame Graphic inside Shield */}
          <g transform="translate(175, 82)">
            <rect x="-18" y="0" width="36" height="38" rx="4" fill="#0D0D0D" stroke={primaryAccent} strokeWidth="1" />
            {/* Stylized Flame */}
            <path
              d="M 0 6 C 5 12, 11 18, 11 25 C 11 31, 6 35, 0 35 C -6 35, -11 31, -11 25 C -11 19, -5 14, 0 6 Z"
              fill={`url(#flameGrad-${code})`}
            />
            <path
              d="M 0 16 C 3 20, 6 24, 6 27 C 6 31, 3 33, 0 33 C -3 33, -6 31, -6 27 C -6 23, -2 20, 0 16 Z"
              fill="#FFFBEB"
            />
          </g>

          {/* Brand Typography */}
          <text
            x="175"
            y="136"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="800"
            letterSpacing="2"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            PRIME MATCH
          </text>

          <text
            x="175"
            y="148"
            textAnchor="middle"
            fill={primaryAccent}
            fontSize="7"
            fontWeight="700"
            letterSpacing="3"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            INDUSTRIES
          </text>

          {/* Decorative horizontal rule */}
          <line x1="100" y1="156" x2="250" y2="156" stroke={primaryAccent} strokeWidth="0.75" strokeOpacity="0.6" />
          <polygon points="175,154 178,156 175,158 172,156" fill={primaryAccent} />

          {/* Product Label / Category Description */}
          <text
            x="175"
            y="170"
            textAnchor="middle"
            fill="#E5E7EB"
            fontSize="9"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {category.toUpperCase()}
          </text>

          <text
            x="175"
            y="182"
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="6.5"
            letterSpacing="1"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            SAFETY MATCHES • IS 2653 CERTIFIED
          </text>

          {/* Product Code Badge */}
          <rect x="145" y="190" width="60" height="11" rx="2" fill="#000000" fillOpacity="0.5" />
          <text
            x="175"
            y="198"
            textAnchor="middle"
            fill="#D1D5DB"
            fontSize="6"
            fontWeight="500"
            fontFamily="monospace"
          >
            {code}
          </text>
        </g>

        {/* ================= STRIKING SURFACE (Top / Side Rim) ================= */}
        <g id="striking-surface">
          {/* Side Striker Strip */}
          <rect
            x="50"
            y="72"
            width="15"
            height="136"
            rx="2"
            fill={`url(#strikerGrad-${code})`}
            stroke="#2A0F0F"
            strokeWidth="1"
          />
          <rect
            x="51"
            y="73"
            width="13"
            height="134"
            fill={`url(#strikerPattern-${code})`}
          />
          {/* Subtle highlight sheen */}
          <line x1="52" y1="74" x2="52" y2="206" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />
        </g>

        {/* ================= ONE LOOSE STRIKING MATCHSTICK ================= */}
        <g id="loose-match" transform="rotate(-26 310 170)">
          {/* Wooden stem */}
          <rect x="220" y="165" width="135" height="6.5" rx="2" fill={`url(#splintGrad-${code})`} stroke="#8C6D46" strokeWidth="0.5" />
          {/* Head */}
          <ellipse cx="222" cy="168.2" rx="9" ry="6.5" fill={headColor} />
          {/* Specular spark dot */}
          <circle cx="220" cy="166.5" r="1.5" fill="#FFFFFF" fillOpacity="0.8" />
        </g>

        {/* Subtle dynamic flame particle for visual excitement */}
        <g transform="translate(195, 45)">
          <path
            d="M 5 0 C 8 6, 12 11, 12 16 C 12 21, 7 24, 2 24 C -3 24, -7 21, -7 16 C -7 11, -1 6, 5 0 Z"
            fill={`url(#flameGrad-${code})`}
            opacity="0.9"
          />
          <circle cx="15" cy="5" r="1" fill="#FEF08A" opacity="0.8" />
          <circle cx="-3" cy="2" r="0.8" fill="#F59E0B" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};
