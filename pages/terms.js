import Head from "next/head";
import ComponentLayout from "../components/Layout/ComponentLayout";
import TermsAndCondition from "../components/TermsAndConditions";

function terms() {
    return (
        <div>
            <Head>
                <title>Privacy Terms</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ComponentLayout>
                <TermsAndCondition />
            </ComponentLayout>
        </div>
    );
}

export default terms
