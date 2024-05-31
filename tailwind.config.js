/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      spacing: {
        'slick-prev': '-25px',  
        'slick-next': '-25px',  
      },
      colors: {
        'custom-green': '#495E57'
      }
    },
  },
  plugins: [],
}

