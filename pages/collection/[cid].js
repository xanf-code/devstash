import { useRouter } from 'next/router'
import Head from "next/head";
import { useQuery, useMutation } from "@apollo/client"
import Masonry from 'react-masonry-css'
import StashCard from "../../components/StashCard";
import { FETCH_COLLECTION_QUERY, GET_BOOKED, RENAME_STASH } from '../../graphQL/queries'
import { useSession } from 'next-auth/client';
import { useState } from 'react';

export default function Bookmarks() {

    const router = useRouter()
    const { cid } = router.query
    const [session, { loading: loadSession }] = useSession();
    const [edit, setEdit] = useState(false);

    const { loading, data } = useQuery(FETCH_COLLECTION_QUERY, {
        variables: {
            userID: cid,
        },
    });

    const { data: userData } = useQuery(GET_BOOKED, {
        variables: {
            userID: cid
        },
    });

    const [text, setText] = useState(userData ? userData.getUser.bookmarks.name : '');

    const [renameStash] = useMutation(RENAME_STASH, {
        variables: {
            userID: cid,
            name: text === '' ? 'Example-Stash' : text,
        },
        refetchQueries: [{
            query: GET_BOOKED,
            variables: {
                userID: cid
            }
        }]
    });

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 1
    };

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleApply = () => {
        renameStash()
        setEdit(!edit);
    }

    return (
        <div>
            <Head>
                <title>DevStash | {userData && userData.getUser.name}</title>
                <meta name="title" content={`DevStash | ${userData && userData.getUser.name} Bookmarks`} />
                <meta name="description" content={userData && userData.getUser.name} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://devstash.vercel.app/collection/60eb205e5f320037e0973cc4" />
                <meta property="og:title" content="Bookmarks" />
                <meta property="og:description" content="something here" />
                <meta property="og:image" content="" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://devstash.vercel.app/collection/60eb205e5f320037e0973cc4" />
                <meta property="twitter:title" content="Bookmarks" />
                <meta property="twitter:description" content="something here" />
                <meta property="twitter:image" content="" />
            </Head>
            <div className="min-h-screen pt-20 lg:w-[70%] w-[90%] m-auto">
                <div className="pb-3 flex justify-between">
                    <div className="w-[70%] self-center">
                        {userData && (
                            edit === false ? <h1 className="text-black truncate dark:text-white font-poppins font-bold text-2xl">
                                {userData.getUser.bookmarks.name}
                            </h1> : <input className="bg-transparent b-0 w-full p-2 outline-none text-black dark:text-white font-poppins font-medium" onChange={handleInput} type="text" placeholder="Name your stash"
                                value={text} />
                        )}
                    </div>
                    <div className="self-center cursor-pointer bg-transparent hover:border-[1px] border-transparent hover:border-blue-500 duration-300 p-2 rounded-md">
                        {session && session.id === cid && (
                            <div onClick={handleApply}>
                                {
                                    edit === true ? <div>
                                        <h1 className="text-black dark:text-white font-poppins text-sm font-medium">✅ Apply</h1>
                                    </div> : <div>
                                        <h1 className="text-black dark:text-white font-poppins text-sm font-medium">✏️ Edit</h1>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {data && (
                        data.getBookmarksPosts.map((stash, index) => {
                            return (
                                <div key={index}>
                                    <StashCard stash={stash} />
                                </div>
                            )
                        })
                    )}
                </Masonry>
                {loading && (
                    <div className="pt-20">Loading</div>
                )}
            </div>
        </div>
    );
}