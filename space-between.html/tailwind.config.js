/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hober"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

