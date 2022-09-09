import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Form = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Search For: </label>
                <select value={ category } onChange={ e => setCategory( e.target.value ) }>
                    <option hidden value="">Please select something</option>
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                </select>
                <label>ID: </label>
                <input type="number" min="1" value={ id } onChange={ e => setId( e.target.value ) } />
                <input type="submit" value="Search" />
            </form>
        </div>
        
    )
}

export default Form;