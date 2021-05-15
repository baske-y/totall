import Link from "next/link";
import styles from './Ranking.module.css'
import Image from 'next/image'


const ITEMS = [
  {
    ranking: "Ranking",
    src:"/img/ranking1.jpg",
    text:"ランキング1タイトル1テキスト1"
  },
  {
    src:"/img/ranking2.jpg",
    text:"ランキング2タイトル2テキスト2"
  },
  {
    src:"/img/ranking3.jpg",
    text:"ランキング3タイトル3テキスト3"
  }
]
export  function Ranking() {
  return (
    <div className={styles.ranking}>
      {ITEMS.map(item => {
        return (
          <div>
            <h1>{item.ranking}</h1>
            <Image src ={item.src} loading="eager" className={styles.image} width={300} height={200}/>
            <p>{item.text}</p>
          </div>
        )
      })}
      
    </div>
  )
}
