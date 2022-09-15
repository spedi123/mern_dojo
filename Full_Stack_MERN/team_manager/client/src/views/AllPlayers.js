import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPlayers, deletePlayerById } from '../services/internalApiService';


export const AllPlayers = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getAllPlayers()
            .then((data) => {
                console.log(data);
                setPlayers(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDeleteClick = (idToDelete, name) => {
        console.log(players[0].name); 
        console.log(idToDelete, name);
        
        if (window.confirm(`Are you sure you want to remove ${name}`)) {
           
            
        deletePlayerById(idToDelete)
          .then((deletedPlayer) => {
            const filteredPlayers = players.filter((player) => {
              return player._id !== idToDelete;
            });
    
            console.log('deletedPlayer:', deletedPlayer);
            setPlayers(filteredPlayers);
          })
          .catch((error) => {
            console.log(error);
          });
      }};

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
            <table style={{margin:"auto", border:"3px solid black"}}>
                <thead>
                    <tr>
                        <th style={{ fontSize:'1rem', fontWeight:'bold'}}>Player Name</th>
                        <th style={{ fontSize:'1rem', fontWeight:'bold'}}>Preferred Position</th>
                        <th style={{ fontSize:'1rem', fontWeight:'bold'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map( (player, index) => {
                            const {_id, name, position} = player 
                            return (
                            <tr key={index}>
                                <td className="align-middle">
                                    <Link to={`/players/${_id}`}>
                                        <h5>{ name }</h5>
                                    </Link>
                                </td>
                                <td className="align-middle">
                                    <h5>{ position }</h5>
                                </td>
                                <td>
                                    <button  onClick={(e) => {
                                        handleDeleteClick(_id, name)
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

export default AllPlayers;