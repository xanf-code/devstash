import Head from "next/head";
import StashComponent from "../components/StashComponent";

function stashes() {
    return (
        <div>
            <Head>
                <title>Explore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="min-h-screen">
                <StashComponent />
            </section>
        </div>
    );
}

export default stashes
