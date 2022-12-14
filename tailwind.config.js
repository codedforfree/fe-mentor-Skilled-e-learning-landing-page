module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#e0e2ed",
          200: "#c2c4da",
          300: "#a3a7c8",
          400: "#8589b5",
          500: "#666ca3",
          600: "#525682",
          700: "#3d4162",
          800: "#292b41",
          900: "#141621"
        },
        black: {
          100: "#d0d1d9",
          200: "#a1a3b2",
          300: "#71748c",
          400: "#424665",
          500: "#13183f",
          600: "#0f1332",
          700: "#0b0e26",
          800: "#080a19",
          900: "#04050d"
        },
        gray: {
          100: "#e6e7eb",
          200: "#cdcfd7",
          300: "#b5b6c2",
          400: "#9c9eae",
          500: "#83869a",
          600: "#696b7b",
          700: "#4f505c",
          800: "#34363e",
          900: "#1a1b1f"
        },
        pink: {
          100: "#fddae6",
          200: "#fcb5cc",
          300: "#fa91b3",
          400: "#f96c99",
          500: "#f74780",
          600: "#c63966",
          700: "#942b4d",
          800: "#631c33",
          900: "#310e1a"
        },
        orange: {
          100: "#ffedf3",
          200: "#ffdce7",
          300: "#ffcadb",
          400: "#ffb9cf",
          500: "#ffa7c3",
          600: "#cc869c",
          700: "#996475",
          800: "#66434e",
          900: "#332127"
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans']
      }
    },
  },
  plugins: [],
}
