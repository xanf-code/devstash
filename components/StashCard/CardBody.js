import { Img } from "@chakra-ui/react"

function CardBody({ stash }) {
    return (
        <div>
            <span className="mt-3">
                <Img src={stash.image} alt={stash.username} objectFit="cover" />
            </span>
        </div>
    )
}

export default CardBody
