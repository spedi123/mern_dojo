import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Launches from './views/Launches'
import NotFound from './views/NotFound';
import OneLaunch from './views/OneLaunch';

import './App.css';


 
function App() {
  return (
    <div style={{ width:'80%', margin:'0 auto'}}>
      <header>
        <nav className='text-center'>
          <Link to='/launches'>Launches</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/launches' replace />} />
        <Route index path='/launches' element={<Launches />} />
        <Route path='/launches/:id' element={<OneLaunch />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
