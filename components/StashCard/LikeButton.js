import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LIKE_POST_QUERY, FETCH_POSTS_QUERY } from "../../graphQL/queries";
import sessionData from "../../store/session";
import Link from 'next/link'
import { signIn } from 'next-auth/client';

function LikeButton({ stash: { id, likes } }) {
    const sessionID = sessionData((state) => state.sessionID);

    const [stashed, setStashed] = useState(false);

    useEffect(() => {
        if (sessionID && likes.find((like) => like.userID === sessionID)) {
            setStashed(true);
        } else {
            setStashed(false);
        }
    }, [likes, sessionID]);

    const [likePost] = useMutation(LIKE_POST_QUERY, {
        variables: {
            userID: sessionID,
            postID: id,
        },
    });

    const likeButton = sessionID ? (
        stashed ? (
            <h1>Unlike</h1>
        ) : (
            <h1>Like</h1>
        )
    ) : (
        <div onClick={signIn}>
            <h1>LOGIN</h1>
        </div>

    );

    return <div onClick={likePost}>{likeButton}</div>;
}

export default LikeButton;
