module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        garamond: ['EBGaramond', 'serif']
      },
      colors: {
        polygonPurple: {
          light: '#7950DD',
          default: '#7950DD',
          dark: '#7950DD',
        },
        polygonBlack: {
          light: '#000000',
          default: '#000000',
          dark: '#000000',
        },
        polygonWhite: {
          light: '#FFFFFF',
          default: '#FFFFFF',
          dark: '#FFFFFF',
        }
      },
      flex: {
        "2": "2 2 0%"
      },
      maxWidth: {
        "8xl": "1920px"
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}
