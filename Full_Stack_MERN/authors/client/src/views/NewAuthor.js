import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createAuthor } from '../services/internalApiService';

export const NewAuthor = (props) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");

    const handleNewAuthorSubmit = (event) => {
        event.preventDefault();

        const newAuthor = {
            name
        }
        createAuthor(newAuthor)
            .then((data) => {
                console.log('new author data:', data);
                navigate('/api/authors')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="row">
            <h1>Favorite authors</h1>
            <a href='/api/authors'>Home</a>
            <div style={{ border: "solid 1px #9d9d9d", padding: "3%"}}>
                <form onSubmit={ handleNewAuthorSubmit }>
                    <div className="col">
                            <label className="form-label">Name: </label>
                            <input
                                type="text"
                                value={ name }
                                onChange={ e => setName(e.target.value) }
                                className="form-control"/>
                    </div>
                    <div className="col text-center">
                        <button
                            onClick={ () => navigate("/api/authors") }
                            color="primary"
                            size="lg"
                            >Cancel</button>
                        <button
                            color="primary"
                            size="lg"
                            >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewAuthor;