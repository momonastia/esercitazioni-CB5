import styles from "./index.module.scss";
import { useContext, useState } from "react";
import { ApplicationCtx } from "../../store";
import Image from "../Image";

const Login = () => {
  /* we put dispatch mode here by useContext as far as we need it inside onHandleSubmit function */

  const { dispatch } = useContext(ApplicationCtx);

  const [userName, setUserName] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_USER_NAME",
      payload: userName,
    });
    localStorage.setItem("Node-app-username", userName);
  };

  return (
    <div className={styles.Login}>
      <Image />
      <form onSubmit={onHandleSubmit}>
        <h3>Log in</h3>
        <input
          className={styles.loginField}
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(e) => setUserName(() => e.target.value)}
          placeholder="Write your username"
        />
        <input type="submit" value="Log in" className={styles.loginBtn} />
      </form>
    </div>
  );
};

export default Login;
