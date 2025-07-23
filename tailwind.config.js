/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'limca-green': '#2ECC71',
        'limca-yellow': '#F1C40F',
        'limca-dark-green': '#27AE60',
        'limca-light-gray': '#F8F9FA',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-citrus': 'spin-citrus 2s linear infinite',
        'lemon-splash': 'lemon-splash 2s ease-out infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'count-up': 'count-up 1s ease-out',
      },
      backgroundImage: {
        'citrus-gradient': 'linear-gradient(135deg, #2ECC71, #F1C40F)',
        'hero-gradient': 'linear-gradient(135deg, rgba(46, 204, 113, 0.9), rgba(241, 196, 15, 0.8))',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};