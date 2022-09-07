import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = (() => {
    axios("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(response => setPokemon(response.data.results))
      .catch(error => console.log(error))
  })

  return (
    <div>
       <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <ul>
          {pokemon.map((pokemon, i) => {
            return <li key={i}>{pokemon.name}</li>
          })}
        </ul>
    </div>
  );
}

export default App;
