/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#00CFFF',
        },
        purple: {
          400: '#A239CA',
          500: '#8A2BE2',
        },
        green: {
          400: '#00FF9F',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 207, 255, 0.5)',
      },
    },
  },
  plugins: [],
};