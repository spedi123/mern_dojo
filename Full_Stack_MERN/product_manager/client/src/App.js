import './App.css';
import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import AllProducts from './views/AllProducts'
import OneProduct from './views/OneProduct';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <div>
       <h1 className="App">Product Manager</h1>
       <Routes>
        <Route path="/" element={<Navigate to="/api/products" replace/>}/>
        <Route path="/api/products" element={<AllProducts />} />
        <Route path="/api/products/:id" element={<OneProduct />} />
        <Route path="/api/products/:id/edit" element={<EditProduct />} />
       </Routes>
    </div>
  );
}

export default App;
