import { Link } from 'react-router-dom';

export const NewPlayer = (props) => {
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
    </div>
 )
}

export default NewPlayer;