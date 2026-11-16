/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#102d25",
        leaf: "#2f7959",
        lime: "#c7e66b",
        ink: "#17221d",
        mist: "#f3f6f2"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};