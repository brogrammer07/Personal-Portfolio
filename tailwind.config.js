/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#CCD7F7",
        primaryDark: "#B8C3E1",
        primaryDarker: "#8892B0",
        primarySubHeading: "#5D6576",
        primaryHeading: "#BFC9E8",
        primarySub: "#858B9F",
        primaryDetails: "#A4ADC8",
        secondary: "#08fdd8",
        primarySidebar: "#909096",
        primarySidebarHover: "#ffffff",
        htmlCode: "#3B3F45",
      },
    },
    backgroundColor: {
      primary: "#1d1d1d",
      primaryLight: "#181818",
    },
    fontFamily: {
      laBelleAurore: ["La Belle Aurore", "cursive"],
      nunitoSans: ["Nunito Sans", "sans-serif"],
    },
    gradientColorStopPositions: {
      50: "50%",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
