import React, { useState } from 'react';
import { BoxIllustration, TinIllustration, TwinTinsIllustration, MatildaLogo } from './BrandIcons';
import { SIGNATURE_CAKE } from '../data/menuData';
import { playChime, playSoftClick } from '../utils/audio';

export default function SignatureMatilda({ onAddToCart, onCustomizeCake }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // Default to 500g tin
  const [guestCount, setGuestCount] = useState(4);
  const selectedSize = SIGNATURE_CAKE.sizes[selectedSizeIndex];

  // Map illustrations to sizes
  const getIllustration = (id) => {
    switch (id) {
      case '200g-box':
        return <BoxIllustration className="w-32 h-32 sm:w-36 sm:h-36 mx-auto transform group-hover:scale-105 transition-transform" />;
      case '500g-tin':
        return <TinIllustration className="w-32 h-32 sm:w-36 sm:h-36 mx-auto transform group-hover:scale-105 transition-transform" />;
      case '1kg-bundle':
        return <TwinTinsIllustration className="w-36 h-32 sm:w-44 sm:h-36 mx-auto transform group-hover:scale-105 transition-transform" />;
      default:
        return <TinIllustration className="w-32 h-32 mx-auto" />;
    }
  };

  const handleQuickAdd = (size) => {
    playChime();
    onAddToCart({
      id: `${SIGNATURE_CAKE.id}-${size.id}`,
      name: `${SIGNATURE_CAKE.name} (${size.name})`,
      baseName: SIGNATURE_CAKE.name,
      size: size.name,
      price: size.price,
      finish: "Signature Molten Gloss",
      toppings: ["Hand-rolled Dark Chocolate Curls"],
      eggless: true,
      quantity: 1,
      image: SIGNATURE_CAKE.image
    });
  };

  return (
    <section id="signature" className="relative py-20 lg:py-28 bg-[#1F0E07] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3A1B0D] via-[#1B0A04] to-[#120502] opacity-95" />
      
      {/* Gold Vine Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C89D56]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C1408] border border-[#C89D56]/40 text-[#FFE082] text-xs font-medium tracking-widest uppercase">
            <span>✨</span> Signature Creation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FDF9F3] tracking-tight">
            The Iconic Menu Tiers
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#E5BE6E]">
            "Home-baked with love, luxe-finished for perfection."
          </p>
          <p className="text-sm sm:text-base text-[#EAD8C0]/80 font-light">
            Each size is baked in small daily batches using dark Belgian cocoa, real butter, and pure chocolate ganache. Choose your perfect indulgence:
          </p>
        </div>

        {/* 3 Interactive Menu Tier Cards (Matching the Poster) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SIGNATURE_CAKE.sizes.map((size, idx) => {
            const isSelected = selectedSizeIndex === idx;
            return (
              <div
                key={size.id}
                onClick={() => {
                  playSoftClick();
                  setSelectedSizeIndex(idx);
                }}
                className={`relative rounded-3xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#381B0D] via-[#2A1308] to-[#1A0A04] border-2 border-[#E5BE6E] shadow-[0_15px_40px_rgba(201,148,59,0.3)] scale-[1.03] z-20'
                    : 'bg-[#241007]/80 hover:bg-[#2F150A] border border-[#C89D56]/30 hover:border-[#C89D56]/60 shadow-xl'
                }`}
              >
                {/* Badge (Intro Special, Best Seller, Value Pack) */}
                {size.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md uppercase ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#E5BE6E] to-[#C9943B] text-[#1E0B04]'
                        : 'bg-[#35190B] border border-[#C89D56]/50 text-[#FFE082]'
                    }`}>
                      {size.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Visual Illustration */}
                  <div className="py-6 flex items-center justify-center min-h-[160px]">
                    {getIllustration(size.id)}
                  </div>

                  {/* Title & Servings */}
                  <div className="text-center space-y-1 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-[#FDF9F3] group-hover:text-[#FFE082] transition-colors">
                      {size.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-xs text-[#E5BE6E]">
                      <span>👥 {size.servings}</span>
                      <span>•</span>
                      <span>📦 {size.packaging}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#EAD8C0]/75 text-center leading-relaxed mb-6">
                    {size.details}
                  </p>
                </div>

                {/* Price & CTA Buttons */}
                <div className="pt-4 border-t border-[#3A1B0C] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-[#A38A73] block tracking-wider">All-Inclusive</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-3xl font-extrabold text-[#FFE082]">
                          Rs.{size.price}
                        </span>
                        {size.originalPrice && (
                          <span className="text-xs text-[#A38A73] line-through">
                            Rs.{size.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    {size.savings && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                        {size.savings}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickAdd(size);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C9943B] to-[#AA7A1E] text-[#1E0B04] text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>🛍️</span> Quick Bag
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playSoftClick();
                        onCustomizeCake(size);
                      }}
                      className="py-2.5 px-3 rounded-xl bg-[#32170B] hover:bg-[#43200F] border border-[#C89D56]/40 text-[#FFE082] text-xs font-semibold transition-all flex items-center justify-center gap-1"
                    >
                      <span>Customize</span>
                      <span>⚙️</span>
                    </button>
                  </div>
                </div>

                {/* Selected Indicator Glow */}
                {isSelected && (
                  <div className="absolute -bottom-1 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-[#E5BE6E] to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive "Serving Size Calculator" & Warm Ganache Tasting Tip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#291207] via-[#240F06] to-[#1E0B04] p-8 rounded-3xl border border-[#C89D56]/30 shadow-2xl">
          
          {/* Guest Count Interactive Slider */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5BE6E]">
              <span>💡</span> Smart Size Advisor
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FDF9F3]">
              How many people are enjoying with you?
            </h3>
            <p className="text-xs sm:text-sm text-[#EAD8C0]/80">
              Drag the slider to find the recommended size for your party or solo craving:
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-medium text-[#FFE082]">
                <span>Solo Treat (1-2)</span>
                <span>Small Group (4-6)</span>
                <span>Celebration (8-12+)</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={guestCount}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setGuestCount(val);
                  if (val <= 2) setSelectedSizeIndex(0);
                  else if (val <= 6) setSelectedSizeIndex(1);
                  else setSelectedSizeIndex(2);
                }}
                className="w-full accent-[#E5BE6E] cursor-pointer h-2 bg-[#170904] rounded-lg"
              />
              <div className="text-center font-serif text-sm text-[#EAD8C0]">
                Planning for <strong className="text-[#FFE082] font-bold text-base">{guestCount} {guestCount === 1 ? 'person' : 'people'}</strong> → We recommend the <strong className="text-[#FFE082]">{selectedSize.name}</strong> (Rs. {selectedSize.price})
              </div>
            </div>
          </div>

          {/* Artisan Quality Note */}
          <div className="lg:col-span-6 bg-[#1A0A04]/80 p-6 rounded-2xl border border-[#C89D56]/20 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase">
              <span>👑</span> Artisanal Quality Guarantee
            </div>
            <h4 className="font-serif text-lg font-bold text-[#FFE082]">
              "Pure Belgian Couverture & Cocoa"
            </h4>
            <p className="text-xs sm:text-sm text-[#EAD8C0]/80 leading-relaxed font-light">
              Every Matilda cake is baked fresh to order using slow-churned dairy butter and authentic Belgian dark couverture. 100% pure vegetarian & eggless for a cloud-soft, intensely rich crumb.
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs text-[#C89D56]">
              <span>✓ 100% Pure Veg & Eggless</span>
              <span>✓ Freshly Baked Daily</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
