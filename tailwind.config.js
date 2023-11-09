
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend:{
      colors:{
        back: {
          DEFAULT: '#000e1e'
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
        'darkbg': "url('/bg-darkened.png')"
      },
    },
    safelist: ['animate-[fade-in-up_3s_ease-in-out]']
  },
  variants: {
    extend: {},
  },
  plugins: [],
}