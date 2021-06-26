import Link from 'next/link'
import navStore from "../store/menuStore";
import { useEffect, useState } from "react";

function SecondarySidebar() {
    const toggleNav = navStore(state => state.toggleNav);
    const activeNav = navStore(state => state.activeNav);
    const activeElement = navStore(state => state.activeElement);
    const [pageURL, setPageURL] = useState('/');

    if (process.browser) {
        var location = window.location.pathname;
    }

    useEffect(() => {
        if (process.browser) {
            setPageURL(location);
        }

    }, [activeElement, location])


    const menuData = [
        {
            route: "/",
            name: "🏠  Home",
            active: 0,
        },
        {
            route: "/stashes",
            name: "🧭  Explore Stashes",
            active: 1,
        },
        {
            route: "/privacy",
            name: "🔏  Privacy Policy",
            active: 2,
        },
        {
            route: "/terms",
            name: "👀  Terms of use",
            active: 3,
        },
        {
            route: "/about",
            name: "💻   About",
            active: 4,
        },
    ]

    return (
        <div className="mt-4 flex flex-col">
            {menuData.map((value, index) => {
                return <Link key={index} href={value.route}>
                    <a onClick={toggleNav} className={`hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-1 dark:text-white text-[#8739F9] ${value.route === pageURL ? "bg-blue-100 dark:bg-gray-900" : ""}`}>
                        < div onClick={() => activeNav(value.route)} className="font-poppins font-semibold p-2">
                            {value.name}
                        </div>
                    </a>
                </Link>
            })}
        </div >
    )
}

export default SecondarySidebar