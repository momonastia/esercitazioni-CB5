import { FiEdit } from "react-icons/fi";
import InitailContext from "../../store/context";
import { useContext } from "react";
import styles from "./index.module.scss";

const BtnEdit = ({ data }) => {
  const { dispatch } = useContext(InitailContext);

  const onHandleEditClick = (e) => {
    console.log(e.target.id);
    dispatch({
      type: "REMOVE_TODO_FROM_LIST",
      payload: data.id,
    });
  };

  return (
    <div className={styles.BtnEdit} onClick={onHandleEditClick}>
      <FiEdit />
    </div>
  );
};

export default BtnEdit;
