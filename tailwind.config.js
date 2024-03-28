module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          100: "rgba(0, 0, 0, 0.5)",
          200: "rgba(0, 0, 0, 0.8)",
        },
        black: "#000",
        whitesmoke: "#f2f2f2",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        comfortaa: "Comfortaa",
        inherit: "inherit",
      },
      backgroundImage: {
        "Intelops-bg": "url('/Designer3.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue": "./public/images/gradient_bg.png",
        "chethan-png": "url('../public/Chethan.png')",
      },
      fontSize: {
        mini: "15px",
        "9xl-4": "28.4px",
        "4xl": "23px",
        inherit: "inherit",
      },
      screens: {
        lg: {
          max: "1200px",
        },
        mq1125: {
          raw: "screen and (max-width: 1125px)",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq1025: {
          raw: "screen and (max-width: 1025px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
