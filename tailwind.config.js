/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#495E57'
      }
    },
  },
  plugins: [],
}

