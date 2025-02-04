/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss,css}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#764FF7",
        primaryLightColor: "#F4F4F4",
        secondaryLightColor: "#DFDFDF",
        primaryDarkColor: "#212121",
        secondaryDarkColor: "#121212",
        primaryInput: "#323235",
        primaryInputText: "#636366",
        primaryInputTextHover: "#9CA394",
        primaryTaskOverviewBorder: "#4B5563",
        primaryButton: "#32D974",
        primaryButtonHover: "#00CC84",
        secondaryButton: "#17A2B8",
        secondaryButtonHover: "#138496",
        cancelButton: "#DC3545",
        cancelButtonHover: "#C82333",
      },
      container: {
        center: true,
      },
      fontFamily: {
        ptn: ["Poppins-Thin"],
        plt: ["Poppins-Light"],
        prr: ["Poppins-Regular"],
        pbd: ["Poppins-Bold"],
      },
      screens: {
        "2xs": "22.5rem",
        xs: "30rem",
      },
    },
  },
  plugins: [],
};
