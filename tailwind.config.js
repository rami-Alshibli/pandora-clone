/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#211710',
          secondary: '#ffffff',
          tertiary: '#27251f',
        },
        surface: {
          base: '#000000',
          raised: '#ff93a0',
        },
        border: {
          default: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['GothamSSm-Book', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xs: '13px',
        sm: '16px',
        md: '40px',
      },
      spacing: {
        '1': '4px',
        '2': '10px',
        '3': '16px',
        '4': '20px',
      },
      borderRadius: {
        xs: '6px',
      },
      // أضف هذا داخل قسم extend
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}