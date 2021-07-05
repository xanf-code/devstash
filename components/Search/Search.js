import getTag from "../../store/getTag"
import { useQuery } from "@apollo/client";
import { TAGS_QUERY } from "../../graphQL/queries";
import { useState } from 'react'
import setTextStore from '../../store/setText'
import setActiveStore from '../../store/setActive'

export default function Search() {

    const clear = getTag((state) => state.clear);
    const tagClick = getTag(state => state.tagClick);
    const maintext = setTextStore(state => state.maintext);
    const [suggestion, setSuggestion] = useState([]);
    const { loading, data } = useQuery(TAGS_QUERY);

    const onChangeHandler = (text) => {
        setTextStore.setState({ maintext: text })
        let matches = [];
        if (text.length > 0) {
            matches = data.getAllPosts.filter(res => {
                if (text === "") {
                    return res;
                } else if (res.tag.toLowerCase().includes(text.toLowerCase())) {
                    return res;
                }
            })
            const arrayForSort = [...matches]
            var uniqueArr = [];
            arrayForSort.forEach((item) => {
                if (!uniqueArr.includes(item.tag)) {
                    uniqueArr.push(item.tag);
                }
            })
            const obj = uniqueArr.map(item => ({
                tag: item
            }))
            setSuggestion([...obj])
        } else {
            matches = [];
            setSuggestion([])
        }
    }

    const onSetSuggestion = (text) => {
        tagClick(text);
        setActiveStore.setState({ active: false })
        setTextStore.setState({ maintext: text })
        setSuggestion([]);
    }

    const showClear = () => {
        setTextStore.setState({ maintext: "" })
        setSuggestion([])
        clear()
    }

    return (
        <div className="relative flex-1 self-center">
            <div className="flex">
                <input className="w-full h-full bg-transparent b-0 p-2 outline-none text-black dark:text-white font-poppins font-medium lg:font-semibold ml-2 mr-4"
                    type="text"
                    value={maintext}
                    placeholder="Search here"
                    onChange={(e) => onChangeHandler(e.target.value.toLowerCase())}
                    onBlur={() => {
                        setTimeout(() => {
                            setSuggestion([])
                        }, 100)
                    }}
                />
                {maintext != "" && (
                    <svg
                        onClick={showClear}
                        className="self-center cursor-pointer text-gray-500 mr-3 lg:mr-0"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
                            fill="currentColor"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            fill="currentColor"
                        />
                    </svg>
                )}
            </div>
            <div className="absolute z-10 w-full mt-4 bg-white dark:bg-black shadow-lg rounded-md">
                {suggestion && suggestion.map((data, index) => {
                    return (
                        <div key={index}>
                            <div className="p-3 cursor-pointer hover:bg-[#dbeafe] dark:hover:bg-[#111827]" onClick={() => onSetSuggestion(data.tag)}>
                                <h1 className="flex flex-col text-black dark:text-white font-poppins font-medium">{data.tag}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}