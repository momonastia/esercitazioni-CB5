import Image from "./coponents/image";
import styles from "./App.module.scss";
import Navbar from "./coponents/navbar";
import AddNote from "./coponents/addNote";
import NoteContent from "./coponents/noteContent";
import { createContext } from "react";
import { useReducer } from "react";

const InitialState = {
  noteList: [
    {
      id: 1,
      title: "First note title",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eum quo ut fuga non similique labore illo natus saepe expedita a tempora, nisi laudantium earum, tenetur, quaerat voluptatum aperiam aliquam!",
    },
    {
      id: 2,
      title: "Second note title",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eum quo ut fuga non similique labore illo natus saepe expedita a tempora, nisi laudantium earum, tenetur, quaerat voluptatum aperiam aliquam!",
    },
    {
      id: 3,
      title: "Third note title",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eum quo ut fuga non similique labore illo natus saepe expedita a tempora, nisi laudantium earum, tenetur, quaerat voluptatum aperiam aliquam!",
    },
  ],
  user: {
    username: "Test User",
  },
};

const ApplicationCtx = createContext(InitialState);

const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(mainReducer, InitialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {/* here we use state and not InitialState as far state will be changed every time by useReducer, InitialState is static */}
        <Image />
        <Navbar />
        <main>
          <AddNote />
          <NoteContent />
        </main>
      </ApplicationCtx.Provider>
    </div>
  );
}

export { ApplicationCtx };
export default App;
