import Image from "next/image";
import { Fragment } from "react";
import styles from "./index.module.scss";

const Galleria = () => {
  return (
    <Fragment>
      <div className={styles.Galleria}>
        <h1>Galleria</h1>
        <div className={styles.content}>
          <Image
            src="https://picsum.photos/400/600"
            alt="first-image"
            width={400}
            height={200}
          />
          <Image
            src="https://api.lorem.space/image/pizza?w=1280&h=720&hash=8B7BCDC2"
            alt="first-image"
            width={400}
            height={200}
          />
          <Image
            src="https://api.lorem.space/image/pizza?w=1280&h=720&hash=500B67FB"
            alt="first-image"
            width={400}
            height={200}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Galleria;
