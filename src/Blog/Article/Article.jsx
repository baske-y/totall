import Link from "next/link";
import styles from './Article.module.css'
import Image from 'next/image'


const ITEMS = [
  {
    src:"/img/pickup1.jpg",
    text:"タイトル1テキスト1テキストテキストテキストテキストテキストテキスト",
    href:"/",
    ancoer:"READ MORE"
  },
  {
    src:"/img/pickup2.jpg",
    text:"タイトル2テキスト2テキストテキストテキストテキストテキストテキスト",
    href:"/",
    ancoer:"READ MORE"
  },
  {
    src:"/img/pickup3.jpg",
    text:"タイトル3テキスト3テキストテキストテキストテキストテキストテキスト",
    href:"/",
    ancoer:"READ MORE"
  }
  
]
export  function Article() {
  return(
    <div className={styles.article}>
      {ITEMS.map(item => {
        return (
          <div>
            <article>
            <Image src={item.src} loading="eager" width={350} height={200} />
            <h2>{item.text}</h2>
            <Link href = {item.href}>
              <a >{item.ancoer}</a>
            </Link>
            </article>
          </div>
        )
    
      })}

    </div>

  )
}
