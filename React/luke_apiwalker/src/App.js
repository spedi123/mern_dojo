import {Routes, Route} from "react-router-dom"
import Form from "./components/Form"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Form />} />
        <Route path="/people/:id"  />
        <Route path="/planets/:id" />
      </Routes>
    </div>
  );
}

export default App;
