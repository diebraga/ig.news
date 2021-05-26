import Head from 'next/head'
import styles from '../../styles/styles.pages/posts.module.scss'

export default function Posts() {
  return (
    <>
    <Head>
      <title>Posts Ig.news</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a>
          <time>February 2 2023</time>
          <strong>Yarn dev starting your app</strong>
          <p>
          If you are used to using npm you might be expecting to use --save or --save-dev . These have been replaced by yarn add and yarn add --dev . For more information ...
          </p>
        </a>
        <a>
          <time>February 2 2023</time>
          <strong>Yarn dev starting your app</strong>
          <p>
          If you are used to using npm you might be expecting to use --save or --save-dev . These have been replaced by yarn add and yarn add --dev . For more information ...
          </p>
        </a>
      </div>
    </main>
    </>
  )
}