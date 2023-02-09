import { useContext } from "react";
import styles from "./index.module.scss";
import InitailContext from "../../store/context";

import BtnDelete from "../btnDelete/BtnDelete";
import BtnDone from "../btnDone/BtnDone";
import BtnEdit from "../btnEdit";

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(InitailContext);

  /* const onHandleClick = (e) => {
    console.log(e.target.id);
    dispatch({
      type: "SET_TODO_ITEM",
      payload: data.id,
    });
  }; */

  return (
    <div className={styles.TodoItem}>
      <div
        className={`${styles.Content} ${data.status && styles.statusDone}`}
        /* onClick={onHandleClick} */
      >
        <p id={data.id}>{data.content}</p>
      </div>
      <div className={styles.Buttons}>
        <BtnEdit data={data} />
        <BtnDone data={data} />
        <BtnDelete data={data} />
      </div>
    </div>
  );
};

export default TodoItem;
