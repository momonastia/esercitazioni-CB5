import BtnDelete from "../btnDelete/BtnDelete";
import styles from "./index.module.scss";

const NoteItem = ({ data }) => {
  return (
    <div className={styles.NoteItem}>
      <div className={styles.NoteTitle}>{data.title}</div>
      <p>{data.content}</p>
      <BtnDelete />
    </div>
  );
};

export default NoteItem;
