
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        highlight: {
            DEFAULT: '#a78bfa',
            light: '#ddd6fe',
            dark: '#8b5cf6'
        }
      },
      outline: {
        main: '3px solid #a78bfa',
        light: '2px solid #a78bfa'
        
      },
      backgroundImage: {
        'purp': "url('/bg-darkened.png')"
      },
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}