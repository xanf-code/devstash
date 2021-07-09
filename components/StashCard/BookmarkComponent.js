import { ADD_BOOKMARKS, GET_BOOKED } from "../../graphQL/queries";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import sessionData from "../../store/session";
import { signIn } from 'next-auth/client';
import { motion, useAnimation } from "framer-motion"

export default function BookmarkComponent({ stash: { id } }) {

    const sessionID = sessionData((state) => state.sessionID);
    const [bookmarked, setBookmark] = useState(false);
    const control = useAnimation();

    const { data } = useQuery(GET_BOOKED, {
        variables: {
            userID: sessionID
        },
    });

    useEffect(() => {
        if (data && data.getUser.bookmarks.includes(id)) {
            setBookmark(true);
        } else {
            setBookmark(false);
        }
    }, [data, id, sessionID]);

    const [bookmarkpost] = useMutation(ADD_BOOKMARKS, {
        variables: {
            userID: sessionID,
            postID: id,
        },
        refetchQueries: [{
            query: GET_BOOKED,
            variables: {
                userID: sessionID
            }
        }]
    });

    return (
        <div
            onClick={sessionID != null ? bookmarkpost : signIn}
            className="hover:bg-[#e3edf9] dark:hover:bg-[#151617] rounded-md p-1.5 duration-300"
        >
            <span onClick={() => {
                control.start({
                    rotate: [0, 20, -20, 0],
                    scale: [1, 1.4, 1.2, 1]
                })
            }}>
                <motion.svg
                    animate={control}
                    className={`${bookmarked ? 'text-blue-800  duration-200 dark:text-blue-800' : 'duration-200 text-black dark:text-white'}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                        fill="currentColor"
                    />
                </motion.svg>
            </span>
        </div>
    );
}