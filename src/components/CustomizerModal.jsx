import React, { useState, useEffect } from 'react';
import { SIGNATURE_CAKE } from '../data/menuData';
import { playChime, playSoftClick } from '../utils/audio';

export default function CustomizerModal({
  isOpen,
  initialSize = null,
  onClose,
  onAddToCart
}) {
  if (!isOpen) return null;

  const [selectedSize, setSelectedSize] = useState(
    initialSize || SIGNATURE_CAKE.sizes[1] // default 500g tin
  );
  const [selectedFinish, setSelectedFinish] = useState(SIGNATURE_CAKE.finishes[0].id);
  const [selectedToppings, setSelectedToppings] = useState(['curls']);
  const [isEggless, setIsEggless] = useState(true);
  const [customMessage, setCustomMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (initialSize) {
      setSelectedSize(initialSize);
    }
  }, [initialSize]);

  // Calculate live total
  const basePrice = selectedSize.price;
  const toppingsPrice = selectedToppings.reduce((total, topId) => {
    const item = SIGNATURE_CAKE.toppings.find(t => t.id === topId);
    return total + (item ? item.price : 0);
  }, 0);
  const unitPrice = basePrice + toppingsPrice;
  const totalPrice = unitPrice * quantity;

  const toggleTopping = (topId) => {
    playSoftClick();
    if (topId === 'curls') return; // Curls are standard signature
    if (selectedToppings.includes(topId)) {
      setSelectedToppings(selectedToppings.filter(id => id !== topId));
    } else {
      setSelectedToppings([...selectedToppings, topId]);
    }
  };

  const handleAdd = () => {
    playChime();
    const finishObj = SIGNATURE_CAKE.finishes.find(f => f.id === selectedFinish);
    const toppingsList = selectedToppings.map(id => {
      const t = SIGNATURE_CAKE.toppings.find(item => item.id === id);
      return t ? t.name : id;
    });

    onAddToCart({
      id: `${SIGNATURE_CAKE.id}-${selectedSize.id}-${Date.now()}`,
      name: `${SIGNATURE_CAKE.name} (${selectedSize.name})`,
      baseName: SIGNATURE_CAKE.name,
      size: selectedSize.name,
      price: unitPrice,
      quantity: quantity,
      finish: finishObj ? finishObj.name : "Signature Molten Gloss",
      toppings: toppingsList,
      eggless: isEggless,
      customMessage: customMessage.trim() || null,
      packaging: selectedSize.packaging,
      image: SIGNATURE_CAKE.image
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#2A1308] via-[#1F0E06] to-[#140803] rounded-3xl border-2 border-[#C89D56]/50 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="relative p-6 sm:p-7 border-b border-[#3D1E0E] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E5BE6E] mb-1">
              <span>✨</span> Custom Cake Atelier
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FDF9F3]">
              Personalize Your Matilda Cake
            </h3>
            <p className="text-xs text-[#EAD8C0]/70 mt-1">
              Choose your packaging size, artisan ganache finish, and luxury toppings.
            </p>
          </div>

          <button
            onClick={() => {
              playSoftClick();
              onClose();
            }}
            className="p-2 rounded-full text-[#EAD8C0]/60 hover:text-[#FFE082] hover:bg-[#3D1E0E] transition-all"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto text-sm text-[#EAD8C0]">
          
          {/* Step 1: Select Packaging Size */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#FFE082]">
              1. Select Portion & Packaging
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SIGNATURE_CAKE.sizes.map((size) => {
                const active = selectedSize.id === size.id;
                return (
                  <div
                    key={size.id}
                    onClick={() => {
                      playSoftClick();
                      setSelectedSize(size);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      active
                        ? 'bg-[#3D1E0E] border-[#E5BE6E] shadow-lg'
                        : 'bg-[#220E05] border-[#C89D56]/30 hover:border-[#C89D56]/60'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-serif font-bold text-sm text-[#FDF9F3]">
                        {size.name.split(' ')[0]} {size.name.split(' ')[1]}
                      </span>
                      <span className="font-serif font-bold text-[#FFE082]">
                        Rs.{size.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#A38A73] block mt-1">
                      {size.servings}
                    </span>
                    <span className="text-[10px] text-[#E5BE6E] block mt-1 font-light truncate">
                      {size.packaging}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Ganache Finish */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#FFE082]">
              2. Choose Ganache Glaze Style
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SIGNATURE_CAKE.finishes.map((f) => {
                const active = selectedFinish === f.id;
                return (
                  <div
                    key={f.id}
                    onClick={() => {
                      playSoftClick();
                      setSelectedFinish(f.id);
                    }}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      active
                        ? 'bg-[#3D1E0E] border-[#E5BE6E]'
                        : 'bg-[#220E05] border-[#C89D56]/30 hover:border-[#C89D56]/50'
                    }`}
                  >
                    <div className="font-medium text-xs text-[#FDF9F3]">{f.name}</div>
                    <div className="text-[10px] text-[#A38A73] mt-0.5">{f.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Artisanal Toppings */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#FFE082]">
              3. Gourmet Toppings & Finishes
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SIGNATURE_CAKE.toppings.map((top) => {
                const active = selectedToppings.includes(top.id);
                return (
                  <div
                    key={top.id}
                    onClick={() => toggleTopping(top.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      active
                        ? 'bg-[#381B0D] border-[#E5BE6E]'
                        : 'bg-[#220E05] border-[#C89D56]/20'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={active}
                        readOnly
                        className="accent-[#E5BE6E] rounded"
                      />
                      <span className="text-xs text-[#FDF9F3] font-medium">{top.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#FFE082]">
                      {top.price === 0 ? 'Included' : `+Rs.${top.price}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Eggless Preference & Ribbon Message */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Dietary toggle */}
            <div className="p-3.5 rounded-xl bg-[#220E05] border border-[#C89D56]/30 space-y-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#FFE082]">
                Dietary Preference
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEggless(true)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    isEggless
                      ? 'bg-emerald-900/60 border border-emerald-500/50 text-emerald-300'
                      : 'bg-[#180A04] text-[#A38A73]'
                  }`}
                >
                  🌱 100% Eggless
                </button>
                <button
                  type="button"
                  onClick={() => setIsEggless(false)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    !isEggless
                      ? 'bg-[#3D1E0E] border border-[#E5BE6E] text-[#FFE082]'
                      : 'bg-[#180A04] text-[#A38A73]'
                  }`}
                >
                  🥚 Regular
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="p-3.5 rounded-xl bg-[#220E05] border border-[#C89D56]/30 space-y-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#FFE082]">
                Quantity
              </label>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-[#35190B] text-[#FFE082] font-bold text-base hover:bg-[#43200F]"
                >
                  -
                </button>
                <span className="font-serif font-bold text-lg text-[#FDF9F3]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-[#35190B] text-[#FFE082] font-bold text-base hover:bg-[#43200F]"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Complimentary Gift Ribbon Message */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#FFE082]">
                Complimentary Gift Ribbon & Tag (Optional)
              </label>
              <span className="text-[11px] text-[#A38A73]">Free</span>
            </div>
            <input
              type="text"
              placeholder="e.g. 'Happy Birthday Alex!' or 'With love from Mom'"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#220E05] border border-[#C89D56]/30 text-xs text-[#FDF9F3] placeholder-[#7E6958] focus:outline-none focus:border-[#E5BE6E]"
            />
          </div>

        </div>

        {/* Footer / Total & Add CTA */}
        <div className="p-6 border-t border-[#3D1E0E] bg-[#1A0A04] flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase text-[#A38A73] block tracking-wider">
              Total Price ({quantity} {quantity === 1 ? 'item' : 'items'})
            </span>
            <span className="font-serif font-extrabold text-2xl sm:text-3xl text-[#FFE082]">
              Rs.{totalPrice}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playSoftClick();
                onClose();
              }}
              className="px-4 py-3 rounded-full text-xs font-semibold text-[#EAD8C0]/70 hover:text-[#FFE082]"
            >
              Cancel
            </button>

            <button
              onClick={handleAdd}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#E5BE6E] via-[#D4AF37] to-[#A3741E] text-[#1E0B04] font-bold text-sm shadow-[0_4px_20px_rgba(201,148,59,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Add to Bag</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
