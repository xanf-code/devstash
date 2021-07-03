/* eslint-disable @next/next/no-img-element */
function CardBody({ stash }) {
    return (
        <div>
            <img src={stash.image} alt={stash.username} />
        </div>
    )
}

export default CardBody
