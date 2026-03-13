import express from "express"
import { sql } from "../config/db.js"

export const  getAllProducts = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM products`
    return res.status(200).json({success: true, data: products})

  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}

export const getProduct = async (req, res) => {
  try {
    const {id} = req.params

    const product = await sql`SELECT * FROM products WHERE id = ${id}`

    return res.status(200).json({success: true, data: product})

  } catch (error) {
    return res.status(500).json({success: false, message: error.message})    
  }
}

export const addProduct = async (req, res) => {
  const {name, price, image} = req.body


  try {
    if (!name || !price || !image)
    {
      return res.status(500).json({success: false, message: "Enter all values"})
    }

    const newProduct = await sql`INSERT INTO products(name, price, image) VALUES (${name}, ${price}, ${image}) RETURNING *`

    return res.status(201).json({success: true, data: newProduct[0]})

  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params
    const deletedProduct = await sql`DELETE FROM products WHERE id = ${id} RETURNING *`

    if (deletedProduct.length === 0) {
      return res.status(404).json({success: false, message: "Product not found"})
    }

    return res.status(200).json({success: true, data: deletedProduct[0]})


  } catch (error) {
    return res.status(500).json({success: false, message: error.message})

  }
}

export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params
    const {name, price, image} = req.body

    const updatedProduct = await sql`UPDATE products 
    SET name=${name}, price=${price}, image=${image} WHERE id=${id}
    RETURNING *`

    if (updatedProduct.length === 0) {
      return res.status(404).json({success: false, message: "Product not found"})
    }

    return res.status(200).json({success: true, data: updatedProduct[0]})


  } catch (error) {
    return res.staus(500).json({success: false, message: error})
    
  }
}