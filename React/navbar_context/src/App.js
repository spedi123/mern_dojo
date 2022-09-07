import './App.css';
import React, {useState} from 'react'

import NameContext from './context/Context'
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';

function App() {
  const [name, setName] = useState([])
  return (
    <div>
      <NameContext.Provider value={{name, setName}}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
