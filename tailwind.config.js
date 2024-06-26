/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      priFont: ["Jockey One", "sans-serif"],
      secFont: ["Fredoka"],
    },
    colors: {
      priColor: {
        900: "#C51D1D",
        800: "#FF2121",
        700: "#FF634A",
      },

      secColor: {
        900: "#00224D",
        800: "#0574FF",
      },
      triColor: {
        900: "#040810",
      },
      bodyColor: "#000",
      white: "#fff",
    },
    dropShadow: {
      glow: [
        "0px 0px 15px rgba(255, 9, 0, 0.1)",
        "0px 0px 17px rgba(255, 9, 0, 0.2)",
      ],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
