import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { getAllProducts, deleteProductById } from '../services/internalApiServcie'
import ProductForm from '../components/ProductForm'


export const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProducts()
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const handleDeleteClick = (idToDelete) => {
      deleteProductById(idToDelete)
        .then((deletedProduct) => {
          const filteredProducts = products.filter((product) => {
            return product._id !== idToDelete;
          });
  
          console.log('deletedProduct:', deletedProduct);
          setProducts(filteredProducts);
        })
        .catch((error) => {
          console.log(error);
        });
    };


    return (
        <div>
            <ProductForm />
            <hr />
            <div style={{textAlign: "center"}}>
            <h3>All Products:</h3>
            {
            products.map(( product, index ) => {
                const {_id, title} = product;
                return (
                <div key={index} style={{border : "3px solid black", margin: "20px", padding: "10px" }}>
                  <Link to={`/api/products/${_id}`} className="link-row">
                      <p>{title}</p>
                  </Link>
                  <div>
                    <Link to={`/api/products/${_id}/edit`}>
                      <button>Edit</button>
                    </Link>
                    <button   onClick={(e) => {
                      handleDeleteClick(_id);
                    }} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
                  </div>
                </div>
            )})
            }
            </div>
        </div>
    )
}

export default AllProducts;