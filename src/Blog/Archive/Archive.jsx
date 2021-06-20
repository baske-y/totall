import Link from "next/link";
import styles from './Archive.module.css'
const ITEMS = [
  {
    day:"2020年1月",
    src:"/"
  },
  {
    day:"2020年2月",
    src:"/"
  },
  {
    day:"2020年3月",
    src:"/"
  },
  {
    day:"2020年4月",
    src:"/"
  },
  {
    day:"2020年5月",
    src:"/"
  },
  {
    day:"2020年6月",
    src:"/"
  },
  {
    day:"2020年7月",
    src:"/"
  },
  {
    day:"2020年8月",
    src:"/"
  },
  {
    day:"2020年9月",
    src:"/"
  },
  {
    day:"2020年10月",
    src:"/"
  },
  {
    day:"2020年11月",
    src:"/"
  },
  {
    day:"2020年12月",
    src:"/"
  },
]
export function Archive () {
  return (
   <div className={styles.archive}>
     <h1 className={styles.title}>Archive</h1>
     {ITEMS.map(item => {
       return(
         <ul className={styles.list} key={item.day}>
           <li>
             <Link href={item.src}>
              <a>{item.day}</a>
             </Link>
           </li>
           
         </ul>
 
       )
     })}

   </div>

  )
}