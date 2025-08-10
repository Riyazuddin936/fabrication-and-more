/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b1220',
        accent: '#f97316',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(11,18,32,0.8), rgba(2,6,23,0.9))',
      }
    },
  },
  plugins: [],
}
