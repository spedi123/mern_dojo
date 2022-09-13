import {useState} from 'react';
import { createProduct } from '../services/internalApiServcie';

const ProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        };
        createProduct(newProduct)
            .then((data) => {
                console.log('new product data:', data);  
            })
            .catch((error) => {
                console.log(error);
            } )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="Create" className="btn"/>
                </div>
            </form>
        </div>
    )
}

export default ProductForm;