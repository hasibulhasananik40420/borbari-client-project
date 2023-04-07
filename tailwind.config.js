module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'happiness-image': "url('/src/images/borbibi-apps-background.b5458480 (1).webp')",
        'footer-image': "url('/src/images/footer (1).png')",
        'navbar-image': "url('/src/images/breadcrumb-image.fd9c16e6.webp')",
        'first-image': "url('/src/images/signup_pattern-01.webp')",
        'second-image': "url('/src/images/success_elements-01.png')",
        'third-image': "url('/src/images/success_elements-02.png')",
        'fourth-image': "url('/src/images/signup_pattern-03.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}