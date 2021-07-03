import { Img } from "@chakra-ui/react"

function CardBody({ stash }) {
    return (
        <div>
            <Img src={stash.image} alt={stash.username} />
        </div>
    )
}

export default CardBody
