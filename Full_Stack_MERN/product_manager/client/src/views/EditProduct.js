
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  getProductById,
  updateProductById,
} from '../services/internalApiServcie';

export const EditProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
  
    useEffect(() => {
      getProductById(id)
        .then((data) => {
          setTitle(data.title);
          setPrice(data.price);
          setDescription(data.description);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);
  
    const handleEditProductSubmit = (event) => {
      event.preventDefault();
  
      const editedProduct = {
        title,
        price,
        description
      };
  
      updateProductById(id, editedProduct)
        .then((updatedProduct) => {
          console.log('updatedProduct:', updatedProduct);
          navigate(`/api/products/${id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
        <div>
            <form onSubmit={ handleEditProductSubmit }>
                <div className="row">
                    <div className="form-block">
                        <label className="form-label">Title: </label>
                        <input type="text" value={ title } onChange={ e => setTitle(e.target.value) } className="form-input_text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-block">
                        <label className="form-label">Price: </label>
                        <input type="text" value={ price } onChange={ e => setPrice(e.target.value) } className="form-input_text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-block">
                        <label className="form-label">Description: </label>
                        <input type="text" value={ description } onChange={ e => setDescription(e.target.value) } className="form-input_text"/>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Update" className="btn"/>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;