/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#12C2E9',
        secondary: '#C471ED',
        tertiary: '#F64F59',
        'sub-text': '#5E6264',
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        neuropolitical: ['Neuropolitical']
      },
      // backgroundImage: {
      //   'hero-pattern': "url('./hero-pattern.png')"
      // },
      
    },
  },
  plugins: [],
}

