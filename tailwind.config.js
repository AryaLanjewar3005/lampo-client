/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    fontFamily: {
      'syne' : ['Syne', 'sans-serif'],
    },
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'brand': '#ff5c01',
        'secondary' : '#727272',
      },
    },
  },
  plugins: [],
}

