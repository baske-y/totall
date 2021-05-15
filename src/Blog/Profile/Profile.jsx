import Link from "next/link";
import styles from './Profile.module.css'
import Image from 'next/image'
import { Ranking } from "../Ranking/Ranking";
import { Archive } from "../Archive/Archive";

export  function Profile() {
  return (
    <div className={styles.profile}>
      <Image src ="/img/author.jpg" loading="eager" className={styles.image} width={150} height={150}/>
      <h1>User Name</h1>
      <p>
        プロフィールテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
      <Ranking />
      <Archive />
    </div>
  )
}
