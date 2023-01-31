import { useState, useEffect, Fragment } from "react";
import { Outlet } from "react-router-dom";
import PostCard from ".././components/postCard/postCard";
import styles from "./posts.module.scss";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=30`)
      .then((res) => res.json())
      .then((data) => setPostsData(data));
  }, []);

  console.log(postsData);

  return (
    <Fragment>
      <div className={styles.Posts}>
        <h1>Posts list</h1>
        <div className={styles.content}>
          {postsData.posts?.map((post) => (
            <PostCard postData={post} key={post.id} />
          ))}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
