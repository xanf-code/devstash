import TrendingComponent from "../TrendingComponent";
import { useQuery } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import { FETCH_TAGS_QUERY } from "../../graphQL/queries";
import getTag from "../../store/getTag";
import ClearComponent from "../../components/Desktop/ClearComponent"
import { useState, useEffect } from "react";

export default function TrendingDesktop() {
    const [sorted, setSort] = useState([]);

    const initial = getTag((state) => state.initial);
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

    return (
        <div className="lg:pt-[90px] h-0">
            <div className="pl-4 pb-2">
                <span className="flex justify-between">
                    <h1 className="font-montserrat text-base font-bold text-black dark:text-white mb-1">
                        Trending 📈
                    </h1>
                    {initial != "" ? (
                        <ClearComponent />
                    ) : (
                        ""
                    )}
                </span>
                <div className="flex flex-wrap">
                    {data && !loading ? (
                        sorted.map((data) => {
                            return (
                                <div className="select-none" key={data.id}>
                                    <div onClick={() => tagClick(data.tag)}>
                                        <TrendingComponent trendingData={data} />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <span className="mx-auto my-4">
                            <Spinner size="lg" />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
