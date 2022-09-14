import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {getProductById} from '../services/internalApiServcie';

export const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

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

      const { title, price, description } = product;

    return (
        <div style={{textAlign: "center"}}>
            <h2>{ title }</h2>
            <p>Price: ${ price }</p>
            <p>Description: { description }</p>
        </div>
    );
}

export default OneProduct;