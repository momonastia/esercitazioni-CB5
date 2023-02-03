import Link from "next/link";
import { navbarLinks } from "@/mocks/links";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
