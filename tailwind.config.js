/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ims: {
          blue: '#1E40AF',
          dark: '#0F172A',
        }
      }
    },
  },
  plugins: [],
}
