import NameContext from '../context/Context';
import React, {useContext} from 'react';

function Form() {
    const {name, setName} = useContext(NameContext);

    return (
        <form onSubmit={ (e) => e.preventDefault()}>
            <label>Your Name:</label>
            <input type="text" value={ name } onChange={ (e) => setName( e.target.value ) }/>
        </form>
    )
}

export default Form;
