/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './/**/*.{html,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
    theme: {
      fontFamily: {
        sans: ['brandon-grotesque', 'sans-serif'],
        serif: ['meno-banner', 'serif'],
        body: ['monotype-grotesque', 'sans-serif'],
      },
      extend: {
        spacing: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
        },
        aspectRatio: {
          'landscape': '2 / 1 ',
          'portrait': '3 / 4',
          'portrait-tall': '3 / 5',
        },
        minHeight:{
          '100': '100vh',
          '90': '90vh',
          '80': '80vh',
          '70': '70vh',
          '60': '60vh',
          '50': '50vh',
        },
        colors: {
          'dark': '#231F20',
          'medium': '#E5E0D3',
          'light': '#F1EDE6',
          'main': '#C7B9A3',
          'feature': '#C98665',
          'accent': '#99a397',
          'transparent': 'transparent',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }