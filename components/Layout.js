import HeaderElement from "../components/HeaderElement";
import SidebarComponent from '../components/SidebarComponent'
import { Component } from 'react';
import themeStore from "../store/darkMode";
class Layout extends Component {
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
            <div className=" dark:bg-black bg-white">
                <HeaderElement />
                <SidebarComponent />
                {this.props.children}
            </div>
        )
    }
}

export default Layout
