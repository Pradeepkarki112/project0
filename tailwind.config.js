/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        GrayColor: "#9FA1A6",
        BlueColor: "#125EB7",
        White: "#FFFFFF",
        Black: "#000000",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Quattrocento: ["Quattrocento Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
