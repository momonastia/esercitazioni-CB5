import "./App.css";
import { Layout } from "./layout/Layout";
import { Button } from "./components/button/Button";
import { Text } from "./components/text/Text";

function App() {
  return (
    <Layout>
      <div>
        {" "}
        {/* all below put like a children prop of Layout componemt */}
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
    </Layout>
  );
}

export default App;
