/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind를 사용할 경로
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // darkmode default: mwdia => 컴퓨터 또는 브라우저의 환경설정을 따라 간다.
  // darkmode class => js등으로 설정하는 토글키로 따라간다.
  darkMode: "class",
  plugins: [],
};
