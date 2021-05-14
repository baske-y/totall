import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer/Footer'
import { Header } from '../src/components/Header/Header'
import { Info } from '../src/components/Info/Info'
import { Item } from '../src/components/Item/Item'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.wrapper}>
        <Item />
        <Info />
      </div>
      <Footer />
    </div>
  )
}