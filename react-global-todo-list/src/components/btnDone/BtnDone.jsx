import { MdDoneOutline } from "react-icons/md";
import InitailContext from "../../store/context";
import { useContext } from "react";
import styles from "./index.module.scss";

const BtnDone = ({ data }) => {
  const { dispatch } = useContext(InitailContext);

  const onHandleDoneClick = (e) => {
    console.log(e.target.id);
    dispatch({
      type: "SET_TODO_ITEM",
      payload: data.id,
    });
  };

  return (
    <div className={styles.BtnDone} onClick={onHandleDoneClick}>
      <MdDoneOutline />
    </div>
  );
};

export default BtnDone;
