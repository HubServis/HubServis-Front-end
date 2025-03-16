/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "strong-green": "var(--strong-green)",
        "dark-green": "var(--dark-green)",
        "light-green": "var(--light-green)",
        "white": "var(--white)",
        "dark-gray": "var(--dark-gray)",
        "black": "var(--black)",
        "lighting-green": "var(--lighting-green)",
        "gray-almost-white": "var(--gray-almost-white)",
        "gray-opacity-44": "var(--gray-opacity-44)"
      },
    },
  },
  plugins: [
  ],
}

