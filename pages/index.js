import Head from "next/head";
import MainContent from "../components/MainContent";
import HeaderElement from "../components/HeaderElement";
import { Component } from 'react';
import themeStore from "../store/darkMode";

class Home extends Component {

  componentDidMount() {
    const item = localStorage.getItem("theme");
    if (item === "true") {
      themeStore.setState({ dark: true })
    } else {
      themeStore.setState({ dark: false })
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Devstash</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className='selection:bg-purple selection:text-white'
        >
          <div className=" dark:bg-black bg-white">
            {/* APP HEADER */}
            <HeaderElement />
            {/* MAIN SECTION */}
            <MainContent />
            {/* App Footer */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;