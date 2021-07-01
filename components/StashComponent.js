import { gql, useQuery } from "@apollo/client";
import StashCard from "../components/StashCard";

export default function StashComponent() {

    const FETCH_ALL_POSTS = gql`
    {
      getPosts(limit: 10, page: 1, sortBy: "-createdAt") {
        id
        tag
        createdAt
        body
        title
        image
        creator {
            username
            userImage
        }
        likeCount
        viewCount
      }
    }
  `;

    const { loading, data } = useQuery(FETCH_ALL_POSTS);

    return (
        <div className="pt-16 lg:pt-20 min-h-screen lg:min-h-0 m-auto w-10/12">
            <h1 className="mb-3 lg:mb-5 text-blue-600 text-lg font-bold font-montserrat uppercase tracking-widest">
                Stash
            </h1>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                data && !loading && <div className="lg:masonry lg:before:box-inherit lg:after:box-inherit">
                    {data.getPosts.map((stash) => {
                        return <StashCard key={stash.id} stash={stash} />
                    })}
                </div>
            )}
        </div>
    );
}
