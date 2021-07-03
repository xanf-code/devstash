import * as timeago from 'timeago.js';
import Image from 'next/image'

function CardHeader({ stash }) {
    return (
        <div>
            <span className="flex px-4 py-4">
                <span className="flex self-center">
                    <Image className="inline object-cover mr-0.5 rounded-full" src={stash.creator.userImage} alt={stash.creator.username} width={34} height={34} />
                </span>
                <span className="flex flex-col pl-2.5 self-center">
                    <span className="text-black dark:text-white font-poppins font-semibold text-sm tracking-wide">
                        {stash.creator.username}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500 font-montserrat font-semibold text-xs">
                        {timeago.format(stash.createdAt * 1000)}
                    </span>
                </span>
            </span>
            <div className='mx-4 mb-2 py-0.5 rounded-[5px] inline-block bg-[#e3edf9] dark:bg-[#151617]'>
                <h1 className="px-2 text-[#5790cf] font-poppins text-xs font-medium leading-relaxed tracking-wide">
                    #{stash.tag.toUpperCase()}
                </h1>
            </div>
            <h1 className="px-4 pb-3 text-black dark:text-white font-poppins font-semibold leading-relaxed tracking-wide">
                {stash.title}
            </h1>
        </div>
    )
}

export default CardHeader
