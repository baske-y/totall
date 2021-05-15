import Link from "next/link";
import Image from 'next/image'
import styles from './Main.module.css'


const ITEMS = [
  {
    title: "タイトルテキストテキストテキストテキストテキスト",
    day: "2020/1/1",
    category: "カテゴリ1",
    src:"/img/main1.jpg",
    text:"本文1テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    href:"/",
    ancoer:"READ MORE"
  },
  {
    title: "タイトルテキストテキストテキストテキストテキスト",
    day: "2020/1/2",
    category: "カテゴリ2",
    src:"/img/main2.jpg",
    text:"本文2テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    href:"/",
    ancoer:"READ MORE"
  },
  {
    title: "タイトルテキストテキストテキストテキストテキスト",
    day: "2020/1/3",
    category: "カテゴリ3",
    src:"/img/main3.jpg",
    text:"本文3テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    href:"/",
    ancoer:"READ MORE"
  }

]

export  function Main() {
  
  return (
    <div className={styles.grid}>
      {ITEMS.map(item => {
        return (
          <div className={styles.main}>
            <h1>{item.title}</h1>
            <ul>
              <li className={styles.first}>
                {item.day}
              </li>
              <li>{item.category}</li>
            </ul>
            <div>
              <Image src={item.src} loading="eager" width={844} height={400} />
            </div>
            <h2>
              {item.text}
            </h2>
            <Link href={item.href}>
              <a >{item.ancoer}</a>
            </Link>
        </div>
        )
      })}
    </div>
    
  )
}
