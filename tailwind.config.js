/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#090B11",
          200: "#0000",
        },
        blue: {
          100: "#2C9BF6", //button
          200:"#16171D" //button text
        },
        white:{
          100:"#fff",
        }
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "7.5rem",
      },
    },
  },
  plugins: [],
}
