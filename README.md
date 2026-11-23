# 🍫 Matilda Bakeluxe — Artisanal Cake Atelier Website

> *"Home-baked. Luxe-finished. Indulge in every slice of happiness!"*

A classy, ultra-luxurious, and high-performance React website crafted for **Matilda Bakeluxe** (`@matilda.bakeluxe`). Designed with decadent chocolate and royal gold aesthetics, continuous physics-based molten chocolate drip animation, customized portion tiers matching the official menu flyer, and seamless 1-tap WhatsApp and Instagram checkout!

---

## ✨ Features & Highlights

1. **Brand Identity & Exact Menu Tiers (from your Official Flyer)**:
   - **200g Box** — **Rs. 129** (Signature personal portion)
   - **500g Cake Tin** — **Rs. 399** (Our iconic baked-in-tin chocolate cake with dark ganache & curls)
   - **1kg Grand Twin Pack** — **Rs. 699** (Two 500g tins — saves Rs. 99)
   - Official **Matilda Bakeluxe Crest Logo** with royal gold gradients.
   - Interactive **"View Official Menu Card" Lightbox Modal** displaying your original uploaded flyer (`matilda-menu-flyer.jpg`) with zoom controls and 1-click order buttons!

2. **Decadent Animations & Interactive Elements**:
   - **Continuous Falling Droplets Engine**: Physics-based molten chocolate drip hanging below header and stacking droplets into a rich ganache pool above the footer.
   - **Native Web Audio API Chimes**: Sweet, crystalline acoustic chimes on adding items to bag (zero MP3 download lag, muteable at any time).
   - **Organic Chocolate Drip Dividers**: Custom SVG fluid chocolate drips separating page sections.

3. **Interactive Cake Customizer**:
   - Size selection (200g Box, 500g Tin, 1kg Twin Pack)
   - Ganache finish (Signature Molten Gloss, 70% Dark Truffle Velvet, Silk Milk Chocolate)
   - Gourmet toppings (Valrhona curls, 24K Edible Gold Leaf, Roasted Hazelnuts, Sea Salt Flakes)
   - Dietary choice: **100% Pure Veg & Eggless** prominently featured
   - Complimentary custom ribbon & greeting tag message ("Happy Birthday Sarah", etc.)
   - Live price updating

4. **1-Tap Checkout Integrations**:
   - **Order via WhatsApp**: Formats an order summary with item breakdown, custom notes, delivery time slot, and opens WhatsApp ready to send with 1 click!
   - **Order via Instagram DM**: Automatically copies the order summary to clipboard and opens `@matilda.bakeluxe` profile!
   - Direct phone contact and customer notes.

5. **Full Patisserie Menu & Social Proof**:
   - Expanded artisan offerings: Warm Molten Fudge Jars, Sea Salt Caramel Brownie Slabs, Belgian Truffles, Custom Celebration Tier Cakes, and Cupcakes.
   - Live category tabs & search filter.
   - Dedicated Instagram Showcase grid linking to `@matilda.bakeluxe`.
   - Verified customer reviews & FAQ accordion.

---

## 🚀 How to Open and View Immediately

### Option 1: Instant Browser Launch (Zero Setup Required!)
Simply navigate to your folder:
```
c:\Users\smirf\OneDrive\Desktop\matlida bakeluxe\
```
And **double-click `index.html`**! It will open directly in Google Chrome, Microsoft Edge, Brave, or Firefox with all React components, 3D animations, and sound effects working instantly.

### Option 2: Running with Node / Vite (For Development or Cloud Hosting)
When you have Node.js installed:
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🌐 Deploying to the Web (Free on Vercel or Netlify)

1. **Vercel**:
   - Drag and drop this folder onto [vercel.com](https://vercel.com) or connect your GitHub repository.
   - Build Command: `npm run build`
   - Output Directory: `dist`
2. **Netlify**:
   - Drag and drop this folder directly into the Netlify Drop dashboard!

---

## 🎨 Customizing Your Phone & Instagram Links

To update your WhatsApp phone number or Instagram handle:
- Open `src/data/menuData.js` (or the top of `index.html`) and edit:
  ```js
  whatsappNumber: "+918885701118", // Official 10-digit WhatsApp number
  instagramHandle: "@matilda.bakeluxe",
  instagramUrl: "https://www.instagram.com/matilda.bakeluxe?gwpx=azc0dnA4cTQ4eHF5&utm_source=qr",
  ```

---
*Created with love and luxury for Matilda Bakeluxe.*
