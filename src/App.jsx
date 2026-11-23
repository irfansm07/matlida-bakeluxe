import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureMatilda from './components/SignatureMatilda';
import MenuSection from './components/MenuSection';
import StorySection from './components/StorySection';
import ReviewsSection from './components/ReviewsSection';
import InstagramShowcase from './components/InstagramShowcase';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CustomizerModal from './components/CustomizerModal';
import CartDrawer from './components/CartDrawer';
import OfficialFlyerModal from './components/OfficialFlyerModal';
import CanvasParticles from './components/CanvasParticles';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizerSize, setCustomizerSize] = useState(null);
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      // Check if duplicate item exists
      const existingIndex = prevItems.findIndex(
        (i) => i.id === newItem.id &&
               i.finish === newItem.finish &&
               i.customMessage === newItem.customMessage
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += newItem.quantity || 1;
        return updated;
      } else {
        return [...prevItems, newItem];
      }
    });

    showToast(`✓ Added ${newItem.name} to your bag!`);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenCustomizer = (size) => {
    setCustomizerSize(size || null);
    setIsCustomizerOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-[#150703] text-[#FDF9F3] selection:bg-[#E5BE6E] selection:text-[#1E0B04] relative">
      
      {/* Floating Canvas Particles */}
      <CanvasParticles />

      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFlyer={() => setIsFlyerOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onCustomizeCake={handleOpenCustomizer}
          onOpenFlyer={() => setIsFlyerOpen(true)}
        />

        {/* Signature Matilda Cake (200g, 500g, 1kg tiers) */}
        <SignatureMatilda
          onAddToCart={handleAddToCart}
          onCustomizeCake={handleOpenCustomizer}
        />

        {/* Full Patisserie Menu */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onCustomizeCake={handleOpenCustomizer}
        />

        {/* Brand Story / Origin */}
        <StorySection />

        {/* Customer Reviews */}
        <ReviewsSection />

        {/* Instagram Showcase (@matildabakeluxe) */}
        <InstagramShowcase />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFlyer={() => setIsFlyerOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        initialSize={customizerSize}
        onClose={() => setIsCustomizerOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <OfficialFlyerModal
        isOpen={isFlyerOpen}
        onClose={() => setIsFlyerOpen(false)}
        onAddToCart={handleAddToCart}
        onCustomizeCake={handleOpenCustomizer}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 right-6 z-50 animate-bounce">
          <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2B1408] to-[#1E0B04] border-2 border-[#E5BE6E] text-[#FFE082] text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2.5">
            <span>✨</span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

    </div>
  );
}
