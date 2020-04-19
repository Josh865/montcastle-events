const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        navy: '#587795',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        display: ['Sacramento'],
      },
    },
  },
  variants: {
    margin: ['responsive', 'last', 'first'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
