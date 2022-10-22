/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Josefin Sans']
      },
      colors: {
        brightBlue: '#3a7bfd',
        grfrom: '#57ddff',
        grto: '#c058f3',
        //lightTheme
        lightVlGray: '#fafafa',
        lightVlgBlue: '#e4e5f1',
        lightLgBlue: '#d2d3db',
        lightDgBlue: '#9394a5',
        lightVdgBlue: '#484b6a',
        //dark
        darkVdBlue: 'hsl(235, 21%, 11%)',
        darkVddBlue: 'hsl(235, 24%, 19%)',
        darkLgBlue: 'hsl(234, 39%, 85%)',
        darkLgBlueHover: 'hsl(236, 33%, 92%)',
        darkDgBlue: 'hsl(234, 11%, 52%)',
        darkVdgBlue: 'hsl(233, 14%, 35%)'
      },
      backgroundImage: {
        'bgmobilelight': "url('/images/bg-mobile-light.jpg')",
        'bgmobiledark': "url('/images/bg-mobile-dark.jpg')",
        'bgdesktoplight': "url('/images/bg-desktop-light.jpg')",
        'bgdesktopdark': "url('/images/bg-desktop-dark.jpg')", 
      }
    },
  },
  plugins: [],
}
