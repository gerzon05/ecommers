/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      "slate-one": "#4d041c",
      "slate-two": "#fe6e8b",
      "slate-three": "#e51951",
      "slate-four": "#ffc0cb",
      "slate-five": "#fff1f3",
      "slate-six": "#ffc0cb",
    },
  },
  plugins: [],
});
