/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#D90416',
        accent2: '#D9042B',
        newYellow: '#F2B705',
        newOrange: '#F28705',
        newGray: '#F2F2F2',
        dark: '#202022',
      },
      screens: {
        '2xs': '640px',
        xs: '1024px',
        sm: '1366px',
        md: '1600px',
        lg: '1920px',
        xl: '2048px',
        '2xl': '2560px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
