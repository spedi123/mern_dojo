import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import Form from '../components/Form'

const People = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect( ()=>{
        axios.get( `https://swapi.dev/api/people/${id}` )
            .then( res=>setData(res.data) )
            .catch( err=> console.log('err'));
    }, [id]);

    return (
        <div>
            <Form category="people" id={ id } />
            <div>
                <h2>{ data.name }</h2>
                <p><span>Height: </span>{ data.height }</p>
                <p><span>Mass: </span>{ data.mass }</p>
                <p><span>Hair Color: </span>{ data.hair_color }</p>
                <p><span>Skin Color: </span>{ data.skin_color }</p>
            </div>
        </div>
    )
}

export default People;