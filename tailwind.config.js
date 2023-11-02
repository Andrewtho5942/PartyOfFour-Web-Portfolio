
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        help: {
            DEFAULT: '#a78bfa'
        }
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