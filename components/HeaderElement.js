import Link from "next/link";
import { useEffect } from "react";
import themeStore from "../store/darkMode";
import navStore from "../store/menuStore";
import { signIn, signOut, useSession } from 'next-auth/client';
import Image from 'next/image'
import Button from '../components/Buttons/Button'
import { useState } from "react";
import Menu from './Menu/Menu'

export default function HeaderElement() {

    const [session, loading] = useSession();
    const dark = themeStore(state => state.dark)
    const toggleDark = themeStore(state => state.toggleDark)
    const toggleNav = navStore(state => state.toggleNav)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (dark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [dark])

    const toggleMenu = () => {
        setOpen(!open)
    }
    return (
        <header className="duration-200 bg-[#fff] border-b-2 border-gray-100 dark:border-gray-900 dark:bg-black z-40 fixed w-screen">
            <div className="flex flex-row justify-between items-center py-3 md:flex-row px-4 container max-w-5xl mx-auto">
                <Link href="/">
                    <a>
                        <span className="font-poppins font-bold text-xl md:text-3xl drop-shadow-sm text-gradient select-none bg-gradient-to-r from-[#780206] to-[#061161] dark:from-[#ddd6f3] dark:to-[#faaca8]">
                            #DevStash
                        </span>
                    </a>
                </Link>
                <div className="flex">
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        {session ? (
                            <div>
                                <div onClick={toggleMenu} className="lg:cursor-pointer relative self-center flex">
                                    <Image className="inline object-cover mr-0.5 rounded-full self-center" src={session.user.image} alt={session.user.name} width={30} height={30} />
                                </div>
                                {open && (
                                    <Menu session={session} signOut={signOut} setOpen={setOpen} />
                                )}
                            </div>
                        ) : (
                            <Button clickhandler={signIn} class="border-[0.5px] dark:border-gray-600 dark:hover:border-[#0078ff] rounded-[5px] lg:cursor-pointer hover:border-[#0078ff] duration-300"
                                textClass="select-none px-2 py-1 text-black dark:text-white font-poppins font-medium text-sm" text="Sign in" />
                        )}
                        <div onClick={() => toggleDark()} className="self-center pl-4 pr-1 lg:cursor-pointer">
                            {!dark ? <svg
                                className='text-gray-600'
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                                    fill="currentColor"
                                />
                            </svg> : <svg className="text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z" fill="currentColor" /><path d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z" fill="currentColor" /></svg>}
                        </div>
                        <div className=" lg:cursor-pointer text-gray-600 dark:text-gray-400">
                            <div className='pl-3' onClick={toggleNav}>
                                <svg className="text-black dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor" /><path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor" /><path d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z" fill="currentColor" /></svg>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}