/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Slate 950
        foreground: "#f8fafc", // Slate 50
        muted: "#94a3b8", // Slate 400
        accent: {
          DEFAULT: "#6366f1", // Indigo 500
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(30, 41, 59, 0.5)", // Slate 800 with opacity
          border: "rgba(255, 255, 255, 0.1)",
        }
      },
    },
  },
  plugins: [],
}
