/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B0D12",
        darkCard: "#121722",
        borderDark: "#252B38",
        accent: "#8B7CFF",
      }
    },
  },
  plugins: [],
}