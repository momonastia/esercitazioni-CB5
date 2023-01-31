import styles from "./user.module.scss";

import { useNavigate } from "react-router-dom";

const UserCard = ({ userData }) => {
  const navigate = useNavigate();

  const { id, firstName, lastName, age, email } = userData;

  const onHandleClick = () => navigate(`/users/${id}`);

  return (
    <div onMouseUp={onHandleClick} className={styles.UserCard}>
      {id ? (
        <>
          <h3>{firstName}</h3>
          <p>{lastName}</p>
          <p>{email}</p>
        </>
      ) : (
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
