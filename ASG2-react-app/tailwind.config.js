/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hBlue': '#067BC2',
        'cBlue':'#84BCDA',
        'jYellow':'#ECC30B',
        'cOrange':'#F37748',
        'rBlack':'#242124',
      }
    },
  },
  plugins: [],
}

