import './App.css';

import PersonCard from "./components/PersonCard"

function App() {
  const profiles = [
    {
      firstName : "Doe",
      lastName : "Jane",
      age : 45,
      hairColor : "Black"
    },
    {
      firstName : "Smith",
      lastName : "John",
      age : 88,
      hairColor : "Brown"
    },
    {
      firstName : "Fillmore",
      lastName : "Millard",
      age : 50,
      hairColor : "Brown"
    },
    {
      firstName : "Smith",
      lastName : "Maria",
      age : 62,
      hairColor : "Brown"
    }  
  ]

  return (
    <div className="App">
      {
        profiles.map((profile, i) => {
          return(
            <PersonCard 
              key={i}
              profile={profile}
            />
            ) 
        })
      }
    </div>
  );
}

export default App;
