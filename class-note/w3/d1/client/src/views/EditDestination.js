import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import {getDestinationsById, updateDestinationsById} from '../services/internalApiService'

export const EditDestination = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [src, setSrc] = useState('');
    const [srcType, setSrcType] = useState('img');
  
    // checkboxes
    const [summer, setSummer] = useState(false);
    const [winter, setWinter] = useState(false);
    const [spring, setSpring] = useState(false);
    const [fall, setFall] = useState(false);
  
    const [errors, setErrors] = useState(null);


    useEffect(() => {
        getDestinationById(id)
          .then((data) => {
            const {
                setLocation,
                setDescription,
                setSrc,
                setSrcType,
                setSummer,
                setWinter,
                setSpring,
                setFall
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

    return <h2>EditDestination - id: {id}</h2>
}

export default EditDestination