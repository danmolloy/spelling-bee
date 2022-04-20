const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [ /* '"Press Start 2P"', */ 'Rubik', 'Poppins', 'Nunito', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [
  ]
}
