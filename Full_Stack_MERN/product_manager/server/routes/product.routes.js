const express = require('express');

const {
  handleCreateProduct,
  handleGetAllProducts,
  handleGetProductById,
} = require('../controllers/product.controller')

const router= express.Router();

router.post('/', handleCreateProduct);
router.get('/', handleGetAllProducts);
router.get('/:id', handleGetProductById);

module.exports = { productRouter : router };