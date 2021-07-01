import LikeButton from './LikeButton'

function CardFooter({ stash }) {

    return (
        <div>
            <div className="p-4">
                <div className="flex justify-between">
                    <ul className="flex justify-evenly">
                        <li className="pr-4">
                            <span className="flex">
                                <LikeButton stash={stash} />
                                <h1 className="text-black dark:text-white font-poppins font-semibold">
                                    {stash.likeCount}
                                </h1>
                            </span>
                        </li>
                        <li>
                            <h1 className="text-black dark:text-white font-poppins font-semibold">
                                {stash.viewCount}
                            </h1>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            bookmark
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardFooter
