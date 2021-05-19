import Link from "next/link";
import styles from './Twitter.module.css'
import Image from 'next/image'



export  function Twitter() {
  return (
    <div className={styles.twitter}>
      <h1>Twitter</h1>
      <Link href="https://twitter.com/TwitterJP?ref_src=twsrc%5Etfw">
        <a class="twitter-timeline" data-height="315">Tweets by TwitterJP</a>
      </Link>
      <script async src="https://platform.twitter.com/widgets.js"></script>
        
    </div>
  )
}
