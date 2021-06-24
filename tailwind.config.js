module.exports = {
  mode: 'jit',
  corePlugins: {
    animation: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'poppins': ['Poppins'],
        'open-sans': ['"Open Sans"'],
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      margin: ['first', 'last'],
    },
  },
  plugins: [],
}
