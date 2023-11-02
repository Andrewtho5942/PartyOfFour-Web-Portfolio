
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        highlight: {
            DEFAULT: '#a78bfa',
            light: '#ddd6fe'
        }
      },
      outline: {
        main: '3px solid #a78bfa',
        light: '2px solid #a78bfa'
      },
      backgroundImage: {
        'purp': "url('/img-blurred.jpg')"
      },
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}