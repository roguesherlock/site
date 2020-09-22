// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge unused css
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.tsx'
  ],
  important: true,
  theme: {
    colors: {
      // new every project
      // but there's always a
      // place for hot pink
      "hot-pink": "#fd2d78",
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "-10": "-10deg",
      "-9": "-9deg",
      "-8": "-8deg",
      "-7": "-7deg",
      "-6": "-6deg",
      "-5": "-5deg",
      "-4": "-4deg",
      "-3": "-3deg",
      "-2": "-2deg",
      "-1": "-1deg",
      0: "0",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      4: "4deg",
      5: "5deg",
      6: "6deg",
      7: "7deg",
      8: "8deg",
      9: "9deg",
      10: "10deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      22: "5.5rem",
      24: "6rem",
      26: "6.5rem",
      28: "7rem",
      30: "7.5rem",
      32: "8rem",
      34: "8.5rem",
      36: "9rem",
      38: "9.5rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      68: "17rem",
      72: "18rem",
      76: "19rem",
      80: "20rem",
      88: "22rem",
      96: "24rem",
      104: "26rem",
      110: "28rem",
      118: "30rem",
      126: "32rem",
      132: "34rem",
      140: "36rem",
    },
  },
  plugins: [function ({ addBase }) {
    addBase([
      {
        '@font-face': {
          fontFamily: 'Inter var',
          fontWeight: '100 900',
          fontStyle: 'normal',
          fontNamedInstance: 'Regular',
          fontDisplay: 'swap',
          src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
        },
      },
      {
        '@font-face': {
          fontFamily: 'Inter var',
          fontWeight: '100 900',
          fontStyle: 'italic',
          fontNamedInstance: 'Italic',
          fontDisplay: 'swap',
          src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
        },
      },
    ])
  },]
};
