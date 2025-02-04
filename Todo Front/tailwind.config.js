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
