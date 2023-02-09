import NoteList from "../noteList";
import styles from "./index.module.scss";

const NoteContent = () => {
  return (
    <div className={styles.NoteContent}>
      <h2>Your notes</h2>
      <input type="text" name="search" id="search" placeholder="Search..." />
      <NoteList />
    </div>
  );
};

export default NoteContent;
