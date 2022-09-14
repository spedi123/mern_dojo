import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { getAllProducts } from '../services/internalApiServcie'
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


    return (
        <div>
            <ProductForm />
            <hr />
            <div style={{textAlign: "center"}}>
            <h3>All Products:</h3>
            {
            products.map(( product, index ) =>
                    <Link key={index} to={`/api/products/${product._id}`} className="link-row"><p>{product.title}</p></Link>
                )
            }
        </div>
        </div>
    )
}

export default AllProducts;