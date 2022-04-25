module.exports = {
  content: [
    '*.html',
    './js/*.js',
  ],
  darkMode: "class",
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max-md': {'max': '767px'},
      'max-sm': {'max': '639px'},
    },
    extend: {
      backgroundImage: {
        'gridsm': "url('../images/gridsm.svg')",
        'gridDarksm': "url('../images/gridDarksm.svg')",
        'grid': "url('../images/grid.svg')",
        'gridDark': "url('../images/gridDark.svg')",
      },
      fontFamily: {
        'sriracha': 'Sriracha'
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar"),
  ],
}