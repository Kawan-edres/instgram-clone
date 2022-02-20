module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#405DE6",
        darkBlue: "#5851D8",
        Purple: "#833AB4",
        redViolet: "#C13584",
        maroon: "#E1306C",
        orange: "#F56040",
        redOrange: "#FD1D1D",
        orange2: "#F77737",
        redYellow: "#FCAF45",
        yellow: "#FFDC80",
        gray: "#efefef",
        gray1:"#8e8e8e",
        mGray:"#D3D3D3 ",
        buttonBlue: "#0095f6",
        story:"rgba(0, 0, 0, 0.1)"
        
      },
      screens: {
        sm: { raw: "(max-width: 500px)" },
        sm2: { raw: "(max-width: 600px)" },

        short: { raw: "(max-width: 700px)" },
        av:{raw:"(max-width:900px)"},
        thousnd:{raw:"(max-width:1000px)"},
        large:{raw:"(max-width:1200px)"},
        xlarge:{raw:"(max-width:1400px)"},
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
