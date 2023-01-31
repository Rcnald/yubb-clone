/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '5px':'5px',
        '7px':'7px',
        '15px':'15px',
        '22':'5.5rem',
        '1380px':'1380px',
        '90vw':'90vw',
      },
      fontFamily:{
        'open-sans':["'Open Sans', sans-serif"],
      },
      colors:{
        'gray-main': '#555555',
        'blue-link': '#0075B6',
        'red':{
          '600':'#BE3255',
          '900':'#5F192A',
        }
      },
      gridTemplateColumns:{
        '3-custom':'91px 5fr 1fr'
      },
      screens:{
        '1lg': '1086px',
        '1md': '888px',
      },
    },
  },
  plugins: [],
}