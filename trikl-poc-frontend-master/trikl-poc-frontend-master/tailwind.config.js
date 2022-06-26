module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      flex: {
        6: "6 6 0%",
      },
      colors: {
        oneMoreDark: "#010b16",
        darkestBlue: "#0A2540",
        primaryBlue: "#0052FF",
        transparentBlue: "rgb(0, 82, 255, 0.1)",
        blackish: "#0A2540",
        white: "#FFFFFF",
        dullBg: "#F6F9FC",
        accent: "#00D4FF",
        gray: "#788087",
        gainGreen: "#60993E",
        lossRed: "#FF7A7A",
        rating: "#FFB400",
        metamaskBlue: "#037DD6",
        metamaskGray: "#E4E5E7",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
