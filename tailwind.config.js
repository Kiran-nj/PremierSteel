// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text-black': '2px 2px 4px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
};
