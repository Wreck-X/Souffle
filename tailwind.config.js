/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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