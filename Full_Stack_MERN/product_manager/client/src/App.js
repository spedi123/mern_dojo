import './App.css';
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductForm from './components/ProductForm'

function App() {
  return (
    <div>
       <h1 className="App">Product Manager</h1>
       <Routes>
        <Route path="/" element={<ProductForm />} />
       </Routes>
    </div>
  );
}

export default App;
