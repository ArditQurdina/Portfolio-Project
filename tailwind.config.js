/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'class' strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
