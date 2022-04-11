module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
