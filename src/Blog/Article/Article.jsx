import Link from "next/link";
import styles from './Article.module.css'
import Image from 'next/image'

export  function Article() {
  return (
    <div className={styles.article}>
      <article>
      <Image src="/img/pickup1.jpg" loading="eager" width={350} height={200} />
      <h2>タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
      <Link href = "/">
        <a >READ MORE</a>
      </Link>
      </article>
      <article>
      <Image src="/img/pickup2.jpg" loading="eager" width={350} height={200} />
      <h2>タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
      <Link href = "/">
        <a >READ MORE</a>
      </Link>
      </article>
      <article>
      <Image src="/img/pickup3.jpg" loading="eager" width={350} height={200} />
      <h2>タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
      <Link href = "/">
        <a >READ MORE</a>
      </Link>
      </article>
    </div>
  )
}
