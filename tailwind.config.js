module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      pa: "360px", // phone android
      pi: "414px", // phone iphone
      pi11: "428px", // phone iphone 11 Pro Max
      tp: "768px", // tablet portrait
      ti8p: "810px", // tablet iPad gen 8th portrait
      tl: "1024px", // tablet landscape
      ti8l: "1080px", // tablet iPad gen 8th landscape
      l150: "1280px", // laptop 1920 / 150%
      // lc: "1366px", // laptop cheap
      // l125: "1536px", // laptop 1920 / 125%
      // l100: "1920px", // laptop 1920
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
