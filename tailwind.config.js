/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        Light: {
          "primary": "#82CB00",
          "secondary": "#8B8B8B",
          "accent": "#348240",
          "neutral": "#1D1D1D",
          "base-100": "#FFFFFF",
        },
        Dark: {
          "primary": "#82CB00",
          "secondary": "#8B8B8B",
          "accent": "#348240",
          "neutral": "#FFFFFF",
          "base-100": "#1D1D1D",
        },
      },
     ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};