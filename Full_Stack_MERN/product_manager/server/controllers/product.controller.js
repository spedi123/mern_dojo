const { 
    createProduct,
    getAllProducts,
    getProductById, 
} = require('../services/product.service')

const handleCreateProduct = async (req, res) => {
    console.log('controller: handleCreateProduct req.body:', req.body);
    try {
        const product = await createProduct(req.body);
        return res.json(product);
      } catch (error) {
        return res.status(400).json(error);
      }   
}

const handleGetAllProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        return res.json(products)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetProductById = async (req, res) => {
    try {
        const products = await getProductById(req.params.id);
        return res.json(products)
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductById,
}