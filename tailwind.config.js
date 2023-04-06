module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'happiness-image': "url('/src/images/borbibi-apps-background.b5458480 (1).webp')",
        'footer-image': "url('/src/images/footer (1).png')",
      }
    },
  },
  plugins: [require("daisyui")],
}