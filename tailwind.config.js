const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        coconut: '#fcefe7',
        peach: '#fdd2b3',
        'pinor-noir': '#dfaeb2',
        // 'pinor-noir': '#806769',
        blonde: '#ffed9e',
        'icy-blue': '#cfe7f9',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        display: ['Dancing Script'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
