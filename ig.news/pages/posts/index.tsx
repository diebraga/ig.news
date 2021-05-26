import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from '../../styles/styles.pages/posts.module.scss'
import Prismic from '@prismicio/client'

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

export const getStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}