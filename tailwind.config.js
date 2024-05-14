/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
      },
      screens: {
        "sm": "530px",
        "tb": "600px",
        "md": "768px",
        "reg": "840px",
        "lg": "1024px",
        "2xl": "1240px",
        "3xl": '1440px',
        "4xl": '1496px',
      },
      backgroundImage: {
        'background1-desktop': 'url(./assets/main/background1-desktop.svg)',
        'background1-mobile': 'url(./assets/main/background1-mobile.svg)',
        'background2-mobile': 'url(./assets/main/background2-mobile.svg)',
        'background2-desktop': 'url(./assets/main/background2-desktop.svg)',
        'main-background': 'url(./assets/main/main-background.svg)',
        'numeric-background': 'url(./assets/contact/numeric-background.svg)',
      },
      backgroundColor: {
        'background-tint': "rgba(50, 50, 50, 0.96)",
      },
      animation: {
        'popDown': 'popDown 0.2s ease-in-out',
        'headerAnimationOpen': 'headerAnimationOpen 0.3s ease-in-out',
      },
      keyframes: {
        popDown: {
          from: {
            transform: 'translateY(-20px)',
            display: 'none',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0)',
            display: 'flex',
            opacity: 1,
          },
        },
        headerAnimationOpen: {
          from: {
            transform: 'translateY(-100%)',
            display: 'none',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0)',
            display: 'flex',
            opacity: 1,
          },
        },
        headerAnimationClose: {
          from: {
            transform: 'translateY(0)',
            display: 'flex',
            opacity: 1,
          },
          to: {
            transform: 'translateY(-100%)',
            display: 'none',
            opacity: 0,
          },
        },
      },
      boxShadow: {
        'button': "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
      }
    },
  },
  plugins: [],
};
