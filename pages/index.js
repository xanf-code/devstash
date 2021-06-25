import Head from "next/head";
import MainContent from "../components/MainContent";
import ComponentLayout from "../components/Layout/ComponentLayout";

function Home() {
  return (
    <div>
      <Head>
        <title>Devstash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComponentLayout>
        <MainContent />
      </ComponentLayout>
    </div>
  );
}

export default Home;