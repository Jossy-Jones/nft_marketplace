/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#A259FF',
        background: '#2B2B2B',
        backgroundSecond: '#3B3B3B',
        labelText: '#858584',
        textColor: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
