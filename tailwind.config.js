/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        CalcVh: "calc(100vh - 16px)",
      },
      colors: {
        primary: {
          100: "hsl(193, 38%, 86%)",
          200: "hsl(150, 100%, 66%)",
        },
        secondary: {
          100: "hsl(217, 19%, 38%)",
          200: "hsl(217, 19%, 24%)",
          300: "hsl(218, 23%, 16%)",
        },
      },
      fontSize: {
        quoteFSize: "28px",
      },
      fontFamily: {
        Manrope: ["Manrope"],
      },
      boxShadow: {
        center: "0px 0px 25px 1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
