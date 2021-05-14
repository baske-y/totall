import Link from "next/link";
import Image from 'next/image'
import styles from './Item.module.css'


export  function Item() {
  return (
    <div className={styles.item}>
     <Image src="/img/item.jpg" loading="eager" width={400} height={500} />
      
    </div>
  )
}
