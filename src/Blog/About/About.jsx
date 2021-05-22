import Link from "next/link";
import styles from './About.module.css'

const ITEMS = [
  {
    text:"プロフィール詳細",
    src:"#"
  },
  {
    text:"お仕事の依頼",
    src:"#"
  },
  {
    text:"お問い合わせ",
    src:"#"
  }
]
export  function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      {ITEMS.map(item => {
        return(
          <div className={styles.about_list} key={item}>
            <ul>
              <li>
                <Link href={item.src}>
                  <a>{item.text}</a>
                </Link>
              </li>
            </ul>

          </div>
          )
        })}
    </div>
    
  )
}
