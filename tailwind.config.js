/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./main.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

       //Font Family

      fontFamily:{
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
        patrick_hand: ["SUSE", 'serif'],
        dancing_script: ['Dancing Script', 'cursive'],
      },

      //Colors

    colors: { 
      color1: '#46856c',
      color2: '#33d293',
      color3: "#6d8d6f",
    },

    //Text Shadow

    textShadow:{
      custom: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    boxShadow: {
      'custom-light': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
    },
  
    transitionProperty: {
      'max-height': 'max-height',
    },
    },
  },
  plugins: [ function({ addUtilities }) {
    addUtilities({
      '.text-shadow-custom': {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      '.overlay': {
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        },
      },
    })
  },
],

}