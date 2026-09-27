/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./blog/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: '#C5A059',
        navy: '#0B1221',
        'deep-charcoal': '#070B14',
        'champagne-dark': '#86672C',
      },
      fontFamily: {
        serif: ['"Playfair Display Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
