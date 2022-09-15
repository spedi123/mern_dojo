import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
  getAuthorById,
  updateAuthorById,
} from '../services/internalApiService';

export const EditAuthor = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [authorAvailable, setAuthorAvailable] = useState(false);

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setName(data.name)
                setAuthorAvailable(true)
            })
            .catch((error) => {
                console.log(error);
                setAuthorAvailable(false)
              });
    }, [id]);

    const handleEditAuthorSubmit = (event) => {
        event.preventDefault();
        const editedAuthor = { name }

        

        updateAuthorById(id, editedAuthor)
            .then((updatedAuthor) => {
                console.log('updatedAuthor:', updatedAuthor);
                navigate(`/api/authors`);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    

    return (
        <div className="row">
            { authorAvailable ? 
            <>
                <h1>Favorite authors</h1>
            <a href='/api/authors'>Home</a>
            <div style={{ border: "solid 1px #9d9d9d", padding: "3%"}}>
                <form onSubmit={ handleEditAuthorSubmit }>
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
            </> :
               <div>
               <p>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p>
               <Link to="/api/authors/new"> Add New Author</Link>
             </div>
            }
        </div>
    )
}