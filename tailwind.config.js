module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        blue:'#405DE6',
        darkBlue:'#5851D8',
        Purple: '#833AB4',
        redViolet: '#C13584',
        maroon:'#E1306C',
        orange:'#F56040',
        redOrange:'#FD1D1D',
        orange2:'#F77737',
        redYellow :'#FCAF45',
        yellow:'#FFDC80',
        gray:"#efefef",
        

      },
      screens: {
        'short': { 'raw': '(max-width: 640px)' },
      
        'average': { 'raw': '(max-height: 700px)' },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
}
