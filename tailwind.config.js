/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gold': '#CFB996', 
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        gambarino: ["Gambarino", "sans-serif"],
        stardom: ["Stardom", "sans-serif"],
    },
  },
},
  plugins: [],
};

