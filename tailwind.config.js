/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(223, 100%, 69%)',
        darkGrayBlue: 'hsl(210, 10%, 33%)',
        grayBlue: 'hsl(201, 11%, 66%)',
      },
    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
  },

  plugins: [],
}
