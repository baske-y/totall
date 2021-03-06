import Head from 'next/head'
import Link from 'next/link'
import styles from '../Footer/Footer.module.css'

const ITEMS = [
  {
    list:"会社概要",
    href:"/Menu"
  },
  {
    list:"採用",
    href:"/Blog"
  },
  {
    list:"お問い合わせ",
    href:"/Menu"
  },

]
export  function Footer() {
  return (
    <div className={styles.footer}>
    <div className={styles.footer_inner}>
      <div className={styles.footer_logo}>
        <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/type_logo.png' />
        <p>Learn to code, learn to creative.</p>
      </div>
      {ITEMS.map(item => {
        return(
         <ul className={styles.footer_list} key={item.list}>
            <Link href={item.href}>
              <a>{item.list}</a>
            </Link>
          </ul>
       )
     })}
    </div>
  </div>
  )
}
