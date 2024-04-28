/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C363F",
        secondary: "#FCA311",
        tertiary: "#419D78",
        light: "#F2EFEA",
        dark: "#854D27",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": { transform: "translateY(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        stretchIn: {
          "0%": { scale: 0, height: "fit-content", width: "fit-content" },
          "100%": { scale: 1 },
        },
        stretchOut: {
          "0%": { scale: 1 },
          "99%": { height: "fit-content", width: "fit-content" },
          "100%": { scale: 0, height: 0, width: 0 },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse: "pulse 1.5s ease-in-out infinite",
        bounce: "bounce 0.75s ease-in-out infinite",
        spin: "spin 2s linear infinite",
        fadeIn: "fadeIn 0.5s forwards ease-in",
        fadeOut: "fadeOut 0.5s forwards ease-in",
        stretchIn: "stretchIn 0.5s forwards ease-in",
        stretchOut: "stretchOut 0.5s forwards ease-in",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};
