const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-primary': colors.blueGray[50],
        'bg-d-primary': colors.blueGray[800],
        'bg-secondary': colors.blueGray[50],
        'bg-d-secondary': colors.blueGray[600],
        'text-primary': colors.gray[900],
        'text-d-primary': colors.coolGray[50]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
