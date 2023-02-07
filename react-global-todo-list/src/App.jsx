import styles from "./App.module.scss";
import { useReducer } from "react";
import Navbar from "./components/navbar";
import TodoList from "./components/todolist";
import initalState from "./store/state";
import InitailContext from "./store/context";
import mainReducer from "./store/reducer";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initalState);

  return (
    <InitailContext.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        <Navbar />
        <TodoList />
      </div>
    </InitailContext.Provider>
  );
}

export default App;
