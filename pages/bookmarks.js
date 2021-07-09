import Head from "next/head";
import { getSession } from "next-auth/client";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Masonry from 'react-masonry-css'
import StashCard from "../components/StashCard";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Bookmarks({ data, id }) {

    const router = useRouter()

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 1
    };

    useEffect(() => {
        if (id === 'NA') {
            router.push('/')
        }
    }, [id, router])

    return (
        <div>
            <Head>
                <title>Bookmarks</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen pt-20 lg:w-[80%] w-[90%] m-auto">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {data && (
                        data.map((stash, index) => {
                            return (
                                <div key={index}>
                                    <StashCard stash={stash} />
                                </div>
                            )
                        })
                    )}

                </Masonry>
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx);
    const client = new ApolloClient({
        uri: "https://snowy-morning-277.fly.dev/",
        cache: new InMemoryCache(),
    });

    if (session) {
        const { data } = await client.query({
            variables: {
                userID: session.id,
            },
            query: gql`
        query getBookmarksPosts($userID: ID!) {
            getBookmarksPosts(userID: $userID) {
            id
            tag
            createdAt
            body
            title
            image
            likes {
                createdAt
                username
                userID
            }
            creator {
                username
                userImage
            }
            likeCount
            viewCount
            }
        }
    `,
        });

        return {
            props: {
                session,
                data: data.getBookmarksPosts,
            },
        };
    } else {
        return {
            props: {
                id: 'NA',
                data: null
            }
        };
    }
}
