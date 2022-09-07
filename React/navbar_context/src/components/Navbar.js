import NameContext from '../context/Context';
import React, {useContext} from 'react';

function Navbar() {
    const {name} = useContext(NameContext);

    return (
        <div>
          <h2>Hi { name }!</h2>
        </div>
    )
}

export default Navbar;