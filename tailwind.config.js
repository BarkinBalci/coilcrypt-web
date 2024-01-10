/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 var(--box-shadow-color-sm), 0 1px 1px 0 var(--box-shadow-color-sm)',
        DEFAULT: '0 1px 3px 0 var(--box-shadow-color-default), 0 1px 2px 0 var(--box-shadow-color-default)',
        md: '0 4px 6px -1px var(--box-shadow-color-md), 0 2px 4px -1px var(--box-shadow-color-md)',
        lg: '0 10px 15px -3px var(--box-shadow-color-lg), 0 4px 6px -2px var(--box-shadow-color-lg)',
        xl: '0 20px 25px -5px var(--box-shadow-color-xl), 0 10px 10px -5px var(--box-shadow-color-xl)',
        '2xl': '0 25px 50px -12px var(--box-shadow-color-2xl)',
        inner: 'inset 0 2px 4px 0 var(--box-shadow-color-inner)',
      },
},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#82CB00",
          "secondary": "#1D1D1D",
          "accent": "#82CB00",
          "neutral": "#1D1D1D",
          "base-100": "#FFFFFF",
          "--box-shadow-color-sm": "rgba(0, 0, 0, 0.05)",
          "--box-shadow-color-default": "rgba(0, 0, 0, 0.1)",
          "--box-shadow-color-md": "rgba(0, 0, 0, 0.15)",
          "--box-shadow-color-lg": "rgba(0, 0, 0, 0.2)",
          "--box-shadow-color-xl": "rgba(0, 0, 0, 0.25)",
          "--box-shadow-color-2xl": "rgba(0, 0, 0, 0.3)",
          "--box-shadow-color-inner": "rgba(0, 0, 0, 0.05)",
        },
        dark: {
          "primary": "#82CB00",
          "secondary": "#FFFFFF",
          "accent": "#82CB00",
          "neutral": "#FFFFFF",
          "base-100": "#1D1D1D",

          //Shadows are disabled due to contrast related banding @TODO
          "--box-shadow-color-sm": "rgba(0, 0, 0, 0.00)",
          "--box-shadow-color-default": "rgba(0, 0, 0, 0.00)",
          "--box-shadow-color-md": "rgba(0, 0, 0, 0.00)",
          "--box-shadow-color-lg": "rgba(0, 0, 0, 0.00)",
          "--box-shadow-color-xl": "rgba(0, 0, 0, 0.00)",
          "--box-shadow-color-2xl": "rgba(0, 0, 0, 0.00)",
          "--box-shadow-color-inner": "rgba(0, 0, 0, 0.00)",
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