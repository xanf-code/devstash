import TrendingComponent from "./TrendingComponent"
import { useQuery, gql } from "@apollo/client"
import { Spinner } from "@chakra-ui/react"
import Link from 'next/link'

export default function PrimarySidebar() {

    const FETCH_TAGS_QUERY = gql`
   {
    getPosts(limit:15 page:1){
        tag
        }
    }
    `

    const { loading, data } = useQuery(FETCH_TAGS_QUERY);

    return (
        <div className=" bg-gray-100 dark:bg-gray-900 rounded-md">
            <div className="p-4">
                <h1 className="font-montserrat text-base font-bold text-black dark:text-white mb-1">
                    Trending Stash⚡📈
                </h1>
                <div className="flex flex-wrap">
                    {data && !loading ? (
                        data.getPosts.map((data) => {
                            return <div key={data.tag}>
                                <Link href={`/tags/${encodeURIComponent(data.tag)}`}>
                                    <a>
                                        <TrendingComponent trendingData={data} />
                                    </a>
                                </Link>
                            </div>
                        })
                    ) : (
                        <span className="mx-auto my-4">
                            <Spinner size="lg" />
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}