import { createContext } from "react";
import styles from "./App.module.scss";
import Counter from "./components";

const TitleContext = createContext();

function App() {
  return (
    <div className={styles.App}>
      <TitleContext.Provider value="Simple Title">
        <Counter />
      </TitleContext.Provider>
    </div>
  );
}

export { App, TitleContext };
