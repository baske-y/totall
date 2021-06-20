import Link from "next/link";
import styles from './Header.module.css'

const Left_List = [
 {
  href:"/",
  title: "ALL",
},
 {
  href:"/",
  title: "NEW",
},
 {
  href:"/",
  title: "CATEGORY",
},
 {
  href:"/Progate",
  title: "LOOKBOOK",
},
 {
  href:"/Blog",
  title: "BLOG",
},


]

const Right_List = [
  {
    title: "LOGIN",
    href:"/Menu",
  },
  {
    title: "CONTACT",
    href:"/Menu",
  }
]
export  function Header() {
  return (
    <div className={styles.header}>
      <h1>TOTALLY</h1>
      <div className={styles.header_side}>
        <ul className={styles.left}>
        {Left_List.map((item) => {
            return(
              <li key={item.title}>
                <Link href={item.href}>
                <a>{item.title} </a>
                </Link>
              </li>
              
            )
          })}
          
        </ul>
        <ul className={styles.right}>
          {Right_List.map((item) => {
            return(
              <li key={item.title}>
                <Link href={item.href}>
                <a>{item.title}</a> 
                </Link>
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}
