/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'mobile': '393px',    
      'tablet': '834px',    
      'desktop': '1440px',
    },
    extend: {
      fontFamily: {
        neue: ['"Neue Regrade"', 'sans-serif'],
      },
      fontWeight: {
        light: 300,      // Light
        normal: 400,     // Regular
        medium: 500,     // Medium
        semibold: 600,   // SemiBold
        bold: 700,       // Bold
        extrabold: 800,  // ExtraBold
      },
    },
  },
  plugins: [],
}

