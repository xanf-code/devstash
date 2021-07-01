import Head from "next/head";
import StashComponent from "../components/StashComponent";

function stashes() {
    return (
        <div>
            <Head>
                <title>Explore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen">
                <StashComponent />
            </div>
            <div className="w-full">
                <h1 className="m-auto">
                    Pagination
                </h1>
            </div>
        </div>
    );
}

export default stashes
