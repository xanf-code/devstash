import TrendingComponent from "../TrendingComponent";
import { useQuery } from "@apollo/client";
import { FETCH_TAGS_QUERY } from "../../graphQL/queries";
import getTag from "../../store/getTag";
import ClearComponent from "../../components/Desktop/ClearComponent"
import { useState, useEffect } from "react";
import setActiveStore from '../../store/setActive'
import setTextStore from '../../store/setText'

export default function TrendingDesktop() {

    const [sorted, setSort] = useState([]);
    // const initial = getTag((state) => state.initial);
    const tagClick = getTag((state) => state.tagClick);
    const active = setActiveStore(state => state.active);

    const { loading, data } = useQuery(FETCH_TAGS_QUERY, {
        variables: {
            limit: 50,
            page: 1,
        },
    });

    useEffect(() => {
        if (data) {
            const arrayForSort = [...data.getPosts.posts]
            const sort = arrayForSort.sort((a, b) => b.score - a.score);
            var uniqueArr = [];
            sort.forEach((item) => {
                if (!uniqueArr.includes(item.tag)) {
                    uniqueArr.push(item.tag);
                }
            })
            const obj = uniqueArr.map(item => ({
                tag: item
            }))
            setSort([...obj])
        }
    }, [data])

    const onTrendingClick = (text) => {
        tagClick(text)
        setTextStore.setState({ maintext: "" })
        setActiveStore.setState({ active: true })
    }

    return (
        <div className="lg:pt-[90px] h-0">
            <div className="pl-4 pb-2">
                <span className="flex justify-between">
                    <h1 className="font-montserrat text-base font-bold text-black dark:text-white mb-1">
                        Trending 📈
                    </h1>
                    {active && (
                        <ClearComponent />
                    )}
                </span>
                <div className="flex flex-wrap">
                    {data && !loading ? (
                        sorted.map((data, index) => {
                            return (
                                <div className="select-none" key={index}>
                                    <div onClick={() => onTrendingClick(data.tag)}>
                                        <TrendingComponent trendingData={data} />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <span className="mx-auto my-4">
                            <h1>Loading...</h1>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
