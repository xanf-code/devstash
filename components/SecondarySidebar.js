import Link from 'next/link'
import navStore from "../store/menuStore";

function SecondarySidebar() {
    const toggleNav = navStore(state => state.toggleNav)
    const activeNav = navStore(state => state.activeNav)
    const activeElement = navStore(state => state.activeElement)

    let homeClassName = "hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-1 dark:text-white text-[#8739F9]"
    let stashClassName = "hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-1 dark:text-white text-[#8739F9]"
    let privacyClassName = "hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-1 dark:text-white text-[#8739F9]"
    let termsClassName = "hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-1 dark:text-white text-[#8739F9]"
    let aboutClassName = "hover:bg-blue-100 dark:hover:bg-gray-900 rounded-md my-1 dark:text-white text-[#8739F9]"

    if (activeElement === 'Home') {
        homeClassName += " bg-blue-100 dark:bg-gray-900"
    } else if (activeElement === 'Stash') {
        stashClassName += " bg-blue-100 dark:bg-gray-900"
    } else if (activeElement === 'Privacy') {
        privacyClassName += " bg-blue-100 dark:bg-gray-900"
    } else if (activeElement === 'Terms') {
        termsClassName += " bg-blue-100 dark:bg-gray-900"
    } else {
        aboutClassName += " bg-blue-100 dark:bg-gray-900"
    }

    return (
        <div className="mt-4 flex flex-col">
            <Link href="/">
                <a onClick={toggleNav} className={homeClassName}>
                    <div onClick={() => activeNav('Home')} className="font-poppins font-semibold p-2">
                        🏠  Home
                    </div>
                </a>
            </Link>
            <Link href="/stashes">
                <a onClick={toggleNav} className={stashClassName}>
                    <div onClick={() => activeNav('Stash')} className="font-poppins font-semibold p-2">
                        🧭  Explore Stashes
                    </div>
                </a>
            </Link>
            <Link href="/privacy">
                <a onClick={toggleNav} className={privacyClassName}>
                    <div onClick={() => activeNav('Privacy')} className="font-poppins font-semibold p-2">
                        🔏  Privacy Policy
                    </div>
                </a>
            </Link>
            <Link href="/terms">
                <a onClick={toggleNav} className={termsClassName}>
                    <div onClick={() => activeNav('Terms')} className="font-poppins font-semibold p-2">
                        👀  Terms of use
                    </div>
                </a>
            </Link>
            <Link href="/about">
                <a onClick={toggleNav} className={aboutClassName}>
                    <div onClick={() => activeNav('About')} className="font-poppins font-semibold p-2">
                        💻   About
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default SecondarySidebar