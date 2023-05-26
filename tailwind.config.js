/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "primary-dark": "#333333",
        "primary-light": "#FFFFFF",
        "primary-pink": "#ED2E7C",
        "secondary-pink": "#FF8BBB",
      },
      fontFamily: {
        jamjuree: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
