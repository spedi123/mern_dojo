const Product = require("../models/product.model");

const createProduct = async (data) => {
    console.log('service: createProduct');
  
    // Use the mongoose model to interact with the database.
    const product = await Product.create(data);
    return product;
  };

module.exports = {
    createProduct,
}