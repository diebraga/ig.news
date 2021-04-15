import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hello, Welcome</span>
          <h1>News about the <span>React</span> World.</h1>
          <p>
            Get access to the publications <br />
            <span>for $0.99 month.</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="avatar.svg" alt="coder girl"/>
      </main>
    </>
  )
}
