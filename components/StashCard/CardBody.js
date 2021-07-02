import { Img } from "@chakra-ui/react"

function CardBody({ stash }) {
    return (
        <div className="mt-3">
            <Img className="m-auto" src={stash.image} alt={stash.username} />
        </div>
    )
}

export default CardBody
