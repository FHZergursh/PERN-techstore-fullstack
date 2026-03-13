import express from "express"
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productController.js"

const productRoutes = express.Router()

productRoutes.get("/", getAllProducts)
productRoutes.get("/:id", getProduct)
productRoutes.post("/", addProduct)
productRoutes.delete("/:id", deleteProduct)
productRoutes.patch("/:id", updateProduct)






export default productRoutes