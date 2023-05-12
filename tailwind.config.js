


/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { 'custom-green': '#66A516' },
    extend: {
      fontFamily: {'roboto': 'Roboto, sans-serif'},
      boxShadow: {
        'up-shadow': '0px 0px 9px 5px rgba(61,61,61,1)',
      }
    },
  },
  plugins: [],
}