/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pingSmall: {
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        instaColor: {
          '0%': { color: '#833ab4' },
          '25%': { color: '#fd1d1d' },
          '50%': { color: '#fcb045' },
          '75%': { color: '#fd1d1d' },          
        }, 
        calenderColor: {
          '0%': { color: '#dfe4ea' },
          '25%': { color: '#1e90ff' },
          '50%': { color: '#ff6b6b' },
          '75%': { color: '#2ed573' },
          '100%': { color: '#3742fa' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },       
      },      
      animation: {        
        pingSmall: 'pingSmall 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        instaColor: 'instaColor 3s ease-in-out infinite',
        scrollRight: 'scrollRight 20s linear infinite',
        calenderColor: 'calenderColor 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

