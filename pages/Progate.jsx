import Head from 'next/head'
import { Main } from '../src/Progate/Main/Main'
import { Header } from '../src/Progate/Header/Header'
import { Footer } from '../src/Progate/Footer/Footer'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.progate}>
      <Head>
        <title>Progata-React-Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}