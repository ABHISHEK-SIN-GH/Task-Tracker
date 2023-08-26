/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#102C57',
        'secondary': '#DAC0A3',
        'light':'#F8F0E5'
      },
    },
  },
  darkMode: "class",
  plugins: []
}