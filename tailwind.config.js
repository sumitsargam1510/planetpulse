/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',        // Vibrant Green
        primaryLight: '#bbf7d0',   // Light green for cards
        secondary: '#0ea5e9',      // Sky Blue
        background: '#f0fdf4',     // App background
        heading: '#1f2937',        // Dark Gray for Headings
        textMuted: '#6b7280',      // Lighter gray for subtext
        warning: '#f97316',        // Orange - alerts
        success: '#10b981'         // Emerald - success states
      }
    },
  },
  plugins: [],
}
