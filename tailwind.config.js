module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        // => @media print { ... }
      },
      spacing: {
        "25mm": "25mm",
        "5mm": "5mm",
        a4: "15mm",
        "a4-w": "21cm",
        "a4-h": "29.65cm",
      },
      colors: {
        primary: "#2C5282", //blue-800
        primaryDark: "#2A4365", //blue-900
        primaryLight: "#2B6CB0", //blue-700
        secondary: "#718096", //gray-600
        secondaryLight: "#E2E8F0", //gray-300
      },
    },
  },
  variants: {},
  plugins: [],
};
