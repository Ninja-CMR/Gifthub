/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          profound: '#065f46',
          clear: '#10b981',
        },
        beige: {
          clear: '#fef9f3',
        },
        neutral: {
          gray: '#374151',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headings: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'premium-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
