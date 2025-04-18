import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4E3CF",
        secondary: "#2A3A56",
        accent: "#A1BCC8",
        darkText: "#333333",
        lightBg: "#E5E5E5",
      },
    },
  },
  plugins: [typography],
};
