import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/api";
import styles from "@/styles/dPost.module.scss";

export default function () {
  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (router.isReady) {
      GET(`posts/${id}`).then((data) => setPostData(data));
    }
  }, [router.isReady]);

  return (
    <div className={styles.dPost}>
      <img src={postData.image} alt={postData.title} />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   //   const res = await fetch(`https://dummyjson.com/post/${id}`);
//   //   const posts = await res.json();

//   return {
//     props: {
//       //   posts: posts.posts,
//     },
//   };
// }
