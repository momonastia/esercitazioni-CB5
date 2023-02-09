import styles from "./index.module.scss";

const NoteItem = ({ data }) => {
  return (
    <div className={styles.NoteItem}>
      <h3>{data.title}</h3>
      <p>{data.content}</p>
    </div>
  );
};

export default NoteItem;
