/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'josefin-sans': ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
      'hero-img': "url('/src/assets/29475224237_ca49741397_k.jpeg')",
      }
    },
  },
  plugins: [],
}

