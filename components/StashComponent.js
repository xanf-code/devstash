import MasonryCard from "./StashCard/Masonry";
import TrendingDesktop from "./Desktop/TrendingComponent";
import React, { useState } from "react";
import useStore from "../store/pagination";
import Modal from './Sheet/Modal'
import PageHeader from "./Desktop/PageHeader";

export default function StashComponent() {

    const setInitital = useStore(state => state.setInitital);
    const [value, setValue] = useState('-createdAt');
    const [show, setShow] = useState(false);

    const menu = [
        {
            name: "Recents",
            value: "-createdAt",
            active: value,
            light: 'new',
            dark: 'new'
        },
        {
            name: "Most Stashed",
            value: "-likeCount",
            active: value,
            light: 'rocket',
            dark: 'rocket'
        },
        {
            name: "Most Viewed",
            value: "-viewCount",
            active: value,
            light: 'eye',
            dark: 'eye'
        },
    ]

    function onTrigger(value) {
        setValue(value);
        setInitital();
    }

    function sheetTrigger(value) {
        onTrigger(value);
        setShow(false)
    }

    return (
        <div className="flex-0 lg:flex">
            <div className="invisible lg:visible lg:w-[18%]">
                <TrendingDesktop />
            </div>
            <div className="pt-16 lg:ml-4 lg:pt-20 min-h-screen lg:min-h-0 m-auto lg:m-0 w-[90%] lg:w-[80%]">
                <div className="pt-2">
                    <div className="pb-2 hidden lg:flex">
                        <div className="bg-[#fafafa] dark:bg-[#151617] rounded-md w-full mb-2 duration-200">
                            {/* Search Here */}
                            {/* <div className="float-left bg-red-500">
                                haha
                            </div> */}
                            <PageHeader menu={menu} onTrigger={onTrigger} />
                        </div>
                    </div>
                    <div className="lg:hidden mb-2">
                        <div className="">
                            <div onClick={() => setShow(!show)}>
                                <h1 className="text-white">{value}</h1>
                            </div>
                            <Modal show={show} setShow={setShow} menu={menu} sheetTrigger={sheetTrigger} />
                        </div>
                    </div>
                    <MasonryCard value={value} />
                </div>
            </div>
        </div>
    );
}