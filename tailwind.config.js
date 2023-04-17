/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        open: "Open Sans",
        poppin: "Poppins",
        bree: "Bree Serif",
      },
      colors: {
        body: "#0A192F",
        hue: "#0A1956",
        main: "#dad7cd",
        secondary: "#8d99ae",
        accent: "#00FF7F",
      },
      boxShadow: {
        white: "0px 15px 19px 0px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
