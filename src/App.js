import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState(0);
  function apple() {
    setName(name + 1);
  }
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={apple}>Click Me</button>
    </div>
  );
}

export default App;
