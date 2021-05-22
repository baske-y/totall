import styles from '../Contact/Contact.module.css'

export function Contact () {
  return(
    <div className={styles.contact}>
      <h2>お問い合わせ</h2>
      <p>メールアドレス(必須)</p>
      <input type="text" className={styles.text}/>
      <p>お問い合わせ内容(必須)</p>
      <textarea name="" id="" cols="60" rows="11"></textarea>
      <input type="submit" value="送信" className={styles.submit}/>
    </div>
  )
}