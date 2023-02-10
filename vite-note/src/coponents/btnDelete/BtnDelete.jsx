import { MdDeleteOutline } from "react-icons/md";
import { ApplicationCtx } from "../../store";
import { useContext } from "react";
import styles from "./index.module.scss";

const BtnDelete = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleDelClick = (e) => {
    console.log(e.target.id);
    dispatch({
      type: "REMOVE_TODO_FROM_LIST",
      payload: data.id,
    });
  };

  return (
    <div className={styles.BtnDelete} onClick={onHandleDelClick}>
      <MdDeleteOutline />
    </div>
  );
};

export default BtnDelete;
