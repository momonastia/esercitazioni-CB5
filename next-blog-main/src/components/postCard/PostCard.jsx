import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

const PostCard = ({ data }) => {
  const { title, id } = data;

  return (
    <div className={styles.postCard}>
      <h2>{title}</h2>
      <Link href={`/post/${id}`}>
        <Image
          src={`https://picsum.photos/800/600/?${id})}`}
          alt={title}
          width={500}
          height={400}
          priority
        />
        <p>Continua a leggere...</p>
      </Link>
    </div>
  );
};

export default PostCard;
