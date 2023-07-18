/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens : {
        'xs' : '390px'
      },
      extend: {
        transitionTimingFunction :{
          'ease-bounce' : 'cubic-bezier(0.24,0.24,0.51,1.47)'
        }
      },
    },
    plugins: [],
  }