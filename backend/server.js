import express from "express"
import helmet from "helmet"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js";
import { initDB } from "./config/db.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use("/api/products", productRoutes)

initDB().then(app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
}))