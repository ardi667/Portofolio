/** @type {import('tailwindcss').Config} */
export default {
  // Memberitahu Tailwind file mana saja yang pakai class CSS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Kita tambahkan font Inter supaya tampilannya modern & corporate
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Menambahkan warna custom biar sesuai dengan brand IMS/Corporate
      colors: {
        ims: {
          blue: '#1E40AF',   // Biru profesional
          dark: '#0F172A',   // Navy gelap untuk teks
          slate: '#64748B',  // Abu-abu untuk deskripsi
        }
      },
      // Animasi halus saat buka web
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}