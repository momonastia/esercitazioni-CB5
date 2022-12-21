import "./App.css";
import { Button } from "./components/button/Button";
import { Text } from "./components/text/Text";

function App() {
  return (
    <div className="App">
      <Text as="h3">React page</Text>
      <Button
        variant="primary"
        onClick={() => console.log("First button text")}
      >
        Click me
      </Button>
      <Button variant="secondary" onClick={() => console.log("Mery Xmas!")}>
        Click me
      </Button>
      <Button variant="primary" onClick={() => console.log("Help me!")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
