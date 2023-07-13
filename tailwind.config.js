/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "itbs-default": "#00A335",
        "itbs-hover": "#2a8a4a",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
