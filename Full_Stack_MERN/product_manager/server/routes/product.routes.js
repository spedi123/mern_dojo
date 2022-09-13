const express = require('express');

const {handleCreateProduct} = require('../controllers/product.controller')

const router= express.Router();

router.post('/', handleCreateProduct);

module.exports = { productRouter : router };