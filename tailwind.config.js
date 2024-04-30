/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biruPrimary: "#0A3B82",
        merahPrimary: "#8C1F29",
        merahSecondary: "#F23041",
        biruSecondary: "#5BACFF",
        kuningPrimary: "#FFA800",
        hijauPrimary: "#37B02D",
        blackPrimary: "#1D1D1B",
        blackSecondary: "#343432",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
