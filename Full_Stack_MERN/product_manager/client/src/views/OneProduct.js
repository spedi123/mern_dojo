import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import {getProductById, deleteProductById} from '../services/internalApiServcie';

export const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
          .then((data) => {
            console.log(data);
            setProduct(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

      if (product === null) {
        return null;
      }

      const handleDeleteClick = () => {
        deleteProductById(id)
          .then((deletedProduct) => {
            navigate('/api/products');
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const { _id, title, price, description } = product;

    return (
        <div style={{textAlign: "center"}}>
            <h2>{ title }</h2>
            <p>Price: ${ price }</p>
            <p>Description: { description }</p>
            <div>
              <Link to={`/api/products/${_id}/edit`}>
                <button>Edit</button>
              </Link>
              <button   onClick={(e) => {
                handleDeleteClick(_id);
              }} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
            </div>
        </div>
    );
}

export default OneProduct;