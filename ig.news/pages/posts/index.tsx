import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from '../../styles/styles.pages/posts.module.scss'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type Post = {
  slug: string
  excerpt: string
  title: string
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
    <Head>
      <title>Posts Ig.news</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        {posts.map(item => {
          return (
            <a href='#' key={item.slug}>
              <time>{item.updatedAt}</time>
              <strong>{item.title}</strong>
              <p>
                {item.excerpt}
              </p>
            </a>  
          )
        })}
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

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content
        .find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  });

  return {
    props: {
      posts: posts
    }
  }
}