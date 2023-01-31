import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import styles from "./user.module.scss";
import UserCard from ".././components/userCard/userCard";

export default function User() {
  let { user } = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  return (
    <Fragment>
      <div className={styles.User} id={userData.id}>
        <div className={styles.content}>
          <UserCard userData={userData} />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
