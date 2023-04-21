/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: "#000",
        800: "#0d0d0d",
        700: "#1a1a1a",
        600: "#262626",
        500: "#232529",
        400: "#2f3137",
        300: "#3b3d45",
        200: "#464953",
        100: "#525660",
      },
      white: {
        DEFAULT: "#fdfbfe",
        800: "#fbf7fd",
        500: "#ffffff",
        300: "#f2f2f2",
      },
      primary: {
        DEFAULT: "#8e44ad",
        800: "#7e3a9d",
        700: "#863ea8",
        500: "#9545ba",
        400: "#a057c1",
        300: "#bf8fd6",
        200: "#d5b5e3",
        100: "#eadaf1",
        50: "#eee1f4",
      },
      secondary: {
        DEFAULT: "#BA3F83",
        700: "#be4186",
        600: "#c45492",
        500: "#cb679e",
        300: "#d88db6",
        200: "#dea0c2",
        100: "#ebc6db",
      },
      red: {
        DEFAULT: "#ed3241",
        700: "#ef4352",
        600: "#f15b67",
        500: "#f3727d",
        400: "#f58a93",
        300: "#f7a1a8",
        200: "#fbd0d4",
        100: "#fde8e9",
      },
      blue: {
        DEFAULT: "#006ffd",
        700: "#2897FF",
        500: "#6FBAFF",
        300: "#B4DBFF",
        200: "#cce6ff",
        100: "#dbeeff",
      },
      border: {
        DEFAULT: "#d9d9d9",
        form: "hsl(0, 0%, 80%)",
        500: "#e6e6e6",
      },
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      borderRadius: {
        'md': '5px',
      },
      keyframes: {
        open: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    screens: {
      "xs-max": { max: "420px" },
      // => @media (max-width: 420px) { ... }

      "sm-max": { max: "639px" },
      // => @media (max-width: 639px) { ... }
      sm: { min: "640px" },
      // => @media (min-width: 640px and max-width: 768px) { ... }

      md: { min: "769px" },
      // => @media (min-width: 768px) { ... }
      'md-max': { max: "768px" },
      // => @media (max-width: 768px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }
      'lg-max': { max: "968px" },
      // => @media (max-width: 968px) { ... }

      xl: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
