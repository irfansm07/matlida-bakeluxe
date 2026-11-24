import React, { useState, useRef } from 'react';
import { MatildaLogo, ChocolateDripDivider } from './BrandIcons';
import { BRAND, SIGNATURE_CAKE } from '../data/menuData';
import { playChime, playSoftClick } from '../utils/audio';

export default function Hero({ onCustomizeCake, onOpenFlyer }) {
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const [cardGloss, setCardGloss] = useState({ x: 50, y: 50 });
  const [warmEffect, setWarmEffect] = useState(false);
  const cardRef = useRef(null);

  // 3D Parallax Tilt Handler
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setCardRotate({ x: rotateX, y: rotateY });
    setCardGloss({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
    setCardGloss({ x: 50, y: 50 });
  };

  const toggleWarmGanache = () => {
    playChime();
    setWarmEffect(true);
    setTimeout(() => setWarmEffect(false), 4500);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#160904]">
      {/* Background Radial Glow & Striped Texture similar to the flyer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#3F1D0D_0%,#1B0A04_55%,#0F0502_100%)] opacity-95" />
      
      {/* Subtle vertical luxury striped texture from the flyer */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #FFE082 0, #FFE082 40px, transparent 40px, transparent 80px)'
        }}
      />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C9943B]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#874D28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E1509] border border-[#C89D56]/40 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E5BE6E] animate-ping" />
              <span className="font-serif italic text-xs sm:text-sm text-[#FFE6A7] tracking-wider">
                Home-baked. Luxe-finished.
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#FDF9F3]">
                The Legendary{' '}
                <span className="block font-serif italic text-[#E5BE6E] bg-gradient-to-r from-[#FFF0D0] via-[#E5BE6E] to-[#C9943B] bg-clip-text text-transparent">
                  Matilda Chocolate Cake
                </span>
              </h1>
              <p className="font-script text-2xl sm:text-3xl text-[#E5BE6E] pt-1">
                "Indulge in every slice of happiness!"
              </p>
            </div>

            {/* Narrative / Description */}
            <p className="font-sans text-base sm:text-lg text-[#EAD8C0]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Crafted in small batches with velvety Belgian cocoa, drenched in glossy warm ganache, and crowned with hand-rolled chocolate curls. Available in our iconic <strong className="text-[#FFE082] font-semibold">200g Gift Box (Rs. 129)</strong>, <strong className="text-[#FFE082] font-semibold">500g Cake Tin (Rs. 399)</strong>, and <strong className="text-[#FFE082] font-semibold">1kg Grand Twin Pack (Rs. 699)</strong>.
            </p>

            {/* Badges Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <span className="px-3 py-1 rounded-md bg-[#251006] border border-[#C89D56]/30 text-[#E5BE6E] text-xs flex items-center gap-1.5">
                <span>🌱</span> 100% Eggless Option
              </span>
              <span className="px-3 py-1 rounded-md bg-[#251006] border border-[#C89D56]/30 text-[#E5BE6E] text-xs flex items-center gap-1.5">
                <span>🍫</span> Pure Belgian Cocoa
              </span>
              <span className="px-3 py-1 rounded-md bg-[#251006] border border-[#C89D56]/30 text-[#E5BE6E] text-xs flex items-center gap-1.5">
                <span>📅</span> Pre-Order 1–2 Days Before
              </span>
              <span className="px-3 py-1 rounded-md bg-[#251006] border border-[#C89D56]/30 text-[#E5BE6E] text-xs flex items-center gap-1.5">
                <span>⭐</span> 4.98 / 5 Rating
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => {
                  playChime();
                  onCustomizeCake(SIGNATURE_CAKE.sizes[1]); // Default to 500g tin
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E5BE6E] via-[#D4AF37] to-[#A3741E] text-[#1E0B04] font-bold text-base shadow-[0_4px_25px_rgba(229,190,110,0.4)] hover:shadow-[0_6px_35px_rgba(229,190,110,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Order Signature Cake</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={() => {
                  playSoftClick();
                  onOpenFlyer();
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#271207]/80 hover:bg-[#35190B] border border-[#C89D56]/60 text-[#FFF2D6] font-medium text-base hover:border-[#E5BE6E] hover:scale-102 transition-all flex items-center justify-center gap-2.5"
              >
                <span>📜</span>
                <span>View Official Menu Card</span>
              </button>
            </div>

            {/* Quick Price Summary Bar */}
            <div className="pt-4 border-t border-[#3A1B0C]/60 flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs sm:text-sm">
              <div>
                <span className="text-[#A38A73] block text-[11px] uppercase tracking-wider">200g Box</span>
                <span className="font-serif font-bold text-[#FFE082] text-lg">Rs. 129</span>
              </div>
              <div className="w-[1px] h-8 bg-[#3A1B0C]" />
              <div>
                <span className="text-[#A38A73] block text-[11px] uppercase tracking-wider">500g Tin</span>
                <span className="font-serif font-bold text-[#FFE082] text-lg">Rs. 399</span>
              </div>
              <div className="w-[1px] h-8 bg-[#3A1B0C]" />
              <div>
                <span className="text-[#A38A73] block text-[11px] uppercase tracking-wider">1kg Twin Tins</span>
                <span className="font-serif font-bold text-[#FFE082] text-lg">Rs. 699</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Matilda Cake Card */}
          <div className="lg:col-span-5 flex justify-center perspective-[1200px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-md rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#381B0E] via-[#241007] to-[#170904] border-2 border-[#C89D56]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(201,148,59,0.25)] group cursor-pointer"
            >
              {/* Dynamic Specular Glare Effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 transition-opacity group-hover:opacity-60"
                style={{
                  background: `radial-gradient(circle at ${cardGloss.x}% ${cardGloss.y}%, rgba(255,235,185,0.45) 0%, transparent 60%)`
                }}
              />

              {/* Top Card Badge: Crest + Signature Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C89D56]/20">
                <div className="flex items-center gap-2.5">
                  <MatildaLogo className="w-9 h-9" />
                  <div>
                    <span className="block font-serif text-sm font-bold text-[#FFE082] tracking-wider leading-none">
                      MATILDA BAKELUXE
                    </span>
                    <span className="text-[10px] text-[#C89D56] uppercase tracking-widest">
                      Artisanal Patisserie
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#C89D56]/20 border border-[#C89D56]/50 text-[#FFE082] text-[11px] font-semibold">
                  ★ Bestseller
                </span>
              </div>

              {/* Main Visual: Decadent Matilda Cake Photography */}
              <div className="relative my-4 rounded-2xl overflow-hidden aspect-[4/3] shadow-inner bg-[#120502]">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
                  alt="Matilda Chocolate Cake with Rich Ganache Drip"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Warm Ganache Overlay Simulation */}
                {warmEffect && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D1A0A]/80 via-transparent to-transparent flex items-end justify-center pb-4 animate-fadeIn">
                    <span className="px-3 py-1 rounded-full bg-[#FFE082] text-[#1E0B04] text-xs font-bold shadow-lg animate-bounce">
                      ♨️ Warm & Molten Ganache Activated!
                    </span>
                  </div>
                )}

                {/* Price Tag Chip */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-[#1E0B04]/90 backdrop-blur-md border border-[#C89D56]/40 text-[#FFE082] shadow-lg">
                  <span className="text-[10px] block text-[#C89D56] leading-none uppercase">Starting At</span>
                  <span className="font-serif font-bold text-base">Rs. 129</span>
                </div>

                {/* Freshness Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1E0B04]/80 backdrop-blur-md border border-[#E5BE6E]/40 text-[#FFE082] text-[11px] flex items-center gap-1">
                  <span>✨</span> Handcrafted Daily
                </div>
              </div>

              {/* Card Meta & Interactive Warm Ganache Button */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#FDF9F3]">
                    Matilda Chocolate Cake
                  </h3>
                  <div className="flex items-center text-amber-400 text-xs font-semibold gap-1">
                    <span>★ 4.98</span>
                    <span className="text-[#A38A73]">(342)</span>
                  </div>
                </div>

                <p className="text-xs text-[#EAD8C0]/75 line-clamp-2 leading-relaxed">
                  Four intense chocolate sponge tiers soaked with molten fudge ganache, finished with hand-carved chocolate curls.
                </p>

                {/* Order / Customize Action */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      playChime();
                      onCustomizeCake(SIGNATURE_CAKE.sizes[1]);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C9943B] to-[#AA7A1E] text-[#1E0B04] text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Order Signature Cake</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Decorative Corner Flourish */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFE082] to-[#C9943B] flex items-center justify-center text-[#1E0B04] text-xs font-bold shadow-md">
                🤎
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Chocolate Drip Divider at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0">
        <ChocolateDripDivider className="text-[#200E06]" />
      </div>
    </section>
  );
}
