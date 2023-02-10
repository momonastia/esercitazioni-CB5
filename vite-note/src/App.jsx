import { useReducer } from "react";

import Image from "./coponents/image";
import Navbar from "./coponents/navbar";
import AddNote from "./coponents/addNote";
import NoteContent from "./coponents/noteContent";
import Login from "./coponents/login";
import { InitialState, ApplicationCtx } from "./store";
import { mainReducer } from "./store/reducer";

import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, InitialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {/* here we use state and not InitialState as far state will be changed every time by useReducer, InitialState is static */}
        {!state.user.username && !localStorage.getItem("Node-app-username") ? (
          <Login />
        ) : (
          <>
            <Image />
            <Navbar />
            <main>
              <AddNote />
              <NoteContent />
            </main>
          </>
        )}
      </ApplicationCtx.Provider>
    </div>
  );
}

export default App;
