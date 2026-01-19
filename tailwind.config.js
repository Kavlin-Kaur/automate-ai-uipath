/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
        },
        uipath: {
          orange: "#FA4616",
          blue: "#0E2C4E",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(124,58,237,0.25)",
      }
    },
  },
  plugins: [],
}
