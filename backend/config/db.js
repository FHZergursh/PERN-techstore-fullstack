import {neon} from "@neondatabase/serverless"
import dotenv from "dotenv";

dotenv.config();

export const sql = neon(process.env.DATABASE_URL);

export async function initDB()  {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS products(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    )`

    console.log("Database initialised successfully!")
  } catch (error) {
    console.log("Error in initDB, " + error)
  }
}