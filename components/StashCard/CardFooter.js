import LikeButton from './LikeButton'
import setLayout from "../../store/setLayout"

function CardFooter({ stash }) {
    const compact = setLayout(state => state.compact);
    return (
        <div>
            <div className={`${compact ? 'pt-0' : 'pt-4'} pb-4 pl-4 pr-4`}>
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
