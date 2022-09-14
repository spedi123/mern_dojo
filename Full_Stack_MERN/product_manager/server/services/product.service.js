const Product = require("../models/product.model");

const createProduct = async (data) => {
    console.log('service: createProduct');
  
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

  const deleteProductById = async (id) => {
    const product = await Product.findByIdAndDelete(id);
    return product;
  };
  
  const updateProductById = async (id, data) => {
    const product = await Product.findByIdAndUpdate(id, data, {
      runValidators: true,
      new: true,
    });
  
    return product;
  };

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
}