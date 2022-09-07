import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';
import { LoadingSpinner } from '../components/LoadingSpinner';

import { getOneLaunch } from '../services/spacexApiService';

export const OneLaunch = (props) => {
    const {id} = useParams();

    const [launche, setLaunche] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getOneLaunch(id)
            .then((data) => {
                setLaunche(data)
            })
            .catch((error) => {
                console.log(error);  
            })
            .finally(() => {
                    setIsLoading(false)
            }) 
    }, [id])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (launche === null) {
        return 'Not found...'
    }

    const {date_local, details, links, name} = launche;

    const {flickr} = links
    const {original : originalImageUrls} = flickr;

    return (
        <div className='flex-col align-itmes-center text-center shadow rounded'>
            {launche === null && 'Not found'}
            <h2>{name}</h2>
            <h4>Date</h4>
            <p>{date_local}</p>
            <h4>Details</h4>
            <p>{details}</p>

            {originalImageUrls.map((url) => {
                return <img className='shadow-img rounded mb-md' src={url} alt={name} width="50%"/>
            })}
        </div>
    )
}

export default OneLaunch;