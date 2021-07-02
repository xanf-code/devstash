import { Img } from "@chakra-ui/react"

function CardBody({ stash }) {
    return (
        <div className="hidden lg:flex">
            <Img src={stash.image} alt={stash.username} />
        </div>
    )
}

export default CardBody
