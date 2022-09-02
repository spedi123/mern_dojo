import './App.css';

import { Flashcards } from './components/Flashcards';

function App() {

  return (
    <div className="container">
      <header style= {{textAlign: 'center'}}>
        <h1>Programming Falsh Cards</h1>
      </header>      
      <hr />
      
      <main>
          <Flashcards />
      </main>
    </div> 
  );
}

export default App;
