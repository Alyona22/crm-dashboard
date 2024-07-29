const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-1": "var(--color-gray-1)",
        "gray-2": "var(--color-gray-2)",
        "gray-3": "var(--color-gray-3)",
        "purple": "var(--purple)",
        "green-1": "var(--green-1)",
        "green-2": "var(--green-2)",
        "green-3": "var(--green-3)",
        "red-1": "var(--red-1)",
        "red-2": "var(--red-2)",
        "page-bg": "var(--page-bg)",
        "search-bg": "var(--search-bg)",
        "search-gray": "var(--search-gray)",
        "gray-4": "var(--color-gray-4)",
        "gray-5": "var(--color-gray-5)",
        "gray-6": "var(--color-gray-6)",
        "gray-7": "var(--color-gray-7)"
      },
      boxShadow: {
        "sideBarShadow": "0px 10px 60px 0px rgba(226, 236, 249, 0.5)"
      },
      borderRadius: {
        "4xl": "30px"
      },
      animation: {
        wave: 'wave 2s .5s 1',
        typing: 'typing 1s steps(30, end)',
        blinkCaret: 'blinkCaret 0.75s step-end 1',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-15deg)' },
          '40%': { transform: 'rotate(18deg)' },
          '60%': { transform: 'rotate(-15deg)' },
          '80%': { transform: 'rotate(11deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'purple' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
