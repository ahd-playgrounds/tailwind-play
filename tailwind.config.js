const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{tsx,jsx}", "./index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.slate["50"],
      black: colors.slate["800"],
      grey: colors.slate,
      red: colors.rose,
      orange: colors.amber,
      blue: colors.teal,
    },
  },
  plugins: [],
};
