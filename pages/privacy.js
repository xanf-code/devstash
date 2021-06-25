import Head from "next/head";
import ComponentLayout from "../components/Layout/ComponentLayout";
import PrivacyComponent from "../components/PrivacyPolicy";

function stashes() {
    return (
        <div>
            <Head>
                <title>Privacy Policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ComponentLayout>
                <PrivacyComponent />
            </ComponentLayout>
        </div>
    );
}

export default stashes
