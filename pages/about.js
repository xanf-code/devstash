import Head from "next/head";
import ComponentLayout from "../components/Layout/ComponentLayout";
import AboutComponent from "../components/AboutComponent";

function about() {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ComponentLayout>
                <AboutComponent />
            </ComponentLayout>
        </div>
    );
}

export default about
