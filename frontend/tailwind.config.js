/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,tsx,css}', './components/*.tsx'],
  theme: {
    colors: {
      'redText': '#FF7A00',
      'purpleText': '#181E4B',
      'lightPurpleText': '#5E6282',
      'yellowColor': '#F1A501',
      'textWhite': '#fff',
      'buttonColor': '#FF7A00',
    },
    extend: {},
  },
  plugins: [],
}
