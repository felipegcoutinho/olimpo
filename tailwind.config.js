/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "itbs-default": "#00A335",
        "itbs-hover": "#2a8a4a",
        "itbs-modern-100": "#0F1D1E",
        "itbs-modern-200": "#0a1213",
        "itbs-modern-300": "#0c1617",
        "itbs-modern-400": "#0a1415",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
