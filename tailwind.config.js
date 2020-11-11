module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        // => @media print { ... }
      },
      spacing: {
        '25mm': "25mm",
        '5mm': "5mm"

      },
    },
  },
  variants: {},
  plugins: [],
};
