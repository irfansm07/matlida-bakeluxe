import React from 'react';

// Official Matilda Bakeluxe Crest Logo
export function MatildaLogo({ className = "w-16 h-16", withRing = true, alt = "Matilda Bakeluxe Official Crest" }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full flex-shrink-0 transition-transform duration-300 hover:scale-105 group/logo ${className}`}>
      {withRing && (
        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-[#8C5C1B] via-[#E8BF6D] to-[#C9943B] opacity-90 shadow-sm" />
      )}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FAF5ED] border border-[#FAF5ED] shadow-inner flex items-center justify-center">
        <img
          src="/assets/matilda-logo.jpg"
          alt={alt}
          className="w-full h-full object-cover scale-[1.03] transition-transform duration-500 group-hover/logo:scale-110"
          loading="eager"
        />
        {/* Subtle luxury glass sheen */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-amber-100/25 pointer-events-none" />
      </div>
    </div>
  );
}

// Organic Chocolate Drip Wave
export function ChocolateDripDivider({ className = "w-full text-chocolate-900", flip = false }) {
  return (
    <div className={`overflow-hidden leading-none ${className} ${flip ? "transform rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-20 lg:h-24 block preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chocWaveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#251107" />
            <stop offset="40%" stopColor="#35190B" />
            <stop offset="85%" stopColor="#220F06" />
            <stop offset="100%" stopColor="#140803" />
          </linearGradient>
          <linearGradient id="chocHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7B4420" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#4A2511" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#220F06" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main Drip Body */}
        <path
          d="M0,0 L1440,0 L1440,32 C1390,32 1368,78 1335,78 C1305,78 1285,45 1250,45 C1210,45 1195,95 1160,95 C1130,95 1115,50 1080,50 C1045,50 1025,115 990,115 C955,115 940,35 905,35 C870,35 855,80 820,80 C785,80 770,40 735,40 C700,40 680,105 640,105 C605,105 590,45 555,45 C520,45 505,88 470,88 C435,88 415,30 380,30 C345,30 325,110 285,110 C250,110 235,50 200,50 C165,50 150,85 115,85 C80,85 65,38 30,38 C15,38 0,55 0,55 Z"
          fill="url(#chocWaveGrad)"
        />

        {/* Gloss Specular Highlight Line along top and drip curves */}
        <path
          d="M0,3 L1440,3 L1440,34 C1390,34 1368,80 1335,80 C1305,80 1285,47 1250,47 C1210,47 1195,97 1160,97 C1130,97 1115,52 1080,52 C1045,52 1025,117 990,117 C955,117 940,37 905,37 C870,37 855,82 820,82 C785,82 770,42 735,42 C700,42 680,107 640,107 C605,107 590,47 555,47 C520,47 505,90 470,90 C435,90 415,32 380,32 C345,32 325,112 285,112 C250,112 235,52 200,52 C165,52 150,87 115,87 C80,87 65,40 30,40 Z"
          stroke="url(#chocHighlight)"
          strokeWidth="3.5"
          fill="none"
          opacity="0.8"
        />

        {/* Glistening Highlights on droplets */}
        <ellipse cx="285" cy="104" rx="10" ry="3.5" fill="#C68953" opacity="0.6" />
        <ellipse cx="640" cy="99" rx="12" ry="4" fill="#C68953" opacity="0.6" />
        <ellipse cx="990" cy="109" rx="11" ry="4" fill="#C68953" opacity="0.6" />
        <ellipse cx="1160" cy="89" rx="9" ry="3" fill="#C68953" opacity="0.6" />
      </svg>
    </div>
  );
}

// 200g Box Illustration SVG
export function BoxIllustration({ className = "w-28 h-28" }) {
  return (
    <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boxFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A2511" />
          <stop offset="100%" stopColor="#251208" />
        </linearGradient>
        <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#673619" />
          <stop offset="100%" stopColor="#43200E" />
        </linearGradient>
        <linearGradient id="goldSeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C631B" />
        </linearGradient>
      </defs>
      {/* Box Drop Shadow */}
      <ellipse cx="80" cy="126" rx="60" ry="12" fill="#000" opacity="0.3" filter="blur(4px)" />
      {/* Box Top Flap / 3D Perspective */}
      <polygon points="20,55 80,30 140,55 80,75" fill="url(#boxTop)" stroke="#220E05" strokeWidth="1.5" />
      {/* Chocolate Curls peaking out */}
      <path d="M 60 42 Q 68 32 76 44 Q 84 28 92 40" stroke="#321408" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M 68 37 Q 76 25 84 35" stroke="#1D0A03" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M 72 35 Q 78 22 86 32" stroke="#6F391B" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Box Front Face */}
      <polygon points="20,55 80,75 80,120 20,100" fill="url(#boxFront)" stroke="#220E05" strokeWidth="1.5" />
      <polygon points="80,75 140,55 140,100 80,120" fill="#2E160A" stroke="#220E05" strokeWidth="1.5" />
      {/* Gold Crest Monogram on Box Front */}
      <circle cx="80" cy="95" r="14" fill="url(#boxFront)" stroke="url(#goldSeal)" strokeWidth="1.5" />
      <circle cx="80" cy="95" r="11" stroke="url(#goldSeal)" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
      <text x="80" y="99" fill="url(#goldSeal)" fontSize="10" fontWeight="bold" fontFamily="serif" textAnchor="middle">M</text>
    </svg>
  );
}

// 500g Metallic Cake Tin Illustration SVG
export function TinIllustration({ className = "w-28 h-28" }) {
  return (
    <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tinMetal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7E7B77" />
          <stop offset="25%" stopColor="#D8D5CF" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#9C9893" />
          <stop offset="100%" stopColor="#55524E" />
        </linearGradient>
        <linearGradient id="chocGlaze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A210C" />
          <stop offset="50%" stopColor="#2E1205" />
          <stop offset="100%" stopColor="#1A0902" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="80" cy="122" rx="65" ry="14" fill="#000" opacity="0.35" filter="blur(4px)" />
      {/* Tin Outer Wall */}
      <path d="M 15 72 L 15 102 C 15 120 145 120 145 102 L 145 72 Z" fill="url(#tinMetal)" stroke="#4A4744" strokeWidth="1.2" />
      {/* Tin Rim Reflection */}
      <ellipse cx="80" cy="72" rx="65" ry="24" fill="url(#tinMetal)" stroke="#8F8B85" strokeWidth="1.5" />
      {/* Cake Surface Inside Tin */}
      <ellipse cx="80" cy="73" rx="58" ry="20" fill="url(#chocGlaze)" stroke="#1A0802" strokeWidth="1" />
      {/* Gloss reflection on ganache */}
      <path d="M 40 70 Q 80 62 118 72 Q 80 65 40 70 Z" fill="#874D28" opacity="0.6" />
      {/* Chocolate Curls & Shavings on Top */}
      <g stroke="#260F06" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M 65 72 Q 74 65 82 73" />
        <path d="M 78 70 Q 88 62 96 71" />
        <path d="M 72 75 Q 81 78 90 73" />
      </g>
      <g stroke="#67351A" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M 68 71 Q 75 66 82 72" />
        <path d="M 80 69 Q 88 63 94 70" />
      </g>
      {/* Gold Sparkle on Ganache */}
      <circle cx="62" cy="74" r="1.5" fill="#FFE082" />
      <circle cx="98" cy="72" r="1.5" fill="#FFE082" />
      <circle cx="85" cy="78" r="1.5" fill="#FFE082" />
    </svg>
  );
}

// 1kg Twin Tins Bundle Illustration SVG
export function TwinTinsIllustration({ className = "w-36 h-28" }) {
  return (
    <svg viewBox="0 0 190 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tinMetal2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7E7B77" />
          <stop offset="30%" stopColor="#E2DFD9" />
          <stop offset="60%" stopColor="#FFFFFF" />
          <stop offset="85%" stopColor="#9C9893" />
          <stop offset="100%" stopColor="#55524E" />
        </linearGradient>
        <linearGradient id="chocGlaze2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A210C" />
          <stop offset="50%" stopColor="#2E1205" />
          <stop offset="100%" stopColor="#1A0902" />
        </linearGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="60" cy="116" rx="48" ry="12" fill="#000" opacity="0.3" filter="blur(3px)" />
      <ellipse cx="130" cy="116" rx="48" ry="12" fill="#000" opacity="0.3" filter="blur(3px)" />

      {/* Left Tin */}
      <g transform="translate(-10, 5)">
        <path d="M 20 70 L 20 98 C 20 114 120 114 120 98 L 120 70 Z" fill="url(#tinMetal2)" stroke="#4A4744" strokeWidth="1" />
        <ellipse cx="70" cy="70" rx="50" ry="18" fill="url(#tinMetal2)" />
        <ellipse cx="70" cy="71" rx="44" ry="15" fill="url(#chocGlaze2)" />
        <path d="M 58 70 Q 70 64 82 71" stroke="#260F06" strokeWidth="4" strokeLinecap="round" />
        <path d="M 62 69 Q 71 65 79 70" stroke="#67351A" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Right Tin (Overlapping slightly in front) */}
      <g transform="translate(60, 10)">
        <path d="M 20 70 L 20 98 C 20 114 120 114 120 98 L 120 70 Z" fill="url(#tinMetal2)" stroke="#4A4744" strokeWidth="1" />
        <ellipse cx="70" cy="70" rx="50" ry="18" fill="url(#tinMetal2)" />
        <ellipse cx="70" cy="71" rx="44" ry="15" fill="url(#chocGlaze2)" />
        <path d="M 58 70 Q 70 64 82 71" stroke="#260F06" strokeWidth="4" strokeLinecap="round" />
        <path d="M 62 69 Q 71 65 79 70" stroke="#67351A" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Luxury Red/Gold Silk Ribbon tying them together */}
      <path d="M 60 90 Q 100 80 140 95" stroke="#C89D56" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9" />
      <circle cx="102" cy="86" r="6" fill="#C89D56" />
      <circle cx="102" cy="86" r="3" fill="#FFE082" />
    </svg>
  );
}
