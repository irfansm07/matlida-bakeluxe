import React, { useState } from 'react';
import { FAQS } from '../data/menuData';
import { playSoftClick } from '../utils/audio';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (index) => {
    playSoftClick();
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#160903] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#271006] border border-[#C89D56]/30 text-[#FFE082] text-xs font-semibold tracking-wider uppercase">
            <span>❓</span> Everything You Need To Know
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FDF9F3] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#EAD8C0]/75">
            Details on storage, eggless ingredients, ordering times, and packaging.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#251107] border-[#E5BE6E]/60 shadow-lg'
                    : 'bg-[#1D0C05] border-[#C89D56]/20 hover:border-[#C89D56]/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#FDF9F3]">
                    {faq.q}
                  </span>
                  <span className={`text-[#FFE082] text-lg transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#EAD8C0]/85 leading-relaxed font-light border-t border-[#35190B] pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
