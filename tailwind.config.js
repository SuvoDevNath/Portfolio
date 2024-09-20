/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
        "2xl":"1536px"
      }
    },
  },
  plugins: [],
}

