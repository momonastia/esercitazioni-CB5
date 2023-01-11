import { TodoList } from "./components/todolist/TodoList";
import { Tree } from "./components/image/Image";
import { Promo } from "./components/promo/Promo";
import Input from "./components/input/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <TodoList />
        <Tree />
      </div>
      <Promo />
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
