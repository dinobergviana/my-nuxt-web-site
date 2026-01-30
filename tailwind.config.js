/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    "bg-gray-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-purple-800",
    "bg-orange-200",
    "bg-green-300",
    "bg-green-500",
    "bg-blue-200",
    "text-green-800",
    "text-purple-800",
    "text-orange-800",
    "text-green-900",
    "text-blue-800",
    "dark:text-green-900",
    "dark:bg-orange-400",
    "dark:bg-purple-800",
    "dark:bg-green-800",
    "dark:bg-blue-600",
    "font-semibold",
  ],
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
