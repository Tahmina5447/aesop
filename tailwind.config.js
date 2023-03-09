/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#FFFEF2',
          secondary: '#333333',
          info:'#252525'
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
