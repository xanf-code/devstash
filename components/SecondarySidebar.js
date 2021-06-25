import Link from 'next/link'
import navStore from "../store/menuStore";

function SecondarySidebar() {
    const toggleNav = navStore(state => state.toggleNav)
    return (
        <div className="mt-4 flex flex-col">
            <Link href="/">
                <a onClick={toggleNav} className="hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-2 dark:text-white text-[#8739F9]">
                    <div className="font-poppins font-semibold p-2">
                        🏠 Home
                    </div>
                </a>
            </Link>
            <Link href="/stashes">
                <a onClick={toggleNav} className="hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-2 dark:text-white text-[#8739F9]">
                    <div className="font-poppins font-semibold p-2">
                        🧭 Explore Stashes
                    </div>
                </a>
            </Link>
            <Link href="/privacy">
                <a onClick={toggleNav} className="hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-2 dark:text-white text-[#8739F9]">
                    <div className="font-poppins font-semibold p-2">
                        🔏 Privacy Policy
                    </div>
                </a>
            </Link>
            <Link href="/terms">
                <a onClick={toggleNav} className="hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-2 dark:text-white text-[#8739F9]">
                    <div className="font-poppins font-semibold p-2">
                        👀 Terms of use
                    </div>
                </a>
            </Link>
            <Link href="/about">
                <a onClick={toggleNav} className="hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-2 dark:text-white text-[#8739F9]">
                    <div className="font-poppins font-semibold p-2">
                        🧭 About
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default SecondarySidebar