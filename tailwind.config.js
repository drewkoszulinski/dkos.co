const colors = require ('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      'sans': ['Urbanist', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular']
    },
    boxShadow: {
      'xl': '0 6px 12px -3px rgba(0, 0, 0, .25)',
      '2xl': '0 12px 25px -6px rgba(0, 0, 0, .5)',
      '3xl': '0 25px 50px -12px rgba(0, 0, 0, 1)'
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
}

