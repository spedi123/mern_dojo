import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'

import {AllAuthors} from './views/AllAuthors'
import NewAuthor from './views/NewAuthor';
import { EditAuthor } from './views/EditAuthor';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/api/authors" replace />}/>
        <Route path='/api/authors' element={<AllAuthors />}/>
        <Route path='/api/authors/new' element={<NewAuthor />} />
        <Route path='/api/authors/:id/edit' element={<EditAuthor />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
