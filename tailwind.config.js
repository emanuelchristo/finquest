module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#99d34f",
        "text-grey": "#959da8",
        "card-bg": "#f4f7f9",
        green: "#2db24e",
        blue: "#0d64e5",
        yellow: "#F5D627",
        "footer-bg": "#161818",
        buttonblue: "#0D64E5",
        buttongreen: "#2DB34E",
        buttonpink: "#F555A0",
        buttonpurple: "#875EFB",
        lightblue: "#f3fbff",
        lightgreen: "#E9FFCC",
        lightblack: "#343B45",
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
