
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        back: {
          DEFAULT: '#0c132a'
        },
        highlight: {
            DEFAULT: '#60a5fa',
            light: '#bfdbfe',
            dark: '#3b82f6'
        }
      },
      outline: {
        main: '3px solid #60a5fa',
        light: '2px solid #60a5fa'
        
      },
      backgroundImage: {
        'purp': "url('/bg-darkened.png')"
      },
    },
    safelist: ['animate-[fade-in-up_3s_ease-in-out]']
  },
  variants: {
    extend: {},
  },
  plugins: [],
}