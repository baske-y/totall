import Link from "next/link";
import styles from './Menu.module.css'
import Image from 'next/image'


const ITEMS = [
  {
    list: "NEW",
    href:"#"
  },
  {
    list: "CATEGORY",
    href:"#"
  },
  {
    list: "COLUMN",
    href:"#"
  },
  {
    list: "SERIES",
    href:"#"
  },
  {
    list: "Q&A",
    href:"#"
  },
  
  
]
export  function Menu() {
  return(
    <div className={styles.menu}>
      <h1>MENU</h1>
      {ITEMS.map(item => {
        return (
          <div className={styles.menu_list}>

            <Link href = {item.href}>
              <a >{item.list}</a>
            </Link>

          </div>
        )
    
      })}

    </div>

  )
}
