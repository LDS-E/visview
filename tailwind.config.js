/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4E3CF", // Bege claro
        secondary: "#2A3A56", // Azul marinho
        accent: "#A1BCC8", // Azul claro
        darkText: "#333333", // Texto escuro
        lightBg: "#E5E5E5", // Fundo claro
      },
    },
  },
  plugins: [],
};
