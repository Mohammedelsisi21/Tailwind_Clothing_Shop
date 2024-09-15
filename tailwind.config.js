/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
      },
      spacing : {
        padding: "2rem"
      },
      backgroundImage: {
        'product-cover': "url(./images/product.jpg)",
      }
    },
  },
  plugins: [],
}