/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#023047',
        'secondary': '#FB8500',
        'accent': '#8ECAE6'
      }
    },
  },
  plugins: [],
}