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
        glow: "0 0 30px rgba(250,70,22,0.3)",
        "glow-lg": "0 0 50px rgba(250,70,22,0.4)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
    },
  },
  plugins: [],
}
