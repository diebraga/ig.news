import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRISIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISIC_ACCESS_TOKEN
    }
  )

  return prismic
}