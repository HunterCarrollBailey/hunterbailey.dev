/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rose' : "url(assets/EnchantedRoseLogo.svg)",
      }
    },
    fontFamily: {
      'display': ['Tenor', 'sans-serif'],
      'body': ['SedanSC', 'sans-serif']
    },
  },
  plugins: [],
}