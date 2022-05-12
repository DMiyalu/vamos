const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'views/**/*.ejs'
  ],
  theme: {
    colors: {
      'blue': '#014478',
      'blue-light': '#4278A1',
      'blue-dark': '01365E',
      'yellow': '#cbcb4c',
      'gray-dark': '#334155',
      'gray': '#a8a8a8',
      'gray-light': '#f8f8f8',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      display: ['Helvetica'],
    },
    extend: {},
  },
  plugins: [],
}
