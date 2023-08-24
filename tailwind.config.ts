import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#272829",
        tan: "#FFF6E0",
        bluegray: "#61677A",
        deepred: "#BB1D2D",
        blue: "#6DA4D0",
      }
    },
  },
  plugins: [],
} satisfies Config;
