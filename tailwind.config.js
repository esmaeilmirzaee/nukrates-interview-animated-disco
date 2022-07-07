const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      letterSpacing: {
        tight: "-.015em"
      },
      colors: {
        gray: colors.zinc
      },
      height: {
        "half-screen": "50vh"
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Icons",
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  plugins: []
};
