/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'cfff4b': '#CFFF4B',
      },
      textColor: {
        'cfff4b': '#CFFF4B',
      },
    },
  },
  plugins: [],
}