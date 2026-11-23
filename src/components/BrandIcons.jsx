import React from 'react';

// Official Matilda Bakeluxe Crest Logo SVG
export function MatildaLogo({ className = "w-16 h-16", variant = "gold" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Luxury Gold Gradients */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="35%" stopColor="#E5BE6E" />
          <stop offset="70%" stopColor="#C9943B" />
          <stop offset="100%" stopColor="#87571B" />
        </linearGradient>
        <linearGradient id="chocolateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A2511" />
          <stop offset="100%" stopColor="#1E0B04" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Ring */}
      <circle cx="100" cy="100" r="92" stroke="url(#goldGrad)" strokeWidth="2.5" fill="none" />
      <circle cx="100" cy="100" r="86" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.8" />
      <circle cx="100" cy="100" r="76" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" />

      {/* Star Accents */}
      <path d="M 28 100 L 31 102 L 30 105 L 28 103 L 26 105 L 27 102 Z" fill="url(#goldGrad)" />
      <path d="M 172 100 L 175 102 L 174 105 L 172 103 L 170 105 L 171 102 Z" fill="url(#goldGrad)" />

      {/* Arched Text: MATILDA (top) and BAKELUXE (bottom) */}
      <path id="topTextArc" d="M 36 100 A 64 64 0 0 1 164 100" fill="none" />
      <text fill="url(#goldGrad)" fontSize="13.5" fontWeight="700" letterSpacing="6" fontFamily="Playfair Display, serif">
        <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
          MATILDA
        </textPath>
      </text>

      <path id="bottomTextArc" d="M 166 100 A 66 66 0 0 1 34 100" fill="none" />
      <text fill="url(#goldGrad)" fontSize="11" fontWeight="600" letterSpacing="4.5" fontFamily="Plus Jakarta Sans, sans-serif">
        <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
          BAKELUXE
        </textPath>
      </text>

      {/* Wheat / Botanical Sprigs on Lower Sides */}
      <g stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" opacity="0.9">
        {/* Left Sprig */}
        <path d="M 52 125 Q 60 135 70 142" />
        <ellipse cx="55" cy="128" rx="3.5" ry="2" transform="rotate(-30 55 128)" fill="url(#goldGrad)" />
        <ellipse cx="61" cy="133" rx="3.5" ry="2" transform="rotate(-15 61 133)" fill="url(#goldGrad)" />
        <ellipse cx="68" cy="139" rx="3.5" ry="2" transform="rotate(10 68 139)" fill="url(#goldGrad)" />

        {/* Right Sprig */}
        <path d="M 148 125 Q 140 135 130 142" />
        <ellipse cx="145" cy="128" rx="3.5" ry="2" transform="rotate(30 145 128)" fill="url(#goldGrad)" />
        <ellipse cx="139" cy="133" rx="3.5" ry="2" transform="rotate(15 139 133)" fill="url(#goldGrad)" />
        <ellipse cx="132" cy="139" rx="3.5" ry="2" transform="rotate(-10 132 139)" fill="url(#goldGrad)" />
      </g>

      {/* Center Monogram M with Whisk Integration */}
      {/* Whisk handle and wires */}
      <g transform="translate(100, 88)">
        {/* Whisk Loops */}
        <ellipse cx="0" cy="-6" rx="9" ry="16" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.9" />
        <ellipse cx="0" cy="-6" rx="5" ry="16" stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" opacity="0.85" />
        <line x1="0" y1="-22" x2="0" y2="10" stroke="url(#goldGrad)" strokeWidth="1.8" />
        {/* Whisk Handle Collar */}
        <rect x="-3" y="10" width="6" height="3" rx="1" fill="url(#goldGrad)" />
        <line x1="0" y1="13" x2="0" y2="28" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Monogram "M" Silhouette in Bold Serif Style */}
      <path
        d="M 66 128 L 66 78 L 74 78 L 86 102 L 98 78 L 102 78 L 114 102 L 126 78 L 134 78 L 134 128 L 124 128 L 124 94 L 112 118 L 106 118 L 94 94 L 94 128 Z"
        fill="url(#goldGrad)"
        opacity="0.95"
      />
    </svg>
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
