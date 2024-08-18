/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Adjust the paths to include all HTML files
    "./tailwind.config.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        'dark-black': '#212121',
      },
    },
    screens: {
      'sm': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    darkMode: 'class', // Enable dark mode with class strategy
  },
  plugins: [], // Add your plugins here if needed
};
