/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  heme: {
    screens: {
      mobile: '393px',
      tablet: '834px',
      desktop: '1440px',
    },
    extend: {},
  },
  plugins: [],
}

