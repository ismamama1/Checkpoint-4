/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#24262E",
      lightblack: "#5A5B72",
      beige: "#EDE0D4",
      grey: "#9A96B0",
      green: "#84F877",
      lightgreen: "#A7FA9E",
    },
    fontFamily: {
      heading: ["Libre Baskerville", "serif"],
      body: ["Hind", "sans-serif"],
    },
  },
  plugins: [],
};
