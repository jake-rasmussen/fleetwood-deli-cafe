import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#272829",
        tan: "#FFF6E0",
        bluegray: "#61677A",
        deepred: "#D1512D"
      }
    },
  },
  plugins: [],
} satisfies Config;
