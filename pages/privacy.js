import Head from "next/head";
import PrivacyComponent from "../components/PrivacyPolicy";

function stashes() {
    return (
        <div>
            <Head>
                <title>Privacy Policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className='selection:bg-purple selection:text-white'
            >
                <div className="flex">
                    <div className="h-screen hidden max-w-xs w-full xl:block"></div>
                    <div className="container px-4 mx-auto lg:pl-12 lg:pr-4">
                        <PrivacyComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default stashes
