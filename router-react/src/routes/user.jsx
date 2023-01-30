import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./user.module.scss";

export default function User() {
  let { user } = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  return (
    <div className={styles.User} id={userData.id}>
      <div className={styles.content}>
        <h1> User id: {userData.id}</h1>
        <p>{userData.firstName + " " + userData.lastName}</p>
      </div>
    </div>
  );
}
