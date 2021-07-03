import MasonryCard from "./StashCard/Masonry";
import TrendingDesktop from "./Desktop/TrendingComponent";
import React, { useState } from "react";
import useStore from "../store/pagination";
import NavButtons from "./Buttons/NavButtons";

export default function StashComponent() {

    const setInitital = useStore(state => state.setInitital);
    const [value, setValue] = useState('-createdAt');

    const menu = [
        {
            name: "⏱️ Recents",
            value: "-createdAt",
            active: value,
        },
        {
            name: "🚀 Most Stashed",
            value: "-likeCount",
            active: value,
        },
        {
            name: "👀 Most Viewed",
            value: "-viewCount",
            active: value,
        },
    ]

    function onTrigger(value) {
        setValue(value);
        setInitital();
    }

    return (
        <div className="flex-0 lg:flex">
            <div className="invisible lg:visible lg:w-[18%]">
                <TrendingDesktop />
            </div>
            <div className="pt-16 lg:ml-4 lg:pt-20 min-h-screen lg:min-h-0 m-auto lg:m-0 w-[90%] lg:w-[80%]">
                <div className="pt-2">
                    <div className="pb-2 flex">
                        <div className="bg-[#fafafa] dark:bg-[#151617] rounded-md w-full mb-2 duration-200">
                            {/* Search Here */}
                            {/* <div className="float-left bg-red-500">
                                haha
                            </div> */}
                            <div className="flex lg:float-right">
                                {menu.map(ind => {
                                    return <div key={ind.name} onClick={() => onTrigger(ind.value)} className="lg:cursor-pointer m-auto lg:m-0">
                                        <div className={`m-2 hover:bg-[#e3edf9] dark:hover:bg-[#272729] lg:cursor-pointer rounded-md ${ind.active === ind.value ? 'bg-[#e3edf9] dark:bg-[#272729]' : ''}`}>
                                            <NavButtons data={ind} />
                                        </div>
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