
import CardHeader from '../components/StashCard/CardHeader'
import CardBody from '../components/StashCard/CardBody'
import CardFooter from '../components/StashCard/CardFooter'

function StashCard({ stash }) {
    return (
        <div className="bg-[#FAFAFA] dark:bg-[#100F10] rounded-md lg:mb-4 lg:break-inside cursor-pointer duration-300  hover:shadow-lg hover:translate-y-1">
            {/* Card Header */}
            <CardHeader stash={stash} />
            {/* Card Body */}
            <CardBody stash={stash} />
            {/* Card Footer */}
            <CardFooter stash={stash} />
        </div>
    )
}

export default StashCard
