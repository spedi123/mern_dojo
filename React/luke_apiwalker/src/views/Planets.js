import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form'

const Planet = () => {
    const [ data, setData ] = useState({});

    const { id } = useParams();

    useEffect( ()=>{
        axios.get( `https://swapi.dev/api/planets/${id}` )
            .then( res=>setData(res.data) )
            .catch( err=>console.log('err'));
    }, [ id ]);

    return (
        <div>
            <Form category="planets" id={ id } />
            <div className='data-div'>
                <h2>{ data.name }</h2>
                <p><span>Climate: </span>{ data.climate }</p>
                <p><span>Terrain: </span>{ data.terrain }</p>
                <p><span>Surface Water: </span>{ data.surface_water? "true" :"false" }</p>
                <p><span>Population: </span>{ data.population }</p>
            </div>
        </div>
    )
}

export default Planet;