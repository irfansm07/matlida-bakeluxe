import React, { useState } from 'react';
import { BRAND } from '../data/menuData';
import { playChime, playSoftClick } from '../utils/audio';

export default function CartDrawer({
  isOpen,
  cartItems = [],
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  const [deliveryDate, setDeliveryDate] = useState('Pre-order (1-2 Days in Advance)');
  const [customerAddress, setCustomerAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [copiedInstagram, setCopiedInstagram] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (item.price * (item.quantity || 1));
  }, 0);

  // Generate formatted order text for WhatsApp & Instagram
  const generateOrderText = () => {
    let text = `🎂 *NEW ORDER - MATILDA BAKELUXE*\n`;
    text += `===================================\n\n`;
    text += `*Order Items:*\n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* x ${item.quantity}\n`;
      text += `   • Price: Rs. ${item.price * item.quantity}\n`;
      if (item.finish) text += `   • Ganache: ${item.finish}\n`;
      if (item.toppings && item.toppings.length > 0) {
        text += `   • Toppings: ${item.toppings.join(', ')}\n`;
      }
      if (item.eggless) text += `   • Diet: 100% Eggless (Pure Veg)\n`;
      if (item.customMessage) text += `   • Ribbon Message: "${item.customMessage}"\n`;
      text += `\n`;
    });

    text += `-----------------------------------\n`;
    text += `*Subtotal:* Rs. ${subtotal}\n`;
    text += `*Delivery Timing:* ${deliveryDate}\n`;
    if (customerAddress.trim()) {
      text += `*Delivery Address:* ${customerAddress.trim()}\n`;
    }
    if (specialInstructions.trim()) {
      text += `*Special Note:* ${specialInstructions.trim()}\n`;
    }
    text += `===================================\n`;
    text += `Sent via Matilda Bakeluxe Web Boutique ✨`;

    return text;
  };

  const handleWhatsAppCheckout = () => {
    playChime();
    const orderText = generateOrderText();
    // Use the brand whatsapp number (digits only) or fallback
    const cleanNumber = BRAND.whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(orderText)}`;
    window.open(url, '_blank');
  };

  const handleInstagramDM = () => {
    playChime();
    const orderText = generateOrderText();
    // Copy order text to clipboard so user can just paste in DM
    navigator.clipboard?.writeText(orderText);
    setCopiedInstagram(true);
    setTimeout(() => setCopiedInstagram(false), 4000);
    // Open Instagram profile
    window.open(BRAND.instagramUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end animate-fadeIn">
      
      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#1B0A04] border-l border-[#C89D56]/30 shadow-2xl flex flex-col h-full animate-slideInRight">
        
        {/* Header */}
        <div className="p-6 border-b border-[#35190B] bg-[#220E05] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛍️</span>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#FDF9F3]">
                Your Sweet Indulgence
              </h3>
              <span className="text-xs text-[#C89D56]">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in bag
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              playSoftClick();
              onClose();
            }}
            className="p-2 rounded-full text-[#EAD8C0]/60 hover:text-[#FFE082] hover:bg-[#35190B] transition-all"
          >
            ✕
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <span className="text-5xl block animate-bounce">🧁</span>
              <h4 className="font-serif text-xl font-bold text-[#FDF9F3]">
                Your Bag is Empty
              </h4>
              <p className="text-xs text-[#EAD8C0]/70 max-w-xs mx-auto">
                Discover our signature Matilda Chocolate Cake in 200g, 500g, or 1kg sizes.
              </p>
              <button
                onClick={() => {
                  playSoftClick();
                  onClose();
                  const target = document.getElementById('signature');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E5BE6E] to-[#C9943B] text-[#1E0B04] text-xs font-bold shadow-md hover:scale-105 transition-all"
              >
                Browse Signature Cakes
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#261207] border border-[#C89D56]/20 space-y-3 relative group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover border border-[#C89D56]/30"
                      />
                    )}
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#FDF9F3]">
                        {item.name}
                      </h4>
                      <span className="font-serif text-sm font-bold text-[#FFE082]">
                        Rs. {item.price * item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => {
                      playSoftClick();
                      onRemoveItem(item.id);
                    }}
                    className="text-[#A38A73] hover:text-red-400 text-xs p-1"
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>

                {/* Customization Details */}
                {(item.finish || (item.toppings && item.toppings.length > 0) || item.customMessage) && (
                  <div className="text-[11px] text-[#A38A73] space-y-1 bg-[#1A0A04]/60 p-2.5 rounded-lg border border-[#3A1B0C]">
                    {item.finish && <div>• Ganache: <span className="text-[#EAD8C0]">{item.finish}</span></div>}
                    {item.toppings && item.toppings.length > 0 && (
                      <div>• Toppings: <span className="text-[#EAD8C0]">{item.toppings.join(', ')}</span></div>
                    )}
                    {item.eggless && <div className="text-emerald-400">• 100% Pure Veg (Eggless)</div>}
                    {item.customMessage && (
                      <div className="text-[#FFE082] italic">• Ribbon: "{item.customMessage}"</div>
                    )}
                  </div>
                )}

                {/* Quantity Controls */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-[#A38A73]">Quantity</span>
                  <div className="flex items-center gap-2 bg-[#1C0A04] rounded-lg p-1 border border-[#3A1B0C]">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#FFE082] hover:bg-[#35190B] text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="font-serif text-xs font-bold text-[#FDF9F3] px-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#FFE082] hover:bg-[#35190B] text-xs font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}

          {/* Delivery & Address Inputs when items present */}
          {cartItems.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-[#35190B]">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#FFE082] block">
                  Preferred Delivery Slot
                </label>
                <select
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#261207] border border-[#C89D56]/30 text-xs text-[#FDF9F3] focus:outline-none focus:border-[#E5BE6E]"
                >
                  <option value="Pre-order (1-2 Days in Advance)">Pre-order (1-2 Days in Advance)</option>
                  <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                  <option value="Tomorrow Evening (4 PM - 8 PM)">Tomorrow Evening (4 PM - 8 PM)</option>
                  <option value="This Weekend (Party / Celebration)">This Weekend Celebration</option>
                  <option value="Self Pickup from Bakery">Self Pickup from Home Bakery</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#FFE082] block">
                  Delivery Address / Landmark (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Apartment, Street, Area..."
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#261207] border border-[#C89D56]/30 text-xs text-[#FDF9F3] placeholder-[#7E6958] focus:outline-none focus:border-[#E5BE6E]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#FFE082] block">
                  Notes for the Baker (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Include 4 candle sticks, leave at gate"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#261207] border border-[#C89D56]/30 text-xs text-[#FDF9F3] placeholder-[#7E6958] focus:outline-none focus:border-[#E5BE6E]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#35190B] bg-[#220E05] space-y-3">
            
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-[#A38A73] tracking-wider">Subtotal</span>
              <span className="font-serif font-extrabold text-2xl text-[#FFE082]">
                Rs. {subtotal}
              </span>
            </div>

            <p className="text-[11px] text-[#A38A73] text-center">
              Payment made directly via UPI / Cash upon order confirmation.
            </p>

            {/* Direct WhatsApp Order CTA */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span className="text-lg">💬</span>
              <span>Order via WhatsApp (1-Tap Send)</span>
            </button>

            {/* Direct Instagram Order CTA */}
            <button
              onClick={handleInstagramDM}
              className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <span>📸</span>
              <span>{copiedInstagram ? '✓ Order Copied! Opening Instagram...' : 'Order via Instagram DM (@matilda.bakeluxe)'}</span>
            </button>

            {/* Clear Cart link */}
            <div className="text-center pt-1">
              <button
                onClick={() => {
                  playSoftClick();
                  onClearCart();
                }}
                className="text-[11px] text-[#A38A73] hover:text-[#FFE082] underline"
              >
                Clear Entire Bag
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
