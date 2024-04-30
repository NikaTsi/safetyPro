/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      "Inter": ["Inter", "sans-serif"],
    },
    screens: {
      '3xl': '1366px',
    },
    extend: {
      backgroundImage: {
        'background1-desktop': 'url(./assets/main/background1-desktop.svg)',
        'background1-mobile': 'url(./assets/main/background1-mobile.svg)',
        'background2-mobile': 'url(./assets/main/background2-mobile.svg)',
        'background2-desktop': 'url(./assets/main/background2-desktop.svg)',
        'main-background': 'url(./assets/main/main-background.svg)',
      },
      backgroundColor: {
        'background-tint': "rgba(50, 50, 50, 0.96);",

      },
      boxShadow: {
        'button': "0 1px 2px 0 rgba(16, 24, 40, 0.05);"
      }
    },
  },
  plugins: [],
}