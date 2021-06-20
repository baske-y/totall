import Head from 'next/head'
import styles from '../Header/Header.module.css'

export  function Header() {
  return (
    <div className={styles.header}>
    <div className={styles.header_logo}>
      <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg' />
    </div>
  </div>
  )
}
