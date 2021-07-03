import Image from 'next/image'

function Icons(props) {
    return (
        <Image className="self-center" src={require(`/assets/${props.name}.svg`)} alt={props.name} width={20} height={20} />
    )
}

export default Icons
