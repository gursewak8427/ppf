/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#575799",
        primaryDark: "#090933",
        primaryLight: "#9D9DCC",
        primaryLightest: "#D3D3FF",
        secondary: "#A44C70",
        darkText: "#4A4A75",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #D3D3FF 0%, #7777A2 49%, #4A4A75 62%, #090933 100%)",
        "navbar-gradient": "linear-gradient(to right, #090933, #9D9DCC)",
      },
    },
  },
  plugins: [],
};
