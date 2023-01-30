import { useState, useEffect, Fragment } from "react";
import styles from "./user.module.scss";

export default function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=30`)
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);

  console.log(usersData);

  return (
    <div className={styles.Users}>
      <div className={styles.content}>
        <h1>Users list</h1>
        {usersData.users?.map((user) => (
          <p key={user.id}>
            {user.id + " " + user.firstName + " " + user.lastName}
          </p>
        ))}
      </div>
    </div>
  );
}
