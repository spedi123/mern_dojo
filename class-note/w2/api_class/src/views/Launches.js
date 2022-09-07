import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { LoadingSpinner } from '../components/LoadingSpinner';
import { getAllLaunches } from '../services/spacexApiService';

export const Launches = (props) => {
    const [launches, setLaunches] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllLaunches()
            .then((data) => {
                const launchesWithImages = data.filter((launch) => {
                return launch.links.flickr.original.length > 0;
            });
            setLaunches(launchesWithImages);
            })
            .catch((error) => {
                console.log(error);  
            })
            .finally(() => {
                    setIsLoading(false)
            }) 
    
    }, [])

    return (
        <div className='flex-col align-items-center text-center'>
            <h2>Launches </h2>

            {isLoading && <LoadingSpinner />}
            
            {launches.map((launch) => {
                const {date_local, id, name} = launch;

                return (
                    <div key={id} className='w-25pct mb-md shadow rounded'>
                        <Link to={`/launches/${id}`}>
                            <h3>{name}</h3>
                        </Link>
                        <p>{date_local}</p>
                    </div>
                ) 
                    
            })}
        </div>
    )
}
export default Launches;