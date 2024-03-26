/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 5s ease infinite both',
      },
      keyframes: {
        'gradient': {
          '0%': { backgroundPosition: '0' },
          '50%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '0' }
        }
      },screens: {
        xl: {'max': '1199px'},
        lg: {'max': '1029px'},
        md: {'max': '829px'},
        sm: {'max': '575px'},
      },
      fontFamily: {
        'honk': ['Honk', 'system-ui'],
        'bungee-spice': ['Bungee Spice', 'sans-serif'],
        'montecarlo': ['MonteCarlo', 'cursive'],
        'jura': ['Jura', 'sans-serif'],
      },
    }
    },
  plugins: [],
}