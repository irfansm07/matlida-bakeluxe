import React from 'react';
import { TESTIMONIALS } from '../data/menuData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 bg-[#1B0D06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#C89D56]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E1408] border border-[#C89D56]/30 text-[#FFE082] text-xs font-semibold tracking-wider uppercase">
            <span>⭐</span> Verified Customer Love
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FDF9F3] tracking-tight">
            Loved By Real Dessert Aficionados
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#E5BE6E]">
            "Over 340+ five-star cravings satisfied and counting."
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#281309] to-[#1C0A04] border border-[#C89D56]/30 hover:border-[#E5BE6E]/60 shadow-xl space-y-5 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                {/* 5 Stars + Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm tracking-wider">
                    {'★'.repeat(review.rating)}
                  </div>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    ✓ Verified Taster
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#EAD8C0]/90 italic leading-relaxed font-light">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Item */}
              <div className="pt-4 border-t border-[#35190B] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#FDF9F3]">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-[#A38A73]">
                    {review.tag}
                  </span>
                </div>

                <span className="text-[11px] font-medium text-[#FFE082] bg-[#33170B] px-2.5 py-1 rounded-lg border border-[#C89D56]/20">
                  {review.item}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
