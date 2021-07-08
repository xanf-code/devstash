import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LIKE_POST_QUERY } from "../../graphQL/queries";
import sessionData from "../../store/session";
import { signIn } from 'next-auth/client';
import { motion, useAnimation } from "framer-motion"

function LikeButton({ stash: { id, likes } }) {
    const sessionID = sessionData((state) => state.sessionID);
    const control = useAnimation();
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
        <div className="hover:bg-[#e3edf9] dark:hover:bg-[#151617] mr-2 rounded-md duration-300" onClick={() => {
            control.start({
                rotate: stashed ? 270 : 90,
            })
        }}>
            <motion.svg animate={control} className={`m-1 ${stashed ? 'text-blue-800 duration-200' : 'text-gray-600 dark:text-white duration-200'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path animate={control} fillRule="evenodd" clipRule="evenodd" d="M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z" fill="currentColor" /></motion.svg>
        </div>
    ) : (
        <div onClick={signIn}>
            <svg className='m-1 text-gray-600 dark:text-white' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z" fill="currentColor" /></svg>
        </div>

    );

    return <div className="self-center" onClick={likePost}>{likeButton}</div>;
}

export default LikeButton;
