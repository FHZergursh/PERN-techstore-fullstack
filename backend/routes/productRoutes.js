import express from "express"

const productRoutes = express.Router()

productRoutes.get("/", (req, res) => {
  res.send("Helpppp")
})





export default productRoutes