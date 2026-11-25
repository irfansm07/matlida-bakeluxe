import React, { useState } from 'react';
import { MENU_ITEMS, SIGNATURE_CAKE } from '../data/menuData';
import { playChime, playSoftClick } from '../utils/audio';

export default function MenuSection({ onAddToCart, onCustomizeCake }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cakes', 'Jars & Brownies', 'Confections'];

  // Combine signature cake with other menu items for filtering
  const allItems = [
    {
      id: SIGNATURE_CAKE.id,
      name: SIGNATURE_CAKE.name,
      category: 'Cakes',
      price: 129,
      priceLabel: 'From Rs. 129 🛵',
      rating: SIGNATURE_CAKE.rating,
      reviews: SIGNATURE_CAKE.reviewCount,
      image: SIGNATURE_CAKE.image,
      description: SIGNATURE_CAKE.description,
      tags: ['Signature', 'Bestseller', 'Eggless'],
      isSignature: true
    },
    ...MENU_ITEMS
  ];

  const filteredItems = allItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleItemAdd = (item) => {
    playChime();
    if (item.isSignature) {
      onCustomizeCake(SIGNATURE_CAKE.sizes[1]); // open customizer with 500g tin
    } else {
      onAddToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        size: item.sizes ? item.sizes[0].name : 'Standard',
        quantity: 1,
        image: item.image,
        eggless: true
      });
    }
  };

  return (
    <section id="menu" className="relative py-20 lg:py-28 bg-[#170904] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#C89D56]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#874D28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A1207] border border-[#C89D56]/30 text-[#FFE082] text-xs font-semibold tracking-wider uppercase">
            <span>🧁</span> The Patisserie Collection
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FDF9F3] tracking-tight">
            Artisanal Menu & Delicacies
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#E5BE6E]">
            "Baked fresh daily to elevate your celebrations."
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#230F07]/90 p-1.5 rounded-full border border-[#C89D56]/30">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSoftClick();
                  setActiveCategory(cat);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#E5BE6E] to-[#C9943B] text-[#1E0B04] font-bold shadow-md'
                    : 'text-[#EAD8C0]/70 hover:text-[#FFE082] hover:bg-[#35190B]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search chocolate, jars, truffles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-9 rounded-full bg-[#230F07] border border-[#C89D56]/30 text-xs sm:text-sm text-[#FDF9F3] placeholder-[#8F7866] focus:outline-none focus:border-[#E5BE6E] transition-all"
            />
            <span className="absolute left-3 top-2.5 text-[#8F7866] text-xs">🔍</span>
          </div>

        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-b from-[#281309] to-[#1C0A04] rounded-3xl overflow-hidden border border-[#C89D56]/30 hover:border-[#E5BE6E]/70 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#110502]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A04] via-transparent to-transparent opacity-80" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1A0A04]/85 backdrop-blur-md border border-[#C89D56]/40 text-[#FFE082] text-xs flex items-center gap-1 font-semibold">
                    <span>★ {item.rating}</span>
                    <span className="text-[10px] text-[#A38A73]">({item.reviews || item.reviewCount})</span>
                  </div>

                  {/* Price Tag Pill */}
                  <div className="absolute bottom-3 left-4 px-3.5 py-1 rounded-full bg-[#180803]/90 backdrop-blur-md border border-[#E5BE6E]/50 text-[#FFE082] font-serif font-bold text-sm shadow-md">
                    {item.priceLabel || `Rs. ${item.price} 🛵`}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-[#381B0E]/80 border border-[#C89D56]/20 text-[#E5BE6E] text-[10px] uppercase tracking-wider font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#FDF9F3] group-hover:text-[#FFE082] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EAD8C0]/75 line-clamp-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 border-t border-[#35180C] mt-4 flex items-center justify-between gap-3">
                <span className="text-xs text-[#A38A73]">
                  {item.category}
                </span>

                <button
                  onClick={() => handleItemAdd(item)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C9943B] to-[#AA7A1E] text-[#1E0B04] text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>{item.isSignature ? 'Select Size' : 'Add to Bag'}</span>
                  <span>+</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <span className="text-4xl">🧁</span>
            <p className="text-[#EAD8C0] font-serif text-lg">
              No sweet treats found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-full bg-[#35190B] border border-[#C89D56]/40 text-[#FFE082] text-xs"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
