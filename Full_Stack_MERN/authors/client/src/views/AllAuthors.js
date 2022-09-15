import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import _ from 'lodash';

import {getAllAuthors, deleteAuthorById} from '../services/internalApiService'

export const AllAuthors = (props) => {
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        getAllAuthors()
          .then((data) => {
            console.log(data);
            setAuthors(_.orderBy(data, ['name'],['asc']));
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      const handleDeleteClick = (idToDelete) => {
        deleteAuthorById(idToDelete)
          .then((deletedAuthor) => {
            const filteredAuthors = authors.filter((author) => {
              return author._id !== idToDelete;
            });
    
            console.log('deletedAuthor:', deletedAuthor);
            setAuthors(filteredAuthors);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    

    return (
        <div style={{textAlign: "center"}}>
            <h1>Favorite authors</h1>
            <a href='/api/authors/new'>Add an author</a>
            <h3>We have quotes by:</h3>
            <table style={{margin:"auto", border:"3px solid black"}}>
                <thead>
                    <tr>
                        <th style={{ fontSize:'1rem', fontWeight:'bold'}}>Author</th>
                        <th style={{ fontSize:'1rem', fontWeight:'bold'}}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map( (author, index) => {
                            const {_id, name} = author 
                            return (
                            <tr key={index}>
                                <td className="align-middle">
                                    <h5 style={{color: "#8332ff"}}>{ name }</h5>
                                </td>
                                <td>
                                    <button onClick={ () => navigate(`/api/authors/${_id}/edit`) }>Edit</button>
                                    <button  onClick={(e) => {
                                        handleDeleteClick(_id)
                                        }} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
                                </td>
                            </tr>
                        ) } )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;