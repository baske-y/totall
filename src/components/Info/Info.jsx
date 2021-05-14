import Link from "next/link";
import { Size } from "../Size/Size";
import styles from './Info.module.css'


export  function Info() {
  return (
    <div className={styles.info}>
      <h2>TOTALLY Short Sleeve Shirt</h2>
      <p>
        テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキスト
      </p>
      <p>￥9,999 +tax</p>
      <Size />
    </div>
  )
}
