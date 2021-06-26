import Link from "next/link";
import { useEffect } from "react";
import themeStore from "../store/darkMode";
import navStore from "../store/menuStore";

function HeaderElement() {

    const dark = themeStore(state => state.dark)
    const toggleTheme = themeStore(state => state.toggleTheme)
    const toggleNav = navStore(state => state.toggleNav)

    useEffect(() => {
        if (dark) {
            document.querySelector('body').classList.add('dark')
            localStorage.setItem("theme", dark);
        } else {
            document.querySelector('body').classList.remove('dark')
            localStorage.setItem("theme", dark);
        }
    }, [dark])

    return (
        <header className="bg-[#fff] border-b-2 border-gray-100 dark:border-gray-900 dark:bg-black z-50 fixed w-screen">
            <div className="flex flex-row justify-between items-center py-3 md:flex-row px-4 container max-w-5xl mx-auto">
                <Link href="/">
                    <a>
                        <span className="font-open-sans font-black text-xl md:text-3xl drop-shadow-sm text-gradient bg-gradient-to-r from-[#780206] to-[#061161] dark:from-[#ddd6f3] dark:to-[#faaca8]">
                            #DevStash
                        </span>
                    </a>
                </Link>
                <div className="flex">
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/iamlardBendtner"
                        >
                            <svg
                                clipRule="evenodd"
                                fillRule="evenodd"
                                height="1684"
                                strokeLinejoin="round"
                                strokeMiterlimit="2"
                                viewBox="-89.009 -46.884 643.937 446.884"
                                width="2500"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-[#1DA1F2] hover:text-blue-400"
                            >
                                <path
                                    d="M154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052A205.304 205.304 0 00492 47.346c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 01-64.098 24.511C395.903 12.276 369.679 0 340.641 0c-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504A100.739 100.739 0 0020.57 69.24c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 01-45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 01-26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224A204.9 204.9 0 010 354.634c44.674 28.645 97.72 45.359 154.734 45.359"
                                    fill="currentColor"
                                    fillRule="nonzero"
                                ></path>
                            </svg>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/resources"
                        >
                        </a>
                        <div onClick={toggleTheme} className="self-center pl-4 pr-1 cursor-pointer">
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
                        <div className="lg:hidden text-gray-600 dark:text-gray-400">
                            <div className='px-3' onClick={toggleNav}>
                                M
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderElement
