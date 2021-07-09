import StashCard from "../../components/StashCard";
import Masonry from 'react-masonry-css'
import { Waypoint } from 'react-waypoint';
import React from "react";
import useStore from "../../store/pagination";

export default function MasonryCard({ value,
    fetchMore,
    data,
    loading,
    initial }) {

    const initialPage = useStore(state => state.initialPage);
    const increment = useStore(state => state.increment);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 1
    };

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                data && !loading &&
                <div className="lg">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {data.getPosts.posts.map((stash, index) => (
                            <React.Fragment key={index}>
                                <StashCard stash={stash} />
                                {index === data.getPosts.posts.length - 5 && (
                                    <Waypoint onEnter={() => {
                                        const hasMore = data.getPosts.hasNext;
                                        if (hasMore) {
                                            increment
                                            fetchMore({
                                                variables: {
                                                    limit: 10,
                                                    page: initialPage,
                                                    sortBy: value,
                                                    tag: initial
                                                },
                                                updateQuery: (pv, { fetchMoreResult }) => {
                                                    if (!fetchMoreResult) {
                                                        return pv;
                                                    }
                                                    fetchMoreResult.getPosts.posts = [...pv.getPosts.posts, ...fetchMoreResult.getPosts.posts]
                                                    return fetchMoreResult;
                                                }
                                            })
                                        } else {
                                            return;
                                        }
                                    }} />
                                )}
                            </React.Fragment>
                        ))}
                    </Masonry>
                </div>
            )}
        </div>
    )
}