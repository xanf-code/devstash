import Head from "next/head";
import MainContent from "../components/MainContent";
import HeaderElement from "../components/HeaderElement";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  function onTrigger(checked) {
    setActive(checked);
  }

  return (
    <div>
      <Head>
        <title>Devstash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`selection:bg-purple selection:text-white ${active == true ? "dark" : ""
          }`}
      >
        <div className="h-screen dark:bg-black bg-white">
          {/* APP HEADER */}
          <header className="bg-[#fff] border-b-2 border-gray-100 dark:border-gray-900 dark:bg-black">
            <div className="flex flex-row justify-between  items-center py-3 md:flex-row px-4 container max-w-5xl mx-auto">
              <Link href="/">
                <a>
                  <span className="font-open-sans font-black text-xl md:text-3xl drop-shadow-sm text-gradient bg-gradient-to-r from-[#780206] to-[#061161] dark:from-[#ddd6f3] dark:to-[#faaca8]">
                    #DevStash
                  </span>
                </a>
              </Link>
              <div className="flex">
                <HeaderElement onTrigger={onTrigger} />
              </div>
            </div>
          </header>

          {/* MAIN SECTION */}

          <MainContent />

          {/* App Footer */}
        </div>
      </div>
    </div>
  );
}
