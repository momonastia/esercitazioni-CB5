import TodoItem from "../todoitem";
import { useContext } from "react";
import styles from "./index.module.scss";
import InitailContext from "../../store/context";

const TodoList = () => {
  const context = useContext(InitailContext);
  console.log("context qui", context);

  return (
    <div className={styles.TodoList}>
      {context.state.todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
