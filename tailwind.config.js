/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        luxurious: ["Luxurious Script", "cursive"],
      },
      colors: {
        camel: "#D1B06B",
        darkBlue: "#1F2732",
        cyan: "#2E3947",
        nightBlue: "#161D27",
        grey: "#D7D7D7",
        cream: "#FFFFFF",
        brownishBg: "#3B434E",
      },
    },
  },
  plugins: [],
};
