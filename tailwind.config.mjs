/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        stone: {
          400: '#A7AAAD',
          600: '#808397',
          700: '#5B636D',
          950: '#24303E'
        },
        yellow: {
          400: '#FBD600',
          500: '#FAD400'
        },
        red: {
          400: '#FE7766'
        },
        green: {
          500: '#458D7E',
          600: '#3E7467',
          700: '#2C7566',
          800: '#24554A'
        },
        turquoise: {
          800: '#19536C',
          950: '#052C3B'
        }
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        barlow: ['Barlow', 'sans-serif']
      }
    }
  },
  plugins: []
};
