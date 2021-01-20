module.exports = {
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      gradientColorStops: {
        "back-light": "#27427b",
        "back-dark": "#111838",
      },
      backgroundColor: {
        "blue-night": "#2f4388",
      },
      textColor: {
        "blue-night": "#2f4388",
        secondary: "#65676B",
      },
      boxShadow: {
        header: "0 0 10px #4a4a4a",
      },
      flex: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
  },
  plugins: [],
};
