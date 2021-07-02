import TrendingComponent from "./TrendingComponent"
import { useQuery } from "@apollo/client"
import { Spinner } from "@chakra-ui/react"
import { FETCH_TAGS_QUERY } from '../graphQL/queries'
import getTag from "../store/getTag";
import navStore from "../store/menuStore";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function PrimarySidebar() {
    // const initial = getTag((state) => state.initial);

    const router = useRouter()

    const [sorted, setSort] = useState([]);

    const toggleNav = navStore(state => state.toggleNav);
    const tagClick = getTag((state) => state.tagClick);

    const { loading, data } = useQuery(FETCH_TAGS_QUERY, {
        variables: {
            limit: 10,
            page: 1,
        },
    });

    useEffect(() => {
        if (data) {
            const arrayForSort = [...data.getPosts]
            const sort = arrayForSort.sort((a, b) => b.score - a.score);
            setSort([...sort])
        }
    }, [data])

    const toggle = async (data) => {
        if (window.location.pathname != "/stashes") {
            router.push("/stashes")
        }
        await tagClick(data);
        toggleNav();
    }

    return (
        <div className="lg:hidden bg-gray-100 dark:bg-gray-900 rounded-md">
            <div className="p-4">
                <h1 className="font-montserrat text-base font-bold text-black dark:text-white mb-1">
                    Trending Stash⚡📈
                </h1>
                <div className="flex flex-wrap">
                    {data && !loading ? (
                        sorted.map((data) => {
                            return (
                                <div className="select-none" key={data.id}>
                                    <div onClick={() => toggle(data.tag)}>
                                        <TrendingComponent trendingData={data} />
                                    </div>
                                </div>
                            )
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