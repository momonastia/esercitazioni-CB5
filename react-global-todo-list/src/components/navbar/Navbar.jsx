import { useState } from "react";
import styles from "./index.module.scss";

const Navbar = () => {
  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.Navbar}>
      <h1>Navbar</h1>
      <form action="" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Write here what to do"
          onInput={(e) => setInput(() => e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Navbar;
