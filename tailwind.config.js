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
        'primary': "#F6B4C2",
        'secondary': "#ECC6CB",
        'dark-gray': "#110C0D",
      },
    },
  },
  plugins: [],
}