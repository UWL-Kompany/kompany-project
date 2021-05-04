module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B10F0F",
        secondary: "#B10F0F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
