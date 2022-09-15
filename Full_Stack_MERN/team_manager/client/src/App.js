import './App.css';

import { Link, Navigate, Route, Routes } from 'react-router-dom'
import AllPlayers from './views/AllPlayers';
import NewPlayer from './views/NewPlayer'

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <div className="navbar-nav justify-content-between">
          <Link
            to="/players"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            Manage Players
          </Link>
          <span> | </span>
          <Link
            to="/players/game/1"
            className="btn btn-sm btn-outline-info mx-1"
          >
            Manage Player Status
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/players" replace />}/>
        <Route path="/players" element={<AllPlayers />}/>
        <Route path="/players/new" element={<NewPlayer />}/>
        <Route />
      </Routes>

    </div>
  );
}

export default App;
