/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f97316",
        secondary: "#64748b",
        dark: "#18181b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
