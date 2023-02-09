import { useState, useContext } from "react";
import styles from "./index.module.scss";
import InitailContext from "../../store/context";

const Navbar = () => {
  const { dispatch } = useContext(InitailContext);

  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO_ITEM",
      payload: {
        id: Math.floor(Math.random() * 1000),
        content: input,
        status: false,
      },
    });
    setInput(() => "");
  };

  return (
    <div className={styles.Navbar}>
      <form action="" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add task"
          onInput={(e) => setInput(() => e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Navbar;
