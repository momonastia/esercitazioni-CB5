import styles from "./post.module.scss";
import { useNavigate } from "react-router-dom";

const PostCard = ({ postData }) => {
  const navigate = useNavigate();

  const { id, title, body } = postData;

  const onHandleClick = () => navigate(`/posts/${id}`);

  return (
    <div onMouseUp={onHandleClick} className={styles.PostCard}>
      {id ? (
        <>
          <h3>{id}</h3>
          <p>{title}</p>
          <p>{body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostCard;
