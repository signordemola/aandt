/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      secondary: 'sans-serif',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#4badb4',
          200: '#4bb44f',
          300: '#357e3a',
          400: '#84b44b',
          500: '#5d7e35',
        },
        neutral: {
          100: '#ffffff',
          200: '#f9f9f9',
          300: '#515150',
          400: '#262626',
          500: '#131316',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        contact: "url('/src/assets/images/contact/contact.jpg')",
        hero: "url('/src/assets/images/hero/hero1.jpg')",
      },
    },
  },
  plugins: [],
};
