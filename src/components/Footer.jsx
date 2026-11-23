import React from 'react';
import { MatildaLogo, ChocolateDripDivider } from './BrandIcons';
import { BRAND } from '../data/menuData';
import { playSoftClick } from '../utils/audio';

export default function Footer({ onOpenCart, onOpenFlyer, cartCount = 0 }) {
  return (
    <footer className="relative bg-[#100502] text-[#EAD8C0] pt-12 pb-24 md:pb-12 overflow-hidden border-t border-[#C89D56]/20">
      
      {/* Chocolate Drip Divider inverted at top of footer */}
      <div className="absolute top-0 left-0 right-0">
        <ChocolateDripDivider className="text-[#100502]" flip={true} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2D1409]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <MatildaLogo className="w-14 h-14" />
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-[#FFF5DC] via-[#E5BE6E] to-[#C9943B] bg-clip-text text-transparent block">
                  Matilda Bakeluxe
                </span>
                <span className="font-sans text-xs tracking-[0.25em] text-[#C89D56] uppercase font-semibold">
                  Artisanal Cake Atelier
                </span>
              </div>
            </div>

            <p className="font-script text-xl text-[#E5BE6E]">
              "Home-baked. Luxe-finished. Indulge in every slice of happiness!"
            </p>

            <p className="text-xs sm:text-sm text-[#EAD8C0]/75 max-w-sm leading-relaxed font-light">
              Crafting intensely rich, slow-baked chocolate cakes bathed in glossy warm Belgian ganache. Available in 200g gift boxes, 500g tins, and 1kg party bundles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playSoftClick}
                className="w-10 h-10 rounded-full bg-[#240F06] border border-[#C89D56]/40 flex items-center justify-center text-[#FFE082] hover:border-[#E5BE6E] hover:scale-110 transition-all"
                title="Instagram"
              >
                📷
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playSoftClick}
                className="w-10 h-10 rounded-full bg-[#240F06] border border-[#C89D56]/40 flex items-center justify-center text-[#FFE082] hover:border-[#E5BE6E] hover:scale-110 transition-all"
                title="WhatsApp Direct Order"
              >
                💬
              </a>
              <button
                onClick={() => {
                  playSoftClick();
                  onOpenFlyer();
                }}
                className="h-10 px-3.5 rounded-full bg-[#240F06] border border-[#C89D56]/40 flex items-center gap-1.5 text-xs text-[#FFE082] hover:border-[#E5BE6E] transition-all"
                title="View Official Menu Card"
              >
                <span>📜</span>
                <span>Menu Flyer</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#FDF9F3] uppercase tracking-wider text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-[#EAD8C0]/80">
              <li>
                <a href="#signature" onClick={playSoftClick} className="hover:text-[#FFE082] transition-colors">
                  Signature Matilda Cake
                </a>
              </li>
              <li>
                <a href="#menu" onClick={playSoftClick} className="hover:text-[#FFE082] transition-colors">
                  Full Artisanal Menu
                </a>
              </li>
              <li>
                <a href="#story" onClick={playSoftClick} className="hover:text-[#FFE082] transition-colors">
                  The Matilda Story
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={playSoftClick} className="hover:text-[#FFE082] transition-colors">
                  Customer Testimonials
                </a>
              </li>
              <li>
                <a href="#instagram" onClick={playSoftClick} className="hover:text-[#FFE082] transition-colors">
                  Instagram ({BRAND.instagramHandle})
                </a>
              </li>
              <li>
                <a href="#faq" onClick={playSoftClick} className="hover:text-[#FFE082] transition-colors">
                  Storage & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Ordering & Delivery Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#FDF9F3] uppercase tracking-wider text-xs">
              Order & Delivery
            </h4>
            <div className="space-y-2 text-xs text-[#EAD8C0]/80 font-light">
              <div>
                <span className="text-[#FFE082] font-medium block">Baking Hours:</span>
                <span>{BRAND.deliveryHours}</span>
              </div>
              <div>
                <span className="text-[#FFE082] font-medium block">Express Notice:</span>
                <span>{BRAND.leadTime}</span>
              </div>
              <div>
                <span className="text-[#FFE082] font-medium block">Dietary:</span>
                <span>{BRAND.dietaryNote}</span>
              </div>
              <div>
                <span className="text-[#FFE082] font-medium block">Instagram:</span>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5BE6E] hover:underline"
                >
                  {BRAND.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A38A73]">
          <p>© {new Date().getFullYear()} Matilda Bakeluxe. All rights reserved. Handcrafted with passion.</p>
          <p className="flex items-center gap-1">
            <span>Baked with</span>
            <span className="text-[#E5BE6E]">🤎</span>
            <span>& Belgian Chocolate</span>
          </p>
        </div>
      </div>

      {/* Sticky Mobile Order Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A0A04]/95 backdrop-blur-md border-t border-[#C89D56]/40 p-3 flex items-center justify-between gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <button
          onClick={() => {
            playSoftClick();
            onOpenCart();
          }}
          className="flex-1 py-2.5 px-3 rounded-full bg-[#2A1308] border border-[#C89D56]/50 text-[#FFE082] text-xs font-bold flex items-center justify-center gap-2"
        >
          <span>🛍️ Bag ({cartCount})</span>
        </button>

        <a
          href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>💬 WhatsApp</span>
        </a>

        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-full bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white text-xs font-bold flex items-center justify-center"
          title="Instagram"
        >
          📷
        </a>
      </div>

    </footer>
  );
}
