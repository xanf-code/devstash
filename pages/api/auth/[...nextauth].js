import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    callbacks: {
        session: async (session, user) => {
            session.id = user.id
            return Promise.resolve(session)
        }
    },
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Providers.Twitter({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        })
    ],
    pages: {
        signIn: "/signin"
    },
    database: process.env.DATABASE_URL,
})
