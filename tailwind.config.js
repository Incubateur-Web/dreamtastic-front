module.exports = {
  theme: {
    extend: {
      gradientColorStops: {
        "back-light": "#27427b",
        "back-dark": "#111838",
        "welcome-top": "#5e6def",
        "welcome-bot": "#7331ed",
      },
      backgroundColor: {
        "blue-night": "#2A4A89",
        "blue-night-light": "#3464C0",
        "light-violet": "#9527f6",
        "dark-violet": "#7c16f6",
      },
      backgroundImage: {
        "layout-color": "white",
      },
      textColor: {
        main: "#4ca8b9",
        "blue-night": "#2f4388",
        secondary: "#65676B",
        violet: "#7f13f6",
        "dark-violet": "#7c16f6",
        "title-cyan": "#4ca8b9",
        "profile-cyan": "#1fa9a9",
      },
      boxShadow: {
        header: "0 0 10px #4a4a4a",
        "welcome-card": "0px 3px 26px #0FDEBC2F",
        "search-bar": " -2px 1px 9px #00000026",
      },
      borderColor: {
        main: "#6bdabe",
        violet: "#a458f6",
        "dark-violet": "#7c16f6",
      },
      borderWidth: {
        3: "3px",
      },
      height: {
        "user-card": "27rem",
      },
      margin: {
        "3px": "3px",
        profile: "30rem",
      },
      flex: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },

      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
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
  plugins: [require("@tailwindcss/line-clamp")],
};
