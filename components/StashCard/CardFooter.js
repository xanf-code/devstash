import LikeButton from './LikeButton'
import setLayout from "../../store/setLayout"

function CardFooter({ stash }) {

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
                            <h1 className="text-black dark:text-white font-poppins font-semibold self-center text-sm">
                                {kFormatter(stash.likeCount)}
                            </h1>
                            <h1 className="ml-1.5 text-black dark:text-white font-poppins font-semibold text-sm self-center">
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
                        <div className="hover:bg-[#e3edf9] dark:hover:bg-[#151617] rounded-md p-1.5 duration-300">
                            <svg className="text-black dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z" fill="currentColor" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFooter
