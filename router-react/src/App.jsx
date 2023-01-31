import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <Fragment>
      <div className={styles.App}>
        <Link to="users">List of users</Link>
        <br />
        <Link to="users/1">First user</Link>
        <br />
        <Link to="posts">List of posts</Link>
        <br />
        <Link to="posts/1">First post</Link>
        <br />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default App;
