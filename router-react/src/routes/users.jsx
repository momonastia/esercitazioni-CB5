import { useState, useEffect, Fragment } from "react";
import { Outlet } from "react-router-dom";
import UserCard from ".././components/userCard/userCard";
import styles from "./users.module.scss";

export default function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=30`)
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);

  console.log(usersData);

  return (
    <Fragment>
      <div className={styles.Users}>
        <h1>Users list</h1>
        <div className={styles.content}>
          {usersData.users?.map((user) => (
            <UserCard userData={user} key={user.id} />
          ))}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
