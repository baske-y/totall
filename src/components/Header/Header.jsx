import Link from "next/link";
import styles from './Header.module.css'


export  function Header() {
  return (
    <div className={styles.header}>
      <h1>TOTALLY</h1>
      <div className={styles.header_side}>
        <ul className={styles.left}>
          <li>
            <Link href="/">
            <a>ALL </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a>NEW</a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a>VINTAGE </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a>CATEGORY </a>
            </Link>
          </li>
          <li>
            <Link href="/Progate">
            <a>LOOKBOOK </a>
            </Link>
          </li>
          <li>
            <Link href="/Blog">
            <a>BLOG </a>
            </Link>
          </li>
        </ul>
        <ul className={styles.right}>
          <li><a>LOGIN </a></li>
          <li><a>CONTACT </a></li>
        </ul>

      </div>
    </div>
  )
}
