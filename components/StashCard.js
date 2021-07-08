
import CardHeader from '../components/StashCard/CardHeader'
import CardBody from '../components/StashCard/CardBody'
import CardFooter from '../components/StashCard/CardFooter'
import { useMutation } from "@apollo/client";
import { VIEW_POST_QUERY } from "../graphQL/queries";

export default function StashCard({ stash }) {

    const id = localStorage.getItem('uuid');

    const [viewPost] = useMutation(VIEW_POST_QUERY, {
        variables: {
            userID: id,
            postID: stash.id,
        },
    });

    return (
        <div onClick={viewPost} className="select-none bg-[#FAFAFA] dark:bg-[#100F10] rounded-md lg:m-0 lg:break-inside mb-4 last:mb-0 lg:cursor-pointer duration-300  hover:shadow-lg">
            <a href={stash.body} target="_blank" rel="noopener noreferrer">
                <CardHeader stash={stash} />
                <CardBody stash={stash} />
                <CardFooter stash={stash} />
            </a>
        </div>
    )
}