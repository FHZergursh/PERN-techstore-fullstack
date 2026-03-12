import express from "express"

export const getAllProducts = (req, res) => {
  res.send("Get all products")
}

export const getProduct = (req, res) => {
  res.send("Get product")
}

export const addProduct = (req, res) => {
  res.send("Add new product")
}

export const deleteProduct = (req, res) => {
  res.send("Delete product")
}

export const updateProduct = (req, res) => {
  res.send("Update Product")
}