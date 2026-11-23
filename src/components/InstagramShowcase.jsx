import React from 'react';
import { INSTAGRAM_POSTS, BRAND } from '../data/menuData';
import { playSoftClick } from '../utils/audio';

export default function InstagramShowcase() {
  return (
    <section id="instagram" className="relative py-24 bg-[#140702] overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#833AB4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FD1D1D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Instagram Follow CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#271006] border border-[#C89D56]/30 text-[#FFE082] text-xs font-semibold tracking-wider uppercase">
              <span>📸</span> Live On Instagram
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FDF9F3] tracking-tight">
              Follow Our Sweet Journey
            </h2>
            <p className="font-serif text-lg text-[#E5BE6E]">
              {BRAND.instagramHandle} · Join our growing family of chocolate lovers
            </p>
          </div>

          {/* Follow Button */}
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playSoftClick}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-sm shadow-[0_4px_25px_rgba(253,29,29,0.35)] hover:shadow-[0_6px_35px_rgba(253,29,29,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Follow {BRAND.instagramHandle}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playSoftClick}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#220E05] border border-[#C89D56]/20 block shadow-lg hover:border-[#E5BE6E] transition-all"
            >
              <img
                src={post.image}
                alt="Matilda Bakeluxe Cake on Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Hover Dark Overlay with Likes/Comments & Caption */}
              <div className="absolute inset-0 bg-[#160904]/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white text-xs">
                <div className="flex items-center justify-between text-[#FFE082] text-[11px] font-bold">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>

                <p className="line-clamp-3 text-[10px] text-[#EAD8C0]/90 leading-relaxed font-light">
                  {post.caption}
                </p>

                <div className="text-center text-[10px] text-[#E5BE6E] font-medium tracking-wider">
                  View on Instagram →
                </div>
              </div>

              {/* Instagram Glyph in Corner */}
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white/80 opacity-70 group-hover:opacity-0 transition-opacity">
                📷
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#291308] via-[#200E06] to-[#190A04] border border-[#C89D56]/30 text-center space-y-2">
          <p className="font-serif text-base sm:text-lg text-[#FDF9F3]">
            Tag <span className="text-[#E5BE6E] font-bold">{BRAND.instagramHandle}</span> in your stories & posts!
          </p>
          <p className="text-xs text-[#EAD8C0]/70 font-light">
            We feature our sweetest customer moments every Sunday on our official page.
          </p>
        </div>

      </div>
    </section>
  );
}
