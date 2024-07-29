/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url(assets/hero.png)",
        'projects' : "url(assets/Projects.png)",
        'headshot' : "url(assets/Headshot.jpg)",
        'skills' : "url(assets/skills-bg.png)",
        'forest1': "url(assets/FallForest1.png)",
        'forest2': "url(assets/FallForest2.png)"
      }
    },
  },
  plugins: [],
}