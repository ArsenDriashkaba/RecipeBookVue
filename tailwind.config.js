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
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
