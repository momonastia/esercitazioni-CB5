import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./post.module.scss";
import PostCard from "../components/postCard/postCard";

export default function Post() {
  let { post } = useParams();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${post}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [post]);

  console.log(postData);

  return (
    <div className={styles.Post} id={postData.id}>
      <div className={styles.content}>
        <PostCard postData={postData} />
        {/* <p>{`${userData.firstName} ${userData.lastName}`}</p> */}
      </div>
    </div>
  );
}
