import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const createProduct = async (data) => {
    const res = await http.post('/products', data);
    return res.data;
  };

  export const getAllProducts = async () => {
    const res = await http.get('/products');
    return res.data;
  };
  
  export const getProductById = async (id) => {
    const res = await http.get(`/products/${id}`);
    return res.data;
  };

  export const updateProductById = async (id, data) => {
    const res = await http.put(`/products/${id}`, data);
    return res.data;
  };
  
  export const deleteProductById = async (id) => {
    const res = await http.delete(`/products/${id}`);
    return res.data;
  };
  