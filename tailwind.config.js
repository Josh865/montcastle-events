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
        navy: '#577794',
        'sage-green': '#abb39a',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans],
        display: ['Playfair Display'],
      },
    },
  },
  variants: {
    margin: ['responsive', 'last', 'first'],
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/custom-forms')],
};
