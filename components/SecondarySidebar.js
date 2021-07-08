import Link from 'next/link'
import navStore from "../store/menuStore";
import { signIn, signOut, useSession } from 'next-auth/client';
import { useEffect, useState } from "react";
import Button from '../components/Buttons/Button'
import sessionData from '../store/session'

export default function SecondarySidebar() {

    const toggleNav = navStore(state => state.toggleNav);
    const activeNav = navStore(state => state.activeNav);
    const activeElement = navStore(state => state.activeElement);

    const [pageURL, setPageURL] = useState('/');
    const [session, loading] = useSession();

    if (process.browser) {
        var location = window.location.pathname;
    }

    useEffect(() => {
        if (process.browser) {
            setPageURL(location);
        }
        if (session) {
            sessionData.setState({ sessionID: session.id })
        }
    }, [activeElement, location, session])


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
                        < div onClick={() => activeNav(value.route)} className="select-none font-poppins font-semibold p-2">
                            {value.name}
                        </div>
                    </a>
                </Link>
            })}
            {!session && (
                <div className="mt-1.5">
                    <Button clickhandler={signIn} class="duration-200 hover:shadow-lg w-full bg-gradient-to-r from-[#b92b27] to-[#1565C0]  rounded-md lg:cursor-pointer" textClass="select-none p-2 text-white font-poppins flex justify-center font-semibold self-center" text="Sign in" />
                </div>
            )}
            {session && (
                <div className="lg:hidden mt-1.5">
                    <Button clickhandler={signOut} class="duration-200 hover:shadow-lg w-full bg-gradient-to-r from-[#b92b27] to-[#1565C0]  rounded-md lg:cursor-pointer" textClass="select-none p-2 text-white font-poppins flex justify-center font-semibold self-center" text="Sign Out" />
                </div>
            )}
        </div >
    )
}