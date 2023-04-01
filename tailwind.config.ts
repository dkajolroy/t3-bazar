import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
