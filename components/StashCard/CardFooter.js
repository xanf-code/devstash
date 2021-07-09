import LikeButton from './LikeButton'
import setLayout from "../../store/setLayout"
import AnimatedNumber from "react-animated-numbers"
import BookmarkComponent from './BookmarkComponent'

export default function CardFooter({ stash }) {

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num)
    }

    const compact = setLayout(state => state.compact);
    return (
        <div>
            <div className={`${compact ? 'pt-0' : 'pt-4'} pb-4 pl-4 pr-4`}>
                <div className="flex
                 justify-between">
                    <div className="flex justify-evenly">
                        <span className="pr-4 flex self-center">
                            <LikeButton stash={stash} />
                            <div className="text-black dark:text-white font-poppins font-semibold self-center text-sm">
                                <AnimatedNumber
                                    animateToNumber={kFormatter(stash.likeCount)}
                                    config={{ tension: 100, friction: 10 }}
                                    animationType={"random"}
                                />
                            </div>

                            <h1 className="ml-1 text-black dark:text-white font-poppins font-semibold text-sm self-center">
                                STASHED
                            </h1>
                        </span>
                    </div>
                    <div className="flex">
                        <span className="flex mr-2.5 self-center">
                            <h1 className="mr-1.5 text-gray-500 font-poppins font-semibold text-sm self-center">
                                {kFormatter(stash.viewCount)}
                            </h1>
                            <h1 className="text-gray-500 font-poppins font-semibold text-sm self-center">
                                VIEWS
                            </h1>
                        </span>
                        <BookmarkComponent stash={stash} />
                    </div>
                </div>
            </div>
        </div>
    )
}