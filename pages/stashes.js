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
        </div>
    );
}

export default stashes
