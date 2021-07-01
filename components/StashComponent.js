import { useQuery } from "@apollo/client";
import StashCard from "../components/StashCard";
import TrendingDesktop from "./Desktop/TrendingComponent";
import { FETCH_POSTS_QUERY } from "../graphQL/queries";
import getTag from "../store/getTag";
import { useSession } from 'next-auth/client';

export default function StashComponent() {

    const [session] = useSession();
    const initial = getTag((state) => state.initial);

    const { loading, data } = useQuery(FETCH_POSTS_QUERY, {
        variables: {
            limit: 30,
            page: 1,
            sortBy: "-createdAt",
            tag: initial
        }
    });

    return (
        <div className="flex-0 lg:flex">
            <div className="invisible lg:visible lg:w-[18%]">
                <TrendingDesktop />
            </div>
            <div className="pt-16 lg:ml-4 lg:pt-20 min-h-screen lg:min-h-0 m-auto lg:m-0 w-[90%] lg:w-[80%]">
                <div className="lg:p-2">
                    <h1 className="mb-3 pt-4 lg:pt-0 lg:mb-5 text-blue-600 text-lg font-bold font-montserrat uppercase tracking-widest">
                        Stash
                    </h1>
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : (
                        data && !loading &&
                        <div className="lg:masonry lg:before:box-inherit lg:after:box-inherit">
                            {data.getPosts.map((stash, index) => {
                                return <StashCard key={index} stash={stash} session={session} />
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
