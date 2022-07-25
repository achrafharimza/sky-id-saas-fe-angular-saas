/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    extend: {
      colors: {
        indatacoredark: "#282C38",
        indatacorered: "#F2484B",
        indatacoregray: "#f9f9f9",
        indatacoreyellow: "#fcbf34",
      },
    },
  },
  plugins: [],
}
