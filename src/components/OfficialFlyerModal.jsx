import React, { useState } from 'react';
import { SIGNATURE_CAKE } from '../data/menuData';
import { playChime, playSoftClick } from '../utils/audio';

export default function OfficialFlyerModal({
  isOpen,
  onClose,
  onAddToCart,
  onCustomizeCake
}) {
  if (!isOpen) return null;

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleQuickAdd = (sizeIndex) => {
    playChime();
    const size = SIGNATURE_CAKE.sizes[sizeIndex];
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
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#1D0C05] border-2 border-[#C89D56]/50 rounded-3xl shadow-2xl overflow-hidden my-4 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-[#35190B] bg-[#240F06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">📜</span>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FDF9F3]">
                Official Matilda Bakeluxe Menu
              </h3>
              <span className="text-[11px] text-[#C89D56]">
                Original Artisanal Menu Card
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#160904] px-2 py-1 rounded-full border border-[#3A1B0C]">
              <button
                onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.2))}
                className="w-7 h-7 rounded-full text-[#FFE082] hover:bg-[#2A1308] text-xs font-bold"
                title="Zoom Out"
              >
                -
              </button>
              <span className="text-[11px] text-[#EAD8C0] px-1 font-mono">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel(Math.min(1.8, zoomLevel + 0.2))}
                className="w-7 h-7 rounded-full text-[#FFE082] hover:bg-[#2A1308] text-xs font-bold"
                title="Zoom In"
              >
                +
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="text-[10px] text-[#A38A73] hover:text-[#FFE082] px-2"
              >
                Reset
              </button>
            </div>

            <button
              onClick={() => {
                playSoftClick();
                onClose();
              }}
              className="p-2 rounded-full text-[#EAD8C0]/70 hover:text-[#FFE082] hover:bg-[#35190B] transition-all"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Image Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#140702]">
          <div
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top center',
              transition: 'transform 0.2s ease-out'
            }}
            className="rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.9)] border border-[#C89D56]/40 max-w-lg"
          >
            <img
              src="./assets/matilda-menu-flyer.jpg"
              alt="Official Matilda Bakeluxe Menu Flyer"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* Bottom Quick-Order Toolbar */}
        <div className="p-4 sm:p-5 border-t border-[#35190B] bg-[#240F06]">
          <div className="text-center text-xs text-[#FFE082] font-serif mb-3">
            Quick Add to Bag from Official Menu:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              onClick={() => handleQuickAdd(0)}
              className="py-2.5 px-3 rounded-xl bg-[#2D1409] hover:bg-[#3E1D0E] border border-[#C89D56]/40 text-[#FFE082] text-xs font-semibold flex items-center justify-between transition-all"
            >
              <span>200g Box</span>
              <span className="font-serif font-bold text-sm">Rs. 129 +</span>
            </button>

            <button
              onClick={() => handleQuickAdd(1)}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C9943B] to-[#AA7A1E] text-[#1E0B04] text-xs font-bold flex items-center justify-between shadow-md hover:scale-102 transition-all"
            >
              <span>★ 500g Cake Tin</span>
              <span className="font-serif font-bold text-sm">Rs. 399 +</span>
            </button>

            <button
              onClick={() => handleQuickAdd(2)}
              className="py-2.5 px-3 rounded-xl bg-[#2D1409] hover:bg-[#3E1D0E] border border-[#C89D56]/40 text-[#FFE082] text-xs font-semibold flex items-center justify-between transition-all"
            >
              <span>1kg Twin Tins</span>
              <span className="font-serif font-bold text-sm">Rs. 699 +</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
