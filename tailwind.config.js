module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
        padding: "1rem",
      },
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-gray": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
  },
  plugins: [],
};
