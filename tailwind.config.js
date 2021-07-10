module.exports = {
  mode: 'jit',
  corePlugins: {
    animation: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'app-bg': "url('../assets/bg.webp')",
      }),
      fontFamily: {
        'montserrat': ['Montserrat'],
        'poppins': ['Poppins'],
      },
      colors: {},
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
