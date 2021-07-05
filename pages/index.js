import Head from "next/head";
import MainContent from "../components/MainContent";
import { getSession } from 'next-auth/client';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devstash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:pt-0 px-6 lg:px-0 min-h-screen w-full m-auto text-center lg:w-6/12">
        <MainContent />
      </div>
      {/* <footer className="w-[100%]">
        <div className="grid grid-cols-2">
          <h1>Column 1</h1>
          <h1>Column 2</h1>
        </div>
      </footer> */}
    </div >
  );
}
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return {
    props: {
      session
    }
  }
}