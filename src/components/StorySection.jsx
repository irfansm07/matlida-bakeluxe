import React from 'react';
import { MatildaLogo } from './BrandIcons';

export default function StorySection() {
  const pillars = [
    {
      icon: "🍫",
      title: "Pure Belgian Couverture",
      desc: "We never compromise with compound chocolate or artificial cocoa. Every batch is infused with rich, slow-melted Belgian dark chocolate and Dutch alkalized cocoa for deep, authentic chocolate notes."
    },
    {
      icon: "🧈",
      title: "Slow-Churned Butter",
      desc: "Our sponges get their legendary moisture not from excessive oil, but from fresh butter and hand-folded ganache. The result is a crumb that practically melts upon touching your tongue."
    },
    {
      icon: "🌱",
      title: "Eggless Without Compromise",
      desc: "Crafted through months of patisserie recipe development, our 100% vegetarian & eggless cakes achieve the exact same cloud-soft sponge and velvety fudge density as traditional Parisian bakeries."
    },
    {
      icon: "🎁",
      title: "Luxe Presentation",
      desc: "Home-baked heart meets high-fashion luxury. Our custom gold-embossed gift boxes, sleek airtight cake tins, and satin ribbon packaging make every delivery an unforgettable celebration."
    }
  ];

  return (
    <section id="story" className="relative py-24 bg-[#190B05] overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C89D56]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Story Visual Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border-2 border-[#C89D56]/40 shadow-2xl bg-[#120603]">
              <img
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80"
                alt="Matilda Chocolate Cake Ganache Slicing"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140803] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1B0B04]/90 backdrop-blur-md border border-[#C89D56]/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <MatildaLogo className="w-10 h-10 flex-shrink-0" />
                  <div>
                    <span className="font-serif font-bold text-sm text-[#FFE082] block">
                      Home-baked. Luxe-finished.
                    </span>
                    <span className="text-[11px] text-[#EAD8C0]/80">
                      The philosophy behind Matilda Bakeluxe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Seal */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#E5BE6E] to-[#AA7A1E] flex items-center justify-center text-[#1E0B04] text-xs font-bold shadow-xl border-2 border-[#FFF0D0]">
              EST. 2024
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2C1408] border border-[#C89D56]/40 text-[#FFE082] text-xs font-semibold tracking-widest uppercase">
              <span>📖</span> Our Origin Story
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FDF9F3] tracking-tight leading-tight">
              Inspired by the World’s Most{' '}
              <span className="text-[#E5BE6E] italic">Decadent Chocolate Cake</span>
            </h2>

            <p className="font-script text-2xl sm:text-3xl text-[#E5BE6E]">
              "A cake so rich, Bruce Bogtrotter would risk it all."
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#EAD8C0]/85 font-light leading-relaxed">
              <p>
                Every chocolate lover remembers that iconic scene from Roald Dahl’s <em>Matilda</em>: a towering, unashamedly dense, glossy, multi-tiered chocolate cake so fudgy and moist that it captivated imaginations across generations.
              </p>
              <p>
                <strong>Matilda Bakeluxe</strong> was born from a singular obsession: to bring that exact cinematic fantasy into your hands. Not an airy, dry sponge, but an intensely fudgy chocolate creation bathed in glossy Belgian ganache that melts softly on your tongue.
              </p>
              <p>
                Today, from our artisanal kitchen, every single 200g gift box, 500g tin, and 1kg celebration bundle is prepared by hand in small, fresh daily batches with zero preservatives and immense care.
              </p>
            </div>

            {/* Quote Card */}
            <div className="p-5 rounded-2xl bg-[#261207] border-l-4 border-[#E5BE6E] text-xs sm:text-sm text-[#FFE082] italic">
              "We believe true luxury isn't about exorbitant price tags — it’s about slow baking, honest ingredients, and the euphoric sigh you let out on your very first bite."
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-3xl bg-[#220F06] border border-[#C89D56]/20 hover:border-[#E5BE6E]/50 transition-all space-y-3 group"
            >
              <span className="text-3xl block group-hover:scale-110 transition-transform">
                {p.icon}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#FDF9F3] group-hover:text-[#FFE082] transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-[#EAD8C0]/75 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
