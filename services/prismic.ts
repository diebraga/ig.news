import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    'https://ignewsdev77.cdn.prismic.io/api/v2',
    {
      req,
      accessToken: process.env.PRISIC_ACCESS_TOKEN
    }
  )

  return prismic
}