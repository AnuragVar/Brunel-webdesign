/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        coveredByYourGrace: ["Covered By Your Grace", "sans-serif"],
      },
    },
    screens: {
      sm: "800px", // Set your standard measure to 600px
      // md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
