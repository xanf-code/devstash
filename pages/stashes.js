import Head from "next/head";
import StashComponent from "../components/StashComponent";

function stashes() {
    return (
        <div>
            <Head>
                <title>Explore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className='selection:bg-purple selection:text-white'
            >

                <section className="min-h-screen px-4 lg:pl-12 lg:pr-4">
                    <StashComponent />
                </section>
            </div>
        </div>
    );
}

export default stashes
