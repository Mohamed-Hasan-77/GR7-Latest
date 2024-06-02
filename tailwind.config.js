/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BlueLight: 'rgb(55, 181, 255)',
        btnBack: 'rgb(31, 46, 70)',
        lightGrayBack: 'rgb(245, 246, 248)',
        noRiskBack: 'rgb(255, 160, 122)',
        darkBlue: 'rgba(26, 9, 63, 1)',
        mainBlue: '#1f54b5',
        mainRed: '#e52124',
        mainYellow: '#ffec00',
      },
      boxShadow: {
        cardShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px'
      },
      backgroundImage: {
        BlueLinearBtn: 'linear-gradient(90deg, rgb(0 94 203) 0%, rgb(7 26 79) 100%)',
      },
      container: {
        center: true,
        screens: {
          mobile: "640px",
          tablet: "1024px",
          desktop: "1280px",
        },
        padding: {
          DEFAULT: "0rem",
          mobile: "1rem",
          tablet: "2rem",
          desktop: "3rem",
        },
      },
      fontSize: {
        xsm: '12px',
      }
    },
    
  },
  plugins: [],
}

