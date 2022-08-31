import './App.css';

import {Counter} from "./components/Counter"

function App() {

  const appJsx = (
    <div className="App">
      <h1>Hello!!!!</h1>
      <Counter title="Bean" start={3} step={5} />
      <Counter title="M&M" />
      <Counter title="Bugs" />
    </div>
)

  return appJsx;
}

export default App;
