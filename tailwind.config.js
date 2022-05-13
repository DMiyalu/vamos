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
      'gray-light-.95': 'rgba(248, 248, 248, .95)',
      'white': '#fff',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      display: ['Helvetica'],
    },
    extend: {
      spacing: {
        '25%': '25%',
        '30%': '30%',
        '50%': '50%',
        '100%': '100%',
        '100vw': '100vw',
        '55px': '55px',
        '100px': '100px',
        'hero-top': '45px',
        'hero-h': '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://media.istockphoto.com/photos/soccer-training-for-young-mixed-race-boys-on-a-football-pitch-picture-id1319012201?k=20&m=1319012201&s=612x612&w=0&h=P7HeQCEEWZKMEpvh-jOA8corCWZMaY0yVips4oE-zdc=')",
      }
    },
  },
  plugins: [],
}
