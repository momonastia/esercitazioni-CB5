import NoteItem from "../noteItem";
import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const NoteList = () => {
  const { state } =
    useContext(ApplicationCtx); /* context.state would be the same as {state} */
  /* console.log({ noteList }); */

  return (
    <div className={styles.NoteList}>
      {state.noteList.map((note) => (
        <NoteItem data={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
