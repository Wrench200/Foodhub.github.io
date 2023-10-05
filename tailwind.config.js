/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("flowbite/plugin"),
  ],
};

