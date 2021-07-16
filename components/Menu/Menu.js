import Link from "next/link"
import Icons from "../SVGComponent/Icons"

function menu({ session, signOut, setOpen }) {
    return (
        <div className="absolute mt-3">
            <div className="bg-white dark:bg-[#000000] shadow-xl rounded-md">
                <Link href={`/collection/${session.id}`}>
                    <a>
                        <span onClick={() => setOpen(false)} className="flex self-center p-2">
                            <Icons name="menu-bookmark" />
                            <h1 className="ml-1 font-semibold text-blue-500 hover:text-blue-700" >Bookmark</h1>
                        </span>
                    </a>
                </Link>
                <div className="lg:cursor-pointer" onClick={signOut}>
                    <span onClick={() => setOpen(false)} className="flex self-center p-2">
                        <Icons name="menu-signout" />
                        <h1 className="ml-1 font-semibold text-blue-500 hover:text-blue-700">Sign Out</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default menu