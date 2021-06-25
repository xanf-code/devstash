import Head from "next/head";
import StashComponent from "../components/StashComponent";
import ComponentLayout from "../components/Layout/ComponentLayout";

function stashes() {
    return (
        <div>
            <Head>
                <title>Explore</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ComponentLayout>
                <StashComponent />
            </ComponentLayout>
        </div>
    );
}

export default stashes
