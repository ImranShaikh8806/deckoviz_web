/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#f5f3ff', // light background
          200: '#ede9fe',
          300: '#ddd6fe',
          400: '#c4b5fd',
          500: '#a78bfa',
          600: '#7c3aed', // main purple
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        'gray': {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xxs: '.625rem',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.04)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};