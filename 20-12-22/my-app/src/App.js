import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const name = "Hello World!";
  return (
    <div className="App">
      <h1>{name}</h1>
      <Button />
    </div>
  );
}

export default App;
