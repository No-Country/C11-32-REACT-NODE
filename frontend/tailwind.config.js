/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,tsx,css}", "./components/*.tsx"],
  theme: {
    extend: {
      colors: {
        redText: "#FF7A00",
        purpleText: "#181E4B",
        lightPurpleText: "#5E6282",
        yellowColor: "#F1A501",
        textWhite: "#fff",
        buttonColor: "#FF7A00",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1360px",
      },
    },
  },
  plugins: [],
};
