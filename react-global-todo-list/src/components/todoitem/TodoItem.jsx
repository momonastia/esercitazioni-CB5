import { useContext } from "react";
import styles from "./index.module.scss";
import InitailContext from "../../store/context";

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(InitailContext);

  const onHandleClick = (e) => {
    dispatch({
      type: "SET_TODO_ITEM",
      payload: data.status,
    });
  };

  return (
    <div
      className={`${styles.TodoItem} ${data.status && styles.statusDone}`}
      onClick={onHandleClick}
    >
      <p>{data.content}</p>
    </div>
  );
};

export default TodoItem;
