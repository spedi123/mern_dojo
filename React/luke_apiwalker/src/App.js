import {Routes, Route} from "react-router-dom"
import Form from "./components/Form"
import People from "./views/People"
import Planet from './views/Planets';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Form />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />}/>
      </Routes>
    </div>
  );
}

export default App;
