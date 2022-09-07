import './App.css';
import {useState} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = (() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(response => response.json())
      .then( response => setPokemon(response.results))
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
