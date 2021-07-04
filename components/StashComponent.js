import MasonryCard from "./StashCard/Masonry";
import TrendingDesktop from "./Desktop/TrendingComponent";
import React, { useState } from "react";
import useStore from "../store/pagination";
import Modal from './Sheet/Modal'
import PageHeader from "./Desktop/PageHeader";
import getTag from "../store/getTag"
import { useQuery } from "@apollo/client";
import { FETCH_POSTS_QUERY } from "../graphQL/queries";
import Search from "./Search/Search";

export default function StashComponent() {

    const setInitital = useStore(state => state.setInitital);
    const [value, setValue] = useState('-createdAt');
    const [show, setShow] = useState(false);
    const initial = getTag(state => state.initial);

    const { loading, data, fetchMore } = useQuery(FETCH_POSTS_QUERY, {
        variables: {
            limit: 10,
            page: 1,
            sortBy: value,
            tag: initial
        }
    });

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

    const switcher = (text) => {
        if (text === '-createdAt') {
            return "Recents"
        } else if (text === '-likeCount') {
            return "Most Stashed"
        } else {
            return "Most Viewed"
        }
    }

    return (
        <div className="flex-0 lg:flex">
            <div className="invisible lg:visible lg:w-[18%]">
                <TrendingDesktop />
            </div>
            <div className="pt-16 lg:ml-4 lg:pt-20 min-h-screen lg:min-h-0 m-auto lg:m-0 w-[90%] lg:w-[80%]">
                <div className="pt-2">
                    <div className="pb-2 hidden lg:flex justify-between">
                        <div className="bg-[#fafafa] dark:bg-[#151617] rounded-md w-full mb-2 duration-200">
                            <div className="flex justify-between">
                                <Search />
                                <PageHeader menu={menu} onTrigger={onTrigger} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden mb-3">
                        <div className="flex justify-between">
                            {/* Search component on mobile */}
                            <div>
                                search
                            </div>
                            <div className="rounded-md bg-[#fafafa]
                            dark:bg-[#151617]" onClick={() => setShow(!show)}>
                                <div className="flex py-2 px-3">
                                    <h1 className="font-montserrat font-semibold text-sm mr-2 text-black dark:text-white">{switcher(value)}</h1>
                                    <svg
                                        className="self-center text-black dark:text-white"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MasonryCard value={value} fetchMore={fetchMore} data={data} loading={loading} initial={initial} />
                </div>
            </div>
            <Modal show={show} setShow={setShow} menu={menu} sheetTrigger={sheetTrigger} />
        </div>
    );
}