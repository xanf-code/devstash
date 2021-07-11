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
                <title>Bookmarks</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen pt-20 lg:w-[70%] w-[90%] m-auto">
                <div className="pb-3 flex">
                    <div>
                        {userData && (
                            edit === false ? <h1 className="text-black dark:text-white">
                                {userData.getUser.bookmarks.name}
                            </h1> : <input onChange={handleInput} type="text" placeholder="add new name" value={text} />
                        )}
                    </div>
                    <div>
                        {session && session.id === cid && (
                            <div onClick={handleApply}>
                                {edit === true ? <h1>apply</h1> : <h1>edit</h1>}
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