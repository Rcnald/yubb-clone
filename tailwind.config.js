/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend:{
      spacing:{
        '.5px':'0.5px', 
        '5px':'5px',
        '7px':'7px',
        '15px':'15px',
        '30px':'30px',
        '5.75':'1.4375rem',
        '22':'5.5rem',
        '6.3rem':'6.3rem',
        '90vw':'90vw',
      },
      fontFamily:{
        'open-sans':["'Open Sans', sans-serif"],
      },
      colors:{
        'white-bg': '#F8F8F8',
        'gray-main': '#555555',
        'gray-light':{
          default: '#E0E0E0',
          '50': '#EFF5F7',
          '100': '#CDE3E6',
        },
        'gray-dark': '#343A40',
        'blue-link': '#0075B6',
        'red':{
          '600':'#BE3255',
          '900':'#5F192A',
        },
        'cyan':{
          '900': '#0C5460',
        },
      },
      gridTemplateColumns:{
        '91px-5fr-fit-content(0)':'91px 5fr fit-content(0)'
      },
      screens:{
        'md': '900px',
        'lg': '1086px',
      },
      maxWidth: {
        '1380px':'1380px',
      },
    },
  },
  plugins: [],
}