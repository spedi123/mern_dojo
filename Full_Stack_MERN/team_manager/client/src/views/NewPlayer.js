import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { createPlayer } from '../services/internalApiService';

export const NewPlayer = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    const [errors, setErrors] = useState(null);
  
    const handleNewPlayerSubmit = (event) => {
      event.preventDefault();
  
      const newPlayer = {
        name,
        position,
        gameOne : 'undecided',
        gameTwo : 'undecided',
        gameThree : 'undecided'
      };
  
      createPlayer(newPlayer)
        .then((data) => {
          console.log('new destination data:', data);
          navigate('/players');
        })
        .catch((error) => {
          console.log(error);
          setErrors(error?.response?.data?.errors);
        });
    };

 return (
    <div style={{ textAlign:"center"}}>
        <Link
        to="/players"
        className="btn btn-sm btn-outline-primary mx-1"
        >
        List
        </Link>
        <span> | </span>
        <Link
            to="/players/new"
            className="btn btn-sm btn-outline-info mx-1"
        >
        Add Player
        </Link>
        <form onSubmit={(e) => handleNewPlayerSubmit(e)}>
        <div className="form-group">
          <label className="h6">Name</label>
          {errors?.name && (
            <span style={{ color: 'red' }}> {errors?.name?.message}</span>
          )}
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="h6">Position</label>
          {errors?.position && (
            <span style={{ color: 'red' }}>
              {' '}
              {errors?.position?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setPosition(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <button className="btn btn-sm btn-outline-success">Add</button>
      </form>
    </div>
 )
}

export default NewPlayer;