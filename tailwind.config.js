// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#32de84", 
        selRed: "#9C2327",
        selBlack: "#101010",
        borderColor: "#ffffff59",
        borderColor2: "#ffffffce",
        zinc: "#232222",
        gray: "#555555",
        lineGray: "#656565",
        selWhite: "#F2F1EF",
      },
      boxShadow: {
        'text-black': '2px 2px 4px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
};
