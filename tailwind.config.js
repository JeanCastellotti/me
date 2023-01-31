import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  theme: {
    fontFamily: {
      swanky: 'Swanky and Moo Moo',
    },
    extend: {
      fontFamily: {
        sans: ['Patrick Hand', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
