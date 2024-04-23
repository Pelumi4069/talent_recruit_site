/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#05498D",
        accent: "#000000",
        highligh: "#3A81C1",
        card: "#FDAB76",
        cardd: "#77F0ED",
        carddd: "#FFE475",
        cardddd: "#69F290",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1780px",
      },
    },
  },
  plugins: [],
}

