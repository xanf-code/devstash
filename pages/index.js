import Head from "next/head";
import MainContent from "../components/MainContent";
import { Component } from 'react';
import themeStore from "../store/darkMode";
import ComponentLayout from "../components/Layout/ComponentLayout";

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
        <ComponentLayout>
          <MainContent />
        </ComponentLayout>
      </div>
    );
  }
}

export default Home;