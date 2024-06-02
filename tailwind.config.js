/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
        "Noto": ["Noto Sans Georgian", "sans-serif"],
      },
      backdropBlur: {
        '24': '24px',
      },
      colors: {
        'white-15': 'rgba(255, 255, 255, 0.15)',
      },
      screens: {
        "sm": "530px",
        "tb": "600px",
        "md": "768px",
        "reg": "840px",
        "lg": "1024px",
        "xl": "1160px",
        "2xl": "1240px",
        "3xl": '1440px',
        "4xl": '1496px',
      },
      backgroundImage: {
        'background1': 'url(./assets/main/background1.png)',
        'background2': 'url(./assets/main/background2.png)',
        'main-background': 'url(./assets/main/main-background.svg)',
        'statistics': 'url(./assets/main/statistics.png)',
        'numeric-background': 'url(./assets/contact/numeric-background.png)',
      },
      backgroundColor: {
        'background-tint': "rgba(50, 50, 50, 0.96)",
      },
      animation: {
        'open': 'open 0.2s ease-in-out forwards',
        '-webkit-animation-open': 'open 0.2s ease-in-out forwards',
        'close': 'close 0.2s ease-in-out forwards',
        '-webkit-animation-close': 'close 0.2s ease-in-out forwards',
        'headerAnimationOpen': 'headerAnimationOpen 0.3s ease-in-out forwards',
        '-webkit-animation-headerAnimationOpen': 'headerAnimationOpen 0.3s ease-in-out forwards',
        'headerAnimationClose': 'headerAnimationClose 0.3s ease-in-out forwards',
        '-webkit-animation-headerAnimationClose': 'headerAnimationClose 0.3s ease-in-out forwards',
      },
      keyframes: {
        open: {
          from: {
            '-webkit-transform': 'translateY(-40px)',
            'transform': 'translateY(-40px)',
            'display': 'none',
            'opacity': '0',
          },
          to: {
            '-webkit-transform': 'translateY(0)',
            'transform': 'translateY(0)',
            'display': 'flex',
            'opacity': '1',
          },
        },
        close: {
          from: {
            '-webkit-transform': 'translateY(0)',
            'transform': 'translateY(0)',
            'display': 'flex',
            'opacity': '1',
          },
          to: {
            '-webkit-transform': 'translateY(-40px)',
            'transform': 'translateY(-40px)',
            'display': 'none',
            'opacity': '0',
          },
        },
        headerAnimationOpen: {
          from: {
            '-webkit-transform': 'translateY(-100%)',
            'transform': 'translateY(-100%)',
            'display': 'none',
            'opacity': '0',
          },
          to: {
            '-webkit-transform': 'translateY(0)',
            'transform': 'translateY(0)',
            'display': 'flex',
            'opacity': '1',
          },
        },
        headerAnimationClose: {
          from: {
            '-webkit-transform': 'translateY(0)',
            'transform': 'translateY(0)',
            'display': 'flex',
            'opacity': '1',
          },
          to: {
            '-webkit-transform': 'translateY(-100%)',
            'transform': 'translateY(-100%)',
            'display': 'none',
            'opacity': '0',
          },
        },
      },
      boxShadow: {
        'button': "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
        'line': "0px 4px 4px 1px rgba(88, 89, 91, 0.35)",
      }
    },
  },
};
