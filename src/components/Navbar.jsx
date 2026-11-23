import React, { useState, useEffect } from 'react';
import { MatildaLogo } from './BrandIcons';
import { toggleSound, isSoundEnabled, playSoftClick } from '../utils/audio';

export default function Navbar({
  cartCount = 0,
  onOpenCart,
  onOpenFlyer,
  activeSection = 'hero'
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const state = toggleSound();
    setSoundOn(state);
    if (state) playSoftClick();
  };

  const navLinks = [
    { label: 'Signature Cake', href: '#signature' },
    { label: 'Menu & Prices', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'FAQs', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#180B05]/90 backdrop-blur-md border-b border-[#C89D56]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#150A04]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={playSoftClick}
          >
            <div className="relative">
              <MatildaLogo className="w-11 h-11 sm:w-13 sm:h-13 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-full bg-[#E5BE6E]/10 blur-md group-hover:bg-[#E5BE6E]/20 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider bg-gradient-to-r from-[#FFF5DC] via-[#E5BE6E] to-[#C9943B] bg-clip-text text-transparent">
                Matilda
              </span>
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-[#C89D56] uppercase font-semibold -mt-1">
                Bakeluxe
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={playSoftClick}
                className="text-sm font-medium text-[#EAD8C0]/80 hover:text-[#FFF2D6] hover:scale-105 transition-all duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#C9943B] to-[#FFE082] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons: Sound, Menu Flyer, Cart */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? "Mute ambient chimes" : "Enable ambient chimes"}
              className="p-2 sm:px-2.5 sm:py-2 rounded-full border border-[#C89D56]/30 text-[#E5BE6E] hover:border-[#E5BE6E] hover:bg-[#C89D56]/10 transition-all text-xs flex items-center gap-1.5"
            >
              <span className="text-sm">{soundOn ? '🔔' : '🔕'}</span>
              <span className="hidden lg:inline text-[11px] font-sans tracking-wide">
                {soundOn ? 'Sound On' : 'Muted'}
              </span>
            </button>

            {/* Official Menu Flyer Button */}
            <button
              onClick={() => {
                playSoftClick();
                onOpenFlyer();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#35190B]/90 border border-[#C89D56]/50 text-[#FFF2D6] text-xs font-medium hover:border-[#E5BE6E] hover:shadow-[0_0_15px_rgba(201,148,59,0.3)] transition-all group"
            >
              <span className="text-[#E5BE6E] group-hover:rotate-12 transition-transform">📜</span>
              <span>Official Menu Card</span>
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={() => {
                playSoftClick();
                onOpenCart();
              }}
              className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#C9943B] to-[#AA7A1E] text-[#1E0B04] font-semibold text-xs sm:text-sm shadow-lg hover:shadow-[0_0_20px_rgba(201,148,59,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 text-[#1E0B04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Bag</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E0B04] text-[#FFE082] text-xs font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#EAD8C0] hover:text-[#FFF2D6] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1D0C05]/98 border-b border-[#C89D56]/30 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playSoftClick();
                setMobileMenuOpen(false);
              }}
              className="block text-base font-serif text-[#EAD8C0] hover:text-[#FFE082] py-2 border-b border-[#35190B]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFlyer();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#35190B] border border-[#C89D56]/40 text-[#FFF2D6] text-sm"
            >
              📜 View Official Menu Card
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
