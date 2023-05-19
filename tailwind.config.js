/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': "'Josefin Sans', sans-serif"
      },
      colors: {
        'primary': "#ff6899",
        'secondary': "#F6B4C2",
        'dark-gray': "#110C0D",
      },
    },
  },
  plugins: [],
}