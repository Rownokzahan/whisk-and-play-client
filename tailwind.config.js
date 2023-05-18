/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#F6B4C2",
        'seconadary': "#ECC6CB",
        'dark-gray': "#110C0D",
      },
    },
  },
  plugins: [],
}