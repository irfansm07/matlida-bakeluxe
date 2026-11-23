/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolate: {
          950: '#100502',
          900: '#180B05',
          800: '#251107',
          700: '#35190B',
          600: '#4A2511',
          500: '#673619',
        },
        gold: {
          100: '#FFF5DC',
          200: '#FFE6A7',
          300: '#FFE082',
          400: '#E5BE6E',
          500: '#D4AF37',
          600: '#C9943B',
          700: '#AA7A1E',
          800: '#87571B',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Alex Brush', 'Great Vibes', 'cursive'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
