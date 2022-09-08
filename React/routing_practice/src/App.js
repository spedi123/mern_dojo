import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {

  const valFromUrl = () => {
    const {val} = useParams;

    if( isNaN(+val) ) { return <Word /> }
    else { return <Num /> }
  }

  const Num = () => {
    const {val} = useParams;
      return <h2>The number is : {val}</h2>
  }

  const Word = () => {
    const {val} = useParams;
      return <h2>The word is : {val}</h2>
  }

  const wordColor = () => {
    const {word, wordColor, bgColor} = useParams;
    return <h2 style={{color:wordColor, backgroundColor:bgColor}}>The word is : {word}</h2>
  }

  return (
    <div>
      <Routes>
        <Route path="/home" element={<h2>Welcome!!!</h2>}/>
        <Route path="/:val" element={valFromUrl}/>
        <Route path="/:word/:wordColor/:bgColor" element={wordColor}/>
      </Routes>
    </div>
  );
}

export default App;
