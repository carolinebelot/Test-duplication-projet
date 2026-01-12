/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#004C99',
          light: '#3388DD'
        },
        secondary: {
          DEFAULT: '#FF6B35',
          dark: '#CC5529',
          light: '#FF8A5C'
        }
      }
    },
  },
  plugins: [],
}
