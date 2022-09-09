import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

import Form from '../components/Form'

const People = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect( ()=>{
        axios.get( `https://swapi.dev/api/people/${id}` )
            .then( res=>setData(res.data) )
            .catch( err=> navigate(`/error/people/${id}`) );
    }, [id]);

    return (
        <div>
            <Form category="people" iD={ id } />
            <div className='data-div'>
                <h2>{ data.name }</h2>
                <p><span>Birth Year: </span>{ data.birth_year }</p>
                <p><span>Gender: </span>{ data.gender }</p>
                <p><span>Height: </span>{ data.height }</p>
                <p><span>Eye Color: </span>{ data.eye_color }</p>
            </div>
        </div>
    )
}

export default People;