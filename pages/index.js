import Head from "next/head";
import MainContent from "../components/MainContent";
import ComponentLayout from "../components/Layout/ComponentLayout";
import { getSession } from 'next-auth/client';

export default function Home() {
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
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return {
    props: {
      session
    }
  }
}