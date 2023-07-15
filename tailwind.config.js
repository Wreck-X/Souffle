/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/home/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Landing-image' : "url('/src/assets/pxfuel.jpg')"
      }
    },
  },
  plugins: [],
}