function CardFooter({ stash }) {
    return (
        <div>
            <div className="p-4">
                <div className="flex justify-between">
                    <ul className="flex justify-evenly">
                        <li className="pr-4">
                            <span>
                                {stash.likeCount}
                            </span>
                        </li>
                        <li>
                            {stash.viewCount}
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
