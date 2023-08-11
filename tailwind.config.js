/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : 'white',
        dark : '#fb923c',
        text:'#64748b',
      },
      screens: {
        '2xl':'1520px',
      },
    },
  },
  plugins: [],
}
