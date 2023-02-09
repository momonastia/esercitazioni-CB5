import styles from "./index.module.scss";
import { useContext, useState } from "react";
import { ApplicationCtx } from "../../App";

const AddNote = () => {
  /* we put dispatch mode here by useContext as far as we need it inside onHandleSubmit function */

  const { dispatch } = useContext(ApplicationCtx);

  /* controlled component because of form below. At this point we should add value={title} and value={content} for evert input of the form. So any change of these inputs could be controlled by useState*/
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_NOTE",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title,
        content,
      },
    });
    setTitle(() => ""); /* for cleaning inputs fields after input */
    setContent(() => "");
  };

  return (
    <div className={styles.AddNote}>
      <h2>Add note</h2>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Write title here"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Write you note here"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddNote;
