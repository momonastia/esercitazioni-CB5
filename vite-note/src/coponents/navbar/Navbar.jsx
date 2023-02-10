import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(ApplicationCtx);
  /*   console.log("User", state.user); */

  const onLogOut = () => {
    dispatch({
      type: "CLEAR_USER_NAME",
      /* payload: userName, */
    });
    localStorage.removeItem("Node-app-username");
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.Username}>{state.user.username}</div>
      <button onClick={onLogOut} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
