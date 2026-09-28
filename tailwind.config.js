/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Eight (Behance: EIGHT digital)
        violet: "#7000FF", // Electric Violet
        deep: "#461E7E", // Deep Purple
        onyx: "#121212", // Onyx
        gelo: "#F8F9FA", // Branco Gelo
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
