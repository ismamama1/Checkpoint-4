/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#24262E",
      beige: "#EDE0D4",
      grey: "#9A96B0",
      green: "#84F877",
    },
    fontFamily: {
      heading: ["Libre Baskerville", "serif"],
      body: ["Hind", "sans-serif"],
    },
  },
  plugins: [],
};
