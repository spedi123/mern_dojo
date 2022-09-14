const Product = require("../models/product.model");

const createProduct = async (data) => {
    console.log('service: createProduct');
  
    // Use the mongoose model to interact with the database.
    const product = await Product.create(data);
    return product;
  };

  const getAllProducts = async () => {
    const products = await Product.find();
    return products;
  };
  
  const getProductById = async (id) => {
    const product = await Product.findById(id);
    return product;
  };

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
}