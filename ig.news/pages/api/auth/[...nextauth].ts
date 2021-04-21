import { query as q } from 'faunadb'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { name } = user
      
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_name'),
                  q.Casefold(user.name)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { name } }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_name'),
                q.Casefold(user.name)
              )
            ),
          )
        )

        return true;
      } catch {
        return true;
      }
    },
  }
})