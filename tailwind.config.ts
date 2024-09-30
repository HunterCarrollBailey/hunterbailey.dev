import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rose' : "url(../assets/EnchantedRoseLogo.svg)",
        'bookFront': "url(../assets/BookCoverFront.jpg)",
        'bookBack': "url(../assets/BookCoverBack.jpg)"
      },
      fontFamily: {
        'text': ['Tenor', 'sans-serif'],
        'heading': ['SedanSC', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f1f5f9',
          }
        }
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
};
export default config;
