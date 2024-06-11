import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C0282C",
        secondary: "#F6FAFE",
        bg_color: "#05122E",
        bg_gradient: "#FDF3EB",
        p_color: "#8492A6",
        text_secondary: "#2752E7",
        text_color: "#05122E"
      },
      screens: {
        md: "926px",
       customSize: '964px',
       lgSize: '1508px',
      //  mdscreen: ''
      },
    },
  },
  plugins: [],
};

export default config;
