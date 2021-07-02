import MasonryCard from "./StashCard/Masonry";
import TrendingDesktop from "./Desktop/TrendingComponent";
import React, { useState } from "react";
import useStore from "../store/pagination";

export default function StashComponent() {

    const setInitital = useStore(state => state.setInitital);
    const [value, setValue] = useState('-createdAt');

    const menu = [
        {
            name: "Recents",
            value: "-createdAt"
        },
        {
            name: "Most Stashed",
            value: "-likeCount"
        },
        {
            name: "Most Viewed",
            value: "-viewCount"
        },
    ]

    function onTrigger(value) {
        setInitital()
        setValue(value)
    }

    return (
        <div className="flex-0 lg:flex">
            <div className="invisible lg:visible lg:w-[18%]">
                <TrendingDesktop />
            </div>
            <div className="pt-16 lg:ml-4 lg:pt-20 min-h-screen lg:min-h-0 m-auto lg:m-0 w-[90%] lg:w-[80%]">
                <div className="pt-2">
                    <div className="pb-2 flex">
                        <div className="bg-red-500">
                            haha
                        </div>
                        <div className="bg-red-300 w-full">
                            <div className="flex">
                                {menu.map(ind => {
                                    return <div key={ind.name} onClick={() => onTrigger(ind.value)} className="lg:cursor-pointer">
                                        <h1>{ind.name}</h1>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <MasonryCard value={value} />
                </div>
            </div>
        </div>
    );
}
