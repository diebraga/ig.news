import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from '../styles/home.module.scss'
import { stripe } from '../services/stripe'

interface ProductProps {
  product: {
    productId: string
    amount: number
  }
}

export default function Home({ product }: ProductProps) {
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
            <span>for ${product.amount} only.</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="avatar.svg" alt="coder girl"/>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1IgXyLC9XoOuhM8BOisDvkMx', { 
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }
  return {
    props: {
      product,
    },
  }
}
