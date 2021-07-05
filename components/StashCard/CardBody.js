import setLayout from "../../store/setLayout"

/* eslint-disable @next/next/no-img-element */
function CardBody({ stash }) {
    const compact = setLayout(state => state.compact);

    return (
        <div className={`${compact ? 'hidden' : ''}`}>
            <img src={stash.image} alt={stash.username} />
        </div>
    )
}

export default CardBody
