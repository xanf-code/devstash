
import CardHeader from '../components/StashCard/CardHeader'
import CardBody from '../components/StashCard/CardBody'
import CardFooter from '../components/StashCard/CardFooter'

export default function StashCard({ stash }) {
    return (
        <div className="select-none bg-[#FAFAFA] dark:bg-[#100F10] rounded-md lg:m-0 lg:break-inside mb-4 last:mb-0 lg:cursor-pointer duration-300  hover:shadow-lg">
            {/* Card Header */}
            <CardHeader stash={stash} />
            {/* Card Body */}
            <CardBody stash={stash} />
            {/* Card Footer */}
            <CardFooter stash={stash} />
        </div>
    )
}