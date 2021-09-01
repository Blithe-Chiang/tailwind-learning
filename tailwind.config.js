module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'zhihu-blue': '#0066ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
