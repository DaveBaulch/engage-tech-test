module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      card: "5rem",
    },
    extend: {
      colors: {
        "brand-red": "#ff585d",
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce']
  },
  plugins: [],
};
