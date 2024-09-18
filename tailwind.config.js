/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "PrimaryRed":"#A41045",
        "PrimaryDark":"#0A0C10",
        "TertiaryPink":"#E52996",
        "TertiaryBlue":"#18457C",
        "transparent":"#2A2C2F",
        "SecondaryDark":"#424345",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },  
    },
    fontSize:{
      "H1":"120px",
      "P1":"22px"
    }
  },
  plugins: [],
}
