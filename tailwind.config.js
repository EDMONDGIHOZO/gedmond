module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Spartan: ["Spartan", "sans-serif"],
      },

      colors: {
        blue: {
          light: "#1fb633",
          DEFAULT: "#1fb633",
          dark: "#1fb633",
        },
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
