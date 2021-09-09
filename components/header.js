import Link from "next/link";
import styles from "../styles/Header.module.css";
import logo from "../public/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <section className={styles.logo}>
        <Image alt="ExpectAsian" src={logo} />
      </section>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? styles.active : ""}>Home</a>
          </Link>
        </li>
        {/* <li><Link href="/about" </Link></li> */}
        <li>
          <Link href="/menu">
            <a className={router.pathname == "/menu" ? styles.active : ""}>
              Menu
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://order.online/store/expectasian-998031">
            <a>Order Online</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? styles.active : ""}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
