import Link from "next/link"

function menu({ session, signOut }) {
    return (
        <div className="absolute bg-white">
            <Link href={`/collection/${session.id}`}>
                <a>
                    <h1>bookmark</h1>
                </a>
            </Link>
            <div onClick={signOut}>
                <h1>sign out</h1>
            </div>
        </div>
    )
}

export default menu
